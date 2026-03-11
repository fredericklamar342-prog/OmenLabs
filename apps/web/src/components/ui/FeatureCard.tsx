"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function FeatureCard({ title, subtitle, description, icon: Icon, delay = 0 }: FeatureCardProps) {
  return (
    <div
      className="group relative glass-card p-10 flex flex-col items-start overflow-hidden rounded-[40px] border border-white/5 hover:border-primary/20 bg-panel/20 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      style={{ animationDelay: `${delay * 1000}ms` }}
    >
      {/* Icon badge */}
      <div className="relative w-16 h-16 mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_20px_rgba(67,182,213,0.1)]">
        <Icon className="w-8 h-8 text-primary stroke-[1.5px] group-hover:rotate-6 transition-transform" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-5">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">
            {subtitle}
          </p>
          <h3 className="text-2xl font-black italic tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        <p className="text-lg font-medium text-body leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </div>
  );
}
