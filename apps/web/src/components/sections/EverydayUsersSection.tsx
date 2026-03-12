"use client";

import { motion } from "framer-motion";
import { Lock01, SearchLg, AlertTriangle, ShieldCheck } from "@untitled-ui/icons-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

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
          className="text-5xl md:text-7xl font-black tracking-tight text-[#0B1220] mb-8 font-outfit uppercase leading-[1.1]"
        >
          Stop guessing. <br className="hidden md:block" /> Start knowing.
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="text-lg md:text-xl text-[#475569] max-w-2xl mb-20 leading-relaxed font-medium"
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
            className="glass-card p-12 md:p-14 border-red-500/5 flex flex-col items-center text-center relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[40px] bg-white/60"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500/10 to-red-500/30" />
            <div className="w-20 h-20 rounded-[28px] bg-red-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] mb-4 uppercase tracking-tighter">Unverified</h3>
            <p className="text-[#475569] text-[15px] font-bold leading-relaxed px-2">
              Caution: Unverified contract. Proceed at your own risk.
            </p>
          </motion.div>

          {/* Right card: Verified */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="glass-card p-12 md:p-14 border-[#43B6D5]/5 flex flex-col items-center text-center relative overflow-hidden group shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(67,182,213,0.15)] transition-all duration-500 rounded-[40px] bg-white/80"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#AAC0E1] to-[#43B6D5]" />
            <div className="w-20 h-20 rounded-[28px] bg-[#EAF3FA] flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#43B6D5]/20 rounded-[28px] animate-pulse" />
              <ShieldCheck className="w-10 h-10 text-[#43B6D5] relative z-10" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1220] mb-4 uppercase tracking-tighter">Omen Verified</h3>
            <p className="text-[#475569] text-[15px] font-bold leading-relaxed px-2">
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
          className="max-w-4xl bg-[#43B6D5]/5 border border-[#43B6D5]/10 rounded-[32px] p-8 md:p-10 mb-20 shadow-sm backdrop-blur-xl group hover:bg-[#43B6D5]/10 transition-all duration-500 hover:shadow-xl hover:scale-[1.01]"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#43B6D5]/20 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lock01 className="w-7 h-7 text-[#43B6D5]" />
            </div>
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#43B6D5] animate-pulse" />
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#43B6D5]">Protocol Insight</span>
              </div>
              <p className="text-lg md:text-xl text-[#0B1220] font-bold leading-relaxed tracking-tight">
                Just like you look for the lock icon before entering your card online, look for the Omen Badge before signing a Sui transaction. <span className="text-[#43B6D5]">If it's not verified, it's not safe.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <Link href="/dashboard" className="w-full sm:w-auto">
             <Button size="lg" className="w-full px-12 py-7 rounded-2xl text-[13px] font-black uppercase tracking-widest gap-2.5 shadow-xl shadow-black/10 hover:shadow-2xl hover:scale-[1.05] transition-all">
               <SearchLg className="w-5 h-5" /> Search the Registry
             </Button>
          </Link>
          <Link href="/alpha" className="w-full sm:w-auto">
             <Button variant="secondary" size="lg" className="w-full px-12 py-7 rounded-2xl text-[13px] font-black uppercase tracking-widest gap-2.5 bg-white border-black/[0.03] shadow-md hover:shadow-xl hover:scale-[1.05] transition-all">
               <ShieldCheck className="w-5 h-5" /> Demand the Badge
             </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
