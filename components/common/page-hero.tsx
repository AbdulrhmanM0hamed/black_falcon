import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

export interface HeroMetric {
  value: string;
  label: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  metrics = [],
  media,
  className,
  contentClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  metrics?: HeroMetric[];
  media?: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-12 md:pt-16", className)}>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 xl:grid-cols-[1.05fr_0.95fr]">
        <div className={cn("space-y-8", contentClassName)}>
          <Reveal>
            <Badge>{eyebrow}</Badge>
          </Reveal>
          <Reveal delay={0.05} className="space-y-6">
            <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.24] tracking-tight text-white md:text-[3.5rem] md:leading-[1.2] xl:text-[4.2rem] xl:leading-[1.16]">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              {description}
            </p>
          </Reveal>
          {actions ? <Reveal delay={0.1}>{actions}</Reveal> : null}
          {metrics.length ? (
            <Reveal delay={0.15} className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.65rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-7"
                >
                  <div className="text-3xl font-semibold text-white md:text-[2.2rem]">
                    {metric.value}
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-[0.28em] text-white/54">
                    {metric.label}
                  </div>
                </div>
              ))}
            </Reveal>
          ) : null}
        </div>
        {media ? <Reveal delay={0.12}>{media}</Reveal> : null}
      </div>
    </section>
  );
}
