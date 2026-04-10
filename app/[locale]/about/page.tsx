import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutPage } from "@/features/about/about-page";
import {
  getCompanyValues,
  getDeliveryProcess,
  getSiteSettings,
  getSiteStats,
} from "@/lib/api/content";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: locale === "en" ? "About Black Falcon" : "عن بلاك فالكون",
    description:
      locale === "en"
        ? "Learn how Black Falcon approaches premium product design, engineering quality, and disciplined software delivery."
        : "تعرّف على كيف تتعامل بلاك فالكون مع تصميم المنتجات وهندسة الجودة والتسليم البرمجي المنضبط.",
    path: "/about",
  });
}

export default async function AboutRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, siteSettings, values, stats, process] = await Promise.all([
    getDictionary(locale),
    getSiteSettings(),
    getCompanyValues(),
    getSiteStats(),
    getDeliveryProcess(),
  ]);

  return (
    <AboutPage
      locale={locale}
      dictionary={dictionary}
      siteSettings={siteSettings}
      values={values}
      stats={stats}
      process={process}
    />
  );
}
