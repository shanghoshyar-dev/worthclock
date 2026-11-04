import type { MetadataRoute } from "next";
import { SITEMAP_ORIGIN } from "@/lib/sitemap-urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/refund-request", "/api/", "/admin", "/admin/"],
      },
    ],
    sitemap: `${SITEMAP_ORIGIN}/sitemap.xml`,
    host: SITEMAP_ORIGIN.replace(/^https?:\/\//, ""),
  };
}
