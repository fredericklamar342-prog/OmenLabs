import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { LoadingSpinner } from "./LoadingSpinner";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "link";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

const variants = {
  primary: [
    "bg-[#49A5BD]",
    "text-[#FFFFFF] border-none",
    "hover:opacity-90",
    "hover:scale-[1.03]",
    "active:scale-100",
  ].join(" "),

  secondary: [
    "bg-[#FFFFFF]",
    "text-[#49A5BD]",
    "border-2 border-[#49A5BD]",
    "hover:-translate-y-[2px]",
    "active:translate-y-0",
  ].join(" "),

  link: "bg-transparent text-[#49A5BD] hover:opacity-80 p-0 h-auto",
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
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49A5BD]/40 focus-visible:ring-offset-2",
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
              <LoadingSpinner 
                size={size === "lg" ? "md" : "sm"} 
                className="mr-3" 
              />
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
