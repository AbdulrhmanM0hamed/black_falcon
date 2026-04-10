import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <Badge>{eyebrow}</Badge>
      <div className="space-y-4">
        <h2 className="text-balance text-3xl font-semibold leading-[1.28] tracking-tight text-white md:text-5xl md:leading-[1.22] xl:text-[3.65rem]">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-9 text-white/68 md:text-[1.15rem]">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
