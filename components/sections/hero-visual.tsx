import Image from "next/image";

export function HeroVisual({
  priority = false,
}: {
  priority?: boolean;
}) {
  return (
    <div className="relative min-h-[300px] w-full md:min-h-[450px] xl:h-full xl:self-start xl:-mt-12 xl:translate-x-[-2rem]">
      <Image
        src="/hero_header.svg"
        alt="Black Falcon hero visual"
        fill
        priority={priority}
        className="object-contain"
        sizes="(max-width: 1280px) 100vw, 50vw"
      />
    </div>
  );
}
