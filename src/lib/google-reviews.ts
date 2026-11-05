import { readJsonObject, writeJsonObject } from "@/lib/data";

/**
 * Google reviews via the Places API (New).
 *
 * Google returns at most 5 reviews per place and its terms restrict storing
 * review text, so reviews are fetched live (cached ~24h by Next's data cache)
 * and never copied into the blob. Only the admin's *settings* (min stars,
 * hidden review ids) are stored. Silent no-op when GOOGLE_PLACES_API_KEY is unset.
 */

const SETTINGS_FILE = "google-reviews-settings.json";
const REVALIDATE_SECONDS = 60 * 60 * 24;
const DEFAULT_QUERY = "Velvet Brow by Tannaz Upland CA";

export interface GoogleReviewSettings {
  enabled: boolean;
  minRating: number; // 1-5
  hiddenIds: string[];
}

export const DEFAULT_REVIEW_SETTINGS: GoogleReviewSettings = {
  enabled: true,
  minRating: 4,
  hiddenIds: [],
};

export interface GoogleReview {
  id: string;
  author: string;
  authorUrl: string | null;
  photoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleReviewsData {
  placeName: string;
  rating: number;
  userRatingCount: number;
  mapsUrl: string;
  writeReviewUrl: string | null;
  reviews: GoogleReview[]; // unfiltered, as returned by Google
}

export async function getReviewSettings(): Promise<GoogleReviewSettings> {
  const stored = await readJsonObject<Partial<GoogleReviewSettings>>(SETTINGS_FILE);
  return { ...DEFAULT_REVIEW_SETTINGS, ...(stored ?? {}) };
}

export async function saveReviewSettings(s: GoogleReviewSettings): Promise<void> {
  await writeJsonObject<GoogleReviewSettings>(SETTINGS_FILE, s);
}

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({ textQuery: process.env.GOOGLE_PLACE_QUERY || DEFAULT_QUERY }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.places?.[0]?.id ?? null;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/** Raw reviews + aggregate from Google, or null when unconfigured/failing. */
export async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;
  try {
    const placeId = await resolvePlaceId(apiKey);
    if (!placeId) return null;
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error("Places API error:", res.status, await res.text());
      return null;
    }
    const p = await res.json();
    return {
      placeName: p.displayName?.text ?? "",
      rating: p.rating ?? 0,
      userRatingCount: p.userRatingCount ?? 0,
      mapsUrl: p.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${placeId}`,
      writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
      reviews: (p.reviews ?? []).map(
        (r: any): GoogleReview => ({
          id: r.name,
          author: r.authorAttribution?.displayName ?? "Google user",
          authorUrl: r.authorAttribution?.uri ?? null,
          photoUrl: r.authorAttribution?.photoUri ?? null,
          rating: r.rating ?? 0,
          text: r.text?.text ?? r.originalText?.text ?? "",
          relativeTime: r.relativePublishTimeDescription ?? "",
        })
      ),
    };
  } catch (e) {
    console.error("Google reviews fetch failed:", e);
    return null;
  }
}

/** Reviews ready for the public site: settings applied, empty text dropped. */
export async function getPublicGoogleReviews(): Promise<GoogleReviewsData | null> {
  const [settings, data] = await Promise.all([getReviewSettings(), fetchGoogleReviews()]);
  if (!data || !settings.enabled) return null;
  return {
    ...data,
    reviews: data.reviews.filter(
      (r) =>
        r.text.trim() &&
        r.rating >= settings.minRating &&
        !settings.hiddenIds.includes(r.id)
    ),
  };
}
