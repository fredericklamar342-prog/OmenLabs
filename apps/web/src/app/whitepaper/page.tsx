"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { File02, UserCheck01, LayersThree01, Database01, Zap, CpuChip01, Activity, ShieldTick, CheckCircle, Download01, Share01, Users01, ChevronDown } from "@untitled-ui/icons-react";
import { Button } from "@/components/ui/Button";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";

const whitepaperSections = [
  { 
    id: "abstract", 
    title: "Abstract",
    num: "1",
    icon: File02,
    content: (
      <p className="text-base sm:text-lg md:text-xl text-body leading-relaxed font-bold">
        The Omen protocol provides a decentralized reputation layer for the <span className="inline-flex items-center gap-1.5"><SuiIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Sui</span> ecosystem. By linking human founders to their autonomous agents via <span className="inline-flex items-center gap-1.5 align-middle">zkLogin <GoogleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></span> verified OmenBadges, we establish a permanent accountability layer. The system utilizes <span className="inline-flex items-center gap-1.5 align-middle"><WalrusIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Walrus</span> for secure storage of large audit metadata and Move PTBs for on-chain enforcement.
      </p>
    )
  },
  { 
    id: "identity", 
    title: "Identity Primitive",
    num: "2",
    icon: UserCheck01,
    content: (
      <div className="space-y-6 sm:space-y-8">
        <p className="text-base sm:text-lg md:text-xl text-body leading-relaxed font-bold">
          The foundation of the protocol is the <strong>OmenBadge</strong>, a soulbound identity object that cannot be transferred or sold.
        </p>
        <div className="p-6 sm:p-8 md:p-10 glass-card relative overflow-hidden border-[#49A5BD]/20">
          <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-[#49A5BD]" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground italic relative z-10 pl-3 sm:pl-4">
            &ldquo;Reputation is not a commodity. By making the identity object immobile at the Move bytecode level, we ensure trust belongs to the builder, not the highest bidder.&rdquo;
          </p>
        </div>
      </div>
    )
  },
  { 
    id: "seek-remit", 
    title: "Seek & Remit Architecture",
    num: "3",
    icon: Zap,
    content: (
      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed font-bold">
        The system operates as a read/write primitive. <strong>Seek</strong> refers to wallets and apps querying the OmenRegistry in real-time. <strong>Remit</strong> refers to security tools pushing audit results back into the builder&apos;s score.
      </p>
    )
  },
  { 
    id: "storage", 
    title: "Storage Layer",
    num: "4",
    icon: Database01,
    content: (
      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed font-bold">
        Heavy metadata—such as raw JSON outputs from AI code audits—is stored via <strong><span className="inline-flex items-center gap-1.5 align-middle"><WalrusIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Walrus Protocol</span></strong>. OmenBadges store a 256-bit hash and a Blob ID using <SuiIcon className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1" /> Sui Dynamic Fields, ensuring O(1) verification efficiency.
      </p>
    )
  },
  { 
    id: "execution", 
    title: "Execution Layer",
    num: "5",
    icon: LayersThree01,
    content: (
      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed font-bold">
        Omen integrates with <strong>DeepBook V3</strong> to gate trading pools. Protocols can enforce a minimum trust score before allowing a builder to create or manage a liquidity pool, preventing initial seed attacks.
      </p>
    )
  },
  { 
    id: "ai-oracle", 
    title: "AI Oracle Interface",
    num: "6",
    icon: CpuChip01,
    content: (
      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed font-bold">
        The <strong>MCP Server</strong> acts as an Oracle, translating complex on-chain reputation data into machine-readable scores for LLM-based autonomous agents and trading bots.
      </p>
    )
  },
  { 
    id: "agent-lineage", 
    title: "Agent Lineage Graph",
    num: "7",
    icon: Users01,
    content: (
      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed font-bold">
        AI child agents are cryptographically linked to their creators. Malicious behavior at the agent level results in automatic <strong>reputation slashing</strong> for the parent founder badge, maintaining cross-generational accountability.
      </p>
    )
  },
  { 
    id: "resilience", 
    title: "Resilience Infra",
    num: "8",
    icon: Activity,
    content: (
      <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed font-bold">
        The OmenRegistry uses a hybrid indexing model with a custom PostgreSQL stack and failover RPC polling to ensure high data availability for institutional B2B partners.
      </p>
    )
  },
  { 
    id: "conclusion", 
    title: "Conclusion",
    num: "9",
    icon: CheckCircle,
    content: (
      <p className="text-base sm:text-lg md:text-xl text-body leading-relaxed font-bold">
        Omen is the trust infrastructure standard for the <span className="inline-flex items-center gap-1.5"><SuiIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> Sui-native</span> agentic economy. By making reputation programmatic and non-transferable, we ensure accountability remains central to every transaction.
      </p>
    )
  }
];

/* ──────── Mobile Sidebar Nav ──────── */
function MobileSidebarNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="lg:hidden mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 glass-card border border-[#49A5BD]/20 text-left bg-surface/50"
        aria-expanded={open}
      >
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#49A5BD] font-mono">
          Contents
        </span>
        <ChevronDown className={`w-4 h-4 text-[#49A5BD] transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav 
            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 glass-card border border-[#49A5BD]/20 p-4 space-y-1 bg-surface shadow-2xl overflow-hidden"
          >
            {whitepaperSections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[12px] font-bold uppercase tracking-widest text-[#49A5BD] hover:bg-[#49A5BD]/10 rounded-lg transition-colors font-mono"
              >
                {s.num}. {s.title}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhitepaperPage() {
  return (
    <Layout>
      <div className="max-container py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-24 animate-fade-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#43B6D5]/10 border border-[#43B6D5]/20 rounded-full mb-6 sm:mb-8 shadow-lg">
             <File02 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#43B6D5]" />
             <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-[#43B6D5] font-mono whitespace-nowrap">Technical Specification V1.0</span>
           </div>
           
           <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-foreground mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-[0.85] text-balance font-outfit px-2">
             The Trust Primitive <br className="hidden sm:block" />
             <span className="text-gradient flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mt-2 sm:mt-0">for the <SuiIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 lg:w-20 md:h-16 lg:h-20" /> Sui Stack.</span>
           </h1>
           
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body max-w-4xl leading-relaxed font-bold px-2">
             Solving the accountability crisis in on-chain finance and the agentic economy through Move-native reputation infrastructure.
           </p>
        </div>

        {/* Mobile sidebar nav */}
        <MobileSidebarNav />

        <div className="grid lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr_260px] gap-8 lg:gap-12 xl:gap-16 relative">
          {/* Navigation Sidebar */}
          <aside className="hidden lg:block order-1">
             <div className="sticky top-32 xl:top-40 space-y-1">
                <p className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] text-[#49A5BD] px-5 mb-4 italic font-mono opacity-50">Protocol Architecture</p>
                <nav className="flex flex-col gap-1">
                   {whitepaperSections.map((section) => (
                      <a 
                        key={section.id} 
                        href={`#${section.id}`} 
                        className="flex items-center justify-between group px-5 py-2.5 xl:py-3 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-[#49A5BD] hover:text-foreground transition-all hover:bg-surface rounded-xl font-mono"
                      >
                         <span className="truncate mr-2"><span className="opacity-50">{section.num}. </span>{section.title}</span>
                         <div className="w-1 h-1 rounded-full bg-[#49A5BD]/30 group-hover:bg-[#49A5BD] transition-all shrink-0" />
                      </a>
                   ))}
                </nav>
             </div>
          </aside>

          {/* Main Content */}
          <article className="order-2 space-y-12 sm:space-y-16 lg:space-y-20 min-w-0">
             {whitepaperSections.map((s) => (
               <motion.section 
                 key={s.id} 
                 id={s.id}
                 initial={{ opacity: 0, scale: 0.98, y: 30 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className="scroll-mt-24 sm:scroll-mt-32 lg:scroll-mt-48 relative"
               >
                 <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 border border-[#49A5BD]/10 shadow-2xl relative overflow-hidden group hover:border-[#49A5BD]/40 transition-all duration-500 rounded-[32px] sm:rounded-[40px] hover:shadow-[0_0_30px_rgba(73,165,189,0.15)] bg-surface/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#49A5BD]/5 blur-[60px] rounded-full -mr-16 -mt-16 transition-opacity duration-700 pointer-events-none group-hover:bg-[#49A5BD]/10" />
                    
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 pb-6 sm:pb-8 border-b border-[#49A5BD]/10 font-outfit relative z-10 mb-6 sm:mb-8">
                       <div className="w-10 h-10 md:w-12 md:h-12 bg-[#49A5BD] flex items-center justify-center text-white rounded-[14px] md:rounded-2xl shadow-xl shadow-[#49A5BD]/20 shrink-0">
                          <s.icon className="w-5 h-5 md:w-6 md:h-6"/>
                       </div>
                       <div className="space-y-1">
                          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono italic opacity-70">SECTION 0{s.num}</span>
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight uppercase leading-none">{s.title}</h2>
                       </div>
                    </div>
                    <div className="prose-wrapper relative z-10">
                      {s.content}
                    </div>
                 </div>
               </motion.section>
             ))}
          </article>

          {/* Resources Sidebar */}
          <aside className="hidden xl:block order-3">
             <div className="sticky top-40 space-y-4 lg:space-y-6">
                <div className="glass-card p-6 lg:p-8 space-y-4 lg:space-y-6 border-[#49A5BD]/20 group">
                   <h4 className="text-[9px] lg:text-[10px] font-black uppercase text-[#49A5BD] tracking-[0.2em] lg:tracking-[0.3em] font-mono">Documentation</h4>
                   <p className="text-xs text-body font-bold leading-relaxed group-hover:text-foreground transition-colors">Download the complete cryptographic proof of the Omen Reputation V1.0 standard.</p>
                   <Button className="w-full bg-[#49A5BD] hover:opacity-90 text-white border-none text-[10px] lg:text-[11px] font-black uppercase tracking-widest h-10 lg:h-12 rounded-lg lg:rounded-xl flex gap-1.5 lg:gap-2 shadow-xl shadow-[#49A5BD]/20 transition-all font-mono">
                      <Download01 className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Download PDF
                   </Button>
                </div>
                <div className="glass-card p-6 lg:p-8 space-y-4 lg:space-y-6 border-[#49A5BD]/20 group">
                   <h4 className="text-[9px] lg:text-[10px] font-black uppercase text-[#49A5BD] tracking-[0.2em] lg:tracking-[0.3em] font-mono">Institutional Access</h4>
                   <Button variant="secondary" className="w-full text-[10px] lg:text-[11px] font-black uppercase tracking-widest h-10 lg:h-12 rounded-lg lg:rounded-xl flex gap-1.5 lg:gap-2 border-[#49A5BD]/30 bg-surface/50 hover:bg-surface text-[#49A5BD] shadow-xl hover:shadow-[#49A5BD]/10 transition-all font-mono">
                      <Share01 className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Share Specifics
                   </Button>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
