# Vision

A place to collect and share whatever I want to share.

There is no single audience: partly friends and family, partly potential
employers, partly a general audience — but mostly it is a place for me to
put things. That means the site is optimized for my enjoyment of making and
maintaining it, not for any particular reader.

## Content

Right now: **text** and **photos**. Soon, hopefully: **drawings and
paintings**. The technology follows from the content, not the other way
around.

## Guiding principle: create in purpose-built tools, present natively

Content is *created* wherever the best tool for that medium is, and the site
*presents* it in its own design by pulling it in at build time. Integration,
not embedding — a visitor should not be able to tell where content lives.

- **Writing** happens on Substack (https://hantonsen.substack.com): its
  editor, drafts, publish flow and newsletter are worth more than owning the
  markdown. The site renders the RSS feed.
- **Photography** lives in Immich (self-hosted, backed by the NAS; migration
  from OneDrive folders in progress). The public portfolio on the site will
  be curated Immich albums — adding a photo to the portfolio should be one
  click in Immich.
- **Friends & family albums** are deliberately *not* part of the site: no
  auth, no private areas. Sharing happens via Flickr or Immich shared links;
  the site can at most say "ask me for the link".

## Design

Balanced hub, in English. The front page is a curated front door: short
intro, a few photo highlights, recent writing. Each medium gets its own
section page that can grow independently. Warm, calm, text-friendly design;
automatic light/dark following the visitor's system.

## Hosting

Static files served by nginx on the lanodispenser home server, alongside the
other self-hosted services. A timer rebuilds the site so new Substack posts
and portfolio photos appear without touching anything.
