import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/book",
    "/blog",
    "/case-studies",
    "/featured",
    "/ai-consulting-for-law-firms",
    "/ai-readiness-check",
    "/privacy",
    "/terms",
  ];
  const staticPages = pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(site.lastUpdated),
  }));

  const blogPosts = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const studyPages = caseStudies.map((study) => ({
    url: `${site.url}/case-studies/${study.slug}`,
    lastModified: new Date(study.date),
  }));

  return [...staticPages, ...blogPosts, ...studyPages];
}
