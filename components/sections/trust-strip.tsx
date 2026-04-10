import { localize } from "@/lib/i18n";
import type { Locale } from "@/types/content";

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
  signals: ReadonlyArray<Record<Locale, string>>;
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
          {signals.map((signal, index) => (
            <div
              key={signal.en}
              className="flex min-h-[11rem] items-center rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-7 text-lg leading-9 text-white/72 md:p-8"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {localize(signal, locale)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
