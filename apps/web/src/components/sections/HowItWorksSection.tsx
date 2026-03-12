"use client";

import { motion } from "framer-motion";
import { UserCheck01, Activity, ShieldTick, CpuChip01 } from "@untitled-ui/icons-react";

const steps = [
  {
    title: "Identity Layer",
    description: "Developers create an OmenBadge using zkLogin to link Web2 reputation to on-chain identity.",
    icon: UserCheck01,
    tag: "Step 01",
    color: "emerald"
  },
  {
    title: "Reputation Engine",
    description: "Security tools and ecosystem signals update builder trust scores with real-time data.",
    icon: Activity,
    tag: "Step 02",
    color: "blue"
  },
  {
    title: "Transaction Protection",
    description: "Wallets and applications can block risky protocols using verified trust scores.",
    icon: ShieldTick,
    tag: "Step 03",
    color: "amber"
  },
  {
    title: "Agent Accountability",
    description: "AI agents inherit the reputation of their creators through an agent lineage graph.",
    icon: CpuChip01,
    tag: "Step 04",
    color: "purple"
  },
];

const colorMap = {
  emerald: {
    border: "border-emerald-500/20",
    glow: "bg-emerald-500/5",
    text: "text-emerald-500"
  },
  blue: {
    border: "border-blue-500/20",
    glow: "bg-blue-500/5",
    text: "text-blue-500"
  },
  amber: {
    border: "border-amber-500/20",
    glow: "bg-amber-500/5",
    text: "text-amber-500"
  },
  purple: {
    border: "border-purple-500/20",
    glow: "bg-purple-500/5",
    text: "text-purple-500"
  }
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 md:py-64 relative overflow-hidden bg-transparent" aria-labelledby="how-it-works-title">
      <div className="max-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-32 animate-fade-up">
          <span className="text-[11px] font-black tracking-[0.4em] text-[#43B6D5] uppercase mb-6 inline-block">
            The Protocol
          </span>
          <h2 id="how-it-works-title" className="text-5xl md:text-7xl font-black tracking-tighter text-[#0B1220] uppercase leading-[0.9] font-outfit">
            How Omen Works
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent hidden lg:block -translate-x-1/2" />

          <div className="space-y-24 lg:space-y-48">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Step Marker on Timeline (Desktop) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-black/[0.05] shadow-sm z-20 hidden lg:flex items-center justify-center scale-150 transition-transform group-hover:scale-125">
                   <div className={`w-1.5 h-1.5 rounded-full ${colorMap[step.color as keyof typeof colorMap].text.replace('text', 'bg')}`} />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-[45%] group"
                >
                  <div className={`glass-card p-10 lg:p-14 relative overflow-hidden bg-white/40 border-black/[0.03] hover:border-black/[0.08] shadow-sm hover:shadow-2xl transition-all duration-700 rounded-[48px] ${colorMap[step.color as keyof typeof colorMap].border}`}>
                    
                    {/* Interior Glow Effect */}
                    <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] rounded-full -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${colorMap[step.color as keyof typeof colorMap].glow}`} />
                    <div className={`absolute bottom-0 left-0 w-48 h-48 blur-[80px] rounded-full -ml-24 -mb-24 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ${colorMap[step.color as keyof typeof colorMap].glow}`} />

                    <div className="relative z-10 space-y-8">
                       <div className="flex items-center justify-between">
                          <div className={`w-16 h-16 rounded-2xl bg-white border border-black/[0.03] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                             <step.icon className={`w-8 h-8 ${colorMap[step.color as keyof typeof colorMap].text}`} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] italic">{step.tag}</span>
                       </div>

                       <div className="space-y-4">
                          <h3 className="text-3xl font-black text-[#0B1220] tracking-tighter uppercase font-outfit leading-none">{step.title}</h3>
                          <p className="text-lg text-[#475569] leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                            {step.description}
                          </p>
                       </div>

                       {/* Technical Decoration snippet style */}
                       <div className="flex items-center gap-3 pt-4 opacity-40 group-hover:opacity-100 transition-all duration-700">
                          <div className="h-px w-8 bg-black/10" />
                          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#94A3B8]">Protocol_Standard_V1</span>
                       </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for the other side (Desktop) */}
                <div className="hidden lg:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
