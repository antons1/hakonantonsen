# Tasks

## Done

- [x] Investigate old setup: live site is a pre-Gatsby Vue app on Firebase
      Hosting (DNS → Fastly); repo held an unused 2023 Gatsby site; nothing
      on the lanodispenser server yet (2026-08-10)
- [x] Settle vision and architecture (see VISION.md)
- [x] Rebuild as Astro on branch `astro-rebuild`; Gatsby preserved on `master`
- [x] Substack RSS integration at build time (`src/lib/substack.ts`)
- [x] First version of all pages: hub front page, writing, photos stub,
      about stub — with placeholder intro/about copy marked for rewriting

## To do

- [ ] Design iteration — Håkon reviews the first version and we adjust
- [ ] Immich portfolio integration: pull curated album(s) via API at build
      time, generate web-sized images. Needs an API key (Immich → Account
      Settings → API Keys) and at least one portfolio album to exist
- [ ] nginx vhost for hakonantonsen.no on the server (+ certbot cert — note:
      HTTP-01 challenge only works after DNS points here)
- [ ] Rebuild automation: systemd timer that builds and swaps `dist/`
      atomically, keeping the previous build on failure
- [ ] Rewrite placeholder copy (front-page intro, about page)
- [ ] Go live: repoint DNS from Firebase to the server, verify cert, retire
      the Firebase deployment
- [ ] Review old Gatsby blog posts on `master`; decide whether to import any
      to Substack (Håkon)

## Tentative (not yet fleshed out)

- [ ] Drawings/paintings section — probably another Immich album with
      different presentation; revisit when there is content
- [ ] Render full Substack posts on-site instead of linking out (permanence
      vs. funneling readers to subscribe — currently linking out)
- [ ] Trigger rebuilds on new Substack posts rather than on a fixed timer
- [ ] "Ask me for the link" page for friends & family albums
