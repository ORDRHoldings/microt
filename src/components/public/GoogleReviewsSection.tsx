'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import type { GoogleReviewsData } from '@/lib/google-reviews';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= Math.round(rating) ? 'text-aqua-deep' : 'text-line-strong'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewsSection({ data }: { data: GoogleReviewsData }) {
  if (data.reviews.length === 0) return null;

  return (
    <section id="google-reviews" className="py-24 md:py-28 bg-mist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Reviews from Google" />

        <div className="flex flex-col items-center gap-2 -mt-8 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-heading text-4xl text-ink">{data.rating.toFixed(1)}</span>
            <Stars rating={data.rating} />
          </div>
          <a
            href={data.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-aqua-deep hover:underline"
          >
            {data.userRatingCount} reviews on Google
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((r, i) => (
            <motion.figure
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-paper border border-line rounded-lg p-6 flex flex-col"
            >
              <Stars rating={r.rating} />
              <blockquote className="text-ink-soft text-sm leading-relaxed mt-4 flex-1 line-clamp-6">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {r.photoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.photoUrl}
                    alt=""
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 rounded-full"
                  />
                )}
                <div className="text-sm">
                  <p className="text-ink font-medium">{r.author}</p>
                  <p className="text-ink-faint text-xs">{r.relativeTime}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href={data.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-aqua-deep hover:underline"
            >
              Read all reviews on Google
            </a>
            {data.writeReviewUrl && (
              <a
                href={data.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aqua-deep hover:underline"
              >
                Leave a review
              </a>
            )}
          </div>
          <p className="text-xs text-ink-faint">Reviews powered by Google</p>
        </div>
      </div>
    </section>
  );
}
