import { localize } from "@/lib/i18n";
import type { Locale, SiteStats } from "@/types/content";

import { Reveal } from "./reveal";

export function StatCard({
  item,
  locale,
  delay = 0,
}: {
  item: SiteStats;
  locale: Locale;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
    >
      <div className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {item.value}
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.28em] text-[#ffd3a0]">
        {localize(item.label, locale)}
      </div>
      <p className="mt-4 text-sm leading-7 text-white/62">
        {localize(item.description, locale)}
      </p>
    </Reveal>
  );
}
