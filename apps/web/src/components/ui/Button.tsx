import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "link";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

const variants = {
  primary: [
    "bg-primary",
    "text-background border-none",
    "shadow-[0_10px_30px_rgba(67,182,213,0.3)]",
    "hover:scale-[1.03] hover:bg-omen-accent",
    "hover:shadow-[0_15px_40px_rgba(67,182,213,0.5)]",
    "active:scale-95",
  ].join(" "),

  secondary: [
    "bg-white/5 backdrop-blur-3xl",
    "text-foreground font-black italic uppercase tracking-widest",
    "border border-white/10",
    "hover:bg-white/10 hover:border-primary/40",
    "hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
    "active:translate-y-0",
  ].join(" "),

  link: "bg-transparent text-primary hover:text-omen-accent px-0 h-auto font-black italic uppercase tracking-widest",
};

const sizes = {
  default: "h-14 px-10 text-[13px] font-black uppercase tracking-[0.2em] rounded-2xl",
  sm:      "h-12 px-8 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl",
  lg:      "h-20 px-14 text-[16px] font-black uppercase tracking-[0.3em] rounded-3xl",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap",
          "transition-all duration-300 var(--ease-premium)",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          "disabled:pointer-events-none disabled:opacity-30",
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {isLoading && (
              <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />
            )}
            {children}
          </>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };

