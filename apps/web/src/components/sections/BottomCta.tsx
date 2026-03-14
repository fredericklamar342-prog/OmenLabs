"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export function BottomCta() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section className="py-24 sm:py-32 md:py-64 relative flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B0C10] z-10 w-full border-t border-white/5">
      {/* Background Decorative Blobs - very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[#49A5BD]/5 blur-[120px] sm:blur-[160px] rounded-full -z-10" />

      <div className="max-container px-6 sm:px-8 relative z-10">
        <div className="animate-fade-up space-y-12 sm:space-y-16">
          <div className="space-y-6">
            <h2 id="cta-title" className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground leading-[1] sm:leading-[0.85] text-balance uppercase font-outfit">
              The Trust Layer <br className="hidden sm:block" />
              <span className="text-gradient">
                for the Agentic Web.
              </span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-8 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-bold bg-[#49A5BD] text-white hover:bg-[#49A5BD]/90 rounded-2xl transition-all hover:scale-105 active:scale-95 border-none shadow-lg shadow-[#49A5BD]/20 group" asChild>
                <Link href="/docs" className="flex items-center gap-2">
                   Explore Docs
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-bold bg-[#111418] text-foreground border border-white/10 hover:bg-[#151922] transition-all hover:scale-105 active:scale-95 rounded-2xl" asChild>
                <Link href="/whitepaper">Read Whitepaper</Link>
              </Button>
            </div>
            <Button variant="secondary" size="lg" className="h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg font-bold bg-[#111418]/50 text-foreground border border-white/5 hover:bg-[#151922] transition-all hover:scale-105 active:scale-95 shadow-none w-full lg:w-auto rounded-2xl" onClick={openModal}>
              Join Early Access
            </Button>
          </div>

          <div className="flex flex-col items-center gap-8 sm:gap-12 mt-20 sm:mt-32">
            <div className="h-20 sm:h-32 w-px bg-gradient-to-b from-[#49A5BD]/20 to-transparent" />
            <p className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-body/40 px-4">Verified by Sui Mainnet Protocol</p>
          </div>
        </div>
      </div>
    </section>

  );
}
