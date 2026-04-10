"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10">
            <div className="text-xs uppercase tracking-[0.28em] text-[#ffd3a0]">
              Black Falcon
            </div>
            <h1 className="mt-5 text-4xl font-semibold text-white">
              Something interrupted the experience.
            </h1>
            <p className="mt-4 text-base leading-8 text-white/64">
              The page hit an unexpected issue. Please retry and if it persists,
              contact Black Falcon directly.
            </p>
            <div className="mt-8">
              <Button onClick={() => unstable_retry()}>Try again</Button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
