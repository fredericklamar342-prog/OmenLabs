"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Fingerprint, 
  Network, 
  FileCheck, 
  Lock, 
  ArrowRight,
  Cpu,
  Zap,
  Activity
} from "lucide-react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import SuiIcon from "@/components/icons/SuiIcon";

const primitives = [
  {
    id: "trust-score",
    title: "Deterministic Trust",
    eyebrow: "REPUTATION_CORE",
    description: "Establish institutional-grade accountability via a verifiable reputation primitive that synthesizes on-chain behavior and Walrus-stored audit histories.",
    icon: Network,
    techLabel: "OmenRegistry::get_score",
    span: "lg:col-span-8",
    bgPattern: "bg-[radial-gradient(circle_at_top_right,rgba(73,165,189,0.1),transparent_50%)]"
  },
  {
    id: "omen-badge",
    title: "Soulbound Identity",
    eyebrow: "IDENTITY_PRIMITIVE",
    description: "Immobile Move objects linked to Web2 identities via zkLogin for cryptographically proven reputation that cannot be transferred or sold.",
    icon: GoogleIcon,
    techLabel: "OmenBadge::init",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_bottom_left,rgba(73,165,189,0.08),transparent_50%)]"
  },
  {
    id: "lineage-graph",
    title: "Agent Accountability",
    eyebrow: "AI_SECURITY",
    description: "Cryptographically binds AI agents to human founders, ensuring that agent malfeasance slashes the parent's global reputation score.",
    icon: Cpu,
    techLabel: "Lineage::verify_parent",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_top_left,rgba(73,165,189,0.08),transparent_50%)]"
  },
  {
    id: "audit-market",
    title: "Decentralized Audits",
    eyebrow: "SECURITY_LEDGER",
    description: "Professional researchers submit proofs of vulnerabilities directly to the protocol to adjust real-time trust rankings for every builder.",
    icon: FileCheck,
    techLabel: "Market::submit_proof",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_bottom_right,rgba(73,165,189,0.08),transparent_50%)]"
  },
  {
    id: "deepbook-router",
    title: "Trust-Gated Liquidity",
    eyebrow: "EXECUTION_LAYER",
    description: "Gate liquidity pools and protect users from high-risk or unverified smart contracts via native DeepBook V3 reputation enforcement.",
    icon: Lock,
    techLabel: "OmenSafe::route",
    span: "lg:col-span-4",
    bgPattern: "bg-[radial-gradient(circle_at_center,rgba(73,165,189,0.05),transparent_60%)]"
  }
];

export function ProtocolPrimitivesSection() {
  return (
    <section id="primitives" className="py-24 md:py-32 xl:py-40 relative overflow-hidden bg-background">
      <div className="max-container px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32 animate-fade-up">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          {primitives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${item.span} rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-10 overflow-hidden hover:border-[#49A5BD]/30 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 shadow-2xl min-h-[360px] flex flex-col justify-between`}
            >
              {/* Background gradient injection */}
              <div className={`absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700 rounded-[32px] ${item.bgPattern}`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="space-y-6">
                  {/* Premium Icon Shell - Now Inside Card */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-teal-400/20 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.3)] animate-pulse-subtle group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-500 ease-out">
                      <div className="relative">
                        <item.icon className="w-8 h-8 text-cyan-400 relative z-10" />
                        {/* Interior Icon Glow */}
                        <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full -z-10 animate-pulse-subtle" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400/60 font-mono">
                        {item.eyebrow}
                      </span>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#49A5BD] italic opacity-40 group-hover:opacity-80 transition-opacity">
                        {item.techLabel}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black text-foreground font-outfit uppercase tracking-tight group-hover:text-cyan-50 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-body font-bold leading-relaxed max-w-lg transition-colors group-hover:text-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cyan-400/0 group-hover:text-cyan-400/100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      Explore Technical Spec <ArrowRight className="w-3 h-3" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
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
