import type { Metadata } from "next";

/** Canonical host. No trailing slash. */
export const CANONICAL_ORIGIN = "https://www.worthclock.com";

/** Absolute canonical URL with no trailing slash. */
export function canonicalUrl(path: string): string {
  if (!path || path === "/") return CANONICAL_ORIGIN;
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_ORIGIN}${withSlash.replace(/\/+$/, "")}`;
}

export function withCanonical(
  path: string,
  metadata: Metadata = {},
): Metadata {
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalUrl(path),
    },
  };
}
