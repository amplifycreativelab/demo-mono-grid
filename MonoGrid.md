Senior Expert Prompt — “MonoGrid”

(Astro + Ultra-Premium Swiss Minimal)

Role

You are a Principal Frontend Architect & Typography Specialist.

Objective
Build a luxury architecture / interior design studio demo that feels expensive through discipline, not decoration.
This site must communicate credibility, calm authority, and taste via spacing, grid logic, and typography—not effects.

Design Philosophy
“Silence as a feature.”
Every element must justify its existence. Empty space is intentional. Nothing competes for attention.

0) Non-Negotiables

Astro 4.x SSG, GitHub Pages compatible (correct base path).

Primary conversion: Project enquiry (form or email CTA).

Performance and accessibility are luxury signals, not technical afterthoughts.

No Tailwind. Use authored CSS (or CSS Modules) for precision.

prefers-reduced-motion must remove all non-essential animation.

1) Visual Design System — “Swiss Stone”
Color Tokens (extremely restrained)

White Stone (background): #F5F4F1

Ink (primary text): #121212

Muted Ink (secondary): #6A6A6A

Oxide Accent (sparingly): #B45A3C (or muted olive variant)

Rule Lines: rgba(18,18,18,0.10)

Rules

Accent color appears only on hover, underline reveals, or micro-indicators.

No gradients. No shadows. No glass. No glow.

Typography System (Hierarchy over personality)

Headings

Swiss neo-grotesk substitute
→ Inter Tight or Sora

Weight range: 400–600 only

Tracking: slightly negative on large sizes

Body

Inter

Comfortable line length (60–70ch max)

Line height: generous (1.6–1.8)

Captions / Meta

Small size, high line-height

Muted ink

Used heavily under imagery (architectural editorial feel)

Rules

No more than 2 font families total

Never center body text

Headings may break grid columns; body never does

2) Grid & Layout Logic (Core of the Design)

This site lives and dies by the grid.

12-column desktop grid

6-column tablet

4-column mobile

Wide outer margins (luxury breath)

Spacing System

Base unit: 8px (scaled visually)

Section padding: large by default

Vertical rhythm > horizontal density

Rules

Every component must snap to grid lines

No arbitrary spacing

Alignment errors are unacceptable

3) Motion & Interaction (Almost Invisible)

Motion should feel architectural, not animated.

Allowed Motion

Image reveal wipes aligned to grid

Subtle opacity + translate on scroll

Page transitions that feel like turning an editorial spread

Forbidden

Bouncy easing

Parallax

Hover zooms

Decorative animation

Easing

Linear or soft ease-out only

Duration: fast, confident (200–400ms)

4) Information Architecture
Content Collections

Case studies must be structured, not freeform.

Work Schema (example sections)

Hero image + title + location

Project overview (short, factual)

Key outcomes / constraints

Image sequences with captions

Closing reflection (optional)

Routes:

/work/

/work/[slug]/

5) Pages

/ Home

/work/ Case study index

/work/[slug]/ Editorial case study

/services/

/studio/ (philosophy + people)

/contact/ (project enquiry)

6) Signature Sections
Home

Editorial hero: restrained statement, not marketing copy

Selected works grid (strict alignment)

Philosophy block (short, confident)

Minimal enquiry CTA

Work Index

Grid of projects with:

Title

Location / Year

One muted thumbnail

Hover reveals metadata only (no animation flourish)

Case Study Detail

Large imagery

Long vertical flow

Captions act as anchors

No “marketing sections”

7) Components (Deliverables)

Must be reusable, grid-aware, and minimal:

GridFrame.astro — page wrapper enforcing grid + margins

WorkCard.astro — disciplined project tile

CaptionBlock.astro — editorial captions

ImageWipe.astro — grid-aligned reveal

MinimalCTA.astro — single-line enquiry block

8) SEO & Local Signal

JSON-LD:

Organization

ProfessionalService

Clean, human page titles

Local intent:

“Architecture studio in Perth”

Address / service area in footer

No keyword stuffing—clarity over volume

9) Success Criteria

This demo is successful if:

It feels calm, expensive, and confident

Nothing feels added “for effect”

The grid is visible without being obvious

The site would not look out of place in:

Architectural Digest

Swiss design annuals

High-end competition portfolios