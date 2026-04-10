import { localize } from "@/lib/i18n";
import type { Locale, TechnologyGroup } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";

export function TechnologiesSection({
  locale,
  groups,
  eyebrow,
  title,
  description,
}: {
  locale: Locale;
  groups: TechnologyGroup[];
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
      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title.en}
            className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:min-h-[18rem] md:p-9"
          >
            <div className="text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
              {localize(group.title, locale)}
            </div>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/66">
              {localize(group.description, locale)}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2.5 text-[15px] text-white/78"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
