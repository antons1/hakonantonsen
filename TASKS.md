# Tasks

Sequencing (from the 2026-08-11 vision refinement): the next thread is
**infrastructure** — make everything deployable, then go live. The only
content gate for go-live is at least one published Substack post. Design
comes after, gated on a comparables hunt.

## Done

- [x] Investigate old setup: live site is a pre-Gatsby Vue app on Firebase
      Hosting (DNS → Fastly); repo held an unused 2023 Gatsby site; nothing
      on the lanodispenser server yet (2026-08-10)
- [x] Settle vision and architecture (see VISION.md)
- [x] Rebuild as Astro on branch `astro-rebuild`; Gatsby preserved on `master`
- [x] Substack RSS integration at build time (`src/lib/substack.ts`)
- [x] First version of all pages: hub front page, writing, photos stub,
      about stub — with placeholder intro/about copy marked for rewriting
- [x] Immich portfolio integration: `scripts/fetch-photos.mjs` pulls the
      "Portfolio" album via the timeline API before dev/build, downloads
      previews to `public/photos/`, writes `src/data/photos.json`; photos
      page and front-page highlights render from it. Secrets in `.secrets`
      (git-ignored; move to GitHub secrets or similar later) (2026-08-10)
- [x] Refine VISION.md via interview; resolve ambiguities (full posts
      on-site, Norwegian chrome, analytics, sequencing); notes in
      `workspace/interviews/260811-*-vision-refinement/` (2026-08-11)

## Thread 1: site ready to deploy

- [ ] Render full Substack posts on-site (decided: the site is
      self-contained; Substack link becomes optional, e.g. "subscribe").
      RSS feed carries full content — render it natively, sanitize/restyle
      images and embeds
- [ ] Norwegian chrome: navigation, labels, page titles in Norwegian
- [ ] Rewrite placeholder copy (front-page intro, about page) — in Norwegian
- [ ] Self-hosted analytics on lanodispenser (pick tool — e.g. Umami /
      Plausible CE / GoatCounter; per-page views minimum, more data is fun);
      add script to the site

## Thread 2: infrastructure & go-live

- [ ] nginx vhost for hakonantonsen.no on the server (+ certbot cert — note:
      HTTP-01 challenge only works after DNS points here)
- [ ] Rebuild automation: systemd timer that builds and swaps `dist/`
      atomically, keeping the previous build on failure
- [ ] Go-live gate: at least one post published on Substack (Håkon)
- [ ] Go live: repoint DNS from Firebase to the server, verify cert, retire
      the Firebase deployment

## Thread 3: design (after go-live is fine — iterate in public)

- [ ] Comparables hunt: collect personal sites / journals / portfolios that
      resonate; distill into a design baseline Håkon stands by (Håkon +
      Claude browsing session)
- [ ] Design pass, gated on the comparables baseline

## Backlog

- [ ] Review old Gatsby blog posts on `master`; decide whether to import any
      to Substack (Håkon)
- [ ] Move secrets out of `.secrets` file to something sturdier if the build
      ever runs off-server

## Tentative (anticipated, not planned)

- [ ] Writing split: casual posts vs. polished pieces, presented distinctly.
      Substack sections have per-section feeds (`/s/<section>/feed`) — no
      tooling now, just don't block it
- [ ] Drawings/paintings section — its own thing, distinct from photos;
      revisit when there is shareable content
- [ ] Translation layer for the site (chrome and/or content)
- [ ] Trigger rebuilds on new Substack posts rather than a fixed timer
- [ ] Friends & family sharing: mechanism undecided and categorically
      separate from this site; at most the site says "ask me for the link"
