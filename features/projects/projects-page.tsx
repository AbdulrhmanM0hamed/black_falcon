import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { siteSettings } from "@/data/site";
import type { Dictionary } from "@/messages/en";
import type { Locale, Project, Service } from "@/types/content";

import { ProjectsExplorer } from "./projects-explorer";

export function ProjectsPage({
  locale,
  dictionary,
  projects,
  services,
}: {
  locale: Locale;
  dictionary: Dictionary;
  projects: Project[];
  services: Service[];
}) {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow={dictionary.projectsPage.hero.eyebrow}
        title={dictionary.projectsPage.hero.title}
        description={
          locale === "en"
            ? "Browse the portfolio with a cleaner experience focused on service type and real delivery depth."
            : "استعرض الأعمال بتجربة أوضح تركّز على الخدمة ونضج التنفيذ داخل كل مشروع."
        }
        metrics={[
          {
            value: String(projects.length),
            label: locale === "en" ? "case studies" : "دراسات حالة",
          },
          {
            value: "1",
            label: locale === "en" ? "service filter" : "فلترة بالخدمة",
          },
          {
            value: "Premium",
            label: locale === "en" ? "portfolio presentation" : "عرض احترافي للأعمال",
          },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <ProjectsExplorer
          locale={locale}
          projects={projects}
          services={services}
          dictionary={dictionary.projectsPage}
          common={dictionary.common}
        />
      </section>

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={locale === "en" ? "Portfolio to roadmap" : "من الأعمال إلى خارطة الطريق"}
          title={
            locale === "en"
              ? "If you see a direction that fits, let’s shape the next version for your company."
              : "إذا وجدت اتجاهًا يناسبك، فلنشكّل نسخته المناسبة لشركتك."
          }
          description={
            locale === "en"
              ? "We can adapt the strategy, experience model, and technical execution to your product goals, audience, and internal workflow."
              : "يمكننا تكييف الاستراتيجية ونموذج التجربة والتنفيذ التقني مع أهداف منتجك وجمهوره وآلية العمل الداخلية لديك."
          }
          primaryLabel={dictionary.common.whatsapp}
          primaryHref={siteSettings.whatsapp}
        />
      </div>
    </div>
  );
}
