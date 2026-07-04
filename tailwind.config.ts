import type { Config } from "tailwindcss";

/**
 * LIGHT THEME ("Clean clinical-luxe")
 *
 * The site was originally a dark/gold theme. To flip it to a white + ink + aqua
 * palette without hand-editing hundreds of utility classes across 57 files, the
 * legacy token NAMES are kept but their VALUES are remapped to light-theme
 * colors. So existing classes now render light automatically:
 *   - `bg-dark`      -> white / soft surfaces
 *   - `text-gold`    -> deep aqua (interactive accent)
 *   - `bg-gold-gradient`, `shadow-glow`, etc. -> aqua equivalents
 *
 * New semantic tokens (paper / ink / aqua / mist / line) are added for any
 * component touched directly. Accent color anchor: #ADDAE0 (client-provided).
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- New semantic light-theme tokens ---
        paper: "#FFFFFF",
        mist: "#F5FAFB",
        cloud: "#FBFDFD",
        ink: {
          DEFAULT: "#12181A",
          soft: "#4A575B",
          faint: "#7C888C",
        },
        aqua: {
          DEFAULT: "#ADDAE0", // client-provided accent
          soft: "#DCEFF2",
          mid: "#7FBFCB",
          deep: "#1F6475", // interactive (white text = 6.7:1)
          deeper: "#164E5C",
        },
        line: {
          DEFAULT: "#E4EAEC",
          strong: "#CBD9DC",
        },

        // --- Legacy tokens remapped to LIGHT values (names unchanged) ---
        gold: {
          DEFAULT: "#1F6475", // was #C9A96E -> now deep aqua accent
          light: "#2F8296",
          dark: "#164E5C",
        },
        champagne: "#1F6475",
        beige: "#EFF6F7",
        dark: {
          DEFAULT: "#FFFFFF", // was #0A0A0A -> now page surface
          light: "#F5FAFB",
          lighter: "#ECF4F6",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-body)", "Jost", "Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #1F6475 0%, #2F8296 50%, #1F6475 100%)",
        "gold-gradient-horizontal":
          "linear-gradient(90deg, #1F6475 0%, #2F8296 50%, #1F6475 100%)",
        "gold-shimmer":
          "linear-gradient(110deg, transparent 25%, rgba(31,100,117,0.10) 50%, transparent 75%)",
        "aqua-band":
          "linear-gradient(135deg, #ADDAE0 0%, #DCEFF2 100%)",
      },
      boxShadow: {
        glow: "0 4px 24px rgba(31, 100, 117, 0.10)",
        "glow-lg": "0 12px 40px rgba(31, 100, 117, 0.14)",
        "glow-sm": "0 2px 10px rgba(31, 100, 117, 0.08)",
        gold: "0 6px 24px rgba(31, 100, 117, 0.12)",
        soft: "0 1px 2px rgba(16, 24, 26, 0.04), 0 10px 30px rgba(16, 24, 26, 0.06)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        slideIn: "slideIn 0.6s ease-out forwards",
        pulse: "pulse 2s ease-in-out infinite",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

export default config;
