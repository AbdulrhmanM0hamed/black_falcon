import Image from "next/image";

import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { ProjectCard } from "@/components/common/project-card";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site";
import { localize, withLocale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/en";
import type { Locale, Project } from "@/types/content";

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

export function ProjectDetailPage({
  locale,
  dictionary,
  project,
  relatedProjects,
}: {
  locale: Locale;
  dictionary: Dictionary;
  project: Project;
  relatedProjects: Project[];
}) {
  const linkButtons = [
    project.links.website
      ? { href: project.links.website, label: dictionary.common.liveWebsite }
      : null,
    project.links.googlePlay
      ? {
          href: project.links.googlePlay,
          label: dictionary.common.googlePlay,
          icon: "/icons/google_play_icon.webp",
        }
      : null,
    project.links.appStore
      ? {
          href: project.links.appStore,
          label: dictionary.common.appStore,
          icon: "/icons/app_store_icon.png",
        }
      : null,
    project.links.caseStudy
      ? { href: project.links.caseStudy, label: dictionary.common.caseStudy }
      : null,
  ].filter(Boolean) as Array<{ href: string; label: string; icon?: string }>;

  return (
    <div className="pb-20">
      <PageHero
        eyebrow={project.name}
        title={localize(project.shortDescription, locale)}
        description={localize(project.detailedDescription, locale)}
        contentClassName="xl:ps-3"
        actions={
          linkButtons.length ? (
            <div className="flex flex-wrap gap-3">
              {linkButtons.map((button, index) => (
                <Button
                  key={button.href}
                  asChild
                  size="lg"
                  variant={index === 0 ? "primary" : "secondary"}
                  className="gap-2.5"
                >
                  <a href={button.href} target="_blank" rel="noreferrer">
                    {button.icon ? (
                      <Image
                        src={button.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 object-contain"
                      />
                    ) : null}
                    {button.label}
                  </a>
                </Button>
              ))}
            </div>
          ) : undefined
        }
        metrics={project.results.slice(0, 3).map((result) => ({
          value: result.value,
          label: localize(result.label, locale),
        }))}
        media={
          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] shadow-[0_22px_70px_rgba(0,0,0,0.2)]">
            <div className="relative aspect-[16/12] bg-[radial-gradient(circle_at_20%_18%,rgba(255,162,64,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
              <Image
                src={project.coverImage}
                alt={project.name}
                fill
                className="object-contain p-5 md:p-6"
                sizes="(max-width: 1200px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.34))]" />
            </div>
          </div>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-6 xl:grid-cols-[0.76fr_1.24fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-9">
            <div className="space-y-5">
              {[
                [dictionary.common.category, localize(project.category, locale)],
                [dictionary.common.industry, localize(project.industry, locale)],
                [dictionary.common.projectType, projectTypeLabels[project.projectType][locale]],
                [dictionary.common.timeline, localize(project.timeline, locale)],
              ].map(([label, value]) => (
                <div
                  key={label as string}
                  className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
                    {label}
                  </div>
                  <div className="mt-3 text-base leading-8 text-white/76 md:text-lg">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-9">
            <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.techStack}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2.5 text-[15px] text-white/78"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
                {dictionary.common.keyFeatures}
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {localize(project.features, locale).map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-base leading-8 text-white/72"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-9">
            <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.challenges}
            </div>
            <div className="mt-6 space-y-4">
              {project.challenges.map((item) => (
                <div
                  key={item.title.en}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-[1.75rem] font-semibold leading-[1.24] text-white">
                    {localize(item.title, locale)}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/66">
                    {localize(item.description, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-9">
            <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.solutions}
            </div>
            <div className="mt-6 space-y-4">
              {project.solutions.map((item) => (
                <div
                  key={item.title.en}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-[1.75rem] font-semibold leading-[1.24] text-white">
                    {localize(item.title, locale)}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/66">
                    {localize(item.description, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
            {locale === "en" ? "Project gallery" : "معرض المشروع"}
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.22] tracking-tight text-white md:text-4xl">
            {locale === "en" ? "Visual context around the case study" : "سياق بصري يكمّل دراسة الحالة"}
          </h2>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {project.gallery.map((image) => (
            <div
              key={typeof image.src === "string" ? image.src : image.src.src}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_52px_rgba(0,0,0,0.14)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={localize(image.alt, locale)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="mb-10">
          <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
            {dictionary.common.results}
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.22] tracking-tight text-white md:text-4xl">
            {locale === "en" ? "The outcome of the engagement" : "نتائج هذا التعاون"}
          </h2>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {project.results.map((result) => (
            <div
              key={result.value + result.label.en}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <div className="text-4xl font-semibold text-white">{result.value}</div>
              <div className="mt-4 text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
                {localize(result.label, locale)}
              </div>
              {result.description ? (
                <p className="mt-4 text-base leading-8 text-white/66">
                  {localize(result.description, locale)}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {relatedProjects.length ? (
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.relatedProjects}
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.22] tracking-tight text-white md:text-4xl">
              {locale === "en" ? "More work in a similar delivery space" : "أعمال أخرى في مساحة تنفيذ مشابهة"}
            </h2>
          </div>
          <div className="grid auto-rows-fr gap-6 xl:grid-cols-3">
            {relatedProjects.map((item, index) => (
              <ProjectCard
                key={item.slug}
                project={item}
                locale={locale}
                delay={index * 0.05}
              />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={project.name}
          title={
            locale === "en"
              ? "Want a case-study level execution for your own product?"
              : "تريد مستوى تنفيذ يشبه دراسات الحالة لمنتجك أنت؟"
          }
          description={
            locale === "en"
              ? "We can translate the same attention to UX, engineering structure, and launch quality into a roadmap that fits your business."
              : "يمكننا نقل نفس الاهتمام بتجربة المستخدم والبنية الهندسية وجودة الإطلاق إلى خارطة طريق تناسب عملك."
          }
          primaryLabel={dictionary.common.whatsapp}
          primaryHref={siteSettings.whatsapp}
          secondaryLabel={dictionary.common.viewAll}
          secondaryHref={withLocale(locale, "/projects")}
        />
      </div>
    </div>
  );
}
