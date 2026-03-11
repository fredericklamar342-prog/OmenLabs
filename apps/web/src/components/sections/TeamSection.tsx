"use client";

import { motion } from "framer-motion";
import { Github, Twitter, ShieldCheck } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-24 bg-transparent relative z-10 border-t border-[rgba(14,47,118,0.08)]">
      <div className="max-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-up">
          <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Built on Trust
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
            The Team Behind Omen
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#2A8FA8] to-[#B3CDE0] rounded-full" />
        </div>

        {/* Team Cards Container */}
        <div className="flex justify-center animate-fade-up stagger-1">
          {/* Founder Card */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="glass-card p-8 md:p-10 border border-[#43B6D5]/10 flex flex-col items-center text-center max-w-[400px] w-full rounded-3xl"
          >
            {/* Avatar / Initials */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2A8FA8] to-[#B3CDE0] p-[2px] mb-6">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-2 border-white">
                <span className="text-3xl font-bold font-plus-jakarta text-[#43B6D5]">OM</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#0B1220] mb-1">Founder Name</h3>
            <p className="text-[15px] text-[#4A5568] font-medium tracking-wide uppercase mb-6">
              Creator & Lead Builder
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/OmenLabsHQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#43B6D5]/20 bg-white/50 hover:bg-[#43B6D5] hover:text-white hover:border-[#43B6D5] text-[#4A5568] transition-all duration-300 shadow-sm"
                aria-label="X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/omenprotocol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-[#43B6D5]/20 bg-white/50 hover:bg-[#0B1220] hover:text-white hover:border-[#0B1220] text-[#4A5568] transition-all duration-300 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[rgba(14,47,118,0.1)] w-full">
               <p className="text-[13px] text-[#5B6B82] leading-relaxed">
                 Building the minimal, programmable trust layer for the Sui economy. Real identity. Real security.
               </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
