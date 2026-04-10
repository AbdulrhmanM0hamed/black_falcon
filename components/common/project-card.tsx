"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { localize, withLocale } from "@/lib/i18n";
import type { Locale, Project } from "@/types/content";

import { Reveal } from "./reveal";

const projectTypeLabels = {
  website: {
    en: "Website only",
    ar: "موقع فقط",
  },
  mobile: {
    en: "Mobile app",
    ar: "تطبيق موبايل",
  },
  "website-mobile": {
    en: "Website + mobile app",
    ar: "موقع + تطبيق موبايل",
  },
} as const;

export function ProjectCard({
  project,
  locale,
  delay = 0,
}: {
  project: Project;
  locale: Locale;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={withLocale(locale, `/projects/${project.slug}`)}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_52px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1 md:min-h-[34rem]"
      >
        <div className="relative aspect-[16/11] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgba(255,162,64,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
          <Image
            src={project.coverImage}
            alt={project.name}
            fill
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03] md:p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.28))]" />
          <div className="absolute inset-x-6 bottom-6 flex items-center justify-between gap-4">
            <Badge className="border-white/14 bg-black/35 text-white/74 backdrop-blur-md">
              {projectTypeLabels[project.projectType][locale]}
            </Badge>
            <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffd3a0]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
          <div className="space-y-3.5">
            <h3 className="text-2xl font-semibold leading-[1.22] tracking-tight text-white md:text-[2rem]">
              {project.name}
            </h3>
            <p className="min-h-[6rem] text-base leading-8 text-white/68">
              {localize(project.shortDescription, locale)}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 text-sm text-white/52">
            <span>{localize(project.industry, locale)}</span>
            <span className="text-[#ffd3a0]">
              {locale === "en" ? "View details" : "عرض التفاصيل"}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
