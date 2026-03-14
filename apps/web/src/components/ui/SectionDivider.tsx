"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
  metadata?: string[];
  align?: "left" | "center" | "right";
}

export function SectionDivider({ label, metadata, align = "center" }: SectionDividerProps) {
  return (
    <div className={`w-full py-12 md:py-20 relative overflow-hidden bg-[#0B0C10] ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}>
      <div className="max-container px-6 relative z-10">
        <div className={`flex flex-col ${align === 'center' ? 'items-center' : align === 'right' ? 'items-end' : 'items-start'} gap-6`}>
          
          {/* Signal Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#49A5BD]/30 to-transparent relative">
            <motion.div 
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-32 h-full bg-gradient-to-r from-transparent via-[#49A5BD] to-transparent"
            />
          </div>

          {/* Metadata Cluster */}
          <div className="flex flex-wrap items-center gap-6 opacity-30">
            {label && (
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#49A5BD]">{label}</span>
            )}
            {metadata?.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#49A5BD]" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-body">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background visual depth */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #49A5BD 1px, transparent 0)', backgroundSize: '32px 32px' }} />
    </div>
  );
}
