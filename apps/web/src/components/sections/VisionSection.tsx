"use client";

import { motion } from "framer-motion";
import { Lock01 } from "@untitled-ui/icons-react";

export function VisionSection() {
  return (
    <section className="py-24 md:py-48 bg-background flex flex-col items-center text-center px-4 relative z-10">
      <div className="flex flex-col items-center animate-fade-up">
        <Lock01 className="w-10 h-10 text-[#49A5BD]/20 mb-8" aria-hidden="true" />
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter max-w-5xl mb-12 text-foreground uppercase leading-[1.1] font-outfit text-balance">
          "Programmatic <span className="text-gradient underline decoration-[#49A5BD]/20">Accountability</span> <br /> 
          for the Agentic Web."
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
          <div className="space-y-3">
             <div className="text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">Tethered Identity</div>
             <p className="text-xs text-body leading-relaxed font-bold tracking-tight">AI agents cryptographically linked to human founders via Soulbound OmenBadges.</p>
          </div>
          <div className="space-y-3">
             <div className="text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">Sovereign Rep</div>
             <p className="text-xs text-body leading-relaxed font-bold tracking-tight">Reputation that cannot be sold, commodified, or wrapped. Immutable trust primitives.</p>
          </div>
          <div className="space-y-3">
             <div className="text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">Slashing Core</div>
             <p className="text-xs text-body leading-relaxed font-bold tracking-tight">Malicious behavior by a child agent triggers automatic reputation downgrades for the parent.</p>
          </div>
        </div>

        <div className="h-[2px] w-16 bg-[#49A5BD] rounded-full mb-6" />
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#49A5BD]">
          The Omen Labs Private Alpha V1.0 Vision
        </p>
      </div>
    </section>
  );
}
