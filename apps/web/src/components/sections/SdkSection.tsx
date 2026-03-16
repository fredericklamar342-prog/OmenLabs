"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  Terminal, 
  ShieldCheck, 
  Database, 
  ChevronRight,
  ArrowRight,
  Code2,
  Activity,
  Cpu,
  Lock
} from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

type DocItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  tag: string;
  hash: string;
  content: React.ReactNode;
};

const DOCS_ITEMS: DocItem[] = [
  {
    id: "setup",
    title: "SDK Setup",
    subtitle: "Install & initialize the provider",
    icon: Terminal,
    tag: "MODULE_01",
    hash: "0xOMEN::INIT_PROVIDER",
    content: (
      <div className="space-y-6">
        <p className="text-sm md:text-base text-body font-bold leading-relaxed max-w-lg">
          Install the Omen SDK to begin integrating Move-native trust checks. Connect directly to Sui RPC and Omen Registry for real-time reputation gating.
        </p>
        <div className="bg-[#0D0F14] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-5 py-3 bg-[#111418] border-b border-white/5">
            <div className="flex items-center gap-2">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10" />
               </div>
               <span className="text-[10px] text-body font-mono uppercase tracking-widest ml-2 opacity-40">package.json</span>
            </div>
            <span className="text-[10px] text-[#49A5BD] font-mono font-black">v1.4.2_STABLE</span>
          </div>
          <div className="p-8 font-mono text-sm leading-6">
            <div className="flex gap-4">
               <span className="text-white/20 select-none">01</span>
               <code className="text-[#49A5BD]"><span className="text-white/40">$</span> npm install @omen-protocol/sdk</code>
            </div>
            <div className="flex gap-4 mt-2">
               <span className="text-white/20 select-none">02</span>
               <code className="text-white">import {"{ OmenProvider }"} from "@omen-sdk";</code>
            </div>
            <div className="flex gap-4 mt-2">
               <span className="text-white/20 select-none">03</span>
               <code className="text-white/60">const omen = new OmenProvider();</code>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "verify",
    title: "Verify Reputation",
    subtitle: "Check protocol reputation",
    icon: ShieldCheck,
    tag: "MODULE_02",
    hash: "0xOMEN::GUARD_LOGIC",
    content: (
      <div className="space-y-6">
        <p className="text-sm md:text-base text-body font-bold leading-relaxed max-w-lg">
          Query the builder reputation score for any target protocol. Prevent interactions with unverified code before signing PTB transactions.
        </p>
        <div className="bg-[#0D0F14] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-5 py-3 bg-[#111418] border-b border-white/5">
            <div className="flex items-center gap-2">
               <Code2 className="w-3.5 h-3.5 text-[#49A5BD]" />
               <span className="text-[10px] text-body font-mono uppercase tracking-widest ml-1 opacity-40">guards.ts</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] text-green-500 font-mono font-black">REPUTATION_GATE_ACTIVE</span>
            </div>
          </div>
          <div className="p-8 font-mono text-sm leading-6">
            <div className="text-white/80">
               <span className="text-[#49A5BD] font-black italic">const</span> trustScore = <span className="text-[#49A5BD]">await</span> omen.getScore(targetAddress);
            </div>
            <div className="text-white/80 mt-2">
               <span className="text-[#49A5BD] font-black italic">if</span> (trustScore &lt; <span className="text-orange-400">85</span>) {"{"}
            </div>
            <div className="text-white/40 ml-4">
               // Abort transaction if reputation fails
            </div>
            <div className="text-white/80 ml-4">
               abortFlow(<span className="text-orange-400">"UNTRUSTED_CONTRACT"</span>);
            </div>
            <div className="text-white/80 mt-1">{"}"}</div>
          </div>
          <div className="bg-[#111418]/50 border-t border-white/5 px-6 py-4">
             <div className="flex items-center gap-4 text-[10px] font-mono">
                <span className="text-white/30 uppercase tracking-widest">Execution Result:</span>
                <span className="text-white font-black">[92 / 100] INSTITUTIONAL_GRADE</span>
                <div className="h-3 w-px bg-white/10" />
                <span className="text-white/30 uppercase tracking-widest">Source:</span>
                <span className="text-[#49A5BD] font-black">SUI_SCANNER</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "api",
    title: "Method Index",
    subtitle: "Complete method documentation",
    icon: Database,
    tag: "MODULE_03",
    hash: "0xOMEN::API_STUB",
    content: (
      <div className="space-y-6 h-full flex flex-col">
        <p className="text-sm md:text-base text-body font-bold leading-relaxed">
          Zero-dependency endpoints strictly engineered for high-frequency agents and enterprise wallets.
        </p>
        <div className="bg-[#0D0F14] rounded-2xl border border-white/5 overflow-hidden shadow-2xl flex-1">
           <div className="grid grid-cols-[1fr_auto] border-b border-white/5">
              <div className="px-6 py-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Function Signature</div>
              <div className="px-6 py-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">Gas Complexity</div>
           </div>
           {[
             { name: "getReputation(address)", gas: "O(1)" },
             { name: "getBadgeLineage(address)", gas: "O(N)" },
             { name: "verifySoulbound(address)", gas: "O(logN)" },
           ].map((method, i) => (
             <div key={i} className="grid grid-cols-[1fr_auto] border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="px-6 py-5 font-mono text-xs text-[#49A5BD] font-bold">{method.name}</div>
                <div className="px-6 py-5 font-mono text-xs text-white/40 font-black">{method.gas}</div>
             </div>
           ))}
        </div>
      </div>
    )
  }
];

export function SdkSection() {
  const [activeId, setActiveId] = useState(DOCS_ITEMS[0].id);
  const activeItem = DOCS_ITEMS.find((item) => item.id === activeId)!;

  return (
    <section id="developer" className="py-24 md:py-32 xl:py-48 relative z-10 bg-[#0B0C10] border-t border-white/5" aria-labelledby="sdk-title">
      <div className="max-container px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Context & Selection */}
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111418] border border-white/10 rounded-full">
                <Terminal className="w-4 h-4 text-[#49A5BD]" />
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#49A5BD]">Developer Ecosystem</span>
              </div>
              <h2 id="sdk-title" className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white uppercase leading-[0.95] tracking-tighter font-outfit">
                Simple <br /> <span className="text-gradient">To Integrate.</span>
              </h2>
              <p className="text-lg text-body leading-relaxed max-w-md font-bold tracking-tight">
                Wallets, dApps, and autonomous AI agents integrate the SDK to verify protocol safety in legacy-compliant milliseconds.
              </p>
            </div>

            <div className="space-y-3">
              {DOCS_ITEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button 
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${isActive ? 'bg-[#111418] border-[#49A5BD]/50 shadow-[0_0_30px_rgba(73,165,189,0.1)]' : 'border-white/5 bg-transparent hover:bg-white/[0.02] opacity-60 hover:opacity-100'}`}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-[#49A5BD] text-white shadow-lg' : 'bg-[#151922] text-white/40'}`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                           <div className="text-[9px] font-black uppercase tracking-widest text-[#49A5BD] font-mono mb-0.5">{item.tag}</div>
                           <h3 className={`text-base font-black uppercase tracking-tight font-outfit ${isActive ? 'text-white' : 'text-body'}`}>{item.title}</h3>
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'text-[#49A5BD]' : 'text-white/20'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <Button size="lg" className="w-full h-14 bg-[#111418] border border-white/10 hover:border-[#49A5BD]/40 text-white font-bold uppercase tracking-widest text-xs rounded-2xl shadow-xl transition-all" asChild>
               <Link href="/docs" className="flex items-center justify-between px-8">
                  <span>Explore Documentation</span>
                  <ArrowRight className="w-4 h-4 text-[#49A5BD]" />
               </Link>
            </Button>
          </div>

          {/* Right Column: Premium IDE Showcase */}
          <div className="relative">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#111418] border border-white/5 p-8 md:p-12 lg:p-16 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]"
                >
                   {/* Background Decorative Metadata */}
                   <div className="absolute top-8 right-12 text-[9px] font-mono font-black text-white/10 uppercase tracking-[0.5em] hidden xl:block">
                      {activeItem.hash}
                   </div>
                   
                   <div className="flex-1 flex flex-col justify-center">
                      {activeItem.content}
                   </div>

                   <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                      <div className="flex flex-col gap-1">
                         <span className="text-[10px] font-mono font-black uppercase text-[#49A5BD] tracking-widest">Protocol Endpoint</span>
                         <span className="text-[12px] font-black text-white uppercase tracking-tighter font-outfit">rpc.omen.network/v1/registry</span>
                      </div>
                      <div className="flex items-center gap-6">
                         {[
                           { label: 'Latency', value: '14ms' },
                           { label: 'Integrity', value: 'SHA-256' }
                         ].map((stat, i) => (
                           <div key={i} className="flex flex-col gap-0.5 text-right">
                              <span className="text-[9px] font-mono font-black text-white/30 uppercase">{stat.label}</span>
                              <span className="text-[11px] font-black text-white">{stat.value}</span>
                           </div>
                         ))}
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

