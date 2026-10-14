# idhammultazam

Personal portfolio of **Idham Hanif Multazam** — Next.js 16, React 19, TypeScript.

Implemented from the Claude Design project
[`Portfolio v2`](https://claude.ai/design/p/b47c3d81-b87c-40b1-a622-2f2929ce73aa):
`Portfolio v2.dc.html` → `app/page.tsx`, `Preview.dc.html` → `app/preview/page.tsx`.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript (strict) |
| Styling | Plain CSS with custom properties — `app/globals.css` |
| Fonts | `next/font/google`, self-hosted at build (Schibsted Grotesk + JetBrains Mono) |
| Images | `next/image` with AVIF/WebP |
| Hosting | Vercel — every route is statically prerendered |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |

## Layout

```
app/
  layout.tsx          root shell, metadata, fonts, pre-paint theme bootstrap
  page.tsx            the portfolio page
  globals.css         design tokens + every component style
  preview/            design harness (390x844 phone + 1440x900 browser)
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
  not-found.tsx       404
components/           Header, Hero, Projects, YayoWings, About, Contact, ...
lib/
  site.ts             name, links, site URL
  projects.ts         project cards, experience, stack groups
public/assets/        logos, screenshots, portrait, Yayo Wings photos
```

### Theming

`:root` holds the light tokens, `[data-theme="dark"]` the dark ones, and the
single breakpoint is `900px`. Every responsive change — nav style, hero
columns, the project carousel becoming a 2x2 grid — is a custom property
swapped inside one media query rather than a separate rule.

`data-theme` on `<html>` is the single source of truth. An inline script in
`app/layout.tsx` sets it before first paint (so the theme never flashes), and
`ThemeToggle` reads it through `useSyncExternalStore` with a `MutationObserver`
rather than duplicating it into React state.

Per-product accents are set per card as `--card-accent` / `--card-panel` /
`--card-cta` in `lib/projects.ts`.

## Configuration

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://your-domain
```

It drives the canonical link, absolute OG/Twitter URLs, and `sitemap.xml`.
Unset, it falls back to `http://localhost:3000`.

> **It is read at build time, not at runtime.** Pages are statically
> prerendered, so set it in the Vercel project's environment variables and
> redeploy — changing it on a running server has no effect.

## Deploying

Import the repo on Vercel; Next.js is detected automatically, no build command
needed. Set `NEXT_PUBLIC_SITE_URL`, then deploy.

`next.config.ts` applies a CSP, HSTS, `nosniff`, `Referrer-Policy`,
`X-Frame-Options`, and a `Permissions-Policy` to every route, plus a one-year
immutable cache on `/assets/*`. `X-Powered-By` is off.

The CSP allows `'unsafe-inline'` for scripts. That is not an oversight: the App
Router streams its RSC payload through inline `<script>` tags, so the
alternative is a per-request nonce via middleware, which would make every
request dynamic and give up static generation. For a static page with no user
input that trade is not worth it. If you add a third-party script or an
external image host, widen the CSP to match or it will be blocked.

## Notes

- **The OG image is the portrait** (896×1200). Social cards prefer 1200×630, so
  a dedicated share image would render better.
- **POSin has no screenshots**, so its card renders a hand-built cashier mock
  (`components/PosMock.tsx`) instead of a real capture.
- **`/preview` is excluded** from `robots.txt` and sent with
  `X-Robots-Tag: noindex`.
- **The CV and the design brief are gitignored** — the PDF/DOCX carry private
  contact details. Remove those lines from `.gitignore` to publish them.
