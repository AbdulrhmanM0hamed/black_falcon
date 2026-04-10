import type { Locale, SiteStats } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";
import { StatCard } from "@/components/common/stat-card";

export function StatsSection({
  locale,
  stats,
  eyebrow,
  title,
  description,
}: {
  locale: Locale;
  stats: SiteStats[];
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <StatCard key={item.label.en} item={item} locale={locale} delay={index * 0.05} />
        ))}
      </div>
    </section>
  );
}
