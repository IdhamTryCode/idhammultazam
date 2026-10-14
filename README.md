# idhammultazam

Personal portfolio of **Idham Hanif Multazam** — a single static page, no build step.

Implemented from the Claude Design project
[`Portfolio v2`](https://claude.ai/design/p/b47c3d81-b87c-40b1-a622-2f2929ce73aa)
(`Preview.dc.html` → `preview.html`, `Portfolio v2.dc.html` → `index.html`).

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The portfolio page — the whole public site |
| `styles.css` | Design tokens + all component styles |
| `script.js` | Theme toggle, scroll-reveal, carousel dots |
| `theme-init.js` | Pre-paint theme resolution (loaded synchronously, no flash) |
| `preview.html` | Design harness: renders `index.html` in a 390×844 phone and a 1440×900 browser frame side by side. Not indexed. |
| `vercel.json` | Security headers + asset caching |
| `assets/` | Logos, product screenshots, portrait, Yayo Wings photos |

## Running it

No dependencies and no build. Any static server works:

```bash
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000/` for the site, `/preview.html` for the device harness.

Opening `index.html` straight from the filesystem works too, but `preview.html`
needs a server because browsers block `file://` iframes.

## Deploying

Push to `main` and import the repo on Vercel — it is detected as a static site,
no framework preset or build command needed. `vercel.json` applies a CSP,
HSTS, `nosniff`, `Referrer-Policy`, a `Permissions-Policy`, and a one-year
immutable cache on `/assets/*`.

If you add a third-party script or an external image host later, widen the CSP
in `vercel.json` to match — otherwise it will be blocked.

## Notes / open items

- **Canonical + absolute OG URLs are not set.** `index.html` uses a relative
  `og:image`. Once the production domain is live, add
  `<link rel="canonical">` and absolute `og:url` / `og:image` URLs.
- **The OG image is the portrait** (896×1200). Social cards prefer 1200×630, so
  a dedicated share image would render better.
- **POSin has no screenshots**, so its card uses a hand-built cashier screen
  mock rather than a real capture.
- **The CV and the design brief are gitignored** — the PDF/DOCX carry private
  contact details. Remove the relevant lines from `.gitignore` to publish them.

## Design system

The colour tokens, breakpoints, and layout switches live as CSS custom
properties at the top of `styles.css`. Light values sit on `:root`, dark values
on `[data-theme="dark"]`, and the single breakpoint is `900px`. Per-product
accent colours are set per card via `--card-accent` / `--card-panel` /
`--card-cta` inline on each `<article class="card">`.
