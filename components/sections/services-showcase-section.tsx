import Link from "next/link";

import { Button } from "@/components/ui/button";
import { withLocale } from "@/lib/i18n";
import type { Locale, Service } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";
import { ServiceCard } from "@/components/common/service-card";

export function ServicesShowcaseSection({
  locale,
  services,
  eyebrow,
  title,
  description,
  ctaLabel,
}: {
  locale: Locale;
  services: Service[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="max-w-3xl"
        />
        <Button asChild variant="secondary">
          <Link href={withLocale(locale, "/services")}>{ctaLabel}</Link>
        </Button>
      </div>
      <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            locale={locale}
            delay={index * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
