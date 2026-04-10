"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleSwitcherPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

export function LanguageSwitcher({
  locale,
  label,
  onClick,
}: {
  locale: Locale;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "ar" : "en";

  return (
    <Link
      href={getLocaleSwitcherPath(pathname, targetLocale)}
      onClick={onClick}
      className={cn(
        "inline-flex h-11 items-center rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/78 backdrop-blur-sm transition-colors duration-300 hover:border-[#ffa240]/35 hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}
