import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa240]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#ffa240] px-6 py-3 text-neutral-950 shadow-[0_12px_40px_rgba(255,162,64,0.28)] hover:-translate-y-0.5 hover:bg-[#ffb35f]",
        secondary:
          "border border-white/15 bg-white/6 px-6 py-3 text-white hover:-translate-y-0.5 hover:border-[#ffa240]/40 hover:bg-white/10",
        ghost:
          "px-4 py-2 text-white/72 hover:bg-white/8 hover:text-white",
        outline:
          "border border-[#ffa240]/35 bg-transparent px-6 py-3 text-[#ffd3a0] hover:-translate-y-0.5 hover:border-[#ffa240]/70 hover:bg-[#ffa240]/10",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-3.5 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
