"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck01, Activity, ShieldTick, CpuChip01, ChevronRight, Fingerprint04, Database01, SearchMd } from "@untitled-ui/icons-react";
import GoogleIcon from "@/components/icons/GoogleIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

type StepId = "identity" | "reputation" | "protection" | "accountability";

const steps = [
  {
    id: "identity" as StepId,
    title: "Identity Layer",
    description: "Developers create an OmenBadge using zkLogin to link Web2 reputation permanently to their on-chain identity.",
    icon: UserCheck01,
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
                  <Fingerprint04 className="w-8 h-8 text-[#49A5BD] relative z-10" />
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
                  <Database01 className="w-5 h-5" />
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
    icon: ShieldTick,
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
                   <div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center"><ShieldTick className="w-4 h-4 text-red-500"/></div>
                   <div>
                     <div className="text-[10px] font-black uppercase text-red-500 tracking-wider">Transaction Blocked</div>
                     <div className="text-[8px] font-mono text-body uppercase tracking-wider">Score &lt; 60 Threshold</div>
                   </div>
                </motion.div>
                <div className="absolute inset-0 bg-red-500/5 pulse-slow" />
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
    icon: CpuChip01,
    tag: "STEP 04",
    visual: (
       <div className="w-full h-full flex flex-col items-center justify-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-surface border-2 border-[#49A5BD] flex items-center justify-center relative shadow-[0_0_20px_rgba(73,165,189,0.2)]">
             <UserCheck01 className="w-8 h-8 text-[#49A5BD]" />
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
                   <CpuChip01 className="w-5 h-5 text-body" />
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
        <div className="grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 lg:gap-16 items-start">
           
           {/* Left Sidebar Steps */}
           <div className="flex flex-col gap-3 sm:gap-4">
              {steps.map((step) => {
                 const isActive = step.id === activeId;
                 return (
                    <div key={step.id} className="relative">
                       <button
                         onClick={() => setActiveId(step.id)}
                         className={["w-full text-left p-5 md:p-6 rounded-2xl md:rounded-[32px] border-2 transition-all duration-300 group outline-none relative overflow-hidden", isActive ? "border-[#49A5BD] bg-[#49A5BD]/5 shadow-[0_0_30px_rgba(73,165,189,0.1)]" : "border-[#49A5BD]/10 bg-surface/30 hover:border-[#49A5BD]/30 hover:bg-surface/50 opacity-70 hover:opacity-100"].join(" ")}
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
                          <div className="flex items-center gap-4 md:gap-6 relative z-10">
                             <div className={["w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border transition-colors duration-500 flex items-center justify-center shrink-0", isActive ? "bg-[#49A5BD] border-[#49A5BD] text-white shadow-xl" : "bg-surface border-white/10 text-[#49A5BD] group-hover:border-[#49A5BD]/30"].join(" ")}>
                                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                             </div>
                             <div>
                                <div className={["text-[9px] sm:text-[10px] uppercase font-mono tracking-widest mb-1 transition-colors", isActive ? "text-[#49A5BD] font-black" : "text-body font-bold"].join(" ")}>
                                   {step.tag}
                                </div>
                                <h3 className={["text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight font-outfit", isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"].join(" ")}>
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
                                <div className="px-2 pt-4 pb-2">
                                   <p className="text-sm text-body font-bold leading-relaxed">{step.description}</p>
                                   <div className="mt-6 aspect-video rounded-3xl border border-[#49A5BD]/20 bg-surface/30 overflow-hidden relative shadow-inner">
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
           <div className="hidden lg:block relative min-h-[500px] xl:min-h-[580px] w-full">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeStep.id}
                   initial={{ opacity: 0, y: 15, scale: 0.98 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -15, scale: 0.98 }}
                   transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                   className="absolute inset-0"
                 >
                    <div className="glass-card p-10 xl:p-14 bg-surface/30 border-2 border-[#49A5BD]/20 rounded-[40px] xl:rounded-[48px] h-full shadow-2xl overflow-hidden relative flex flex-col group hover:border-[#49A5BD]/40 transition-colors duration-500">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-[#49A5BD]/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-opacity duration-700 pointer-events-none group-hover:bg-[#49A5BD]/20" />
                       
                       <div className="relative z-10 flex flex-col h-full space-y-8">
                          <p className="text-xl xl:text-2xl text-body font-bold leading-relaxed max-w-lg">
                             {activeStep.description}
                          </p>
                          <div className="flex-1 rounded-[32px] border border-[#49A5BD]/20 bg-surface/40 overflow-hidden relative shadow-inner flex items-center justify-center p-8 mt-auto">
                            {/* Ambient overlay inside diagram container */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(73,165,189,0.05),transparent_60%)] pointer-events-none" />
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
