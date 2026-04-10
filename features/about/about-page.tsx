import Link from "next/link";

import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { Button } from "@/components/ui/button";
import { ProcessSection } from "@/components/sections/process-section";
import { StatsSection } from "@/components/sections/stats-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { localize, withLocale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/en";
import type {
  CompanyValue,
  Locale,
  ProcessStep,
  SiteSettings,
  SiteStats,
} from "@/types/content";

export function AboutPage({
  locale,
  dictionary,
  siteSettings,
  values,
  stats,
  process,
}: {
  locale: Locale;
  dictionary: Dictionary;
  siteSettings: SiteSettings;
  values: CompanyValue[];
  stats: SiteStats[];
  process: ProcessStep[];
}) {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow={dictionary.about.hero.eyebrow}
        title={dictionary.about.hero.title}
        description={dictionary.about.hero.description}
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
        metrics={stats.slice(0, 3).map((item) => ({
          value: item.value,
          label: localize(item.label, locale),
        }))}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {dictionary.about.storyTitle}
            </div>
            <p className="mt-5 text-lg leading-8 text-white/74">
              {localize(siteSettings.summary, locale)}
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              {locale === "en" ? "Mission" : "المهمة"}
            </div>
            <p className="mt-5 text-lg leading-8 text-white/74">
              {localize(siteSettings.mission, locale)}
            </p>
          </div>
        </div>
      </section>

      <ValuePropositionSection
        locale={locale}
        eyebrow={dictionary.about.valuesTitle}
        title={locale === "en" ? "How we think about premium digital delivery" : "كيف نفكر في التسليم الرقمي الراقي"}
        description={
          locale === "en"
            ? "Our standards are built around product clarity, engineering discipline, and communication that keeps projects moving."
            : "معاييرنا مبنية على وضوح المنتج والانضباط الهندسي وتواصل يدفع المشروع للأمام."
        }
        values={values}
      />

      <StatsSection
        locale={locale}
        stats={stats}
        eyebrow={dictionary.about.statsTitle}
        title={locale === "en" ? "Why stakeholders feel confident working with us" : "لماذا يشعر أصحاب المصلحة بالثقة أثناء العمل معنا"}
        description={
          locale === "en"
            ? "Strong product work should feel structured, precise, and dependable long before launch day."
            : "العمل الجيد على المنتج يجب أن يبدو منظماً ودقيقاً ويمكن الوثوق به قبل يوم الإطلاق بوقت طويل."
        }
      />

      <ProcessSection
        locale={locale}
        steps={process}
        eyebrow={dictionary.about.capabilitiesTitle}
        title={locale === "en" ? "A process that supports momentum without losing quality" : "عملية تدعم التقدم دون فقدان الجودة"}
        description={
          locale === "en"
            ? "We keep strategy, UX, engineering, QA, and launch preparation connected instead of treating them as isolated phases."
            : "نحافظ على ترابط الاستراتيجية وتجربة المستخدم والهندسة والاختبار وتجهيز الإطلاق بدلاً من التعامل معها كمراحل منفصلة."
        }
      />

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={locale === "en" ? "Work with Black Falcon" : "اعمل مع بلاك فالكون"}
          title={
            locale === "en"
              ? "If the standard matters, the execution has to match it."
              : "إذا كانت المعايير تهمك، فالتنفيذ يجب أن يوازيها."
          }
          description={
            locale === "en"
              ? "Let’s turn your next web, mobile, or platform initiative into a product experience that feels serious from first impression to release."
              : "دعنا نحول مبادرتك القادمة على الويب أو الموبايل أو المنصة إلى تجربة منتج تبدو احترافية من أول انطباع وحتى الإطلاق."
          }
          primaryLabel={dictionary.common.startConversation}
          primaryHref={withLocale(locale, "/contact")}
          secondaryLabel={dictionary.common.viewAll}
          secondaryHref={withLocale(locale, "/services")}
        />
      </div>
    </div>
  );
}
