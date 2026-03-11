"use client";

import { motion } from "framer-motion";
import { Lock, Search, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function EverydayUsersSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 bg-transparent" aria-labelledby="everyday-title">
      <div className="max-container flex flex-col items-center text-center relative z-10">
        
        {/* Headline Area */}
        <div className="flex flex-col items-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black tracking-[0.6em] text-primary uppercase mb-6 italic"
          >
            PEER_VERIFICATION_RATIONALE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-8 italic"
          >
            Protocol_Security_vs <br />Obscurity.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl text-body italic opacity-60 max-w-4xl mb-16 leading-relaxed"
          >
            In the decentralized economy, a professional UI can mask a malicious entity. Omen synchronizes technical audit trails with real-world identity to ensure every transaction is safe.
          </motion.p>
        </div>

        {/* Visual comparison */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 w-full max-w-[1100px] mb-24">
          {/* Left card: Unverified */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-12 md:p-20 border border-red-500/10 flex flex-col items-center text-center relative overflow-hidden group shadow-2xl rounded-[48px] bg-panel/20 backdrop-blur-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center mb-10 border border-red-500/20">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-4xl font-black text-foreground mb-4 italic uppercase tracking-tighter">System_Alert: <br />UNVERIFIED</h3>
            <p className="text-xl text-body/40 italic font-medium">
              Critically low identity anchor. Malicious telemetry detected.
            </p>
          </motion.div>

          {/* Right card: Verified */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-12 md:p-20 border border-primary/20 flex flex-col items-center text-center relative overflow-hidden group shadow-[0_0_100px_rgba(67,182,213,0.15)] rounded-[48px] bg-panel/40 backdrop-blur-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 relative border border-primary/20">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl animate-ping" />
              <ShieldCheck className="w-10 h-10 text-primary relative z-10 drop-shadow-[0_0_15px_#43B6D5]" />
            </div>
            <h3 className="text-4xl font-black text-foreground mb-4 italic uppercase tracking-tighter">System_Auth: <br />AUTHORIZED</h3>
            <p className="text-xl text-body italic font-medium">
              Verified_Builder. Cryptographic identity and audit trail confirmed.
            </p>
          </motion.div>
        </div>

        {/* Text Area below cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl glass-card border border-white/5 bg-panel/30 p-12 md:p-16 mb-24 rounded-[48px] shadow-2xl backdrop-blur-3xl"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 shrink-0 flex items-center justify-center border border-primary/20 shadow-2xl group-hover:scale-110 transition-transform">
              <Lock className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-4">
               <p className="text-2xl md:text-3xl text-foreground font-medium leading-tight italic">
                Just as you rely on established TLS handshakes for secure browsing, look for the <span className="text-primary font-black shadow-[0_0_20px_#43B6D5]">Omen_Shard</span> before execution. 
              </p>
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/40 italic">
                IF_NOT_AUTHORIZED_NOT_SECURE
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto h-20 px-20 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)] tracking-tighter">
            <Search className="w-6 h-6 mr-3" /> Search_Registry
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto h-20 px-20 text-xl font-black italic border-white/5 bg-white/3 glass-panel rounded-full tracking-tighter">
            <ShieldCheck className="w-6 h-6 mr-3" /> Demand_Auth
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

