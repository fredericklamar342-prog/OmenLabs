"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Fingerprint, CheckCircle2, Droplet, ArrowRight } from "lucide-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export function HeroSection() {
  const { openModal } = useEarlyAccessModal();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative pt-40 pb-24 md:pt-64 md:pb-48 overflow-hidden bg-transparent"
      aria-labelledby="hero-title"
    >
      <div className="max-container relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-panel border border-primary/20 mb-12 hardware-accel group hover:border-primary/40 transition-all duration-500"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-md rounded-full animate-pulse" />
              <Droplet className="w-5 h-5 text-primary relative z-10 fill-primary/20 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
              Built on Sui_Mainnet
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] max-w-[1200px] mb-12 hardware-accel italic"
          >
            Forge the <br className="hidden md:block" />
            <span className="text-primary italic">Reputation</span> Shard
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-body max-w-[900px] mb-16 leading-relaxed font-medium italic opacity-80 hardware-accel"
          >
            Omen is a programmable trust layer that encodes builder identity and security telemetry directly into the execution handshake.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto hardware-accel"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-16 h-20 text-xl italic font-black shadow-[0_0_50px_rgba(67,182,213,0.3)] group"
              onClick={openModal}
            >
              INITIALIZE_ALPHA
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <a 
              href="/whitepaper" 
              className="text-[14px] font-black italic uppercase tracking-[0.4em] text-body hover:text-primary flex items-center gap-4 group transition-all"
            >
              Whitepaper_v2
              <span className="w-8 h-[2px] bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all" />
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Visual elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden hidden xl:block">
          
          {/* Card 1: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -150, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, rotate: -12, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute left-[5%] top-[25%] glass-card p-10 flex flex-col gap-6 shadow-[0_0_60px_rgba(0,0,0,0.5)] w-80 border-primary/20 rounded-[40px] bg-panel/40 backdrop-blur-3xl"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_20px_rgba(67,182,213,0.1)]">
                <Fingerprint className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="font-black italic text-lg text-foreground tracking-tight">Identity_Shard</div>
                <div className="text-[10px] text-primary uppercase tracking-[0.4em] font-black opacity-60">Status: ENCRYPTED</div>
              </div>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "85%" }}
                 transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                 className="h-full bg-primary shadow-[0_0_15px_#43B6D5]" 
               />
            </div>
          </motion.div>

          {/* Card 2: Status */}
          <motion.div
            initial={{ opacity: 0, y: 150, rotate: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 8, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="absolute right-[8%] bottom-[20%] glass-card p-10 flex items-center gap-6 border-l-[6px] border-l-primary shadow-[0_0_60px_rgba(0,0,0,0.5)] border-primary/20 rounded-[40px] bg-panel/40 backdrop-blur-3xl"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full" />
              <CheckCircle2 className="w-14 h-14 text-primary relative z-10 drop-shadow-[0_0_20px_#43B6D5]" />
            </div>
            <div>
              <div className="text-xl font-black italic text-foreground tracking-tight">Handshake_Verified</div>
              <div className="text-[10px] text-body uppercase tracking-[0.4em] font-black opacity-40">NODE_AUTH: PASS</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Glow Line */}
        <div className="mt-64 relative w-full flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[500px] bg-gradient-to-r from-transparent via-primary/5 to-transparent -rotate-3 blur-[100px] opacity-30" />
          <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
