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
  (`src/lib/substack.ts`); photos from the curated "Portfolio" album in
  self-hosted Immich (`scripts/fetch-photos.mjs` downloads previews to
  `public/photos/` and writes `src/data/photos.json` before dev/build).
- A broken content source must fail the build loudly, never publish empty
  sections silently. Exception: `predev` passes `--allow-stale` so dev
  works away from home if a previous photo manifest exists.
- Secrets (`IMMICH_URL`, `IMMICH_API_KEY`) live in a git-ignored `.secrets`
  file in the repo root (KEY=value lines); environment variables override it.

## Commands

Requires Node 22+ (on the lanodispenser server: `nvm use --delete-prefix v22.23.2`).

- `npm run dev` — dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built site

## Repo notes

- The site lives on `main`. The old 2023 Gatsby site is preserved on the
  `old-site-2023` branch (old blog posts live there under `blog/`).
- Deployment target: nginx on the lanodispenser home server. Not yet live —
  DNS still points at an old Firebase deployment (see TASKS.md).
