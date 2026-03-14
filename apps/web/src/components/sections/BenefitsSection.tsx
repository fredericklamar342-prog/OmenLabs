"use client";

import { motion } from "framer-motion";
import { UserCheck01, AlertCircle, CheckCircle, CpuChip01, ArrowUpRight, Zap, Target02, Shield02 } from "@untitled-ui/icons-react";

const benefits = [
  {
    title: "Deterministic Trust",
    description: "Eliminate social engineering. Omen links Web2 builder identities to Move-native reputation primitives for sub-second verification.",
    icon: UserCheck01,
    tag: "Protocol Core",
    metric: "0.4s Verification",
    bg: "bg-[#111418]"
  },
  {
    title: "Trust-Gated Liquidity",
    description: "Connect Omen to DeepBook V3 PTBs to gate pool access based on real-time reputation scores, protecting protocol capital.",
    icon: Zap,
    tag: "Defi Firewalls",
    metric: "DeepBook Ready",
    bg: "bg-[#151922]"
  },
  {
    title: "Soulbound Identity",
    description: "Developers earn permanent, immobile OmenBadges. Reputation accrues over time and cannot be transferred or traded.",
    icon: Shield02,
    tag: "Builder Sovereignty",
    metric: "zkLogin Native",
    bg: "bg-[#111418]"
  },
  {
    title: "Agent Accountability",
    description: "Cryptographic lineage ensures AI agents are never anonymous. Creator reputation is slashed programmatically for agent malfeasance.",
    icon: CpuChip01,
    tag: "Agentic Economy",
    metric: "Lineage Verified",
    bg: "bg-[#151922]"
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 md:py-32 xl:py-48 relative overflow-hidden bg-[#0B0C10] border-y border-white/5" aria-labelledby="benefits-title">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(73,165,189,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="max-container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24 animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
             <div className="h-px w-8 bg-[#49A5BD]" />
             <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">
               System Values
             </span>
          </div>
          <h2 id="benefits-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9] font-outfit mb-8">
            Why <span className="text-gradient">Omen</span> Exists
          </h2>
          <p className="text-lg md:text-xl text-body font-bold leading-relaxed max-w-2xl">
            In an era of anonymous liquidity and agentic automation, Omen provides the missing institutional trust layer for the global Sui economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col h-full border border-white/5 ${benefit.bg} rounded-[32px] p-8 md:p-10 hover:border-[#49A5BD]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 relative overflow-hidden`}
            >
              {/* Top Accent Icon */}
              <div className="w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-10 group-hover:bg-[#49A5BD] transition-all duration-500 shadow-lg">
                <benefit.icon className="w-7 h-7 text-[#49A5BD] group-hover:text-white transition-colors" />
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="text-[10px] font-mono font-black text-[#49A5BD] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                   <Target02 className="w-3.5 h-3.5" />
                   {benefit.tag}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 transition-colors uppercase tracking-tight font-outfit">
                  {benefit.title}
                </h3>
                
                <p className="text-[15px] sm:text-[16px] text-body leading-relaxed font-bold tracking-tight mb-8 group-hover:text-foreground/90 transition-colors">
                  {benefit.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[10px] font-mono font-black text-white/40 uppercase tracking-widest">{benefit.metric}</span>
                   <ArrowUpRight className="w-4 h-4 text-[#49A5BD] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

