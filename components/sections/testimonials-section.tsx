import type { Locale, Testimonial } from "@/types/content";
import { localize } from "@/lib/i18n";

import { SectionHeading } from "@/components/common/section-heading";

export function TestimonialsSection({
  locale,
  testimonials,
  eyebrow,
  title,
  description,
}: {
  locale: Locale;
  testimonials: Testimonial[];
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
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
          >
            <p className="text-lg leading-8 text-white/78">
              “{localize(testimonial.quote, locale)}”
            </p>
            <div className="mt-6">
              <div className="font-medium text-white">{testimonial.name}</div>
              <div className="mt-1 text-sm text-white/50">
                {localize(testimonial.role, locale)} · {testimonial.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
