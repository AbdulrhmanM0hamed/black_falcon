import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getPreferredLocale, isLocale, withLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameParts = pathname.split("/");
  const localeSegment = pathnameParts[1] ?? "";

  if (isLocale(localeSegment)) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request.headers.get("accept-language"));
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = withLocale(locale, pathname);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
