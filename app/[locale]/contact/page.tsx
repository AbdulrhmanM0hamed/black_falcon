import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactPage } from "@/features/contact/contact-page";
import { getContactMethods, getServices } from "@/lib/api/content";
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
    title: locale === "en" ? "Contact Black Falcon" : "تواصل مع بلاك فالكون",
    description:
      locale === "en"
        ? "Contact Black Falcon to discuss websites, platforms, mobile apps, UX, QA, and DevOps support."
        : "تواصل مع بلاك فالكون لمناقشة المواقع والمنصات وتطبيقات الموبايل وتجربة المستخدم والجودة وDevOps.",
    path: "/contact",
  });
}

export default async function ContactRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, services, contactMethods] = await Promise.all([
    getDictionary(locale),
    getServices(),
    getContactMethods(),
  ]);

  return (
    <ContactPage
      locale={locale}
      dictionary={dictionary}
      services={services}
      contactMethods={contactMethods}
    />
  );
}
