import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { localize, withLocale } from "@/lib/i18n";
import type { LegalSection, Locale } from "@/types/content";

export function LegalPage({
  locale,
  eyebrow,
  title,
  description,
  sections,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <div className="pb-20">
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="mx-auto max-w-5xl space-y-6 px-6 py-20 md:px-10">
        {sections.map((section) => (
          <div
            key={section.title.en}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-white">
              {localize(section.title, locale)}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-white/64">
              {localize(section.body, locale).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={locale === "en" ? "Need clarification?" : "تحتاج توضيحاً؟"}
          title={
            locale === "en"
              ? "If you have questions about website use or inquiry handling, contact us directly."
              : "إذا كان لديك سؤال حول استخدام الموقع أو التعامل مع الاستفسارات، تواصل معنا مباشرة."
          }
          description={
            locale === "en"
              ? "We can explain how the current frontend experience is structured and how future backend integration can extend it."
              : "يمكننا توضيح هيكل التجربة الحالية على الواجهة وكيف يمكن للربط الخلفي لاحقاً أن يوسّعها."
          }
          primaryLabel={locale === "en" ? "Contact Black Falcon" : "تواصل مع بلاك فالكون"}
          primaryHref={withLocale(locale, "/contact")}
        />
      </div>
    </div>
  );
}
