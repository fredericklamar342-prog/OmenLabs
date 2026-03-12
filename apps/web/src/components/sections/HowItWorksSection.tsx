"use client";

import { motion } from "framer-motion";
import { Shield, Search, CheckCircle2, Network, UserCheck } from "lucide-react";

const steps = [
  {
    title: "Identity Layer",
    description: "Developers create an OmenBadge using zkLogin to link Web2 reputation to on-chain identity.",
    icon: UserCheck,
    tag: "Step 01"
  },
  {
    title: "Reputation Engine",
    description: "Security tools and ecosystem signals update builder trust scores with real-time data.",
    icon: Search,
    tag: "Step 02"
  },
  {
    title: "Transaction Protection",
    description: "Wallets and applications can block risky protocols using verified trust scores.",
    icon: CheckCircle2,
    tag: "Step 03"
  },
  {
    title: "Agent Accountability",
    description: "AI agents inherit the reputation of their creators through an agent lineage graph.",
    icon: Network,
    tag: "Step 04"
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-transparent" aria-labelledby="how-it-works-title">
      <div className="max-container flex flex-col items-center relative z-10">
        <div className="text-center mb-24 animate-fade-up">
          <span className="text-[10px] font-black tracking-[0.2em] text-[#43B6D5] uppercase mb-6 inline-block">
            The Protocol
          </span>
          <h2 id="how-it-works-title" className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B1220]">
            How Omen Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative w-full">
          {/* Connecting line for desktop */}
          <div className="absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent hidden lg:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-[32px] bg-white border border-black/5 shadow-sm flex items-center justify-center mb-10 relative z-10 group-hover:border-[#43B6D5]/20 group-hover:shadow-lg transition-all duration-300">
                <step.icon className="w-8 h-8 text-[#43B6D5]" />
              </div>
              <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-4">
                {step.tag}
              </div>
              <h3 className="text-2xl font-bold text-[#0B1220] mb-4 group-hover:text-[#43B6D5] transition-colors">{step.title}</h3>
              <p className="text-[#475569] leading-relaxed font-medium px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
