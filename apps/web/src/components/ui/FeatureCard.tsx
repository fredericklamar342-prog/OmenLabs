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
      className="group relative glass-card p-8 flex flex-col items-start overflow-hidden rounded-[22px]"
      style={{ animationDelay: `${delay * 1000}ms` }}
    >
      {/* Icon badge */}
      <div className="relative w-14 h-14 mb-6 rounded-2xl bg-gradient-to-tr from-[#2A8FA8]/10 to-[#B3CDE0]/10 border border-[#2A8FA8]/20 flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:shadow-[0_8px_16px_rgba(12,20,70,0.15)] transition-all duration-150">
        <Icon className="w-6 h-6 text-[#43B6D5] stroke-[1.5px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3">
        <div className="space-y-1">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#43B6D5]">
            {subtitle}
          </p>
          <h3 className="text-xl font-bold tracking-tight text-[#0B1220] group-hover:text-[#43B6D5] transition-colors duration-150">
            {title}
          </h3>
        </div>

        <p className="text-base text-[#5B6B82] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
