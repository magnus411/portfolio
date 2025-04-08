import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ["en", "no"];
const DEFAULT_LOCALE = "en";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url), {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/", // Only match root path
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|en|no).*)",
  ],
};
