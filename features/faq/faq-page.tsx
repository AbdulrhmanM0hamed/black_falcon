import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CtaPanel } from "@/components/common/cta-panel";
import { PageHero } from "@/components/common/page-hero";
import { localize, withLocale } from "@/lib/i18n";
import { siteSettings } from "@/data/site";
import type { Dictionary } from "@/messages/en";
import type { FaqItem, Locale } from "@/types/content";

export function FaqPage({
  locale,
  dictionary,
  faqItems,
}: {
  locale: Locale;
  dictionary: Dictionary;
  faqItems: FaqItem[];
}) {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow={dictionary.faqPage.hero.eyebrow}
        title={dictionary.faqPage.hero.title}
        description={dictionary.faqPage.hero.description}
        actions={
          <Button asChild>
            <a href={siteSettings.whatsapp} target="_blank" rel="noopener noreferrer">
              {dictionary.common.startConversation}
            </a>
          </Button>
        }
        media={
          <div className="relative min-h-[300px] w-full md:min-h-[400px] xl:h-full xl:self-start xl:-mt-10 xl:translate-x-[-1rem]">
            <Image
              src="/faq.svg"
              alt="FAQ page visual"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
          </div>
        }
      />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{localize(item.question, locale)}</AccordionTrigger>
              <AccordionContent>{localize(item.answer, locale)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <CtaPanel
          eyebrow={locale === "en" ? "Still have a question?" : "لا يزال لديك سؤال؟"}
          title={
            locale === "en"
              ? "The fastest way to get a precise answer is to tell us about your product."
              : "أسرع طريقة للحصول على إجابة دقيقة هي أن تخبرنا عن منتجك."
          }
          description={
            locale === "en"
              ? "We can usually point you toward the right service mix, expected delivery rhythm, and technical direction quickly."
              : "يمكننا غالباً توجيهك سريعاً إلى مزيج الخدمات المناسب وإيقاع التنفيذ المتوقع والاتجاه التقني الملائم."
          }
          primaryLabel={dictionary.common.startConversation}
          primaryHref={siteSettings.whatsapp}
        />
      </div>
    </div>
  );
}
