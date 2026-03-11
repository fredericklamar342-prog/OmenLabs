"use client";

import { motion } from "framer-motion";
import { Github, Twitter, ShieldCheck } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-40 bg-transparent relative z-10 border-t border-white/5">
      <div className="max-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black tracking-[0.6em] text-primary uppercase mb-6 flex items-center gap-3 italic"
          >
            <ShieldCheck className="w-4 h-4" /> Built_on_Trust
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-4 italic"
          >
            Core_Engineers
          </motion.h2>
          <div className="h-px w-24 bg-primary/30 mt-8" />
        </div>

        {/* Team Cards Container */}
        <div className="flex justify-center">
          {/* Founder Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative glass-card p-12 md:p-20 border border-white/5 flex flex-col items-center text-center max-w-[500px] w-full rounded-[48px] bg-panel/30 hover:bg-panel/50 transition-all duration-700 shadow-[0_0_80px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Avatar / Initials */}
            <div className="w-32 h-32 rounded-[32px] bg-white/5 p-[1px] mb-10 relative overflow-hidden group-hover:scale-110 transition-transform duration-700">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full h-full rounded-[32px] bg-[#060A0D] flex items-center justify-center border border-white/10 relative z-10">
                <span className="text-5xl font-black text-primary italic">OM</span>
              </div>
            </div>

            <h3 className="text-4xl font-black text-foreground mb-3 group-hover:text-primary transition-colors italic uppercase tracking-tighter">Founder</h3>
            <p className="text-[11px] text-primary/40 font-black tracking-[0.4em] uppercase mb-10 italic">
              Creator & Lead_Architect
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-8">
              <a 
                href="https://x.com/OmenLabs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/3 hover:bg-primary hover:text-black hover:border-primary text-body/40 transition-all duration-500 shadow-xl"
                aria-label="X Profile"
              >
                <Twitter className="w-6 h-6 fill-current" />
              </a>
              <a 
                href="https://github.com/OmenLabs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/3 hover:bg-white hover:text-black hover:border-white text-body/40 transition-all duration-500 shadow-xl"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 fill-current" />
              </a>
            </div>
            
            <div className="mt-12 pt-10 border-t border-white/5 w-full">
               <p className="text-xl text-body leading-relaxed font-medium italic opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                 Building the minimal, programmable trust layer for the decentralized economy. Real identity. Real security.
               </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

