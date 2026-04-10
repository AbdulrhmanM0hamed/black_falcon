import Image from "next/image";
import Link from "next/link";

import { siteSettings } from "@/data/site";
import { localize, withLocale } from "@/lib/i18n";
import type { Dictionary } from "@/messages/en";
import type { Locale, Service } from "@/types/content";

export function SiteFooter({
  locale,
  dictionary,
  services,
}: {
  locale: Locale;
  dictionary: Dictionary["footer"];
  services: Service[];
}) {
  const quickLinks = [
    { href: withLocale(locale), label: locale === "en" ? "Home" : "الرئيسية" },
    { href: withLocale(locale, "/about"), label: locale === "en" ? "About" : "من نحن" },
    { href: withLocale(locale, "/projects"), label: locale === "en" ? "Projects" : "المشاريع" },
    { href: withLocale(locale, "/contact"), label: locale === "en" ? "Contact" : "تواصل معنا" },
  ];

  const policyLinks = [
    {
      href: withLocale(locale, "/privacy-policy"),
      label: locale === "en" ? "Privacy Policy" : "سياسة الخصوصية",
    },
    {
      href: withLocale(locale, "/terms"),
      label: locale === "en" ? "Terms & Conditions" : "الشروط والأحكام",
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/35">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div className="space-y-5">
          <Link href={withLocale(locale)} className="inline-flex">
            <Image
              src="/logo.svg"
              alt="Black Falcon"
              width={270}
              height={74}
              className="h-14 w-auto object-contain md:h-16"
            />
          </Link>
          <h3 className="max-w-sm text-2xl font-semibold leading-[1.24] tracking-tight text-white">
            {dictionary.title}
          </h3>
          <p className="max-w-md text-sm leading-7 text-white/62">
            {dictionary.description}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/68">
            {siteSettings.socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 transition-colors duration-300 hover:border-[#ffa240]/35 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-medium text-white">{dictionary.quickLinks}</div>
          <div className="space-y-3 text-sm text-white/62">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 text-sm font-medium text-white">{dictionary.services}</div>
          <div className="space-y-3 text-sm text-white/62">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={withLocale(locale, `/services/${service.slug}`)}
                className="block transition-colors duration-300 hover:text-white"
              >
                {localize(service.name, locale)}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-4 text-sm font-medium text-white">{dictionary.policies}</div>
            <div className="space-y-3 text-sm text-white/62">
              {policyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm font-medium text-white">{dictionary.contact}</div>
            <div className="space-y-2 text-sm text-white/62">
              <a href={`mailto:${siteSettings.email}`} className="block hover:text-white">
                {siteSettings.email}
              </a>
              <a
                href={siteSettings.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                {siteSettings.phone}
              </a>
              <div>{localize(siteSettings.address, locale)}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-white/48 md:px-10">
          {new Date().getFullYear()} {siteSettings.name}. {dictionary.copyright}
        </div>
      </div>
    </footer>
  );
}
