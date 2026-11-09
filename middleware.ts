import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * One 301 that:
 * - sends the apex host to www
 * - strips a trailing slash
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const url = request.nextUrl.clone();
  const hadTrailingSlash =
    url.pathname.length > 1 && url.pathname.endsWith("/");

  if (hadTrailingSlash) {
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
  }

  const isApex = host === "worthclock.com";
  if (isApex) {
    url.protocol = "https:";
    url.hostname = "www.worthclock.com";
    url.port = "";
  }

  if (isApex || hadTrailingSlash) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};
