"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function BottomCta() {
  return (
    <section className="py-24 md:py-40 relative flex flex-col items-center justify-center text-center overflow-hidden bg-transparent z-10 w-full">
      <div className="max-container relative z-10">
        <div className="animate-fade-up space-y-12">
          <h2 className="text-5xl md:text-8xl font-black tracking-tight text-[#0B1220] uppercase leading-[0.9]">
            The Trust Layer for <br />
            <span className="text-gradient">
              the Agentic Web.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-[#4A5568] max-w-2xl mx-auto leading-relaxed font-bold">
            Bridging the gap between human reputation and autonomous agents on Sui.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" className="w-full sm:w-auto px-10 bg-[#43B6D5] text-white hover:bg-[#3AA0BD] border-none" asChild>
              <Link href="/docs">Explore Docs</Link>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 glass-panel" asChild>
              <Link href="/whitepaper">Read Whitepaper</Link>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 border-[#43B6D5] text-[#43B6D5] bg-transparent hover:bg-[#43B6D5]/5 shadow-none" onClick={() => (window as any).scrollTo({ top: 0, behavior: 'smooth' })}>
              Join Early Access
            </Button>
          </div>

          <div className="max-w-[1200px] border-t border-black/5 pt-16 mt-16 flex items-center justify-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#5B6B82]/40">Production V2.0 — Built by Omen Labs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
