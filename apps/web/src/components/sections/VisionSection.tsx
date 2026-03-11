"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function VisionSection() {
  return (
    <section className="py-48 md:py-64 bg-transparent flex flex-col items-center text-center px-4 relative z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <div className="flex flex-col items-center max-container relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
          <Lock className="w-16 h-16 text-primary relative z-10 drop-shadow-[0_0_20px_#43B6D5]" aria-hidden="true" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[7rem] lg:text-[8rem] font-black tracking-tighter max-w-7xl mb-16 text-foreground leading-[0.85] italic uppercase"
        >
          "Anyone_can_deploy. <br className="hidden md:block" />
          Not_everyone_should_hide."
        </motion.h2>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="h-px w-32 bg-primary mb-10 shadow-[0_0_20px_#43B6D5]" 
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[11px] font-black uppercase tracking-[1em] text-primary/40 italic"
        >
          SYSTEM_CORE: OMEN_PROMISE_v2
        </motion.p>
      </div>
    </section>
  );
}

