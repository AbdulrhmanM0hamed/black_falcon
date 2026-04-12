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
          <Link href={withLocale(locale)} className="group relative inline-flex items-center transition-all active:scale-95 pl-1 pr-3 py-1">
            <div className="absolute inset-y-[-8px] inset-x-[-12px] rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(255,255,255,0.15)] opacity-100 transition-opacity duration-500" />
            <div className="absolute left-1/2 top-1/2 h-[140%] w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffa240]/10 blur-[40px] pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-[20px] pointer-events-none" />
            <Image
              src="/logo.svg"
              alt="Black Falcon"
              width={270}
              height={74}
              className="h-14 w-auto object-contain md:h-16 relative z-10"
            />
          </Link>
          <h3 className="max-w-sm text-2xl font-semibold leading-[1.24] tracking-tight text-white">
            {dictionary.title}
          </h3>
          <p className="max-w-md text-sm leading-7 text-white/62">
            {dictionary.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { id: 'facebook', icon: '/icons/facebook.png', href: '#' },
              { id: 'linkedin', icon: '/icons/linkedin.png', href: siteSettings.socialLinks.find(s => s.label === 'LinkedIn')?.href || '#' },
              { id: 'instagram', icon: '/icons/instagram.png', href: '#' },
              { id: 'github', icon: '/icons/github.png', href: siteSettings.socialLinks.find(s => s.label === 'GitHub')?.href || '#' },
            ].map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:scale-110 hover:border-[#ffa240]/50 hover:bg-white/[0.08]"
              >
                <Image
                  src={social.icon}
                  alt={social.id}
                  width={24}
                  height={24}
                  className="h-5 w-5 object-contain opacity-70 transition-opacity group-hover:opacity-100"
                />
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
