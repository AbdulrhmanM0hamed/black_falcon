import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { localize, withLocale } from "@/lib/i18n";
import type { FaqItem, Locale } from "@/types/content";

import { SectionHeading } from "@/components/common/section-heading";

export function FaqPreviewSection({
  locale,
  items,
  eyebrow,
  title,
  description,
  ctaLabel,
}: {
  locale: Locale;
  items: FaqItem[];
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <Button asChild variant="secondary">
            <Link href={withLocale(locale, "/faq")}>{ctaLabel}</Link>
          </Button>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{localize(item.question, locale)}</AccordionTrigger>
              <AccordionContent>{localize(item.answer, locale)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
