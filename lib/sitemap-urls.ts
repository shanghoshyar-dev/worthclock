import { posts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";

/** Canonical origin for sitemap, robots.txt, and IndexNow. */
export const SITEMAP_ORIGIN = "https://www.worthclock.com";

/**
 * Public static routes included in the sitemap.
 * Keep in sync with real public pages (and redirects that should be discoverable).
 * Do not add: /refund-request, /admin, API routes, or drafts.
 */
const staticPaths = [
  "/",
  "/ai-consulting-for-law-firms",
  "/about",
  "/blog",
  "/case-studies",
  "/featured",
  "/mini-audit",
  "/faq",
  "/book",
  "/privacy",
  "/terms",
] as const;

export type SitemapEntry = {
  url: string;
  lastModified: Date;
};

function parseDate(value: string | undefined, fallback: Date): Date {
  if (!value) return fallback;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
}

/** Entries that power app/sitemap.ts and IndexNow submissions. */
export function getSitemapEntries(
  baseUrl: string = SITEMAP_ORIGIN,
): SitemapEntry[] {
  const origin = baseUrl.replace(/\/$/, "");
  const buildDate = new Date();

  const staticPages = staticPaths.map((path) => ({
    url: path === "/" ? origin : `${origin}${path}`,
    lastModified: buildDate,
  }));

  const blogPosts = posts
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${origin}/blog/${post.slug}`,
      lastModified: parseDate(post.dateModified ?? post.date, buildDate),
    }));

  const studyPages = caseStudies.map((study) => ({
    url: `${origin}/case-studies/${study.slug}`,
    lastModified: parseDate(study.dateModified ?? study.date, buildDate),
  }));

  return [...staticPages, ...blogPosts, ...studyPages];
}

export function getSitemapUrls(baseUrl?: string): string[] {
  return getSitemapEntries(baseUrl).map((entry) => entry.url);
}
