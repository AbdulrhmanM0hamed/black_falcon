import Link from "next/link";

import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { Button } from "@/components/ui/button";
import { ContactPreviewSection } from "@/components/sections/contact-preview-section";
import { FaqPreviewSection } from "@/components/sections/faq-preview-section";
import { HeroVisual } from "@/components/sections/hero-visual";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsShowcaseSection } from "@/components/sections/projects-showcase-section";
import { ServicesShowcaseSection } from "@/components/sections/services-showcase-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { siteSettings } from "@/data/site";
import type { Dictionary } from "@/messages/en";
import type {
  CompanyValue,
  ContactMethod,
  FaqItem,
  Locale,
  ProcessStep,
  Project,
  Service,
  SiteStats,
  TechnologyGroup,
  Testimonial,
} from "@/types/content";
import { withLocale } from "@/lib/i18n";

export function HomePage({
  locale,
  dictionary,
  featuredProjects,
  services,
  stats,
  trustSignals,
  values,
  technologies,
  process,
  testimonials,
  faqItems,
  contactMethods,
}: {
  locale: Locale;
  dictionary: Dictionary;
  featuredProjects: Project[];
  services: Service[];
  stats: SiteStats[];
  trustSignals: ReadonlyArray<Record<Locale, string>>;
  values: CompanyValue[];
  technologies: TechnologyGroup[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  faqItems: FaqItem[];
  contactMethods: ContactMethod[];
}) {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow={dictionary.home.hero.eyebrow}
        title={dictionary.home.hero.title}
        description={dictionary.home.hero.description}
        contentClassName="xl:ps-4"
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-[14rem]">
              <a href={siteSettings.whatsapp} target="_blank" rel="noreferrer">
                {dictionary.home.hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={withLocale(locale, "/projects")}>
                {dictionary.home.hero.secondaryCta}
              </Link>
            </Button>
          </div>
        }
        media={<HeroVisual priority />}
      />

      <TrustStrip
        locale={locale}
        eyebrow={dictionary.home.trust.eyebrow}
        title={dictionary.home.trust.title}
        description={dictionary.home.trust.description}
        signals={trustSignals}
      />

      <ServicesShowcaseSection
        locale={locale}
        services={services}
        eyebrow={dictionary.home.services.eyebrow}
        title={dictionary.home.services.title}
        description={dictionary.home.services.description}
        ctaLabel={dictionary.common.viewAll}
      />

      <ValuePropositionSection
        locale={locale}
        eyebrow={dictionary.home.why.eyebrow}
        title={dictionary.home.why.title}
        description={dictionary.home.why.description}
        values={values}
      />

      <ProjectsShowcaseSection
        locale={locale}
        projects={[
          featuredProjects.find((p) => p.slug === "moazez-web"),
          featuredProjects.find((p) => p.slug === "mshwar"),
          featuredProjects.find((p) => p.slug === "elsquor"),
        ].filter(Boolean) as Project[]}
        eyebrow={dictionary.home.projects.eyebrow}
        title={dictionary.home.projects.title}
        description={dictionary.home.projects.description}
        ctaLabel={dictionary.common.viewAll}
      />

      <TechnologiesSection
        locale={locale}
        groups={technologies}
        eyebrow={dictionary.home.technologies.eyebrow}
        title={dictionary.home.technologies.title}
        description={dictionary.home.technologies.description}
      />

      <ProcessSection
        locale={locale}
        steps={process}
        eyebrow={dictionary.home.process.eyebrow}
        title={dictionary.home.process.title}
        description={dictionary.home.process.description}
      />

      <StatsSection
        locale={locale}
        stats={stats}
        eyebrow={locale === "en" ? "Delivery metrics" : "مؤشرات التنفيذ"}
        title={locale === "en" ? "Signals that clients can feel" : "مؤشرات يمكن للعملاء ملاحظتها"}
        description={
          locale === "en"
            ? "The premium feel of a software company should be visible in structure, discipline, and outcomes."
            : "المظهر الاحترافي الحقيقي لشركة البرمجيات يجب أن يظهر في البنية والانضباط والنتائج."
        }
      />

      <TestimonialsSection
        locale={locale}
        testimonials={testimonials}
        eyebrow={dictionary.home.testimonials.eyebrow}
        title={dictionary.home.testimonials.title}
        description={dictionary.home.testimonials.description}
      />

      <FaqPreviewSection
        locale={locale}
        items={faqItems.slice(0, 4)}
        eyebrow={dictionary.home.faq.eyebrow}
        title={dictionary.home.faq.title}
        description={dictionary.home.faq.description}
        ctaLabel={dictionary.common.viewAll}
      />

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={locale === "en" ? "Premium partnership" : "شراكة احترافية"}
          title={
            locale === "en"
              ? "Need a software partner who can make the product feel stronger at every layer?"
              : "تحتاج شريكًا برمجيًا يجعل المنتج أقوى في كل طبقة؟"
          }
          description={
            locale === "en"
              ? "We combine design, engineering, quality assurance, and operational thinking so the final result feels coherent and commercially ready."
              : "نمـزج بين التصميم والهندسة وضمان الجودة والتفكير التشغيلي حتى تبدو النتيجة النهائية متماسكة وجاهزة تجاريًا."
          }
          primaryLabel={dictionary.common.whatsapp}
          primaryHref={siteSettings.whatsapp}
          secondaryLabel={dictionary.common.readCaseStudy}
          secondaryHref={withLocale(locale, "/projects")}
        />
      </div>

      <ContactPreviewSection
        locale={locale}
        services={services}
        eyebrow={dictionary.home.contact.eyebrow}
        title={dictionary.home.contact.title}
        description={dictionary.home.contact.description}
        formDictionary={dictionary.form}
        contactMethods={contactMethods}
      />
    </div>
  );
}
