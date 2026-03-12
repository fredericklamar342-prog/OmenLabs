"use client";

import { motion } from "framer-motion";
import { UserCheck01, Zap, Database01, Activity } from "@untitled-ui/icons-react";

const pillars = [
  {
    title: "Identity",
    subtitle: "zkLogin connects real developer reputation",
    description: "Verified builder identities are linked securely to on-chain reputation objects.",
    icon: UserCheck01,
    tag: "zkLogin",
  },
  {
    title: "Execution",
    subtitle: "Move PTBs enforce trust checks",
    description: "Programmable Transaction Blocks ensure no code execution happens without a reputation audit.",
    icon: Zap,
    tag: "Move PTB",
  },
  {
    title: "Storage",
    subtitle: "Walrus stores audit data",
    description: "High-integrity security audits are stored with cryptographic proofs of existence.",
    icon: Database01,
    tag: "Walrus",
  },
  {
    title: "Liquidity",
    subtitle: "DeepBook integrations protect traders",
    description: "DEX protocols utilize reputation scores to protect capital from malicious actors.",
    icon: Activity,
    tag: "DeepBook",
  },
];

export function InfrastructureSection() {
  return (
    <section className="py-32 md:py-48 bg-[#F8FAFC]/50 relative z-10 overflow-hidden border-y border-black/[0.02]" aria-labelledby="infra-title">
      <div className="max-container flex flex-col items-center">
        
        <div className="text-center mb-24 animate-fade-up">
          <span className="text-[10px] font-black tracking-[0.2em] text-[#43B6D5] uppercase mb-6 inline-block">
            Ecosystem Integration
          </span>
          <h2 id="infra-title" className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B1220]">
            Built on the Sui Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 group hover:bg-white transition-all duration-500 border-white/40"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#43B6D5]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#43B6D5] transition-all duration-500">
                  <pillar.icon className="w-6 h-6 text-[#43B6D5] group-hover:text-white transition-colors" />
                </div>
                <div className="px-3 py-1 bg-white border border-black/5 rounded-full text-[10px] font-black text-[#94A3B8] group-hover:text-[#43B6D5] transition-colors">
                  {pillar.tag}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-[#0B1220] mb-2">{pillar.title}</h3>
              <div className="text-xs font-bold text-[#43B6D5] uppercase tracking-wide mb-6">{pillar.subtitle}</div>
              <p className="text-sm text-[#475569] leading-relaxed font-medium">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
