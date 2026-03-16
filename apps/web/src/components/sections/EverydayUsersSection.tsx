"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Search, TriangleAlert, Activity, CheckCircle2, Database } from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function EverydayUsersSection() {
  return (
    <section id="product" className="py-24 md:py-32 xl:pt-48 xl:pb-24 relative z-10 bg-[#0B0C10]" aria-labelledby="everyday-title">
      <div className="max-container px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-center mb-24 md:mb-32">
          {/* Left Side: Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111418] border border-white/10 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-[#49A5BD]" />
              <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-[0.25em] text-[#49A5BD]">User Protection Layer</span>
            </div>

            <motion.h2
              id="everyday-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter text-foreground mb-8 font-outfit uppercase leading-[0.95]"
            >
              Stop <span className="text-gradient">guessing.</span> <br /> Start <span className="text-white">knowing.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-body max-w-xl mb-12 leading-relaxed font-bold tracking-tight"
            >
              In Web3, a beautiful interface can hide a malicious team. Omen Labs creates deterministic trust so you can verify who is behind a protocol before connecting your wallet.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-[#49A5BD] text-white hover:bg-[#49A5BD]/90 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="/dashboard">Search the Registry</Link>
              </Button>
              <Button variant="secondary" size="lg" className="h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-[#111418] text-white rounded-xl border border-white/10 hover:bg-[#151922] transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="/whitepaper">View Trust Metrics</Link>
              </Button>
            </div>
          </div>

          {/* Right Side: Visual Comparison (Layered) */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
             <div className="absolute inset-0 bg-[#49A5BD]/5 blur-[80px] rounded-full pointer-events-none" />
             
             <div className="relative space-y-4">
                {/* Verified Card (Floating Top) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#151922] border-2 border-[#49A5BD]/40 p-6 md:p-8 rounded-[32px] shadow-2xl relative z-20 group"
                >
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#49A5BD] flex items-center justify-center shadow-[0_0_20px_rgba(73,165,189,0.3)] shrink-0">
                         <ShieldCheck className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-black text-[#49A5BD] uppercase tracking-widest">Omen Verified</span>
                            <span className="text-[10px] font-mono font-bold text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded">Trust: 98</span>
                         </div>
                         <h4 className="text-xl font-black text-white uppercase tracking-tight font-outfit">SuiSwap V3</h4>
                         <div className="flex items-center gap-1.5 mt-1">
                            <SuiIcon className="w-3.5 h-3.5" />
                            <span className="text-[10px] text-body font-bold uppercase tracking-wider">Identities Linked</span>
                         </div>
                      </div>
                   </div>
                </motion.div>

                {/* Unverified Card (Submerged Bottom) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.5, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#111418] border border-white/5 p-6 md:p-8 rounded-[32px] opacity-50 blur-[1px] relative z-10"
                >
                   <div className="flex items-center gap-5 grayscale">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                         <TriangleAlert className="w-8 h-8 text-white/40" />
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Unverified</span>
                         </div>
                         <h4 className="text-xl font-black text-white/30 uppercase tracking-tight font-outfit italic">ShadowProtocol</h4>
                         <span className="text-[10px] text-white/20 font-bold uppercase tracking-wider">Unknown Origin</span>
                      </div>
                   </div>
                </motion.div>
                
                {/* Floating Signal */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#151922] border border-[#49A5BD]/30 p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 hidden md:flex"
                >
                   <div className="w-8 h-8 rounded-lg bg-[#49A5BD]/10 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-[#49A5BD]" />
                   </div>
                   <div className="pr-4">
                      <div className="text-[8px] font-mono font-black text-[#49A5BD] uppercase tracking-widest">Reputation Flow</div>
                      <div className="text-[10px] font-bold text-white uppercase tracking-tight whitespace-nowrap">Confirmed Integrity</div>
                   </div>
                </motion.div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

