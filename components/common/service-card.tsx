import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { localize, withLocale } from "@/lib/i18n";
import { serviceIconMap } from "@/lib/icons";
import type { Locale, Service } from "@/types/content";

import { Reveal } from "./reveal";

export function ServiceCard({
  service,
  locale,
  delay = 0,
}: {
  service: Service;
  locale: Locale;
  delay?: number;
}) {
  const Icon = serviceIconMap[service.iconKey];

  return (
    <Reveal delay={delay}>
      <Link
        href={withLocale(locale, `/services/${service.slug}`)}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_52px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1 md:min-h-[35rem]"
      >
        <div className="relative h-56 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgba(255,162,64,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] md:h-60">
          <Image
            src={service.image}
            alt={localize(service.name, locale)}
            fill
            className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.03] md:p-6"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.26))]" />
          <div className="absolute inset-x-6 bottom-5 flex items-center justify-between">
            <div className="rounded-2xl border border-white/12 bg-black/35 p-3 backdrop-blur-md">
              <Icon className="h-5 w-5 text-[#ffb45e]" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffd3a0]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
          <div className="space-y-3.5">
            <h3 className="text-2xl font-semibold leading-[1.22] tracking-tight text-white">
              {localize(service.name, locale)}
            </h3>
            <p className="min-h-[6rem] text-base leading-8 text-white/66">
              {localize(service.summary, locale)}
            </p>
          </div>
          <ul className="space-y-2.5 text-[15px] text-white/60">
            {localize(service.keyFeatures, locale)
              .slice(0, 2)
              .map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ffa240]" />
                  <span className="line-clamp-2 leading-7">{feature}</span>
                </li>
              ))}
          </ul>
        </div>
      </Link>
    </Reveal>
  );
}
