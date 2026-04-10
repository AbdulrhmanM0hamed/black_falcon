import Link from "next/link";

import { Button } from "@/components/ui/button";
import { withLocale } from "@/lib/i18n";
import type { Locale, Project } from "@/types/content";

import { ProjectCard } from "@/components/common/project-card";
import { SectionHeading } from "@/components/common/section-heading";

export function ProjectsShowcaseSection({
  locale,
  projects,
  eyebrow,
  title,
  description,
  ctaLabel,
}: {
  locale: Locale;
  projects: Project[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-3xl"
        />
        <Button asChild variant="secondary">
          <Link href={withLocale(locale, "/projects")}>{ctaLabel}</Link>
        </Button>
      </div>
      <div className="mt-12 grid auto-rows-fr gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            delay={index * 0.06}
          />
        ))}
      </div>
    </section>
  );
}
