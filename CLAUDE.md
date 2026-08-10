# CLAUDE.md

Personal website for Håkon Antonsen (hakonantonsen.no). Astro static site.
Read VISION.md for what this site is; TASKS.md for state and plans.

## Working style

Keep Håkon closely in the loop: explain what you're doing and why as you go,
and ask before deciding genuine design forks. Iterate in small, previewable
steps.

## Architecture

- Static output only — no SSR, no client JS unless a page truly needs it.
- Content is sourced from external services **at build time** and rendered
  natively (no third-party embeds): writing from the Substack RSS feed
  (`src/lib/substack.ts`); photos will come from a self-hosted Immich.
- A broken content source must fail the build loudly, never publish empty
  sections silently.

## Commands

Requires Node 22+ (on the lanodispenser server: `nvm use --delete-prefix v22.23.2`).

- `npm run dev` — dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built site

## Repo notes

- Active branch: `astro-rebuild`. The old 2023 Gatsby site is preserved on
  `master` (old blog posts live there under `blog/`).
- Deployment target: nginx on the lanodispenser home server. Not yet live —
  DNS still points at an old Firebase deployment (see TASKS.md).
