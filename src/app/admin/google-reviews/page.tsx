"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Spinner from "@/components/ui/Spinner";
import type { GoogleReviewSettings, GoogleReviewsData } from "@/lib/google-reviews";

interface Payload {
  configured: boolean;
  settings: GoogleReviewSettings;
  data: GoogleReviewsData | null;
}

export default function AdminGoogleReviewsPage() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/admin/google-reviews")
      .then((r) => r.json())
      .then(setPayload);
  }, []);

  async function save(patch: Partial<GoogleReviewSettings>) {
    if (!payload) return;
    const next = { ...payload.settings, ...patch };
    setPayload({ ...payload, settings: next });
    setSaving(true);
    try {
      await fetch("/api/admin/google-reviews", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
    } finally {
      setSaving(false);
    }
  }

  if (!payload) {
    return <div className="flex items-center justify-center h-64"><Spinner /></div>;
  }

  const { configured, settings, data } = payload;
  const toggleHidden = (id: string) =>
    save({
      hiddenIds: settings.hiddenIds.includes(id)
        ? settings.hiddenIds.filter((h) => h !== id)
        : [...settings.hiddenIds, id],
    });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-3xl text-ink">Google Reviews</h1>
        <p className="text-ink-soft text-sm mt-1">
          Pulled live from Google (refreshed daily). Google provides up to 5 reviews.
          {saving && " · Saving…"}
        </p>
      </div>

      {!configured && (
        <Card className="mb-6 border-gold/20">
          <p className="text-ink text-sm">
            Not connected yet. Add <code>GOOGLE_PLACES_API_KEY</code> to the site&apos;s
            environment variables and redeploy.
          </p>
        </Card>
      )}

      {configured && !data && (
        <Card className="mb-6 border-gold/20">
          <p className="text-ink text-sm">
            Connected, but Google returned no data. Check that Places API (New) is enabled for
            the key, and set <code>GOOGLE_PLACE_ID</code> if the business was not found by name.
          </p>
        </Card>
      )}

      <Card className="mb-6">
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              checked={settings.enabled}
              onChange={(e) => save({ enabled: e.target.checked })}
            />
            Show Google reviews on the home page
          </label>
          <label className="flex items-center gap-2 text-sm text-ink">
            Minimum stars
            <select
              className="border border-line-strong rounded px-2 py-1 bg-paper"
              value={settings.minRating}
              onChange={(e) => save({ minRating: Number(e.target.value) })}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>{n}+</option>
              ))}
            </select>
          </label>
        </div>
      </Card>

      {data && (
        <>
          <p className="text-ink-soft text-sm mb-4">
            {data.placeName} · {data.rating.toFixed(1)} ★ · {data.userRatingCount} reviews on Google
          </p>
          <div className="space-y-3">
            {data.reviews.map((r) => {
              const hidden = settings.hiddenIds.includes(r.id);
              const filtered = r.rating < settings.minRating;
              return (
                <Card key={r.id} className={hidden || filtered ? "opacity-50" : ""}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-ink font-medium">
                        {r.author} · {"★".repeat(r.rating)}
                        <span className="text-ink-faint text-xs ml-2">{r.relativeTime}</span>
                      </p>
                      <p className="text-ink-soft text-sm mt-2">{r.text || "(no text)"}</p>
                      {filtered && (
                        <p className="text-xs text-ink-faint mt-2">Hidden by minimum-stars setting</p>
                      )}
                    </div>
                    <button
                      onClick={() => toggleHidden(r.id)}
                      className="text-sm text-aqua-deep hover:underline whitespace-nowrap"
                    >
                      {hidden ? "Show" : "Hide"}
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
