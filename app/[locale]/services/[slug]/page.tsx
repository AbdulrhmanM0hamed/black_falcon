import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailPage } from "@/features/services/service-detail-page";
import {
  getRelatedProjects,
  getServiceBySlug,
  getServices,
} from "@/lib/api/content";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/messages";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const service = await getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: `${service.name[locale]} | Black Falcon`,
    description: service.summary[locale],
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, service] = await Promise.all([
    getDictionary(locale),
    getServiceBySlug(slug),
  ]);

  if (!service) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(service.relatedProjectSlugs);

  return (
    <ServiceDetailPage
      locale={locale}
      dictionary={dictionary}
      service={service}
      relatedProjects={relatedProjects}
    />
  );
}
