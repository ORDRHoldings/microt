# Velvet Brow by Tannaz

Website, online booking and admin CMS for Velvet Brow by Tannaz, a luxury brow and permanent makeup studio.

- **Live:** https://velvetbrow.com (`www.velvetbrow.com` 308-redirects to the apex)
- **Stack:** Next.js 14 App Router, Tailwind, Framer Motion, Vercel Blob as a JSON store
- **Hosting:** Vercel project `velvetbrow`, auto-deploys on push to `master`

## Getting Started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

Copy the environment variables listed in `CLAUDE.md` into `.env.local`.

> **Warning:** `.env.local` holds the production `BLOB_READ_WRITE_TOKEN`. A local
> `npm run build` reads and migrates the **live** site content, so a bumped
> migration version (`CONTACT_VERSION`, `HOURS_VERSION`, `SEED_VERSION`) goes
> live the moment you build.

## What's Where

| Area | Path |
| --- | --- |
| Public site (home, services, FAQ, consent) | `src/app/(public)/` |
| Booking wizard | `src/app/book/` |
| Admin panel (`/admin`, password-protected) | `src/app/admin/` |
| API routes | `src/app/api/` |
| Brand, hours, booking times | `src/lib/constants.ts` |
| Blob data layer | `src/lib/data.ts` |

Most public content (services, testimonials, brand info, business hours) is editable in `/admin` without a redeploy.

## Business Hours

Monday–Saturday, 10:00 AM – 8:00 PM. Closed Sunday. Booking slots run 10:00 AM – 7:00 PM.

The defaults live in `BUSINESS_HOURS` and `BOOKING_TIMES` in `src/lib/constants.ts`. Admin edits to hours persist; to force new code defaults onto the live site, bump `HOURS_VERSION`.

## Domain / DNS

The domain is registered at GoDaddy and uses GoDaddy nameservers; no registrar forwarding.

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `216.150.1.1` |
| A | `@` | `216.150.16.1` |
| CNAME | `www` | `2cdd92ab9071e498.vercel-dns-016.com` |

Both `velvetbrow.com` and `www.velvetbrow.com` are added in Vercel → Settings → Domains, which issues SSL automatically.

See `CLAUDE.md` for full architecture notes and conventions.
