"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";
import { Github, Twitter } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-24 bg-background relative z-10 border-t border-[#49A5BD]/10 text-foreground">
      <div className="max-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
          <span className="text-[11px] font-bold tracking-widest text-[#49A5BD] uppercase mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Built on Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4 uppercase font-outfit">
            The Team Behind Omen
          </h2>
          <div className="h-[2px] w-16 bg-[#49A5BD] rounded-full" />
        </div>

        {/* Team Cards Container */}
        <div className="flex justify-center animate-fade-up stagger-1">
          {/* Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 border border-[#49A5BD]/30 flex flex-col items-center text-center max-w-[400px] w-full rounded-3xl"
          >
            {/* Avatar / Initials */}
            <div className="w-24 h-24 rounded-full bg-[#49A5BD] p-[1px] mb-6 shadow-lg shadow-[#49A5BD]/20">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center border-2 border-surface">
                <span className="text-3xl font-black text-[#49A5BD] uppercase font-outfit">OM</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-1 uppercase font-outfit">Founder Name</h3>
            <p className="text-[15px] text-body font-bold tracking-wide uppercase mb-6">
              Creator & Lead Builder
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/OmenLabsHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#49A5BD]/30 bg-surface/50 hover:bg-[#49A5BD] hover:text-white text-foreground transition-all duration-300 shadow-sm"
                aria-label="X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/omenprotocol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#49A5BD]/30 bg-surface/50 hover:bg-[#49A5BD] hover:text-white text-foreground transition-all duration-300 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#49A5BD]/10 w-full">
               <p className="text-[13px] text-body font-bold leading-relaxed flex items-center justify-center gap-1.5 flex-wrap">
                 Building the minimal, programmable trust layer for the Sui economy. Real identity. Real security.
               </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
