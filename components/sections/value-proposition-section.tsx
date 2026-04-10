import { iconMap } from "@/lib/icons";
import { localize } from "@/lib/i18n";
import type { CompanyValue, Locale } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";

export function ValuePropositionSection({
  locale,
  eyebrow,
  title,
  description,
  values,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  values: CompanyValue[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {values.map((value) => {
          const Icon = iconMap[value.iconKey];

          return (
            <div
              key={value.title.en}
              className="rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:min-h-[18rem] md:p-8"
            >
              <div className="inline-flex rounded-2xl border border-white/10 bg-black/30 p-3.5">
                <Icon className="h-6 w-6 text-[#ffb45e]" />
              </div>
              <h3 className="mt-6 text-[1.65rem] font-semibold leading-[1.24] text-white">
                {localize(value.title, locale)}
              </h3>
              <p className="mt-4 text-base leading-8 text-white/64">
                {localize(value.description, locale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
