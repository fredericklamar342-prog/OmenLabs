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
    <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between py-16 mb-20 border-b border-white/5 relative">
      <div className="flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <div className="w-1.5 h-6 bg-primary shadow-[0_0_15px_#43B6D5]" />
          <span className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/60 italic">Session_Active: Active_Protocol_Intelligence</span>
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85] italic">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-body max-w-2xl leading-relaxed italic opacity-60">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-4 relative z-10">{action}</div>}
    </div>
  );
}

