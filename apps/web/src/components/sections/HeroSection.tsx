"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Layers, CheckCircle2, Zap, Cpu, Fingerprint, Database, ArrowRight } from "lucide-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { EcosystemVisual } from "./EcosystemVisual";
import { useRef } from "react";

export function HeroSection() {
  const { openModal } = useEarlyAccessModal();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-background min-h-[90vh] lg:min-h-screen flex items-center"
      aria-labelledby="hero-title"
    >
      <EcosystemVisual />
      
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(73,165,189,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-container px-4 sm:px-6 relative z-10 w-full h-full flex flex-col justify-center mt-12 sm:mt-0">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Brand Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface/80 backdrop-blur border border-[#49A5BD]/30 rounded-full shadow-[0_0_15px_rgba(73,165,189,0.15)]">
                <SuiIcon className="w-3.5 h-3.5 text-[#49A5BD]" />
                <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-[0.2em] text-foreground">
                  Native to the Sui Stack
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface/50 backdrop-blur border border-[#49A5BD]/20 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-[#49A5BD] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-[0.2em] text-foreground">
                  Testnet Live
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black tracking-tighter text-foreground leading-[1.05] mb-6 font-outfit text-balance"
            >
              The <span className="text-gradient drop-shadow-sm">Trust Primitive</span> <br className="hidden md:block lg:hidden xl:block" />
              for the Sui Network
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-[#49A5BD] uppercase tracking-[0.25em] mb-6 sm:mb-8 font-mono"
            >
              Stop guessing. Start knowing.
            </motion.p>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-body max-w-2xl mb-10 sm:mb-12 leading-relaxed font-bold tracking-tight px-2 lg:px-0"
            >
              Web3 verifies smart contracts, but not who built them. Omen introduces an institutional trust primitive so wallets, apps, and AI agents can gate access based on cryptographically proven builder reputation.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-8 text-sm sm:text-base font-bold bg-[#49A5BD] text-white hover:bg-[#49A5BD]/90 rounded-xl shadow-[0_0_20px_rgba(73,165,189,0.3)] transition-all hover:scale-105 active:scale-95" onClick={openModal}>
                Get Developer Access
              </Button>
              <div className="flex gap-4 w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 text-sm sm:text-base font-bold bg-surface/50 text-white rounded-xl border border-[#49A5BD]/20 hover:bg-surface/80 hover:border-[#49A5BD]/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2" asChild>
                  <Link href="/docs"><Zap className="w-4 h-4" /> Docs</Link>
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-6 text-sm sm:text-base font-bold bg-transparent text-foreground hover:bg-white/5 rounded-xl border-2 border-white/10 transition-all shadow-none hover:scale-105 active:scale-95 flex items-center gap-2" asChild>
                  <Link href="/whitepaper">Whitepaper</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Architecture Panel */}
          <motion.div 
            style={{ y }}
            initial={{ opacity: 0, x: 40, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative perspective-1000"
          >
             <div className="glass-card p-1 relative w-full aspect-square max-w-[500px] mx-auto rounded-[40px] border-[#49A5BD]/30 shadow-2xl overflow-hidden bg-surface/40 backdrop-blur-xl transform-gpu rotate-0 hover:rotate-1 transition-transform duration-700">
                {/* Internal Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(73,165,189,0.15),transparent_70%)] pointer-events-none mix-blend-screen" />
                
                {/* Node Grid Background */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #49A5BD 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                {/* Core Elements */}
                <div className="relative h-full w-full flex flex-col items-center justify-center pt-8">
                   
                   {/* Top Node: Developer/Agent */}
                   <motion.div 
                     animate={{ y: [0, -8, 0] }}
                     transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-[15%] left-[50%] -translate-x-1/2 flex flex-col items-center gap-3 z-20"
                   >
                      <div className="w-16 h-16 rounded-2xl bg-surface/80 border border-[#49A5BD]/40 flex items-center justify-center shadow-lg backdrop-blur-md">
                         <Fingerprint className="w-8 h-8 text-[#49A5BD]" />
                      </div>
                      <span className="text-[10px] font-mono font-black uppercase text-[#49A5BD] tracking-[0.2em] bg-surface/80 px-2 py-0.5 rounded backdrop-blur">OmenBadge [zkLogin]</span>
                   </motion.div>

                   {/* Central Hub: Registry */}
                   <motion.div 
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-[45%] left-[50%] -translate-x-1/2 flex flex-col items-center gap-3 z-30"
                   >
                      <div className="w-24 h-24 rounded-full bg-[#49A5BD] border-4 border-surface shadow-[0_0_30px_rgba(73,165,189,0.4)] flex items-center justify-center z-10 relative overflow-hidden">
                         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer" />
                         <ShieldCheck className="w-12 h-12 text-white relative z-10" />
                      </div>
                      <span className="text-[11px] font-mono font-black uppercase text-white tracking-[0.2em] bg-[#49A5BD]/80 px-3 py-1 rounded-full backdrop-blur shadow-lg border border-[#49A5BD]">Trust Oracle</span>
                   </motion.div>

                   {/* Bottom Nodes */}
                   <motion.div 
                     animate={{ y: [0, 8, 0] }}
                     transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                     className="absolute bottom-[20%] left-[20%] flex flex-col items-center gap-3 z-20"
                   >
                      <div className="w-14 h-14 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md">
                         <Cpu className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase text-body tracking-[0.2em] bg-surface/80 px-2 py-0.5 rounded backdrop-blur border border-white/5">AI App</span>
                   </motion.div>

                   <motion.div 
                     animate={{ y: [0, 8, 0] }}
                     transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                     className="absolute bottom-[20%] right-[20%] flex flex-col items-center gap-3 z-20"
                   >
                      <div className="w-14 h-14 rounded-2xl bg-surface/80 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md">
                         <WalrusIcon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[9px] font-mono font-black uppercase text-body tracking-[0.2em] bg-surface/80 px-2 py-0.5 rounded backdrop-blur border border-white/5">Walrus</span>
                   </motion.div>

                   {/* Connecting SVG Lines */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                     <defs>
                       <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#49A5BD" stopOpacity="0.8" />
                         <stop offset="100%" stopColor="#49A5BD" stopOpacity="0.1" />
                       </linearGradient>
                       <filter id="glow">
                         <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                         <feMerge>
                           <feMergeNode in="coloredBlur"/>
                           <feMergeNode in="SourceGraphic"/>
                         </feMerge>
                       </filter>
                     </defs>
                     {/* Top to Center */}
                     <path d="M 250 120 L 250 200" stroke="url(#line-grad)" strokeWidth="2" strokeDasharray="4 4" fill="none" className="animate-dash" />
                     {/* Center to Bottom Left */}
                     <path d="M 220 280 L 150 350" stroke="#49A5BD" strokeOpacity="0.3" strokeWidth="2" fill="none" />
                     {/* Center to Bottom Right */}
                     <path d="M 280 280 L 350 350" stroke="#49A5BD" strokeOpacity="0.3" strokeWidth="2" fill="none" />

                     {/* Animated Data Packets */}
                     <circle r="3" fill="#FFF" filter="url(#glow)">
                        <animateMotion dur="2s" repeatCount="indefinite" path="M 250 120 L 250 200" />
                     </circle>
                     <circle r="3" fill="#49A5BD" filter="url(#glow)">
                        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 220 280 L 150 350" />
                     </circle>
                     <circle r="3" fill="#49A5BD" filter="url(#glow)">
                        <animateMotion dur="2.2s" repeatCount="indefinite" path="M 350 350 L 280 280" />
                     </circle>
                   </svg>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Ecosystem Integrations Ticker */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-32 border-t border-[#49A5BD]/10 pt-8 sm:pt-10 w-full relative"
        >
           <p className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-[0.3em] text-[#49A5BD] text-center mb-6 sm:mb-8 md:mb-10 lg:text-left">
              Engineered For The Sui Web3 Stack
           </p>
           
            {/* Static Logo Grid for density */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-y-6 gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 opacity-60">
              <div className="flex items-center gap-2 sm:gap-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <SuiIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base font-black tracking-widest uppercase">Sui Network</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <WalrusIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base font-black tracking-widest uppercase text-white font-mono">Walrus</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Database className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base font-black tracking-widest uppercase">DeepBook V3</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <GoogleIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                <span className="text-sm sm:text-base font-black tracking-widest uppercase">zkLogin</span>
              </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
