"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const params = useParams<{ locale: string }>();
  const isArabic = params?.locale === "ar";

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-24 text-center md:px-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-sm">
        <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
          Black Falcon
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white">
          {isArabic
            ? "هذا المسار غير موجود ضمن تجربة بلاك فالكون."
            : "This route does not exist in the Black Falcon experience."}
        </h1>
        <p className="mt-4 text-base leading-8 text-white/64">
          {isArabic
            ? "قد تكون الصفحة نُقلت أو الرابط غير مكتمل أو أن هذا المسار لم يتم نشره."
            : "The page may have moved, the link may be incomplete, or the route was never published."}
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href={`/${params?.locale ?? "en"}`}>
              {isArabic ? "العودة إلى الصفحة الرئيسية" : "Return to the homepage"}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
