# Achmad Syahrul Ramadhan — QA Automation Engineer Portfolio

A premium, production-ready portfolio built for a **Senior QA / QA Automation Engineer** audience. Dark-first SaaS aesthetic with a QA-native signature: passing test reports, Gherkin specs, trace-viewer and JMeter dashboards.

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS** + **shadcn/ui** primitives
- **Framer Motion** (fade-in, slide-up, stagger, typing, animated counters & skill bars)
- **Lucide React** icons
- **Geist** (display/mono) + **Inter** (body, self-hosted)
- **next-themes** dark / light mode
- SEO metadata, Open Graph, Twitter cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
```

Requires Node.js 18.18+ (Node 20+ recommended).

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, SEO metadata, JSON-LD, providers, chrome
│   ├── page.tsx              # home (all sections)
│   ├── globals.css           # theme tokens (light/dark) + utilities
│   ├── automation/           # /automation — Playwright + BDD showcase
│   ├── api-testing/          # /api-testing — Postman showcase
│   ├── performance/          # /performance — JMeter dashboards
│   ├── sitemap.ts · robots.ts · not-found.tsx
│   └── fonts/Inter-Variable.woff2
├── components/
│   ├── ui/                   # shadcn primitives (button, card, badge, tabs…)
│   ├── layout/               # navbar, footer, theme-toggle, back-to-top, loading
│   ├── sections/             # hero, about, skills, experience, projects, contact…
│   └── shared/               # reveal, counters, skill-bar, typing, code-block…
├── config/site.ts            # name, links, contact, resume path
└── lib/
    ├── data.ts               # ALL content (edit here to update the site)
    └── utils.ts
```

## Editing content

Almost everything lives in **`src/lib/data.ts`** and **`src/config/site.ts`** — skills,
experience, projects, docs, certifications, nav, and contact details. Update those
and every section stays in sync.

## Replacing the assets

Files live in `public/`:

- `profile.jpg` — hero photo (currently the CV headshot on a slate background)
- `og-image.png` — 1200×630 social share image
- `Achmad-Syahrul-Ramadhan-Resume.pdf` — the downloadable CV (wired to every "Download CV" button)

## Theme

Brand palette (from the brief): background `#0F172A`, primary `#2563EB`,
success `#22C55E`, accent `#38BDF8`. Tokens are defined as HSL CSS variables in
`globals.css` for both light and dark, so you can retheme in one place.

## Fonts

Geist ships locally via the `geist` package. Inter is **self-hosted** from
`src/app/fonts/Inter-Variable.woff2` via `next/font/local` (no build-time network
fetch). To use Google Fonts instead, swap the `localFont(...)` call in
`src/app/layout.tsx` for `import { Inter } from "next/font/google"`.

## Deploy

Zero-config on **Vercel**: import the repo and deploy. Update `siteConfig.url`
in `src/config/site.ts` to your production domain so canonical URLs, sitemap,
and Open Graph tags resolve correctly.

## Notes

- The technical showcases (report tables, trace viewer, Postman/JMeter panels) are
  faithful **visual mockups** built with the real content and structure of the work,
  not embedded live tooling — swap in your own screenshots/exports anytime.
- Respects `prefers-reduced-motion`, ships visible keyboard focus, and is fully
  responsive down to mobile.
