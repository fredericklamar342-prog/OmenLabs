"use client";

import { motion } from "framer-motion";
import { Lock, Search, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EverydayUsersSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-transparent" aria-labelledby="everyday-title">
      <div className="max-container flex flex-col items-center text-center relative z-10">
        
        {/* Headline */}
        <motion.h2
          id="everyday-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] mb-6"
        >
          Stop guessing. Start knowing.
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="text-lg md:text-xl text-[#4A5568] max-w-[800px] mb-16 leading-relaxed"
        >
          In Web3 a beautiful interface can still hide a malicious team. Omen Labs helps you verify who is behind a protocol before connecting your wallet.
        </motion.p>

        {/* Visual comparison */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-[900px] mb-16">
          {/* Left card: Unverified */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="glass-card p-10 border border-red-500/10 flex flex-col items-center text-center relative overflow-hidden group shadow-md"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/20 to-red-500/50" />
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1220] mb-4">Unverified</h3>
            <p className="text-[#4A5568] text-lg font-medium px-4">
              Caution: Unverified contract. Proceed at your own risk.
            </p>
          </motion.div>

          {/* Right card: Verified */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="glass-card p-10 border border-[#43B6D5]/10 flex flex-col items-center text-center relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#AAC0E1] to-[#43B6D5]" />
            <div className="w-16 h-16 rounded-full bg-[#EAF3FA] flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 bg-[#43B6D5]/10 rounded-full animate-ping" />
              <ShieldCheck className="w-8 h-8 text-[#43B6D5] relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1220] mb-4">Omen Verified</h3>
            <p className="text-[#4A5568] text-lg font-medium px-4">
              Verified Builder. Identity and audit history confirmed.
            </p>
          </motion.div>
        </div>

        {/* Text below cards */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="max-w-[850px] bg-white/50 border border-black/5 rounded-2xl p-6 md:p-8 mb-12 shadow-[0_4px_24px_-4px_rgba(11,18,32,0.05)]"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#EAF3FA] shrink-0 flex items-center justify-center border border-[#43B6D5]/10">
              <Lock className="w-6 h-6 text-[#43B6D5]" />
            </div>
            <p className="text-[17px] md:text-[19px] text-[#0B1220] font-medium leading-relaxed mt-1">
              Just like you look for the lock icon before entering your card online, look for the Omen Badge before signing a Sui transaction. <span className="font-bold text-[#43B6D5]">If it's not verified, it's not safe.</span>
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto px-10 gap-2">
            <Search className="w-4 h-4" /> Search the Registry
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto px-10 gap-2 glass-panel">
            <ShieldCheck className="w-4 h-4" /> Demand the Badge
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
