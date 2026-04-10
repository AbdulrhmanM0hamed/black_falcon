import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Reveal } from "./reveal";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export function CtaPanel({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Reveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,162,64,0.14),rgba(255,255,255,0.03))] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.28)] md:p-10">
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
            {eyebrow}
          </div>
          <h3 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.22] tracking-tight text-white md:text-4xl">
            {title}
          </h3>
          <p className="max-w-2xl text-base leading-8 text-white/68">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row xl:justify-end">
          <Button asChild>
            {isExternalHref(primaryHref) ? (
              <a href={primaryHref} target="_blank" rel="noreferrer">
                {primaryLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button asChild variant="secondary">
              {isExternalHref(secondaryHref) ? (
                <a href={secondaryHref} target="_blank" rel="noreferrer">
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              )}
            </Button>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
