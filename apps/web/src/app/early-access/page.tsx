"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export default function EarlyAccessPage() {
  const { openModal } = useEarlyAccessModal();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-[#43B6D5]/20 pb-20 font-outfit">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#49A5BD]/5 to-transparent blur-[120px] -ml-48 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(73,165,189,0.05),transparent_70%)] blur-[100px] -mr-48 -mb-32 pointer-events-none" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-16 px-10 py-32 lg:grid-cols-[1fr_1fr]">
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            <motion.div
               whileHover={{ x: -4 }}
               transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="mb-12 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-body hover:text-[#49A5BD] transition-colors font-mono"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Base
              </Link>
            </motion.div>

            <div className="mb-10 inline-flex items-center gap-3 px-4 py-1.5 border border-[#49A5BD]/20 bg-[#49A5BD]/10 rounded-full shadow-sm">
              <Sparkles className="h-4 w-4 text-[#49A5BD]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">Registry Induction</span>
            </div>

            <h1 className="max-w-xl text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-foreground uppercase mb-8">
              Early <br /> 
              Registry <br /> 
              Induction
            </h1>
            <p className="mt-8 max-w-lg text-xl font-bold text-body leading-relaxed">
              Secure your position in the trust hierarchy. Register your project details 
              to receive prioritized synchronization and badge allocation.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "Automated verification for established L1/L2 primitives.",
              "Cryptographic confirmation dispatched upon successful registration.",
              "Prioritized SDK access for all validated early registry members.",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex items-start gap-4 p-6 glass-card bg-surface/50 border-[#49A5BD]/10 rounded-3xl"
              >
                <div className="rounded-2xl bg-surface border border-[#49A5BD]/20 p-3 text-[#49A5BD] shadow-xl">
                   <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-body leading-relaxed uppercase tracking-tight">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-card bg-surface/30 border-[#49A5BD]/20 rounded-[48px] p-10 sm:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#49A5BD]/30 to-transparent" />
          
          <div className="w-full text-center space-y-12">
            <div className="space-y-6">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-[28px] bg-surface border border-[#49A5BD]/20 flex items-center justify-center shadow-xl">
                  <Sparkles className="w-10 h-10 text-[#49A5BD]" />
                </div>
              </div>
              <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter leading-none">Join the Private Alpha</h2>
              <p className="text-lg font-bold text-body leading-relaxed max-w-sm mx-auto">
                Secure your position in the Omen trust hierarchy. Register to receive prioritize access and early badge allocation.
              </p>
            </div>

            <div className="pt-6 space-y-6">
              <Button
                onClick={openModal}
                size="lg"
                className="w-full h-16 bg-[#49A5BD] hover:opacity-70 text-white border-none rounded-2xl shadow-xl shadow-[#49A5BD]/20 transition-all text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center"
              >
                Join the Waitlist
              </Button>
              <p className="text-center text-[9px] font-bold text-body opacity-50 uppercase tracking-widest italic leading-relaxed font-mono">
                 Security verified by Omen Protocol Private Alpha V1.0 <br /> Guaranteed end-to-end cryptographic transit.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
