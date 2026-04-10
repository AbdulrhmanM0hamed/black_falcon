import type { Metadata } from "next";

import { siteSettings } from "@/data/site";
import { withLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blackfalcon.dev",
);

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function createPageMetadata({
  locale,
  title,
  description,
  path = "/",
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalPath = withLocale(locale, path);

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: withLocale("en", path),
        ar: withLocale("ar", path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "website",
      siteName: siteSettings.name,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteSettings.name} premium software house`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSettings.name,
    url: siteUrl.toString(),
    email: siteSettings.email,
    telephone: siteSettings.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: siteSettings.socialLinks.map((link) => link.href),
  };
}
