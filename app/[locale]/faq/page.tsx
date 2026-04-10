import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FaqPage } from "@/features/faq/faq-page";
import { getFaqItems } from "@/lib/api/content";
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
    title: locale === "en" ? "FAQ | Black Falcon" : "الأسئلة الشائعة | بلاك فالكون",
    description:
      locale === "en"
        ? "Read common answers about how Black Falcon structures design, development, QA, launch, and collaboration."
        : "اقرأ الإجابات الشائعة حول كيف تنظّم بلاك فالكون التصميم والتطوير والجودة والإطلاق والتعاون.",
    path: "/faq",
  });
}

export default async function FaqRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, faqItems] = await Promise.all([
    getDictionary(locale),
    getFaqItems(),
  ]);

  return <FaqPage locale={locale} dictionary={dictionary} faqItems={faqItems} />;
}
