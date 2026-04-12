"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { LanguageSwitcher } from "@/components/common/language-switcher";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site";
import { withLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/messages/en";
import type { Locale } from "@/types/content";

interface NavItem {
  href: string;
  label: string;
}

export function SiteHeader({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary["nav"];
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { href: withLocale(locale), label: dictionary.home },
    { href: withLocale(locale, "/about"), label: dictionary.about },
    { href: withLocale(locale, "/services"), label: dictionary.services },
    { href: withLocale(locale, "/projects"), label: dictionary.projects },
    { href: withLocale(locale, "/faq"), label: dictionary.faq },
    { href: withLocale(locale, "/contact"), label: dictionary.contact },
  ];

  const whatsappLabel = locale === "en" ? "WhatsApp Contact" : "تواصل واتساب";

  const syncScrollState = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 16);
  });

  useEffect(() => {
    const handleScroll = () => syncScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function isNavItemActive(href: string) {
    const homeHref = withLocale(locale);

    if (href === homeHref) {
      return pathname === homeHref;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <motion.div
        animate={{
          backdropFilter: isScrolled ? "blur(18px)" : "blur(0px)",
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.72)" : "rgba(10, 10, 10, 0.18)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.08)",
        }}
        transition={{ duration: 0.3 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 md:px-6"
      >
        <Link href={withLocale(locale)} className="group relative flex items-center transition-all active:scale-95 pl-1 pr-3 py-1 lg:p-0">
          <div className="absolute inset-y-[-8px] inset-x-[-12px] rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(255,255,255,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:opacity-100" />
          <div className="absolute left-1/2 top-1/2 h-[140%] w-[200%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffa240]/10 blur-[40px] pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-[20px] pointer-events-none" />
          <Image
            src="/logo.svg"
            alt="Black Falcon"
            width={258}
            height={70}
            priority
            className="h-10 w-auto object-contain sm:h-12 md:h-14 relative z-10"
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const isActive = isNavItemActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/6 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={dictionary.switchLabel} />
          <Button asChild>
            <a href={siteSettings.whatsapp} target="_blank" rel="noreferrer">
              {whatsappLabel}
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-label={dictionary.menu}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-[#0d0d0d]/96 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = isNavItemActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-base transition-colors duration-300",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/68 hover:bg-white/6 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <LanguageSwitcher
                locale={locale}
                label={dictionary.switchLabel}
                onClick={() => setIsOpen(false)}
              />
              <Button asChild>
                <a
                  href={siteSettings.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  {whatsappLabel}
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
