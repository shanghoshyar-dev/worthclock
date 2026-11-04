/**
 * Submit all sitemap URLs to IndexNow (Bing and other participating engines).
 *
 * Requires INDEXNOW_KEY (32-char hex). On Vercel, runs from postbuild only for
 * production deploys.
 */

import { getSitemapUrls, SITEMAP_ORIGIN } from "../lib/sitemap-urls";

const HOST = "www.worthclock.com";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function toWww(url: string): string {
  return url
    .replace("https://worthclock.com", SITEMAP_ORIGIN)
    .replace("http://worthclock.com", SITEMAP_ORIGIN);
}

async function fetchSitemapUrls(sitemapUrl: string): Promise<string[] | null> {
  try {
    const res = await fetch(sitemapUrl, {
      headers: { Accept: "application/xml,text/xml,*/*" },
    });
    if (!res.ok) {
      console.warn(`IndexNow: sitemap fetch failed (${res.status})`);
      return null;
    }
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((m) =>
      m[1].trim(),
    );
    return urls.length > 0 ? urls : null;
  } catch (err) {
    console.warn("IndexNow: sitemap fetch error:", err);
    return null;
  }
}

async function main() {
  const key = process.env.INDEXNOW_KEY?.trim();
  const lifecycle = process.env.npm_lifecycle_event;

  if (lifecycle === "postbuild" && process.env.VERCEL_ENV !== "production") {
    console.log(
      `IndexNow: skip postbuild (VERCEL_ENV=${process.env.VERCEL_ENV ?? "unset"})`,
    );
    return;
  }

  if (!key) {
    console.log("IndexNow: INDEXNOW_KEY not set — skipping.");
    return;
  }

  if (!/^[a-f0-9]{32}$/i.test(key)) {
    console.error(
      "IndexNow: INDEXNOW_KEY must be a 32-character hexadecimal string.",
    );
    process.exitCode = 1;
    return;
  }

  const siteBase = SITEMAP_ORIGIN;
  const sitemapUrl = `${siteBase}/sitemap.xml`;

  // Prefer live sitemap.xml; fall back to the same URL list that powers it
  // (needed during postbuild when new pages are not live yet).
  const fromSitemap = await fetchSitemapUrls(sitemapUrl);
  const fromCode = getSitemapUrls(siteBase).map(toWww);
  const urlList = [
    ...new Set([
      ...(fromSitemap?.map(toWww) ?? []),
      ...fromCode,
    ]),
  ];

  if (fromSitemap) {
    console.log(`IndexNow: loaded ${fromSitemap.length} URLs from ${sitemapUrl}`);
  } else {
    console.log("IndexNow: using in-repo sitemap URL list (fetch unavailable)");
  }

  if (urlList.length === 0) {
    console.error("IndexNow: no URLs to submit.");
    process.exitCode = 1;
    return;
  }

  const body = {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList,
  };

  console.log(`IndexNow: submitting ${urlList.length} URLs to ${INDEXNOW_ENDPOINT}`);

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await res.text().catch(() => "");
  console.log(`IndexNow: response status ${res.status}${text ? ` — ${text}` : ""}`);

  if (res.status === 200 || res.status === 202) {
    console.log("IndexNow: success");
    return;
  }

  console.error("IndexNow: request did not succeed (expected 200 or 202)");
  process.exitCode = 1;
}

main().catch((err) => {
  console.error("IndexNow: unexpected error", err);
  process.exitCode = 1;
});
