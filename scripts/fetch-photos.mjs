// Fetches the curated portfolio album from Immich at build time.
// Downloads web-sized previews into public/photos/ and writes a manifest
// to src/data/photos.json that the pages render from.
//
// Runs automatically before `astro dev` and `astro build` (see package.json).
// Credentials come from a .secrets file in the repo root (KEY=value lines,
// never committed) or from the environment:
//   IMMICH_URL=https://immich.example
//   IMMICH_API_KEY=...
//
// A broken source fails the build loudly. The one exception is
// `--allow-stale` (used for dev): if Immich is unreachable but a previous
// manifest exists, it warns and reuses it so dev works away from home.

import { readFile, writeFile, mkdir, readdir, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const photosDir = path.join(root, "public", "photos");
const manifestPath = path.join(root, "src", "data", "photos.json");

const ALBUM_NAME = "Portfolio";

const allowStale = process.argv.includes("--allow-stale");

try {
  await fetchPortfolio();
} catch (err) {
  if (allowStale && existsSync(manifestPath)) {
    console.warn(
      `[photos] WARNING: ${err.message}\n[photos] Reusing existing manifest and downloads.`,
    );
  } else {
    console.error(`[photos] ${err.message}`);
    process.exit(1);
  }
}

async function fetchPortfolio() {
  const secrets = await loadSecrets();
  const baseUrl = (secrets.IMMICH_URL ?? "").replace(/\/+$/, "");
  const apiKey = secrets.IMMICH_API_KEY ?? "";
  if (!baseUrl) throw new Error("IMMICH_URL is not set in .secrets or the environment");
  if (!apiKey) throw new Error("IMMICH_API_KEY is not set in .secrets or the environment");

  const albums = await api(`${baseUrl}/api/albums`, apiKey);
  const album = albums.find((a) => a.albumName === ALBUM_NAME);
  if (!album) {
    const names = albums.map((a) => `"${a.albumName}"`).join(", ") || "none";
    throw new Error(`No Immich album named "${ALBUM_NAME}" (albums visible to this key: ${names})`);
  }

  // Newer Immich versions no longer include assets in the album response;
  // membership comes from the timeline API (bucketed, columnar format).
  const buckets = await api(
    `${baseUrl}/api/timeline/buckets?albumId=${album.id}`,
    apiKey,
  );
  const assetIds = [];
  for (const { timeBucket } of buckets) {
    const bucket = await api(
      `${baseUrl}/api/timeline/bucket?albumId=${album.id}&timeBucket=${encodeURIComponent(timeBucket)}`,
      apiKey,
    );
    assetIds.push(...(bucket.id ?? []));
  }
  if (assetIds.length === 0) {
    throw new Error(`Album "${ALBUM_NAME}" is empty — refusing to publish an empty portfolio`);
  }

  await mkdir(photosDir, { recursive: true });
  const existing = new Set(await readdir(photosDir));

  const photos = [];
  for (const assetId of assetIds) {
    const asset = await api(`${baseUrl}/api/assets/${assetId}`, apiKey);
    photos.push(await downloadPreview(baseUrl, apiKey, asset, existing));
  }

  // The timeline API returns newest-first; flip if the album is set to oldest-first.
  if (album.order === "asc") photos.reverse();

  // Prune downloads for photos no longer in the album.
  const keep = new Set(photos.map((p) => path.basename(p.src)));
  for (const file of existing) {
    if (!keep.has(file)) await unlink(path.join(photosDir, file));
  }

  await mkdir(path.dirname(manifestPath), { recursive: true });
  await writeFile(manifestPath, JSON.stringify(photos, null, 2) + "\n");
  console.log(`[photos] ${photos.length} photos in "${ALBUM_NAME}" — manifest written`);
}

async function downloadPreview(baseUrl, apiKey, asset, existing) {
  const exif = asset.exifInfo ?? {};
  const meta = {
    id: asset.id,
    width: exif.exifImageWidth ?? null,
    height: exif.exifImageHeight ?? null,
    description: exif.description?.trim() || null,
    takenAt: exif.dateTimeOriginal ?? asset.fileCreatedAt ?? null,
  };

  const cached = [...existing].find((f) => f.startsWith(`${asset.id}.`));
  if (cached) return { ...meta, src: `/photos/${cached}` };

  const res = await fetch(`${baseUrl}/api/assets/${asset.id}/thumbnail?size=preview`, {
    headers: { "x-api-key": apiKey },
  });
  if (!res.ok) {
    throw new Error(`Failed to download preview for asset ${asset.id}: HTTP ${res.status}`);
  }
  const type = res.headers.get("content-type") ?? "image/jpeg";
  const ext = type.includes("webp") ? "webp" : type.includes("png") ? "png" : "jpg";
  const file = `${asset.id}.${ext}`;
  await writeFile(path.join(photosDir, file), Buffer.from(await res.arrayBuffer()));
  return { ...meta, src: `/photos/${file}` };
}

async function api(url, apiKey) {
  const res = await fetch(url, { headers: { "x-api-key": apiKey } });
  if (!res.ok) throw new Error(`Immich request failed: ${url} → HTTP ${res.status}`);
  return res.json();
}

async function loadSecrets() {
  const values = {};
  const file = path.join(root, ".secrets");
  if (existsSync(file)) {
    for (const line of (await readFile(file, "utf8")).split("\n")) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (match) values[match[1]] = match[2];
    }
  }
  // Environment variables win, so CI secrets can override the file later.
  return { ...values, ...process.env };
}
