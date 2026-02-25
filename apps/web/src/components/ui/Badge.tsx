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
    default: "border-[#E6E8EB] text-[#6B7280] bg-[#FAFBFC]",
    verified: "border-[#10B981]/20 text-[#059669] bg-[#10B981]/10",
    watchlist: "border-[#F59E0B]/20 text-[#D97706] bg-[#F59E0B]/10",
    revoked: "bg-[#8B0000] text-white border-[#8B0000]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
