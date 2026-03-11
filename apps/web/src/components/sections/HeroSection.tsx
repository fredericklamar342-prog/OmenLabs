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
      className="relative pt-24 pb-16 md:pt-44 md:pb-28 overflow-hidden bg-transparent"
      aria-labelledby="hero-title"
    >
      <div className="max-container flex flex-col items-center text-center relative z-10">
        
        {/* Floating Verification Cards (Visual elements) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden hidden lg:block">

          {/* Card 2: Identity Verification */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
            className="absolute right-[8%] top-[15%] glass-card p-5 flex flex-col gap-3 shadow-2xl w-56"
          >
            <div className="flex items-center gap-3">
              <Fingerprint className="w-6 h-6 text-[#43B6D5]" />
              <div className="font-bold text-sm">Identity Linked</div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-[#AAC0E1]/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="h-full bg-gradient-to-r from-[#AAC0E1] to-[#43B6D5]" 
                />
              </div>
              <div className="flex justify-between text-[9px] font-bold text-[#4A5568]">
                <span>VERIFYING...</span>
                <span>100%</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Verified Badge */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="absolute left-[12%] bottom-[10%] glass-card px-6 py-4 flex items-center gap-4 border-l-4 border-l-[#43B6D5] shadow-xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#43B6D5]/20 blur-md md:blur-lg rounded-full" />
              <CheckCircle2 className="w-8 h-8 text-[#43B6D5] relative z-10" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#0B1220]">Badge Issued</div>
              <div className="text-[10px] text-[#4A5568]">SECURE ON-CHAIN</div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-black/5 mb-8"
        >
          <Droplet className="w-4 h-4 text-[#43B6D5] fill-[#43B6D5]/20" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#43B6D5]">
            Native to Sui
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="text-4xl md:text-5xl lg:text-[72px] font-bold tracking-tight text-[#0B1220] leading-[1] max-w-[1000px] mb-8"
        >
          Programmable Trust <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0B1220] via-[#43B6D5] to-[#AAC0E1]">for the Sui Economy</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="text-xl text-[#0B1220] max-w-[800px] mb-6 leading-relaxed font-medium"
        >
          Omen Labs is a Sui-native trust and reputation layer that helps users, wallets, and applications verify the builders behind protocols, contracts, and AI agents without sacrificing privacy.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-lg text-[#4A5568] max-w-[700px] mb-12 leading-relaxed"
        >
          In Web3 you can verify code, but you cannot verify who built it. Omen Labs creates a permanent, non-transferable reputation layer for builders on Sui.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 glass-panel" onClick={openModal}>
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
