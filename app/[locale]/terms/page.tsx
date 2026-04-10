import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/features/legal/legal-page";
import { getTermsSections } from "@/lib/api/content";
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
    title: dictionary.termsPage.title,
    description: dictionary.termsPage.description,
    path: "/terms",
  });
}

export default async function TermsRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, sections] = await Promise.all([
    getDictionary(locale),
    getTermsSections(),
  ]);

  return (
    <LegalPage
      locale={locale}
      eyebrow={dictionary.termsPage.eyebrow}
      title={dictionary.termsPage.title}
      description={dictionary.termsPage.description}
      sections={sections}
    />
  );
}
