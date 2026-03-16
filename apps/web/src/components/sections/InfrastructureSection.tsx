"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Database, Network, Code2 } from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

const pillars = [
  {
    title: "Identity Layer",
    subtitle: "zkLogin + OmenBadge",
    description: "Benefit: Zero-friction authentication. Connect real-world developer reputation to the Sui ecosystem using zkLogin, anchored to permanent OmenBadge objects.",
    icon: GoogleIcon,
    tag: "Verified Auth",
  },
  {
    title: "Enforcement Layer",
    subtitle: "Move PTB Firewalls",
    description: "Benefit: Real-time risk mitigation. Utilized Move Programmable Transaction Blocks to enforce reputation gating and block malicious contract interaction.",
    icon: ShieldAlert,
    tag: "Move PTB Native",
  },
  {
    title: "Audit Storage",
    subtitle: "Walrus Protocol",
    description: "Benefit: Immutable security ledger. Store high-volume audit logs and AI behavior data on Walrus with cryptographic proofs remaining on-chain.",
    icon: Database,
    tag: "Blob Storage",
  },
  {
    title: "Ecosystem Utility",
    subtitle: "DeepBook Integration",
    description: "Benefit: Secured network liquidity. Protect trading execution by filtering participants based on institutional-grade trust scores via DeepBook V3.",
    icon: Network,
    tag: "Trust-Gated",
  },
];

export function InfrastructureSection() {
  return (
    <section className="py-24 md:py-32 xl:py-48 bg-[#0B0C10] relative z-10 overflow-hidden border-b border-white/5" aria-labelledby="infra-title">
      <div className="max-container px-4 sm:px-6">
        
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px w-8 bg-[#49A5BD]" />
                 <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">
                   Deep Integration
                 </span>
              </div>
              <h2 id="infra-title" className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9] font-outfit">
                Built on the <span className="text-gradient">Sui</span> Stack
              </h2>
           </div>
           <p className="text-lg text-body max-w-sm font-bold leading-relaxed mb-2">
             Omen is not a standalone app—it's a core trust primitive built natively into the DNA of the Sui network.
           </p>
        </div>

        {/* Unified Infrastructure Panel */}
        <div className="bg-[#111418] border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden group">
           {/* Internal background signal */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(73,165,189,0.05),transparent_60%)] pointer-events-none" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#151922] p-8 rounded-[32px] border border-white/5 hover:border-[#49A5BD]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col h-full"
                >
                  <div className="flex items-center mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#111418] border border-white/10 flex items-center justify-center text-[#49A5BD] group-hover:bg-[#49A5BD] group-hover:text-white transition-all duration-500 shadow-md">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight font-outfit">{pillar.title}</h3>
                  <div className="text-[10px] font-black text-[#49A5BD] uppercase tracking-[0.2em] mb-6 font-mono opacity-80">{pillar.subtitle}</div>
                  
                  <p className="text-sm text-body leading-relaxed font-bold tracking-tight mb-8">
                    {pillar.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 pt-6 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                     <Code2 className="w-3.5 h-3.5 text-[#49A5BD]" />
                     <span className="text-[9px] font-mono font-black uppercase text-body tracking-widest">Sui Mainnet Live</span>
                  </div>
                </motion.div>
              ))}
           </div>
           
           {/* Section Connector Decorative Line */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-[#49A5BD]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

