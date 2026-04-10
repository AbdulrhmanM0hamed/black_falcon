import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectsPage } from "@/features/projects/projects-page";
import { getProjects, getServices } from "@/lib/api/content";
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
    title: locale === "en" ? "Projects | Black Falcon" : "المشاريع | بلاك فالكون",
    description:
      locale === "en"
        ? "Browse Black Falcon case studies across AI, mobility, education, fitness, and community-focused digital products."
        : "استعرض معرض اعمال بلاك فالكون عبر منتجات رقمية في الذكاء الاصطناعي والتنقل والتعليم واللياقة والمجتمعات.",
    path: "/projects",
  });
}

export default async function ProjectsRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, projects, services] = await Promise.all([
    getDictionary(locale),
    getProjects(),
    getServices(),
  ]);

  return (
    <ProjectsPage
      locale={locale}
      dictionary={dictionary}
      projects={projects}
      services={services}
    />
  );
}
