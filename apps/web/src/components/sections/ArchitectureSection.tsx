"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Zap, Globe, Database, Shield } from "lucide-react";
import WalrusIcon from "@/components/icons/WalrusIcon";
import SuiIcon from "@/components/icons/SuiIcon";

const items = [
  {
    title:       "Seek (Read)",
    description: "The OmenRegistry operates as a Shared Object. Integrators query verification status and Risk Scores in a single transaction block with O(1) complexity.",
    icon:        Zap,
  },
  {
    title:       "Remit (Write)",
    description: "Security tools push audit results to Omen. These results permanently alter the developer's dynamic Risk Score, turning tools into ecosystem anchors.",
    icon:        Database,
  },
  {
    title:       "Walrus Anchoring",
    description: "Heavy AI audit data is stored on Walrus Protocol. Only the 256-bit hash and Blob ID live on-chain, keeping Sui gas fees near absolute zero.",
    icon:        Server,
  },
  {
    title:       "AI Oracle (MCP)",
    description: "An MCP Server exposes our data to the Agentic Web. Autonomous bots run machine-to-machine risk assessments before executing trades.",
    icon:        Globe,
  },
];

export function ArchitectureSection() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 relative z-10 bg-background border-y border-[#49A5BD]/10 text-foreground"
      aria-labelledby="arch-title"
    >
      <div className="max-container px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col mb-12 sm:mb-16 items-center text-center animate-fade-up border-b border-[#49A5BD]/10 pb-12 sm:pb-16">
          <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-[#49A5BD] uppercase mb-4 font-mono">
            System Architecture
          </span>
          <h2
            id="arch-title"
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6 uppercase font-outfit leading-tight"
          >
            The "Seek and Remit" <br className="hidden sm:block" />Trust Primitive.
          </h2>
          <div className="h-[2px] w-16 bg-[#49A5BD] rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative glass-card p-8 sm:p-10 transition-all duration-500 rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#49A5BD]/30 hover:scale-[1.01] sm:hover:scale-[1.02]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col gap-6 relative z-10 animate-fade-up">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-[#49A5BD]/20 bg-surface transition-all duration-300 rounded-2xl group-hover:bg-[#49A5BD]">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#49A5BD] group-hover:text-white transition-colors duration-200" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tighter uppercase font-outfit">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-body leading-relaxed max-w-sm font-bold tracking-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
