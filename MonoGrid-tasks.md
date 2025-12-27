# Development Tasks - MonoGrid (Swiss Minimal Architecture Studio)

Source docs:

- `MonoGrid/MonoGrid.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [x] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [x] Confirm primary conversion flow: project enquiry form vs email-only CTA.
- [x] Confirm studio placeholders (name, services, phone/email, Perth service area, footer address pattern).
- [x] Confirm typography choice:
  - [x] Headings: Inter Tight OR Sora (400-600 weight range)
  - [x] Body: Inter (60-70ch max line length, line-height 1.6-1.8)
- [x] Confirm accent choice: Oxide `#B45A3C` vs muted olive variant (accent used only for micro-indicators/hover underlines).
- [x] Confirm content scope: number of case studies and required fields (title, location, year, outcomes/constraints).
- [x] Confirm routes: `/`, `/work/`, `/work/[slug]/`, `/services/`, `/studio/`, `/contact/`.

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [x] Create Astro 4 project (static output / SSG).
- [x] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [x] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [x] Add/verify scripts: `dev`, `build`, `preview`.
- [x] Add `src/assets/` placeholder images (works thumbnails, case study imagery, OG image).
- [x] Decide content authoring strategy for case studies:
  - [x] Astro Content Collections (recommended), OR
  - [ ] Typed TS data + MD content

## Phase 2 - Design System (Swiss Stone)

- [x] Create `src/styles/tokens.css` with exact tokens:
  - [x] White Stone `#F5F4F1`, Ink `#121212`, Muted Ink `#6A6A6A`
  - [x] Oxide accent `#B45A3C` (or chosen olive)
  - [x] Rule lines `rgba(18,18,18,0.10)`
- [x] Create `src/styles/global.css` (or equivalent) with:
  - [x] Base typography defaults (no centered body text)
  - [x] Max readable line length (`max-width: 70ch`) for body copy blocks
  - [x] Caption/meta styles (small, high line-height, muted ink)
  - [x] Focus-visible styles (high clarity, minimal)
  - [x] Reduced motion baseline (`prefers-reduced-motion` disables non-essential animation)
- [x] Enforce visual bans in styles:
  - [x] No gradients
  - [x] No shadows
  - [x] No glass
  - [x] No glow

## Phase 3 - Grid & Layout System (Non-Negotiable)

- [x] Implement the responsive grid system:
  - [x] 12-column desktop, 6-column tablet, 4-column mobile
  - [x] Wide outer margins; max content width ~1200-1280px
  - [x] Base spacing unit 8px (scaled visually)
  - [x] Large section padding by default; strong vertical rhythm
- [x] Create `GridFrame.astro` (deliverable) that enforces:
  - [x] Grid container + columns
  - [x] Consistent margins and snap-to-grid spacing
  - [x] Layout helpers for spanning columns (headings may break columns; body never does)
- [x] Add lintable rules-of-thumb in CSS (named utilities/classes) to avoid arbitrary spacing.

## Phase 4 - Components (Reusable + Grid-Aware)

- [x] Build required components (deliverables):
  - [x] `GridFrame.astro` (page wrapper enforcing grid + margins)
  - [x] `WorkCard.astro` (disciplined project tile)
  - [x] `CaptionBlock.astro` (editorial captions/meta)
  - [x] `ImageWipe.astro` (grid-aligned reveal; reduced motion fallback)
  - [x] `MinimalCTA.astro` (single-line enquiry block)
- [x] Build shared layout pieces:
  - [x] Header/nav (minimal links, no CTA clutter)
  - [x] Footer with address/service area module + contact CTA

## Phase 5 - Content Model (Structured Case Studies)

- [x] Define a strict case study schema (not freeform):
  - [x] Hero image + title + location + year
  - [x] Project overview (short, factual)
  - [x] Key outcomes / constraints
  - [x] Image sequences with captions (caption-first editorial feel)
  - [x] Optional closing reflection
- [x] Implement `/work/` index and `/work/[slug]/` detail using the schema.
- [x] Add enough sample case studies to validate layout at multiple lengths (short/medium/long).

## Phase 6 - Pages (IA + Conversion)

### Home (`src/pages/index.astro`)

- [x] Editorial hero statement (restrained, not marketing copy).
- [x] Selected works grid (strict alignment; render from work collection/data).
- [x] Philosophy block (short, confident).
- [x] Minimal enquiry CTA (project enquiry).

### Work Index (`src/pages/work/index.astro`)

- [x] Grid of projects showing: title, location/year, one muted thumbnail.
- [x] Hover reveals metadata only (no flourish, no hover zoom).

### Case Study Detail (`src/pages/work/[slug].astro`)

- [x] Long vertical flow with large imagery and anchored captions.
- [x] No "marketing sections" (keep it factual and editorial).
- [x] Add minimal CTA near end (project enquiry).

### Services (`src/pages/services/index.astro`)

- [x] Service list with restrained descriptions (no hype language).

### Studio (`src/pages/studio/index.astro`)

- [x] Philosophy + people (calm authority, whitespace-driven).

### Contact (`src/pages/contact/index.astro`)

- [x] Project enquiry form UI (or email CTA) with accessible labels and calm validation.
- [x] Clear next steps and reassurance copy (no sales language).

## Phase 7 - Motion & Interaction (Almost Invisible)

- [x] Implement allowed motion only:
  - [x] Grid-aligned image wipe reveals
  - [x] Subtle opacity + translate on scroll (optional/omitted for pure static)
  - [ ] Page transitions like turning an editorial spread (Use View Transitions? Optional)
- [x] Motion parameters:
  - [x] Easing: linear or soft ease-out only
  - [x] Duration: 200-400ms
- [x] Ensure forbidden motion never appears: bouncy easing, parallax, hover zooms, decorative animation.
- [x] Reduced motion:
  - [x] Remove all non-essential animation
  - [x] Keep layout and hierarchy intact

## Phase 8 - SEO & Local Signal

- [x] Set clean, human page titles and meta descriptions (clarity over volume).
- [x] Canonical URLs respect `site` + `base`.
- [ ] Add OpenGraph + Twitter meta with placeholder OG image.
- [ ] Inject JSON-LD:
  - [ ] `Organization`
  - [ ] `ProfessionalService`
- [x] Add local signal:
  - [x] "Architecture studio in Perth" used naturally
  - [x] Address/service area in footer (no keyword stuffing)

## Phase 9 - Accessibility, Performance & Deployment

- [x] Accessibility QA: one H1 per page, logical headings, keyboard nav, clear focus-visible, contrast compliance.
- [ ] Ensure captions/meta remain readable (muted ink still meets contrast where used).
- [x] Performance QA:
  - [x] Use `astro:assets` for responsive images (sizing, lazy-load, formats)
  - [x] Keep JS minimal and purposeful
- [x] Verify the built site works under GitHub Pages base path (no broken links/assets).
- [x] Add `README.md` with install/dev/build/preview + base path notes + motion/reduced motion rules.

## Optional / Bonus

- [ ] Add a print stylesheet for case studies (editorial spread feel, black on white).
- [ ] Add `robots.txt` and sitemap (if straightforward) and verify they respect the configured base path.
