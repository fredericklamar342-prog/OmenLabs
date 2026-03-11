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
      {/* subtle grid texture - darkened */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      
      {/* glows - cyber aesthetic */}
      <div className="absolute -top-60 left-1/4 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[150px] opacity-30" />
      <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] opacity-20" />
    </div>
  );
}

