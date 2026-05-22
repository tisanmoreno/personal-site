# Agent Guide

This repo is a minimal personal site built from simple Markdown files.

## Workflow

- Keep content in `content/`.
- Keep generated output in `dist/`.
- Do not edit files in `dist/` by hand.
- Prefer small, direct changes over broad refactors.
- Preserve the author's voice when editing writing.
- Ask before making heavy rewrites to personal essays or bio text.

## Content Types

- `content/writing/`: long-form essays and reflections.
- `content/experiments/`: experiments, shipped work, and prototypes.

## Drafts

Content can include `draft: true` in frontmatter. Drafts should not be published in production builds.

## Commands

- `npm run build`: generate the static site into `dist/`.
- `npm run dev`: build and serve the site locally.
