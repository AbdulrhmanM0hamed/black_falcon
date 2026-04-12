import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic, Manrope, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloat } from "@/components/common/whatsapp-float";
import { getServices } from "@/lib/api/content";
import { getDirection, isLocale, locales } from "@/lib/i18n";
import { getOrganizationJsonLd, siteUrl } from "@/lib/metadata";
import { getDictionary } from "@/messages";
import { siteSettings } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

import { GlobalLoader } from "@/components/common/global-loader";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, services] = await Promise.all([
    getDictionary(locale),
    getServices(),
  ]);

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      className={`${spaceGrotesk.variable} ${manrope.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body className="min-h-screen text-foreground">
        <GlobalLoader />
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader locale={locale} dictionary={dictionary.nav} />
          <main className="flex-1">{children}</main>
          <SiteFooter locale={locale} dictionary={dictionary.footer} services={services} />
          <WhatsAppFloat href={siteSettings.whatsapp} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(getOrganizationJsonLd()),
            }}
          />
        </div>
      </body>
    </html>
  );
}
