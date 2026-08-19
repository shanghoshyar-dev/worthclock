import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/book", "/blog", "/privacy", "/terms"];
  const staticPages = pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(site.lastUpdated),
  }));

  const blogPosts = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticPages, ...blogPosts];
}
