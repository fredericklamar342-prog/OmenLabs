import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "verified" | "watchlist" | "revoked" | "default";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "border-primary/20 text-primary bg-primary/10 shadow-[0_0_15px_rgba(67,182,213,0.1)]",
    verified: "border-green-500/20 text-green-400 bg-green-500/5 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
    watchlist: "border-amber-500/20 text-amber-400 bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    revoked: "border-red-500/20 text-red-400 bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.1)]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest transition-all",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

