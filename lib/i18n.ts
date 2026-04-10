import type { Locale, LocalizedValue } from "@/types/content";

export const locales = ["en", "ar"] as const satisfies readonly Locale[];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localize<T>(value: LocalizedValue<T>, locale: Locale) {
  return value[locale];
}

export function getPathWithoutLocale(pathname: string) {
  const segments = pathname.split("/");

  if (isLocale(segments[1] ?? "")) {
    const nextPath = `/${segments.slice(2).join("/")}`.replace(/\/+/g, "/");
    return nextPath === "/" ? "/" : nextPath.replace(/\/$/, "") || "/";
  }

  return pathname || "/";
}

export function withLocale(locale: Locale, pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const cleanPath = normalizedPath === "/" ? "" : normalizedPath;

  return `/${locale}${cleanPath}`;
}

export function getLocaleSwitcherPath(pathname: string, targetLocale: Locale) {
  return withLocale(targetLocale, getPathWithoutLocale(pathname));
}

export function getPreferredLocale(acceptLanguage: string | null) {
  const normalized = acceptLanguage?.toLowerCase() ?? "";
  return normalized.includes("ar") ? "ar" : "en";
}
