"use client";

import { motion } from "framer-motion";
import { UserCheck01, Activity, Users01, ShieldTick, Server06, ArrowRight } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

const primitives = [
  {
    id: "trust-score",
    title: "Programmable Trust Score",
    description: "A dynamic 0-100 verifiable reputation primitive. Synthesizes on-chain behavior, Walrus-stored audit histories, and AI risk evaluations into a single queryable integer.",
    icon: Activity,
    techLabel: "OmenRegistry::get_score",
    span: "lg:col-span-8",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(73,165,189,0.1),transparent_50%)]"
  },
  {
    id: "omen-badge",
    title: "Soulbound Identity",
    description: "Immobile Move objects linked to developer Web2 credentials via zkLogin.",
    icon: UserCheck01,
    techLabel: "OmenBadge::init",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_bottom_left,rgba(73,165,189,0.08),transparent_50%)]"
  },
  {
    id: "lineage-graph",
    title: "Agent Lineage Graph",
    description: "Cryptographically binds autonomous AI agents to their human parent founders. Agent malfeasance slashes the parent's global score.",
    icon: Users01,
    techLabel: "Lineage::verify_parent",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_top_left,rgba(73,165,189,0.08),transparent_50%)]"
  },
  {
    id: "audit-market",
    title: "Decentralized Audits",
    description: "Security researchers submit cryptographic proofs of vulnerabilites directly to the protocol. Validated reports permanently alter builder reputation.",
    icon: ShieldTick,
    techLabel: "Market::submit_proof",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_bottom_right,rgba(73,165,189,0.08),transparent_50%)]"
  },
  {
    id: "deepbook-router",
    title: "Pre-Trade Firewall",
    description: "Native integration with DeepBook V3. Gate liquidity pools, limit anomalous token swaps, and protect users from unverified smart contracts.",
    icon: Server06,
    techLabel: "OmenSafe::route",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_center,rgba(73,165,189,0.05),transparent_60%)]"
  }
];

export function ProtocolPrimitivesSection() {
  return (
    <section id="primitives" className="py-24 md:py-32 xl:py-40 relative overflow-hidden bg-background">
      <div className="max-container px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24 animate-fade-up">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="h-px w-8 bg-[#49A5BD]" />
               <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">
                 Core Architecture
               </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9] font-outfit">
              <span className="text-gradient">Protocol</span> Primitives
            </h2>
          </div>
          <p className="text-base sm:text-lg text-body max-w-sm font-bold leading-relaxed">
            Move-native infrastructure designed to embed institutional-grade accountability directly into the blockchain state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {primitives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex flex-col ${item.span} border border-[#49A5BD]/15 bg-surface/30 backdrop-blur-md rounded-[32px] p-8 md:p-10 lg:p-12 hover:border-[#49A5BD]/40 hover:bg-surface/50 hover:shadow-[0_0_40px_rgba(73,165,189,0.1)] transition-all duration-500 overflow-hidden relative min-h-[320px]`}
            >
              {/* Background gradient injection */}
              <div className={`absolute inset-0 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700 ${item.bgPattern}`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between mb-8">
                     <div className="w-14 h-14 rounded-2xl bg-surface border border-[#49A5BD]/20 flex items-center justify-center text-[#49A5BD] shadow-lg group-hover:bg-[#49A5BD] group-hover:text-white transition-colors duration-500">
                        <item.icon className="w-7 h-7" />
                     </div>
                     <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#49A5BD] italic opacity-60">
                        {item.techLabel}
                     </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-4 font-outfit uppercase tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-body font-bold leading-relaxed max-w-lg transition-colors group-hover:text-foreground/90">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                   <div className="w-10 h-10 rounded-full bg-transparent border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      <ArrowRight className="w-4 h-4 text-[#49A5BD]" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
