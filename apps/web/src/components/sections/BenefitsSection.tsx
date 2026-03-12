"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Users, ShieldAlert, BadgeCheck, Network } from "lucide-react";

const benefits = [
  {
    title: "Know Who Built a Protocol",
    description: "Omen links developer reputation to on-chain identities so users can verify the builders behind any protocol.",
    icon: Users,
    tag: "Transparency"
  },
  {
    title: "Stop Risky Transactions",
    description: "Wallets and apps can check a protocol’s trust score before executing transactions, preventing interaction with malicious code.",
    icon: ShieldAlert,
    tag: "Security"
  },
  {
    title: "Build Verifiable Reputation",
    description: "Developers receive a permanent soulbound identity badge proving their credibility across the entire Sui ecosystem.",
    icon: BadgeCheck,
    tag: "Identity"
  },
  {
    title: "Accountable AI Agents",
    description: "Autonomous agents inherit the reputation of their creators to prevent anonymous algorithmic attacks.",
    icon: Network,
    tag: "Agentic Economy"
  },
];

export function BenefitsSection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden bg-white/30 backdrop-blur-sm border-y border-black/[0.03]" aria-labelledby="benefits-title">
      <div className="max-container">
        <div className="flex flex-col items-center text-center mb-24 animate-fade-up">
          <span className="text-[10px] font-black tracking-[0.2em] text-[#43B6D5] uppercase mb-6">
            The Value Layer
          </span>
          <h2 id="benefits-title" className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B1220]">
            Why Omen Exists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-8 group flex flex-col h-full bg-white/40 border-white"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#43B6D5]/10 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-[#43B6D5]" />
              </div>
              <div className="text-[10px] font-bold text-[#43B6D5] uppercase tracking-wider mb-3">
                {benefit.tag}
              </div>
              <h3 className="text-xl font-bold text-[#0B1220] mb-4 group-hover:text-[#43B6D5] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
