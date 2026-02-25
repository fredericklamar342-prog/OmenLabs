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
  primary: "bg-foreground text-background hover:bg-accent focus:ring-accent",
  secondary: "bg-background text-foreground border border-border hover:bg-gray-50 focus:ring-border",
  link: "bg-transparent text-accent hover:underline p-0 h-auto focus:ring-accent",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-xs",
  lg: "h-12 px-8 text-lg",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", isLoading, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
            variants[variant],
            variant !== "link" && sizes[size],
            className
          )}
          ref={ref}
          {...props}
        >
          {/* Slot expects exactly one child. If isLoading, we show the loading state on the child if possible, 
              or just render the child. Cloning with complex logic can break build/SSR. */}
          {props.children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="mr-2 h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />
        )}
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
