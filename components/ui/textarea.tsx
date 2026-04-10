import * as React from "react";

import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-36 w-full rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/38 outline-none transition-colors duration-300 focus:border-[#ffa240]/55 focus:bg-white/8",
        className,
        )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
