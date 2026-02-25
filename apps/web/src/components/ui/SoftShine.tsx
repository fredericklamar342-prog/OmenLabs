import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SoftShineProps {
  className?: string;
}

export function SoftShine({ className }: SoftShineProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(229,231,235,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(229,231,235,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      
      {/* glows */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white blur-3xl opacity-80" />
      <div className="absolute bottom-[-120px] right-[5%] h-[420px] w-[420px] rounded-full bg-white blur-3xl opacity-55" />
    </div>
  );
}
