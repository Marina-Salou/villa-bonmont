# Copilot instructions for Villa-Bonmont repo 🔧

Purpose
- Help AI coding agents get productive quickly: architecture overview, dev workflows, repo-specific conventions, and concrete examples for common tasks.

Big picture
- Static, image-first website: plain HTML/CSS/JS (no frameworks). Main content lives in `index.html` and `pages/*.html`; layout and variables in `css/styles.css`.
- Minimal JS: `js/main.js` (UI) and `js/cookies.js` (GDPR cookie management + analytics gate). Images live in `images/` (AVIF, WebP, JPG fallbacks).

Key files to edit or reference
- `index.html` — canonical URLs, schema.org JSON-LD, meta tags, hero layout, and primary content (one `<h1>` per page).
- `pages/*.html` — copy pattern when adding pages (follow structure in `pages/privacy.html`).
- `css/styles.css` — single stylesheet; mobile-first, breakpoint variables: 768px / 1024px / 1440px.
- `js/cookies.js` — cookie consent logic: replace `G-XXXXXXXXXX` with GA4 ID; analytics only loads after consent. LocalStorage keys: `villa-cookie-consent`, `villa-analytics-consent`. Emits `cookieConsentChanged` event.
- `scripts/convert-images.js` + `package.json` — image conversion utilities using `sharp`. Run via `npm run convert-images` or `node scripts/convert-images.js <dir> <size...>`.
- `sitemap.xml`, `robots.txt` — update on page changes and launches.

Developer workflows & commands
- Local development server (required to test cookies/analytics):
  - Python 3: `python -m http.server 8000`
  - Node: `npx http-server`
- Generate resized WebP images:
  - `npm install` (sharp is required for `convert-images`)
  - `npm run convert-images` (defaults: `images/equipamiento` → creates `name-800.webp`, `name-1200.webp`)
  - Example: `node scripts/convert-images.js images/equipamiento 800 1200`
- QA & auditing: use Chrome Lighthouse, PageSpeed Insights, and Wave accessibility checks (see README checklist).

Conventions & patterns (do not change without reason)
- Image strategy: source images in AVIF/WebP/JPG; prefer AVIF, fallback to WebP/JPG in `<picture>` elements. Filenames: `name.{avif,webp,jpg}`; converted/resized files follow `name-<width>.webp`.
- Accessibility: one `<h1>` per page; skip-link (`.skip-link`); ARIA labels on navigation and controls; keyboard operability expected.
- Performance: no external frameworks, critical CSS inline-ready, single minified stylesheet allowed for production.
- Analytics & privacy: analytics script must only load after explicit user consent. Do not add third-party analytics or tracking code without wiring it behind the consent flow in `js/cookies.js`.

Integration & extension points
- Cookie consent: other scripts should listen for `document.addEventListener('cookieConsentChanged', ...)` to react to consent changes.
- Analytics ID: set GA4 ID in `js/cookies.js` (`const analyticsId = 'G-XXXXXXXXXX'`).
- Schema & SEO: `index.html` contains JSON-LD (VacationRental). Keep it updated when business data changes.

Common change examples (copyable)
- Add a new page: copy `pages/privacy.html` → edit metadata, add link in nav, update `sitemap.xml`.
- Add responsive images in HTML:
  ```html
  <picture>
    <source srcset="images/foo.avif" type="image/avif">
    <source srcset="images/foo.webp" type="image/webp">
    <img src="images/foo.jpg" alt="descriptive alt text">
  </picture>
  ```
- Run image conversion:
  ```bash
  npm install
  npm run convert-images -- images/equipamiento 800 1200
  ```

Notes for agents
- Be conservative: prefer editing textual content (copy, URLs, meta) and utility scripts rather than changing visual design or typography without explicit instruction.
- When modifying cookie/analytics behavior, add unitary code comments and update README and `pages/cookies.html` accordingly.
- If adding build tooling or tests, document commands in `README.md` and add minimal, well-scoped changes.

If anything here is unclear or missing, ask for specific areas to expand (deploy steps, test examples, or more code pointers). ✅
