# Vision

A place to collect and share whatever I want to share.

There is no single audience: partly friends and family, partly potential
employers, partly a general audience — but mostly it is a place for me to
put things. That means the site is optimized for my enjoyment of making and
maintaining it, not for any particular reader.

**Success looks like:** the site is live, I like looking at it, and I
publish text and photos there. Getting eyeballs on what I make is a
separate project from the site itself — the site is the place to publish,
not the reach machine. I do want to see what is being viewed, though:
simple analytics is fine, more data is always fun.

## Content

Right now: **text** and **photos**. Later: **drawings and paintings** —
there is an active practice, but nothing I want to share yet; when it
materializes it gets its own section, distinct from photos. The technology
follows from the content, not the other way around.

Writing may eventually split into two kinds — casual thinking-out-loud
posts vs. more polished pieces, presented distinctly. Aspirational but real:
anticipate it, don't build for it yet (Substack sections have per-section
feeds, so the door stays open).

## Language

Writing language is deliberately undecided. English increases reach and is
probably what I'll be happier with long-term; Norwegian is more natural,
and I like the thought of being a voice in my own, small language. Posts
appear on the site in whatever language they were written.

The site's own voice — navigation, intro, about — is **Norwegian**. A
translation layer on the site is a future aspiration.

## Guiding principle: create in purpose-built tools; the site is self-contained

Content is *created* wherever the best tool for that medium is — Substack's
writing and publishing experience, and Immich's cataloging and archiving,
beat anything I could build myself. But the site *presents* everything
natively, pulled in at build time: a visitor can browse, read and view
without *having* to go anywhere else. Sending people to Substack is fine as
an option (to subscribe, to comment), never a requirement for reading.

- **Writing** happens on Substack (https://hantonsen.substack.com); the site
  renders full posts from the RSS feed.
- **Photography** lives in Immich (self-hosted, backed by the NAS). The
  public portfolio is curated Immich albums — adding a photo to the
  portfolio is one click in Immich.
- **Friends & family albums** are not part of this site: no auth, no
  private areas. How that sharing happens is undecided and categorically
  separate — even if it someday ends up on the same domain or in the same
  codebase, it is a different thing from this site.

## Design

Direction deliberately open. The current look is scaffolding, not a
statement — I don't yet have a baseline for what I want the site to look
like. Before committing to a design, I need to hunt comparables (personal
sites, journals, portfolios) and find what resonates. The design pass
happens after that, and can iterate on the live site.

## Hosting & operations

Static files served by nginx on the lanodispenser home server, alongside
the other self-hosted services. A timer rebuilds the site so new Substack
posts and portfolio photos appear without touching anything. Self-hosted
analytics shows what is being viewed. A broken content source fails the
build loudly, never publishes empty sections silently.
