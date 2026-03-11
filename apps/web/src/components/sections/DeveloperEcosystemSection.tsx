"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Lightweight_On-Chain_Registry",
  "Immutable_Walrus_Blob_Anchoring",
  "Sub-Second_Verification_Lookups",
  "Hardened_SDK_Integration_Vector",
  "AI_Agent_Lineage_Accountability",
];

export function DeveloperEcosystemSection() {
  return (
    <section className="py-40 md:py-60 bg-transparent relative z-10 border-y border-white/5">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-32">
          
          {/* Title Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3 text-center lg:text-left space-y-8"
          >
            <span className="text-[11px] font-black tracking-[0.6em] text-primary uppercase italic mb-4 block">
              DEV_FORCE_STACK
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85] italic">
              Built_for_the <br className="hidden lg:block" />Sui_Ecosystem.
            </h2>
            <div className="h-px w-24 bg-primary/30 mt-8 hidden lg:block" />
          </motion.div>

          {/* Points List */}
          <div className="lg:w-2/3 w-full">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-6 p-8 glass-card border border-white/5 rounded-[40px] bg-panel/30 hover:border-primary/20 hover:bg-panel/50 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] group backdrop-blur-3xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-primary/20 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-primary drop-shadow-[0_0_10px_#43B6D5]" />
                  </div>
                  <span className="text-xl font-black text-foreground italic uppercase tracking-tighter opacity-100">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

