import { iconMap } from "@/lib/icons";
import { localize } from "@/lib/i18n";
import type { Locale, TrustSignal } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";

export function TrustStrip({
  locale,
  eyebrow,
  title,
  description,
  signals,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  signals: ReadonlyArray<TrustSignal>;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {signals.map((signal, index) => {
            const Icon = iconMap[signal.iconKey];
            return (
              <div
                key={signal.en}
                className="flex flex-col gap-5 rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:min-h-[12rem] md:p-8"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="inline-flex w-fit rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                  <Icon className="h-5 w-5 text-[#ffb45e]" />
                </div>
                <div className="text-[1.05rem] leading-8 text-white/72">
                  {localize(signal, locale)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
