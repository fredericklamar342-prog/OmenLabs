"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Fingerprint, CheckCircle2, Droplet } from "lucide-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export function HeroSection() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-transparent"
      aria-labelledby="hero-title"
    >
      <div className="max-container flex flex-col items-center text-center relative z-10">
        
        {/* Floating Verification Indicators - more subtle and refined */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="absolute right-[10%] top-[20%] glass-card p-4 flex flex-col gap-3 shadow-xl w-52 bg-white/60"
          >
            <div className="flex items-center gap-2">
              <Fingerprint className="w-5 h-5 text-[#43B6D5]" />
              <div className="font-bold text-xs">Identity linked</div>
            </div>
            <div className="h-1 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-full bg-[#43B6D5]" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute left-[12%] bottom-[15%] glass-card px-5 py-3 flex items-center gap-3 border-l-2 border-[#43B6D5] shadow-lg bg-white/60"
          >
            <CheckCircle2 className="w-6 h-6 text-[#43B6D5]" />
            <div className="text-left">
              <div className="text-xs font-bold text-[#0B1220]">V2.0 badge issued</div>
              <div className="text-[10px] text-[#94A3B8] font-medium uppercase tracking-wider">Secured by Walrus</div>
            </div>
          </motion.div>
        </div>

        {/* Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full mb-10"
        >
          <Droplet className="w-3.5 h-3.5 text-[#43B6D5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">
            Native to the Sui Stack
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#0B1220] leading-[1.05] max-w-5xl mb-10 text-balance"
        >
          Trust the <span className="text-gradient">Builders</span> <br className="hidden md:block" />
          Before You Trust the Code.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[#475569] max-w-3xl mb-12 leading-relaxed font-medium"
        >
          Web3 allows you to verify smart contracts, but it cannot verify who built them. Omen introduces a trust layer for the Sui ecosystem so wallets, apps, and AI agents can verify builder reputation before interacting with protocols.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4"
        >
          <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#0B1220] hover:bg-[#0B1220]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
            <Link href="/docs">View Docs</Link>
          </Button>
          <Button variant="secondary" size="lg" className="h-14 px-8 text-base font-bold glass-panel bg-white/40 hover:bg-white/60 text-[#0B1220] rounded-xl border border-[#E2E8F0] transition-all" asChild>
            <Link href="/whitepaper">Read Whitepaper</Link>
          </Button>
          <Button variant="secondary" size="lg" className="h-14 px-8 text-base font-bold bg-transparent text-[#43B6D5] hover:bg-[#43B6D5]/5 rounded-xl border-2 border-[#43B6D5] transition-all shadow-none" onClick={openModal}>
            Request Early Access
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-32 relative w-full max-w-[1000px] flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] bg-gradient-to-r from-transparent via-[#AAC0E1]/10 to-transparent -rotate-12 blur-xl md:blur-3xl" />
          <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-[#43B6D5]/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#43B6D5]/40 blur-sm" />
        </div>

      </div>
    </section>
  );
}
