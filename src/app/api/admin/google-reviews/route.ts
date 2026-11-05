import { NextRequest, NextResponse } from "next/server";
import {
  fetchGoogleReviews,
  getReviewSettings,
  saveReviewSettings,
} from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export async function GET() {
  const [settings, data] = await Promise.all([getReviewSettings(), fetchGoogleReviews()]);
  return NextResponse.json({
    configured: Boolean(process.env.GOOGLE_PLACES_API_KEY),
    settings,
    data,
  });
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const current = await getReviewSettings();
    const next = {
      enabled: typeof body.enabled === "boolean" ? body.enabled : current.enabled,
      minRating: Math.min(5, Math.max(1, Number(body.minRating ?? current.minRating))),
      hiddenIds: Array.isArray(body.hiddenIds)
        ? body.hiddenIds.map(String)
        : current.hiddenIds,
    };
    await saveReviewSettings(next);
    return NextResponse.json(next);
  } catch (error) {
    console.error("Error saving review settings:", error);
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 });
  }
}
