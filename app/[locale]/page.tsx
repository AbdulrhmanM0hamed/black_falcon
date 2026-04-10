import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePage } from "@/features/home/home-page";
import {
  getCompanyValues,
  getContactMethods,
  getDeliveryProcess,
  getFaqItems,
  getFeaturedProjects,
  getServices,
  getSiteStats,
  getTechnologyGroups,
  getTestimonials,
  getTrustSignals,
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

  const dictionary = await getDictionary(locale);

  return createPageMetadata({
    locale,
    title: dictionary.meta.defaultTitle,
    description: dictionary.meta.defaultDescription,
  });
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [
    dictionary,
    featuredProjects,
    services,
    stats,
    trustSignals,
    values,
    technologies,
    process,
    testimonials,
    faqItems,
    contactMethods,
  ] = await Promise.all([
    getDictionary(locale),
    getFeaturedProjects(),
    getServices(),
    getSiteStats(),
    getTrustSignals(),
    getCompanyValues(),
    getTechnologyGroups(),
    getDeliveryProcess(),
    getTestimonials(),
    getFaqItems(),
    getContactMethods(),
  ]);

  return (
    <HomePage
      locale={locale}
      dictionary={dictionary}
      featuredProjects={featuredProjects}
      services={services}
      stats={stats}
      trustSignals={trustSignals}
      values={values}
      technologies={technologies}
      process={process}
      testimonials={testimonials}
      faqItems={faqItems}
      contactMethods={contactMethods}
    />
  );
}
