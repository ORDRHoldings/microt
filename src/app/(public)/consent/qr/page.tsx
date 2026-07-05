"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConsentQRPage() {
  const [url, setUrl] = useState("https://velvetbrow.com/consent");

  useEffect(() => {
    setUrl(`${window.location.origin}/consent`);
  }, []);

  // Black on white = maximum scan reliability on any device/lighting
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&bgcolor=ffffff&color=000000&margin=16&data=${encodeURIComponent(url)}`;

  return (
    <>
      {/* ── Screen view ── */}
      <div className="min-h-screen bg-mist flex flex-col items-center justify-center py-12 px-4 print:hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm"
        >
          {/* Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-glow">
            {/* Gold header band */}
            <div
              className="h-2 w-full"
              style={{
                background:
                  "linear-gradient(90deg, #1F6475, #2F8296, #1F6475)",
              }}
            />

            <div className="px-8 pt-8 pb-6 text-center">
              {/* Studio name */}
              <p className="text-ink font-heading text-xl font-bold tracking-wide mb-0.5">
                Velvet Brow by Tannaz
              </p>
              <p
                className="text-xs uppercase tracking-[0.2em] mb-6 font-semibold"
                style={{ color: "#1F6475" }}
              >
                Where Precision Meets Beauty
              </p>

              {/* QR Code */}
              <div className="inline-block rounded-xl overflow-hidden border border-gray-100 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrSrc}
                  alt="Consent Form QR Code"
                  width={220}
                  height={220}
                  className="block"
                />
              </div>

              <p className="text-gray-900 font-semibold text-base mb-1">
                Complete Your Consent Form
              </p>
              <p className="text-ink-soft text-sm leading-relaxed mb-4">
                Scan here to complete your consultation and consent form before
                treatment.
              </p>

              <p className="text-xs font-mono text-ink-soft break-all">{url}</p>
            </div>

            {/* Gold footer band */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, #1F6475, #2F8296, #1F6475)",
              }}
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => window.print()}
              className="flex-1 py-3.5 bg-gold-gradient text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:shadow-glow transition-shadow duration-300"
            >
              Print
            </button>
            <Link
              href="/consent"
              className="flex-1 py-3.5 border border-gold/40 text-gold hover:bg-gold/10 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-300 text-center"
            >
              Open Form
            </Link>
          </div>

          <p className="text-center text-ink-soft text-xs mt-4">
            Print and display at the studio for walk-in clients.
          </p>
        </motion.div>
      </div>

      {/* ── Print view — clean white card ── */}
      <div
        className="hidden print:flex items-center justify-center min-h-screen bg-white"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div
          style={{
            width: 340,
            border: "2px solid #1F6475",
            borderRadius: 16,
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* Gold header */}
          <div
            style={{
              background: "linear-gradient(90deg, #1F6475, #2F8296, #1F6475)",
              height: 8,
            }}
          />
          <div style={{ padding: "28px 32px 24px" }}>
            <p
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#0A0A0A",
                margin: "0 0 2px",
                letterSpacing: "0.04em",
              }}
            >
              Velvet Brow by Tannaz
            </p>
            <p
              style={{
                fontSize: 10,
                color: "#1F6475",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: "0 0 24px",
              }}
            >
              Where Precision Meets Beauty
            </p>

            {/* QR */}
            <div
              style={{
                display: "inline-block",
                border: "1px solid #eee",
                borderRadius: 8,
                overflow: "hidden",
                marginBottom: 16,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrSrc}
                alt="QR Code"
                width={200}
                height={200}
                style={{ display: "block" }}
              />
            </div>

            <p
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#0A0A0A",
                margin: "0 0 6px",
              }}
            >
              Complete Your Consent Form
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#555",
                lineHeight: 1.5,
                margin: "0 0 16px",
              }}
            >
              Scan here to complete your consultation and consent form before
              treatment.
            </p>
            <p
              style={{
                fontSize: 10,
                color: "#999",
                fontFamily: "monospace",
                wordBreak: "break-all",
              }}
            >
              {url}
            </p>
          </div>
          {/* Gold footer */}
          <div
            style={{
              background: "linear-gradient(90deg, #1F6475, #2F8296, #1F6475)",
              height: 6,
            }}
          />
        </div>
      </div>
    </>
  );
}
