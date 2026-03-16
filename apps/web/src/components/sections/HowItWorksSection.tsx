"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserCheck, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  ChevronRight, 
  Fingerprint, 
  Database, 
  Search
} from "lucide-react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

type StepId = "identity" | "reputation" | "protection" | "accountability";

const steps = [
  {
    id: "identity" as StepId,
    title: "Identity Layer",
    description: "Developers create an OmenBadge using zkLogin to link Web2 reputation permanently to their on-chain identity.",
    icon: GoogleIcon,
    tag: "STEP 01",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
         <div className="relative flex flex-col items-center gap-6">
            <div className="flex gap-4 items-center mb-4">
               <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center">
                  <GoogleIcon className="w-6 h-6" />
               </div>
               <motion.div 
                 animate={{ x: [0, 8, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               >
                 <ChevronRight className="w-5 h-5 text-[#49A5BD]" />
               </motion.div>
               <div className="w-16 h-16 rounded-2xl bg-[#49A5BD]/10 border-2 border-[#49A5BD] flex items-center justify-center shadow-[0_0_20px_rgba(73,165,189,0.2)] relative overflow-hidden">
                  <Fingerprint className="w-8 h-8 text-[#49A5BD] relative z-10" />
                  <motion.div 
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#49A5BD]/30 to-transparent"
                  />
               </div>
            </div>
            <div className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[#49A5BD] bg-[#49A5BD]/10 px-3 py-1.5 rounded-full border border-[#49A5BD]/20">
               OmenBadge Minted
            </div>
         </div>
      </div>
    )
  },
  {
    id: "reputation" as StepId,
    title: "Reputation Engine",
    description: "Security tools and ecosystem signals update builder trust scores with real-time payload data stored efficiently.",
    icon: Activity,
    tag: "STEP 02",
    visual: (
      <div className="w-full h-full flex items-center justify-center">
         <div className="relative w-full max-w-sm flex items-center justify-between">
            <div className="flex flex-col items-center gap-2">
               <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-white">
                  <Database className="w-5 h-5" />
               </div>
               <span className="text-[9px] font-mono text-body uppercase tracking-wider">Oracle</span>
            </div>
            
            <div className="h-px bg-[#49A5BD]/20 flex-1 mx-4 relative">
               <motion.div 
                 animate={{ left: ["0%", "100%"] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                 className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#49A5BD] rounded-full shadow-[0_0_10px_#49A5BD] -ml-2"
               />
            </div>
            
            <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 rounded-full bg-surface border-4 border-[#49A5BD] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(73,165,189,0.3)]">
                  <span className="text-xl font-black text-[#49A5BD] font-outfit">85</span>
               </div>
               <span className="text-[9px] font-mono text-[#49A5BD] uppercase tracking-wider font-black">Score Updated</span>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "protection" as StepId,
    title: "Transaction Protection",
    description: "Wallets and applications can block risky protocols using verified trust scores anchored securely on Walrus.",
    icon: ShieldCheck,
    tag: "STEP 03",
    visual: (
       <div className="w-full h-full flex items-center justify-center">
          <div className="relative flex flex-col items-center gap-6">
             <div className="w-64 h-32 rounded-2xl bg-surface/50 border border-white/10 p-4 border-dashed relative overflow-hidden flex items-center justify-center">
                <motion.div 
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                  className="bg-[#0B0C10] border border-red-500/50 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3 z-10"
                >
                   <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center"><ShieldCheck className="w-4 h-4 text-red-500"/></div>
                   <div>
                     <div className="text-[10px] font-black uppercase text-red-500 tracking-wider">Transaction Blocked</div>
                     <div className="text-[8px] font-mono text-body uppercase tracking-wider">Score &lt; 60 Threshold</div>
                   </div>
                </motion.div>
                <div className="absolute inset-0 bg-red-500/5 animate-pulse-slow" />
             </div>
             <div className="flex items-center gap-2">
                <WalrusIcon className="w-4 h-4 text-white" />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-white">Secured By Walrus</span>
             </div>
          </div>
       </div>
    )
  },
  {
    id: "accountability" as StepId,
    title: "Agent Accountability",
    description: "AI agents inherit the reputation of their creators through an immutable agent lineage graph on chain.",
    icon: Cpu,
    tag: "STEP 04",
    visual: (
       <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-surface border-2 border-[#49A5BD] flex items-center justify-center relative shadow-[0_0_20px_rgba(73,165,189,0.2)]">
             <UserCheck className="w-8 h-8 text-[#49A5BD]" />
             <div className="absolute -bottom-3 text-[9px] font-mono font-black uppercase text-[#49A5BD] bg-[#0B0C10] px-2 py-0.5 border border-[#49A5BD]/30 rounded">Parent</div>
          </div>
          
          <div className="flex gap-4 relative">
             <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-6 pointer-events-none">
                <path d="M 64 0 L 64 8 M 64 8 L 16 8 L 16 24 M 64 8 L 112 8 L 112 24" fill="none" stroke="rgba(73,165,189,0.3)" strokeWidth="2" />
                <circle cx="16" cy="16" r="3" fill="#49A5BD">
                   <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="112" cy="16" r="3" fill="#49A5BD">
                   <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
             </svg>
             
             {[1, 2].map(i => (
                <div key={i} className="w-12 h-12 rounded-xl bg-surface/50 border border-white/10 flex items-center justify-center">
                   <Cpu className="w-5 h-5 text-body" />
                </div>
             ))}
          </div>
       </div>
    )
  }
];

export function HowItWorksSection() {
  const [activeId, setActiveId] = useState<StepId>(steps[0].id);
  const activeStep = steps.find(s => s.id === activeId) || steps[0];

  return (
    <section id="how-it-works" className="py-24 md:py-32 xl:py-48 relative overflow-hidden bg-background" aria-labelledby="how-it-works-title">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#49A5BD]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-container px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-up">
          <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] text-[#49A5BD] uppercase mb-4 sm:mb-6 inline-block font-mono">
            The Standard
          </span>
          <h2 id="how-it-works-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9] font-outfit">
            How <span className="text-gradient">Omen</span> Works
          </h2>
        </div>

        {/* Interactive Split Layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1.1fr_1.3fr] gap-8 md:gap-12 lg:gap-16 items-start">
           
           {/* Left Sidebar Steps */}
           <div className="flex flex-col gap-3 sm:gap-4">
              {steps.map((step) => {
                 const isActive = step.id === activeId;
                 return (
                    <div key={step.id} className="relative">
                       <button
                         onClick={() => setActiveId(step.id)}
                         className={["w-full text-left p-6 md:p-8 rounded-[32px] md:rounded-[40px] border-2 transition-all duration-500 group outline-none relative overflow-hidden", isActive ? "border-[#49A5BD] bg-[#49A5BD]/5 shadow-[0_0_30px_rgba(73,165,189,0.15)]" : "border-[#49A5BD]/10 bg-surface/30 hover:border-[#49A5BD]/30 hover:bg-surface/50 opacity-80 hover:opacity-100"].join(" ")}
                       >
                          {isActive && (
                             <motion.div 
                               layoutId="hiw-glow"
                               className="absolute inset-0 bg-gradient-to-r from-[#49A5BD]/10 to-transparent pointer-events-none"
                               initial={{ opacity: 0, scale: 0.95 }}
                               animate={{ opacity: 1, scale: 1 }}
                               exit={{ opacity: 0, scale: 0.95 }}
                               transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                             />
                          )}
                          <div className="flex items-center gap-6 md:gap-8 relative z-10">
                             {/* Premium Icon Shell */}
                             <div className="relative shrink-0">
                                <div className={["w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl border transition-all duration-500 flex items-center justify-center glassmorphism", isActive ? "border-cyan-400/50 bg-gradient-to-br from-cyan-400/30 via-sky-400/15 to-teal-400/30 shadow-[0_0_40px_rgba(34,211,238,0.4)] scale-105 -translate-y-1" : "border-cyan-400/10 bg-white/[0.04] text-[#49A5BD] group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"].join(" ")}>
                                   <div className={["absolute inset-0 rounded-2xl md:rounded-3xl animate-pulse-subtle", isActive ? "bg-cyan-400/10" : "opacity-0 group-hover:opacity-100 bg-cyan-400/5"].join(" ")} />
                                   <step.icon className={["w-7 h-7 md:w-9 md:h-9 relative z-10 transition-all duration-500", isActive ? "text-cyan-400 scale-110" : "text-[#49A5BD]/60 group-hover:text-cyan-400 group-hover:scale-105"].join(" ")} />
                                   
                                   {/* Inner Glow */}
                                   <div className={["absolute inset-0 blur-xl transition-opacity duration-500", isActive ? "bg-cyan-400/20 opacity-100" : "opacity-0 group-hover:opacity-10"].join(" ")} />
                                </div>
                             </div>

                             <div className="min-w-0">
                                <div className={["text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.3em] mb-2 transition-colors", isActive ? "text-cyan-400 font-black" : "text-body/60 font-bold group-hover:text-cyan-400/80"].join(" ")}>
                                   {step.tag}
                                </div>
                                <h3 className={["text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight font-outfit leading-none", isActive ? "text-foreground" : "text-foreground/60 group-hover:text-foreground transition-colors"].join(" ")}>
                                   {step.title}
                                </h3>
                             </div>
                          </div>
                       </button>

                       {/* Mobile Accordion Explanation */}
                       <AnimatePresence initial={false}>
                          {isActive && (
                             <motion.div
                               initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                               animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                               exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                               className="lg:hidden overflow-hidden"
                             >
                                <div className="px-4 pt-6 pb-4 ml-2 border-l-2 border-cyan-400/20">
                                   <p className="text-base text-body/90 font-bold leading-relaxed">{step.description}</p>
                                   <div className="mt-8 aspect-[16/10] rounded-3xl border border-[#49A5BD]/20 bg-surface/30 overflow-hidden relative shadow-2xl">
                                      {step.visual}
                                   </div>
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 );
              })}
           </div>

           {/* Right Panel Diagram (Desktop Only) */}
           <div className="hidden lg:block relative min-h-[500px] xl:min-h-[620px] w-full">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStep.id}
                   initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
                   animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                   exit={{ opacity: 0, y: -30, scale: 0.98, filter: "blur(10px)" }}
                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                   className="absolute inset-0"
                 >
                    <div className="glass-card p-12 xl:p-16 bg-surface/30 border-2 border-[#49A5BD]/20 rounded-[48px] xl:rounded-[64px] h-full shadow-2xl overflow-hidden relative flex flex-col group hover:border-cyan-400/40 transition-all duration-700">
                       <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/10 blur-[120px] rounded-full -mr-40 -mt-40 transition-opacity duration-700 pointer-events-none group-hover:bg-cyan-400/20" />
                       
                       <div className="relative z-10 flex flex-col h-full space-y-10">
                          <p className="text-xl xl:text-3xl text-body font-bold leading-relaxed max-w-xl group-hover:text-foreground/90 transition-colors">
                             {activeStep.description}
                          </p>
                          <div className="flex-1 rounded-[40px] border-2 border-white/5 bg-surface/40 overflow-hidden relative shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] flex items-center justify-center p-12 mt-auto group-hover:border-cyan-400/10 transition-colors">
                             {/* Ambient overlay inside diagram container */}
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                             {activeStep.visual}
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>

        </div>
      </div>
    </section>
  );
}
