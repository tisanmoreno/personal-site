---
version: alpha
name: Tisan Moreno Personal Site
description: A minimal personal site for writing, projects, and notes. Warm, precise, technical, and quiet.
colors:
  primary: "#242424"
  secondary: "#333333"
  muted: "#6f6a61"
  faint: "#8a857c"
  background: "#fbfaf7"
  surface: "#f4efe7"
  border: "#e8e2d8"
  border-subtle: "#eeeeee"
  accent: "#2f6fed"
  accent-soft: "#e8f0ff"
typography:
  heading-lg:
    fontFamily: Geist
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  heading-md:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  meta:
    fontFamily: Geist Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  accent-label:
    fontFamily: Geist Pixel
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
rounded:
  sm: 4px
  md: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  page: 64px
components:
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
  link:
    textColor: "{colors.primary}"
  link-hover:
    textColor: "{colors.accent}"
  metadata:
    textColor: "{colors.muted}"
    typography: "{typography.meta}"
  divider:
    backgroundColor: "{colors.border}"
---

## Overview

The site should feel like a quiet personal notebook for a technical person: readable, sparse, and intentional. The visual direction combines Notion-like warmth, Geist precision, and the minimal structure of references like leerob.com and kate0x.dev.

The homepage should not feel like a product landing page. It should feel like a working personal surface: writing, projects, notes, and small proof of shipped work.

## Colors

Use a warm off-white background instead of pure white when the page needs more personality, but keep it subtle. The site should never feel beige-heavy or themed.

- **Primary (#242424):** main text and headings, softer than pure black.
- **Secondary (#333333):** body copy when a little more separation is useful.
- **Muted (#6f6a61):** dates, summaries, metadata, and secondary labels.
- **Background (#fbfaf7):** warm paper foundation.
- **Surface (#f4efe7):** code blocks, project detail areas, and quiet grouped surfaces.
- **Border (#e8e2d8):** warm dividers.
- **Accent (#2f6fed):** sparing technical blue for active states, tags, and occasional emphasis.

Use the accent color rarely. The default page should be carried by typography, spacing, and dividers.

## Typography

Use **Geist Sans** as the main voice of the site. It should feel precise and modern, but not heavy. Prefer weights between 400 and 600.

Use **Geist Mono** for structured information: dates, tags, code, command names, slugs, small project metadata, and technical labels.

Use **Geist Pixel** only as a contrast accent. Good places include a tiny lab label, an experimental project marker, or a small tech-section heading. Do not use it for body copy, navigation, or long labels.

Avoid default browser bold. Geist can feel too strong when headings and links are set to 700. Keep headings confident but calm.

## Layout

Keep the page text-first with a readable column. Prefer one main column, generous whitespace, and simple section boundaries.

Use dividers and spacing before cards. Cards should appear only when the content truly needs a contained unit, such as repeated projects or a small technical artifact.

The site should work well on mobile without changing its personality. Avoid layouts that depend on wide screens to make sense.

## Elevation & Depth

Avoid shadows, glass effects, gradients, decorative blobs, and heavy frames. Depth should come from typography, whitespace, and subtle surface color.

## Shapes

Use small radii only when a surface needs a practical boundary, such as code or a project tile. Keep radii at 4px or 8px.

## Components

Navigation should stay quiet and textual. Links should be clear but not loud. Underlines are acceptable and often preferable.

Listings should prioritize title, short summary, and metadata. Project listings can be denser than essays, closer to a shipped-work index.

Code and technical snippets should use Geist Mono and warm surface backgrounds.

## Do's and Don'ts

Do:

- Preserve the author's voice.
- Keep edits small and direct.
- Use warm neutrals with restraint.
- Let typography and spacing do most of the design work.
- Use Geist Mono for metadata and technical texture.
- Use Geist Pixel as a rare accent.

Don't:

- Turn the site into a marketing landing page.
- Use oversized hero sections unless there is a specific reason.
- Make the palette dominated by beige, brown, or blue.
- Use bold weights everywhere.
- Add decorative visual noise just to make the page feel designed.
- Heavily rewrite personal writing without asking.
