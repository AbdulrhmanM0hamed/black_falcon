import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicesPage } from "@/features/services/services-page";
import { getDeliveryProcess, getServices } from "@/lib/api/content";
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
    title: locale === "en" ? "Services | Black Falcon" : "الخدمات | بلاك فالكون",
    description:
      locale === "en"
        ? "Explore Black Falcon services across web development, website design, UI/UX, QA, DevOps, and mobile apps."
        : "استعرض خدمات بلاك فالكون في تطوير الويب وتصميم المواقع وواجهات المستخدم وضمان الجودة وDevOps وتطبيقات الموبايل.",
    path: "/services",
  });
}

export default async function ServicesRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, services, process] = await Promise.all([
    getDictionary(locale),
    getServices(),
    getDeliveryProcess(),
  ]);

  return (
    <ServicesPage
      locale={locale}
      dictionary={dictionary}
      services={services}
      process={process}
    />
  );
}
