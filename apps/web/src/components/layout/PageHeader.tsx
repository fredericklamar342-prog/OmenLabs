"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between py-12 mb-12 border-b border-border relative">
      <div className="flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-1 h-4 bg-accent" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Active Protocol Intelligence</span>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight m-0 text-foreground leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="text-base text-subtext max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-4">{action}</div>}
    </div>
  );
}
