import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-lg font-medium text-foreground italic transition-all duration-300",
          "placeholder:text-body/30 placeholder:italic",
          "focus-visible:outline-none focus:border-primary/40 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(67,182,213,0.1)]",
          error && "border-red-500/40 bg-red-500/5 text-red-400 placeholder:text-red-400/30",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

