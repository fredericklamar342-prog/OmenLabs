"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export function BottomCta() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section className="py-32 md:py-64 relative flex flex-col items-center justify-center text-center overflow-hidden bg-transparent z-10 w-full">
      {/* Background Decorative Blobs - very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#43B6D5]/5 blur-[160px] rounded-full -z-10 animate-pulse-slow" />

      <div className="max-container relative z-10">
        <div className="animate-fade-up space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#0B1220] leading-[0.85] text-balance">
              The Trust Layer <br />
              <span className="text-gradient">
                for the Agentic Web.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" className="h-16 px-12 text-lg font-bold bg-[#0B1220] text-white hover:bg-[#0B1220]/90 rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/docs">Explore Docs</Link>
            </Button>
            <Button variant="secondary" size="lg" className="h-16 px-12 text-lg font-bold glass-panel border border-black/5 bg-white/40 hover:bg-white/60 transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/whitepaper">Read Whitepaper</Link>
            </Button>
            <Button variant="secondary" size="lg" className="h-16 px-12 text-lg font-bold bg-transparent text-[#43B6D5] hover:bg-[#43B6D5]/5 border-2 border-[#43B6D5] rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-none" onClick={openModal}>
              Join Early Access
            </Button>
          </div>

          <div className="flex flex-col items-center gap-12 mt-32">
            <div className="h-32 w-px bg-gradient-to-b from-black/[0.08] to-transparent" />
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#94A3B8]">Private Alpha V1.0 Pulse — Verified by Sui Testnet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
