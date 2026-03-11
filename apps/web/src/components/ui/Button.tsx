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
    "bg-gradient-to-r from-[#2A8FA8] via-[#43B6D5] to-[#B3CDE0]",
    "bg-[length:200%_auto]",
    "text-white border-none",
    "shadow-[0_8px_20px_rgba(43,92,146,0.25)]",
    "hover:bg-[position:right_center]",
    "hover:scale-[1.03]",
    "hover:shadow-[0_12px_30px_rgba(43,92,146,0.35)]",
    "active:scale-100 active:shadow-[0_8px_20px_rgba(43,92,146,0.25)]",
  ].join(" "),

  secondary: [
    "bg-white/62 backdrop-blur-[20px]",
    "text-[#2A8FA8]",
    "border border-white/85",
    "shadow-[0_4px_12px_rgba(11,18,32,0.05)]",
    "hover:-translate-y-[2px]",
    "hover:shadow-[0_8px_24px_rgba(43,92,146,0.15)] hover:border-white",
    "active:translate-y-0",
  ].join(" "),

  link: "bg-transparent text-[#43B6D5] hover:text-[#2A8FA8] p-0 h-auto",
};

const sizes = {
  default: "h-12 px-8 text-sm font-semibold rounded-full",
  sm:      "h-10 px-6 text-xs font-semibold rounded-full",
  lg:      "h-14 px-10 text-base font-semibold rounded-full",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap",
          "transition-all duration-150 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43B6D5]/40 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-40",
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
