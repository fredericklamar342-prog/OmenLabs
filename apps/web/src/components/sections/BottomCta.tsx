"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function BottomCta() {
  return (
    <section className="py-24 md:py-48 relative flex flex-col items-center justify-center text-center overflow-hidden bg-transparent z-10 w-full">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#43B6D5]/10 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#AAC0E1]/5 blur-[100px] rounded-full -z-10" />

      <div className="max-container relative z-10">
        <div className="animate-fade-up space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl lg:text-[100px] font-black tracking-tight text-[#0B1220] uppercase leading-[0.85]">
              The Trust Layer <br />
              <span className="text-gradient">
                for the Agentic Web.
              </span>
            </h2>
            <p className="text-xl md:text-3xl text-[#0B1220]/80 max-w-3xl mx-auto leading-relaxed font-bold italic border-l-4 border-black/5 pl-8 mt-8">
              "Solving the accountability crisis in the emerging agentic economy through Move-native reputation infrastructure."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <Button size="lg" className="h-16 w-full sm:w-auto px-12 bg-[#43B6D5] text-white hover:bg-[#3AA0BD] border-none shadow-[0_20px_40px_-10px_rgba(67,182,213,0.4)] transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/docs">Explore SDK Docs</Link>
            </Button>
            <Button variant="secondary" size="lg" className="h-16 w-full sm:w-auto px-12 glass-panel border border-black/5 bg-white/40 hover:bg-white/60 transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/whitepaper">Read V2.0 Spec</Link>
            </Button>
          </div>

          <div className="flex flex-col items-center gap-8 mt-24">
            <div className="h-24 w-px bg-gradient-to-b from-black/5 to-transparent" />
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#5B6B82]/40">Production V2.0 Stable — Verified by Omen Nodes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
