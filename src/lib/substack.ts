import Parser from "rss-parser";

export const SUBSTACK_URL = "https://hantonsen.substack.com";

export interface Post {
  title: string;
  url: string;
  date: Date;
  excerpt: string;
  contentHtml: string;
}

let cache: Post[] | null = null;

/**
 * Fetches all posts from the Substack RSS feed at build time.
 * Throws on failure so a broken feed fails the build instead of
 * silently publishing an empty writing section.
 */
export async function getPosts(): Promise<Post[]> {
  if (cache) return cache;

  const parser = new Parser();
  const feed = await parser.parseURL(`${SUBSTACK_URL}/feed`);

  cache = (feed.items ?? [])
    .map((item) => ({
      title: item.title ?? "Untitled",
      url: item.link ?? SUBSTACK_URL,
      date: new Date(item.pubDate ?? 0),
      excerpt: truncate(item.contentSnippet ?? "", 220),
      contentHtml: item["content:encoded"] ?? item.content ?? "",
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return cache;
}

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(" ", max)) + "…";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
