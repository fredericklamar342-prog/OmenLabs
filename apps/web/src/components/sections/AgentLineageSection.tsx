"use client";

import { motion } from "framer-motion";
import { GitBranch01, UserPlus01, ShieldTick, Share07, Activity } from "@untitled-ui/icons-react";
import SuiIcon from "@/components/icons/SuiIcon";

export function AgentLineageSection() {
  return (
    <section className="py-24 md:py-32 xl:py-48 relative z-10 bg-[#0B0C10] border-y border-white/5" aria-labelledby="lineage-title">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#49A5BD]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-container px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
          
          {/* Visual Side: The Graph */}
          <div className="relative order-2 lg:order-1">
             <div className="bg-[#111418] p-8 md:p-12 rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden group">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #49A5BD 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                
                <div className="flex items-center justify-between mb-12 relative z-10">
                   <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center text-[#49A5BD] group-hover:bg-[#49A5BD] group-hover:text-white transition-all duration-500 shadow-md">
                         <GitBranch01 className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                         <h4 className="font-outfit font-black text-white text-lg tracking-tight uppercase">Lineage Node</h4>
                         <p className="text-[10px] font-mono text-[#49A5BD] uppercase tracking-[0.25em] font-black italic">Active Hierarchy</p>
                      </div>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20">
                      <Share07 className="w-4 h-4" />
                   </div>
                </div>
                
                <div className="space-y-8 relative">
                   {/* Connection line - Thicker and Glowy */}
                   <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#49A5BD] via-[#49A5BD]/20 to-[#49A5BD]/10 shadow-[0_0_10px_rgba(73,165,189,0.2)]" />
                   
                   {/* Parent Node */}
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex items-center gap-6 relative z-10"
                   >
                      <div className="w-14 h-14 rounded-2xl bg-[#151922] border-2 border-[#49A5BD]/30 flex items-center justify-center text-white font-black text-lg shadow-lg">
                        LB
                      </div>
                      <div className="bg-[#151922] p-5 rounded-2xl border border-white/10 flex-1 shadow-md">
                         <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-black text-white tracking-tight uppercase font-outfit">Lamar Builder</p>
                            <span className="text-[8px] font-mono font-black text-teal-400 uppercase tracking-widest">OmenBadge</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <SuiIcon className="w-3 h-3 grayscale" />
                            <p className="text-[10px] text-body font-bold uppercase tracking-widest opacity-70">Parent Identity</p>
                         </div>
                      </div>
                   </motion.div>

                   {/* Child Agent Node */}
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="flex items-center gap-6 relative z-10 ml-8 md:ml-12"
                   >
                      <div className="w-12 h-12 rounded-2xl bg-[#151922] border border-white/10 flex items-center justify-center text-[#49A5BD] font-black text-lg shadow-md">
                        A1
                      </div>
                      <div className="bg-[#0B0C10] p-5 rounded-2xl border border-white/5 flex-1 shadow-inner">
                         <p className="text-sm font-black text-white/80 tracking-tight uppercase font-outfit">TradeBot_v2</p>
                         <p className="text-[10px] text-body font-bold uppercase tracking-widest mt-0.5 opacity-50">Autonomous Agent</p>
                      </div>
                   </motion.div>

                   {/* Event Node */}
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="flex items-center gap-6 relative z-10 ml-16 md:ml-24"
                   >
                      <div className="w-10 h-10 rounded-2xl bg-[#151922] border border-red-500/30 flex items-center justify-center text-red-500 font-black shadow-md">
                        !
                      </div>
                      <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/10 flex-1">
                         <p className="text-[10px] font-black text-red-400 uppercase tracking-widest mb-1">Reputation Slashing</p>
                         <p className="text-[9px] text-red-400/60 font-medium italic">Creator Accountable for Agent Drift</p>
                      </div>
                   </motion.div>
                </div>
             </div>
          </div>

          {/* Text Side: The Logic */}
          <div className="order-1 lg:order-2 space-y-10">
             <div className="bg-[#111418] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#49A5BD]/5 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#0B0C10] border border-white/10 rounded-full mb-8 relative z-10">
                   <UserPlus01 className="w-4 h-4 text-[#49A5BD]" />
                   <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#49A5BD]">Agent Accountability</span>
                </div>
                
                <h2 id="lineage-title" className="text-4xl md:text-5xl xl:text-6xl font-black text-white uppercase leading-[0.95] tracking-tighter font-outfit mb-8 relative z-10">
                  Trust Ripples <br /> Through the <br /> <span className="text-gradient">Lineage Graph.</span>
                </h2>
                
                <p className="text-lg text-body leading-relaxed font-bold tracking-tight mb-10 relative z-10">
                  Omen introduces the <strong>Agentic Lineage Graph</strong>. AI agents are no longer anonymous shadows; they are cryptographically linked to their human creators. Accountability is inherited.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                   <div className="bg-[#151922] p-6 rounded-2xl border border-white/5">
                      <Activity className="w-5 h-5 text-[#49A5BD] mb-3" />
                      <h5 className="text-[11px] font-black text-white uppercase tracking-wider mb-2">Reputation Inheritance</h5>
                      <p className="text-[11px] text-body opacity-60 leading-normal font-medium">Agents start with a fraction of creator's score.</p>
                   </div>
                   <div className="bg-[#151922] p-6 rounded-2xl border border-white/5">
                      <ShieldTick className="w-5 h-5 text-[#49A5BD] mb-3" />
                      <h5 className="text-[11px] font-black text-white uppercase tracking-wider mb-2">Recursive Slashing</h5>
                      <p className="text-[11px] text-body opacity-60 leading-normal font-medium">Protocol-level penalties flow back to the parent.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

