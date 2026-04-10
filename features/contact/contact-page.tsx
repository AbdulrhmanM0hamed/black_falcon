import Image from "next/image";
import { PageHero } from "@/components/common/page-hero";
import { ContactPreviewSection } from "@/components/sections/contact-preview-section";
import type { Dictionary } from "@/messages/en";
import type { ContactMethod, Locale, Service } from "@/types/content";

export function ContactPage({
  locale,
  dictionary,
  services,
  contactMethods,
}: {
  locale: Locale;
  dictionary: Dictionary;
  services: Service[];
  contactMethods: ContactMethod[];
}) {
  return (
    <div className="pb-20">
      <PageHero
        eyebrow={dictionary.contactPage.hero.eyebrow}
        title={dictionary.contactPage.hero.title}
        description={dictionary.contactPage.hero.description}
        metrics={[
          {
            value: "WhatsApp",
            label: locale === "en" ? "fastest contact route" : "أسرع وسيلة تواصل",
          },
          {
            value: "Frontend-ready",
            label: locale === "en" ? "form architecture" : "بنية نموذج جاهزة",
          },
          {
            value: "Bilingual",
            label: locale === "en" ? "native experience" : "تجربة ثنائية اللغة",
          },
        ]}
        media={
          <div className="relative min-h-[300px] w-full md:min-h-[400px] xl:h-full xl:self-start xl:-mt-10 xl:translate-x-[-1rem]">
            <Image
              src="/contact_us.svg"
              alt="Contact Black Falcon visual"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 50vw"
            />
          </div>
        }
      />

      <ContactPreviewSection
        locale={locale}
        services={services}
        eyebrow={dictionary.contactPage.detailsTitle}
        title={dictionary.contactPage.formTitle}
        description={dictionary.contactPage.formDescription}
        formDictionary={dictionary.form}
        contactMethods={contactMethods}
      />
    </div>
  );
}
