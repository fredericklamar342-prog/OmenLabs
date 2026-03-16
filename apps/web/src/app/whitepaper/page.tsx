"use client";

import { Layout } from "@/components/layout/Layout";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  UserCheck, 
  Layers, 
  Database, 
  Zap, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  Users
} from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";

export default function WhitepaperPage() {
  const [activeId, setActiveId] = React.useState("abstract");

  const sections = [
    { 
      id: "abstract", 
      title: "Abstract",
      icon: <FileText className="w-5 h-5" />,
      tag: "EXECUTIVE_SUMMARY",
      content: (
        <div className="space-y-8">
          <p className="text-[#49A5BD] leading-relaxed text-lg md:text-xl font-bold">
            The Omen protocol provides a decentralized reputation layer for the Sui ecosystem. By linking human founders to their autonomous agents via zkLogin verified OmenBadges, we establish a permanent accountability layer. The system utilizes Walrus for secure storage of large audit metadata and Move PTBs for on-chain enforcement.
          </p>
        </div>
      )
    },
    { 
      id: "identity", 
      title: "Identity Primitive",
      icon: <UserCheck className="w-5 h-5" />,
      tag: "CORE_IDENTITY",
      content: (
        <div className="space-y-8">
          <p className="text-body leading-relaxed font-bold">
            The foundation of the protocol is the <strong>OmenBadge</strong>, a soulbound identity object that cannot be transferred or sold.
          </p>
          <div className="p-8 md:p-10 glass-card relative overflow-hidden border-[#49A5BD]/20 shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#49A5BD]" />
            <p className="text-base md:text-xl font-bold text-foreground italic relative z-10 pl-4">
              &ldquo;Reputation is not a commodity. By making the identity object immobile at the Move bytecode level, we ensure trust belongs to the builder, not the highest bidder.&rdquo;
            </p>
          </div>
        </div>
      )
    },
    { 
      id: "seek-remit", 
      title: "Seek & Remit",
      icon: <Zap className="w-5 h-5" />,
      tag: "ARCHITECTURE",
      content: (
        <div className="space-y-8">
          <p className="text-body leading-relaxed font-bold">
            The system operates as a read/write primitive. <strong>Seek</strong> refers to wallets and apps querying the OmenRegistry in real-time. <strong>Remit</strong> refers to security tools pushing audit results back into the builder&apos;s score.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 my-8 md:my-12">
            <div className="p-6 md:p-8 glass-card space-y-4 border-[#49A5BD]/10 hover:border-[#49A5BD]/30 transition-all duration-300">
               <h4 className="text-[#49A5BD] font-black uppercase tracking-widest text-xs font-mono flex items-center gap-3">
                 PROCESS 01: SEEK
               </h4>
               <p className="text-sm text-body leading-relaxed font-bold">Real-time reputation validation for institutional gateways and DeFi firewalls.</p>
            </div>
            <div className="p-6 md:p-8 glass-card space-y-4 border-[#49A5BD]/10 hover:border-[#49A5BD]/30 transition-all duration-300">
               <h4 className="text-[#49A5BD] font-black uppercase tracking-widest text-xs font-mono flex items-center gap-3">
                 PROCESS 02: REMIT
               </h4>
               <p className="text-sm text-body leading-relaxed font-bold">Asynchronous security audit ingestion from verified oracles and trust nodes.</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "storage", 
      title: "Storage Layer",
      icon: <Database className="w-5 h-5" />,
      tag: "STORAGE_INFRA",
      content: (
        <p className="text-body leading-relaxed font-bold">
          Heavy metadata—such as raw JSON outputs from AI code audits—is stored via <strong>Walrus Protocol</strong>. OmenBadges store a 256-bit hash and a Blob ID using Sui Dynamic Fields, ensuring O(1) verification efficiency.
        </p>
      )
    },
    { 
      id: "execution", 
      title: "Execution Layer",
      icon: <Layers className="w-5 h-5" />,
      tag: "DEEPBOOK_V3",
      content: (
        <p className="text-body leading-relaxed font-bold">
          Omen integrates with <strong>DeepBook V3</strong> to gate trading pools. Protocols can enforce a minimum trust score before allowing a builder to create or manage a liquidity pool, preventing initial seed attacks.
        </p>
      )
    },
    { 
      id: "ai-oracle", 
      title: "AI Oracle Interface",
      icon: <Cpu className="w-5 h-5" />,
      tag: "ORACLE_SPEC",
      content: (
        <p className="text-body leading-relaxed font-bold">
          The <strong>MCP Server</strong> acts as an Oracle, translating complex on-chain reputation data into machine-readable scores for LLM-based autonomous agents and trading bots.
        </p>
      )
    },
    { 
      id: "agent-lineage", 
      title: "Agent Lineage Graph",
      icon: <Users className="w-5 h-5" />,
      tag: "LINEAGE_PROTOCOL",
      content: (
        <p className="text-body leading-relaxed font-bold">
          AI child agents are cryptographically linked to their creators. Malicious behavior at the agent level results in automatic <strong>reputation slashing</strong> for the parent founder badge, maintaining cross-generational accountability.
        </p>
      )
    },
    { 
      id: "resilience", 
      title: "Resilience Infra",
      icon: <Activity className="w-5 h-5" />,
      tag: "AVAILABILITY",
      content: (
        <p className="text-body leading-relaxed font-bold">
          The OmenRegistry uses a hybrid indexing model with a custom PostgreSQL stack and failover RPC polling to ensure high data availability for institutional B2B partners.
        </p>
      )
    },
    { 
      id: "conclusion", 
      title: "Conclusion",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "FINAL_MANTRA",
      content: (
        <p className="text-[#49A5BD] leading-relaxed text-lg md:text-xl font-bold">
          Omen is the trust infrastructure standard for the Sui-native agentic economy. By making reputation programmatic and non-transferable, we ensure accountability remains central to every transaction.
        </p>
      )
    }
  ];

  const activeItem = sections.find(s => s.id === activeId) || sections[0];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-24 animate-fade-up">
           <div className="flex items-center gap-3 mb-4 sm:mb-6">
             <SuiIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
             <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] text-[#49A5BD] uppercase">Technical Specification V1.0</span>
           </div>
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-white mb-4 sm:mb-6 md:mb-8 uppercase font-outfit leading-[0.9] sm:leading-[0.85] text-balance px-2">
             The Trust Primitive <br />
             <span className="text-white">for the </span>
             <span className="inline-flex items-center gap-3 md:gap-4 text-[#49A5BD]">
               <SuiIcon className="h-[1em] w-[1em] text-white" />
               Sui Stack.
             </span>
           </h1>
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body max-w-4xl leading-relaxed font-bold px-4">
             Solving the accountability crisis in on-chain finance and the agentic economy through Move-native reputation infrastructure.
           </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Navigation (Desktop & Mobile Accordion Headers) */}
          <div className="flex flex-col gap-3 sm:gap-4 relative z-20">
             {sections.map((item) => {
               const isActive = item.id === activeId;
               return (
                 <div key={item.id} className="relative">
                   <button 
                     onClick={() => setActiveId(item.id)}
                     className={["w-full text-left p-5 sm:p-6 rounded-2xl sm:rounded-[32px] border-2 transition-all duration-300 relative overflow-hidden group outline-none", isActive ? 'bg-[#49A5BD]/5 border-[#49A5BD] shadow-[0_0_30px_rgba(73,165,189,0.15)] shadow-[#49A5BD]/10' : 'bg-surface/30 border-[#49A5BD]/10 hover:border-[#49A5BD]/40 hover:bg-surface/60 opacity-80 hover:opacity-100'].join(" ")}
                   >
                     {isActive && (
                        <motion.div 
                          layoutId="active-glow-whitepaper"
                          className="absolute inset-0 bg-gradient-to-r from-[#49A5BD]/10 to-transparent pointer-events-none"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        />
                     )}
                     <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4 sm:gap-6">
                           <div className={["w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors duration-300 shrink-0", isActive ? 'bg-[#49A5BD] text-white shadow-lg' : 'bg-surface border border-[#49A5BD]/20 text-[#49A5BD] group-hover:bg-[#49A5BD]/10'].join(" ")}>
                              <div className="w-5 h-5 sm:w-6 sm:h-6">{item.icon}</div>
                           </div>
                           <div className="min-w-0">
                               <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#49A5BD] font-mono mb-1 truncate">{item.tag}</div>
                               <h3 className={["text-base sm:text-lg xl:text-xl font-black uppercase tracking-tight font-outfit transition-colors leading-none truncate", isActive ? 'text-foreground' : 'text-body group-hover:text-foreground'].join(" ")}>{item.title}</h3>
                           </div>
                        </div>
                        <ChevronRight className={["w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 shrink-0", isActive ? 'text-[#49A5BD] opacity-100 rotate-90 lg:rotate-0' : 'text-[#49A5BD] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 lg:group-hover:rotate-0'].join(" ")} />
                     </div>
                   </button>
                   
                   {/* Mobile Accordion Content */}
                   <AnimatePresence initial={false}>
                      {isActive && (
                         <motion.div
                            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:hidden overflow-hidden"
                         >
                            <div className="pt-4 pb-2 px-1">
                               {item.content}
                            </div>
                         </motion.div>
                      )}
                   </AnimatePresence>
                 </div>
               );
             })}
          </div>

          {/* Right Content Panel (Desktop Only) */}
          <div className="hidden lg:block relative min-h-[500px] xl:min-h-[580px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="glass-card p-10 xl:p-14 bg-surface/30 border-2 border-[#49A5BD]/20 rounded-[40px] xl:rounded-[48px] h-full shadow-2xl overflow-hidden relative flex flex-col group hover:border-[#49A5BD]/40 transition-colors duration-500">
                   {/* Background Glow */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#49A5BD]/10 blur-[100px] rounded-full -mr-32 -mt-32 transition-opacity duration-700 pointer-events-none group-hover:bg-[#49A5BD]/20" />
                   
                   <div className="relative z-10 flex flex-col h-full space-y-8">
                     <div className="flex items-center justify-between">
                        <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-[#49A5BD] flex items-center justify-center text-white shadow-xl shadow-[#49A5BD]/30 shrink-0">
                           <div className="w-7 h-7 xl:w-8 xl:h-8">{activeItem.icon}</div>
                        </div>
                        <span className="text-[10px] xl:text-[11px] font-black uppercase tracking-[0.4em] text-[#49A5BD] italic font-mono opacity-80">{activeItem.tag}</span>
                     </div>
                     <div className="space-y-6 flex-1 flex flex-col overflow-y-auto custom-scrollbar pr-2 pb-4">
                        <h3 className="text-3xl xl:text-4xl font-black text-foreground tracking-tighter uppercase font-outfit leading-none">{activeItem.title}</h3>
                        <div className="flex-1 flex flex-col justify-start">
                           {activeItem.content}
                        </div>
                     </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </Layout>
  );
}
