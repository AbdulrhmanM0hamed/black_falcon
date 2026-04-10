import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/features/projects/project-detail-page";
import {
  getProjectBySlug,
  getProjects,
  getRelatedProjects,
} from "@/lib/api/content";
import { isLocale } from "@/lib/i18n";
import { createPageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/messages";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
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

  const project = await getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: `${project.name} | Black Falcon`,
    description: project.shortDescription[locale],
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const [dictionary, project] = await Promise.all([
    getDictionary(locale),
    getProjectBySlug(slug),
  ]);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project.relatedProjectSlugs);

  return (
    <ProjectDetailPage
      locale={locale}
      dictionary={dictionary}
      project={project}
      relatedProjects={relatedProjects}
    />
  );
}
