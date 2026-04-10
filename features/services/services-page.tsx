import Link from "next/link";

import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { Button } from "@/components/ui/button";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesShowcaseSection } from "@/components/sections/services-showcase-section";
import { withLocale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/en";
import type { Locale, ProcessStep, Service } from "@/types/content";

export function ServicesPage({
  locale,
  dictionary,
  services,
  process,
}: {
  locale: Locale;
  dictionary: Dictionary;
  services: Service[];
  process: ProcessStep[];
}) {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow={dictionary.servicesPage.hero.eyebrow}
        title={dictionary.servicesPage.hero.title}
        description={dictionary.servicesPage.hero.description}
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
        metrics={[
          {
            value: "6",
            label: locale === "en" ? "specialized services" : "خدمات متخصصة",
          },
          {
            value: "API-ready",
            label: locale === "en" ? "frontend architecture" : "هيكل واجهة جاهز",
          },
          {
            value: "Premium",
            label: locale === "en" ? "delivery standard" : "معيار تنفيذ راقٍ",
          },
        ]}
      />

      <ServicesShowcaseSection
        locale={locale}
        services={services}
        eyebrow={locale === "en" ? "What we deliver" : "ما الذي نقدمه"}
        title={locale === "en" ? "Each service is designed to support real commercial outcomes" : "كل خدمة مصممة لدعم نتائج تجارية حقيقية"}
        description={
          locale === "en"
            ? "These capabilities are intentionally complementary, allowing us to shape stronger product experiences across planning, design, build, validation, and launch."
            : "هذه القدرات متكاملة عمداً حتى نتمكن من تشكيل تجارب منتج أقوى عبر التخطيط والتصميم والبناء والتحقق والإطلاق."
        }
        ctaLabel={dictionary.common.discussProject}
      />

      <ProcessSection
        locale={locale}
        steps={process}
        eyebrow={locale === "en" ? "How we work" : "كيف نعمل"}
        title={locale === "en" ? "Our services plug into one coordinated delivery rhythm" : "خدماتنا تعمل ضمن إيقاع تنفيذ منسق واحد"}
        description={
          locale === "en"
            ? "This structure helps reduce handoff friction and keeps strategy, design, code quality, and launch preparation aligned."
            : "يساعد هذا الهيكل على تقليل الاحتكاك بين مراحل التسليم ويحافظ على اتساق الاستراتيجية والتصميم وجودة الكود وتجهيز الإطلاق."
        }
      />

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={locale === "en" ? "Choose the right service mix" : "اختر مزيج الخدمات المناسب"}
          title={
            locale === "en"
              ? "Need one capability or a full product partner?"
              : "تحتاج خدمة واحدة أم شريك منتج كامل؟"
          }
          description={
            locale === "en"
              ? "We can support a focused scope or build a coordinated path across design, engineering, QA, and operations."
              : "يمكننا دعم نطاق محدد أو بناء مسار متكامل يجمع بين التصميم والهندسة والجودة والتشغيل."
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
