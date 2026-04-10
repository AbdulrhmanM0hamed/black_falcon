import { iconMap } from "@/lib/icons";
import { localize } from "@/lib/i18n";
import type { Dictionary } from "@/messages/en";
import type { ContactMethod, Locale, Service } from "@/types/content";

import { ContactForm } from "@/components/common/contact-form";
import { SectionHeading } from "@/components/common/section-heading";

export function ContactPreviewSection({
  locale,
  services,
  eyebrow,
  title,
  description,
  formDictionary,
  contactMethods,
}: {
  locale: Locale;
  services: Service[];
  eyebrow: string;
  title: string;
  description: string;
  formDictionary: Dictionary["form"];
  contactMethods: ContactMethod[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className="space-y-4">
            {contactMethods.map((method) => {
              const Icon = iconMap[method.iconKey];

              return (
                <a
                  key={method.title.en}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-[#ffa240]/30"
                >
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-3">
                    <Icon className="h-5 w-5 text-[#ffb45e]" />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {localize(method.title, locale)}
                    </div>
                    <div className="mt-1 text-sm text-white/50">{method.value}</div>
                    <p className="mt-2 text-sm leading-7 text-white/62">
                      {localize(method.description, locale)}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <ContactForm
          locale={locale}
          dictionary={formDictionary}
          services={services}
        />
      </div>
    </section>
  );
}
