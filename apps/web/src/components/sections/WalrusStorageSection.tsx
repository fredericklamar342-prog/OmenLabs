"use client";

import { motion } from "framer-motion";
import { Server, Database, BadgeCheck, FileSearch, HardDrive, BarChart, Shield } from "lucide-react";
import WalrusIcon from "@/components/icons/WalrusIcon";
import SuiIcon from "@/components/icons/SuiIcon";

export function WalrusStorageSection() {
  return (
    <section className="py-24 md:py-32 xl:py-48 relative z-10 bg-[#0B0C10] border-t border-white/5" aria-labelledby="walrus-title">
      <div className="max-container px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          {/* Text Side */}
          <div className="space-y-10 animate-fade-up">
             <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111418] border border-white/10 rounded-full">
                <Database className="w-4 h-4 text-[#49A5BD]" />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#49A5BD]">Decentralized Persistence Layer</span>
             </div>
             
              <h2 id="walrus-title" className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white uppercase leading-[0.95] tracking-tighter font-outfit">
               Built on <br /> <span className="text-gradient">Walrus Protocol.</span>
              </h2>
             
             <p className="text-lg text-body leading-relaxed max-w-xl font-bold tracking-tight">
               Large audit reports and AI security data are stored on Walrus, while cryptographic proofs remain on the Sui blockchain. This hybrid-state storage allows <strong>O(1) trust verification</strong> with near-zero gas costs.
             </p>

             <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Persistence", desc: "Security data outlives projects.", icon: FileSearch },
                  { title: "Anchoring", desc: "Proofs pinned to Sui blockchain.", icon: BadgeCheck },
                  { title: "Retrieval", desc: "Instant Blob ID access.", icon: HardDrive },
                ].map((item, i) => (
                   <div key={i} className="flex flex-col gap-4 p-6 border border-white/5 bg-[#111418] rounded-[24px] group hover:border-[#49A5BD]/30 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-[#49A5BD] group-hover:bg-[#49A5BD] group-hover:text-white transition-all">
                         <item.icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                         <h5 className="text-[11px] font-black text-white uppercase tracking-wider">{item.title}</h5>
                         <p className="text-[10px] text-body opacity-60 font-medium leading-normal">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

           {/* Visual Side: Layered Storage Grid */}
          <div className="relative">
             <div className="bg-[#111418] border border-white/5 p-12 lg:p-16 rounded-[40px] shadow-2xl overflow-hidden group">
                {/* Background decorative grid */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#49A5BD 1px, transparent 1px), linear-gradient(90deg, #49A5BD 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                <div className="relative z-10 flex flex-col items-center">
                   {/* Centered Storage Header */}
                   <div className="flex items-center gap-3 mb-10">
                      <WalrusIcon className="w-10 h-10 text-[#49A5BD]" />
                      <div className="h-px w-12 bg-[#49A5BD]/30" />
                      <SuiIcon className="w-10 h-10 text-white/20" />
                   </div>

                   <div className="grid grid-cols-3 gap-3 w-full max-w-[320px]">
                      {Array.from({ length: 9 }).map((_, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: (i === 4 ? 1 : 0.3), scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: i * 0.05 }}
                           className={`aspect-square rounded-2xl border ${i === 4 ? 'border-[#49A5BD] bg-[#49A5BD]/10 shadow-[0_0_20px_rgba(73,165,189,0.2)]' : 'border-white/5 bg-[#0B0C10]'} flex items-center justify-center`}
                         >
                            {i === 4 ? <Database className="w-6 h-6 text-[#49A5BD] animate-pulse" /> : <Shield className="w-4 h-4 text-white/5" />}
                         </motion.div>
                      ))}
                   </div>
                   
                   <div className="mt-12 text-center space-y-3">
                      <div className="inline-flex items-center gap-2 group-hover:scale-105 transition-transform duration-500">
                         <WalrusIcon className="w-5 h-5" />
                         <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-[#49A5BD]">Walrus Engine</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter font-outfit">TB+ Persistent Storage</h4>
                      <p className="text-[11px] font-bold text-body uppercase tracking-[0.2em] opacity-40">Cryptographic Integrity Guaranteed</p>
                   </div>
                </div>
                
                {/* Floating Meta Signal */}
                <div className="absolute top-8 right-8 flex items-center gap-2 bg-[#151922] border border-white/10 px-3 py-1.5 rounded-full">
                   <BarChart className="w-3 h-3 text-[#49A5BD]" />
                   <span className="text-[8px] font-mono font-black text-white uppercase tracking-widest">99.999% Availability</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
