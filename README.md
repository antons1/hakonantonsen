# hakonantonsen.no

My personal website — a place to collect and share writing, photography and
other things I make.

Static site built with [Astro](https://astro.build), served by nginx.
Content is pulled from external sources at build time:

- **Writing**: the [Substack](https://hantonsen.substack.com) RSS feed
  (`src/lib/substack.ts`)
- **Photos**: planned — curated albums from a self-hosted Immich instance

## Developing

Requires Node 22+ (via nvm on the server).

```sh
npm install
npm run dev       # dev server
npm run build     # static build to dist/
npm run preview   # serve the built site
```

The previous Gatsby version of the site lives in the git history on `master`.
