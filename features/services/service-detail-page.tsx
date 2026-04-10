import Image from "next/image";
import Link from "next/link";

import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { ProjectCard } from "@/components/common/project-card";
import { Button } from "@/components/ui/button";
import { localize, withLocale } from "@/lib/i18n";
import { serviceIconMap } from "@/lib/icons";
import type { Dictionary } from "@/messages/en";
import type { Locale, Project, Service } from "@/types/content";

export function ServiceDetailPage({
  locale,
  dictionary,
  service,
  relatedProjects,
}: {
  locale: Locale;
  dictionary: Dictionary;
  service: Service;
  relatedProjects: Project[];
}) {
  const Icon = serviceIconMap[service.iconKey];

  return (
    <div className="pb-20">
      <PageHero
        eyebrow={localize(service.name, locale)}
        title={localize(service.headline, locale)}
        description={localize(service.description, locale)}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={withLocale(locale, "/contact")}>
                {dictionary.common.discussProject}
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={withLocale(locale, "/projects")}>
                {dictionary.common.readCaseStudy}
              </Link>
            </Button>
          </div>
        }
        metrics={service.highlights.map((item) => ({
          value: item.value,
          label: localize(item.label, locale),
        }))}
        media={
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            <div className="relative aspect-[16/12]">
              <Image
                src={service.image}
                alt={localize(service.name, locale)}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />
              <div className="absolute inset-x-6 bottom-6 flex items-center gap-4">
                <div className="rounded-2xl border border-white/12 bg-black/30 p-3 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-[#ffb45e]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
                    {dictionary.common.techStack}
                  </div>
                  <div className="mt-2 text-sm text-white/68">
                    {service.technologies.join(" • ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm xl:col-span-2">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.keyFeatures}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {localize(service.keyFeatures, locale).map((feature) => (
                <div
                  key={feature}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/72"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.benefits}
            </div>
            <div className="mt-6 space-y-4">
              {localize(service.benefits, locale).map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-white/72"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.deliverables}
            </div>
            <div className="mt-6 space-y-3 text-sm leading-7 text-white/68">
              {localize(service.deliverables, locale).map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.workflow}
            </div>
            <div className="mt-6 space-y-4">
              {service.process.map((step, index) => (
                <div
                  key={step.title.en}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                    0{index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {localize(step.title, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">
                    {localize(step.description, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length ? (
        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.common.relatedProjects}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {locale === "en" ? "Work shaped by this capability" : "أعمال تعكس هذه القدرة"}
            </h2>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {relatedProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                delay={index * 0.05}
              />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={localize(service.name, locale)}
          title={
            locale === "en"
              ? "Want this service adapted to your product context?"
              : "تريد تكييف هذه الخدمة مع سياق منتجك؟"
          }
          description={
            locale === "en"
              ? "We can scope the right level of design, engineering, QA, and operational support around your current product stage."
              : "يمكننا تحديد المستوى المناسب من التصميم والهندسة والجودة والدعم التشغيلي بما يناسب مرحلة منتجك الحالية."
          }
          primaryLabel={dictionary.common.startConversation}
          primaryHref={withLocale(locale, "/contact")}
          secondaryLabel={dictionary.common.readCaseStudy}
          secondaryHref={withLocale(locale, "/projects")}
        />
      </div>
    </div>
  );
}
