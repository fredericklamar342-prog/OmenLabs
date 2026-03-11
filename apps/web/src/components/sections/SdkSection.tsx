"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal, ArrowRight } from "lucide-react";

export function SdkSection() {
  return (
    <section id="docs" className="py-24 md:py-32 relative z-10 bg-transparent" aria-labelledby="sdk-title">
      <div className="max-container relative z-10">
        <div className="text-center lg:text-left mb-24 lg:mb-32">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-[11px] font-black tracking-[0.6em] text-primary uppercase mb-6 inline-block italic"
           >
             CORE_INTEGRATION_PRIMITIVES
           </motion.span>
           <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             id="sdk-title" 
             className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-10 italic leading-[0.85] tracking-tighter"
           >
             Plug_Trust_Into <br />Your_App._Fast.
           </motion.h3>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             className="text-2xl text-body italic max-w-2xl mx-auto lg:mx-0 opacity-60 leading-relaxed"
           >
             The Omen SDK provides a hardened interface for identity verification. Inject trust-state logic directly into your runtime execution flow with minimal latency.
           </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-xl border border-primary/20 bg-primary/5 shadow-2xl"
            >
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-foreground italic">DEV_FORCE_TOOLS</span>
            </motion.div>
            
            <div className="space-y-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-black tracking-tighter text-foreground italic leading-tight"
              >
                Simple_to_Deploy. <br />Hard_to_Compromise.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-body italic leading-relaxed max-w-[500px] opacity-40"
              >
                Integrate Soulbound verification checkpoints at the edge. Ensure every node interaction is authorized by the Omen Global Registry before finality.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { label: "LATENCY_THRESHOLD", val: "Sub-10ms" },
                { label: "VERIFICATION_VECTOR", val: "ZK_Login_Sync" },
                { label: "SYNC_FREQUENCY", val: "Real-Time" },
                { label: "UPTIME_SLA", val: "99.999%" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2 group"
                >
                  <div className="text-[11px] font-black uppercase tracking-[0.4em] text-primary/30 group-hover:text-primary/60 transition-colors italic">{stat.label}</div>
                  <div className="text-2xl font-black text-foreground italic uppercase tracking-tighter">{stat.val}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6"
            >
              <Button size="lg" className="h-20 px-12 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)] tracking-tighter" asChild>
                <Link href="/docs">
                  Access_The_Docs <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* High-Fidelity Terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-card rounded-[48px] border border-white/5 p-12 lg:p-16 font-mono text-sm relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-[#05080A]/80 backdrop-blur-3xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[10px] text-primary font-black tracking-[0.6em] uppercase italic opacity-40">SHIELD_ENGINE_v4.5</div>
              </div>
              
              <div className="space-y-10">
                <div className="text-primary font-black tracking-[0.4em] text-[11px] border-b border-primary/20 pb-4 italic uppercase">OMEN_TRUST_PRIMITIVES</div>
                
                <div className="space-y-3">
                  <div className="text-foreground font-black text-lg italic uppercase tracking-tighter flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_100px_#43B6D5]" />
                    Entity_Legitimacy_Enforcement
                  </div>
                  <div className="pl-6 text-body/60 text-base leading-relaxed italic">
                    Real-time verification of builder identity anchors.
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-foreground font-black text-lg italic uppercase tracking-tighter flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_100px_#43B6D5]" />
                    Anti-Sybile_Infrastructure
                  </div>
                  <div className="pl-6 text-body/60 text-base leading-relaxed italic">
                    Cryptographic barriers against synthetic malicious agents.
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-foreground font-black text-lg italic uppercase tracking-tighter flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_100px_#43B6D5]" />
                    Safe_Handshake_Protocol
                  </div>
                  <div className="pl-6 text-body/60 text-base leading-relaxed italic">
                    Pre-execution authorization for all network participants.
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-foreground font-black text-lg italic uppercase tracking-tighter flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_100px_#43B6D5]" />
                    Hardened_Build_Trust
                  </div>
                  <div className="pl-6 text-body/60 text-base leading-relaxed italic">
                    Verifiable reputation scores for engineering teams.
                  </div>
                </div>
              </div>

            </div>

            {/* Status Floating Label */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-primary px-8 py-4 rounded-3xl text-[11px] font-black uppercase tracking-[0.4em] text-background shadow-[0_20px_60px_rgba(67,182,213,0.4)] z-20 italic"
            >
              NODE_ACTIVE
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

