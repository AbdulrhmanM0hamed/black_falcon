import { localize } from "@/lib/i18n";
import type { Locale, ProcessStep } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";

export function ProcessSection({
  locale,
  steps,
  eyebrow,
  title,
  description,
}: {
  locale: Locale;
  steps: ProcessStep[];
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
      <div className="mt-12 grid gap-6 xl:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title.en}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:min-h-[18rem] md:p-8"
          >
            <div className="text-base uppercase tracking-[0.28em] text-[#ffd3a0]">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-2xl font-semibold leading-[1.24] text-white">
              {localize(step.title, locale)}
            </h3>
            <p className="mt-4 text-base leading-8 text-white/64">
              {localize(step.description, locale)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
