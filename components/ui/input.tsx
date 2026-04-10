import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/38 outline-none transition-colors duration-300 focus:border-[#ffa240]/55 focus:bg-white/8",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
