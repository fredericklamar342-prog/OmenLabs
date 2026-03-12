"use client";

import { Layout } from "@/components/layout/Layout";
import { File02, UserCheck01, LayersThree01, Database01, Zap, CpuChip01, Activity, ShieldTick, CheckCircle, Download01, Share01, Users01 } from "@untitled-ui/icons-react";
import { Button } from "@/components/ui/Button";

const sections = [
  { id: "abstract", title: "1. Abstract" },
  { id: "identity", title: "2. Identity Primitive" },
  { id: "seek-remit", title: "3. Seek / Remit Architecture" },
  { id: "storage", title: "4. Storage Layer" },
  { id: "execution", title: "5. Execution Layer" },
  { id: "ai-oracle", title: "6. AI Oracle Interface" },
  { id: "agent-lineage", title: "7. Agent Lineage Graph" },
  { id: "resilience", title: "8. Resilience Infrastructure" },
  { id: "conclusion", title: "9. Conclusion" },
];

export default function WhitepaperPage() {
  return (
    <Layout>
      <div className="max-container py-24 sm:py-32">
        <div className="flex flex-col items-center text-center mb-24 animate-fade-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#43B6D5]/5 border border-[#43B6D5]/20 rounded-full mb-8">
             <File02 className="w-3.5 h-3.5 text-[#43B6D5]" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#43B6D5]">Private Alpha V1.0 Specification</span>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-[#0B1220] mb-10 leading-[0.85] text-balance">
             The Trust Primitive <br />
             <span className="text-gradient">for the Sui Stack.</span>
           </h1>
           
           <p className="text-xl md:text-2xl text-[#475569] max-w-4xl leading-relaxed font-medium">
             Solving the accountability crisis in on-chain finance and the agentic economy through Move-native reputation infrastructure.
           </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr_280px] gap-16 lg:gap-24 relative">
          {/* Navigation Sidebar */}
          <aside className="hidden lg:block order-1">
             <div className="sticky top-40 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] px-5 mb-4 italic">Protocol Architecture</p>
                <nav className="flex flex-col gap-1">
                   {sections.map((section, i) => (
                      <a 
                        key={section.id} 
                        href={`#${section.id}`} 
                        className="flex items-center justify-between group px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-[#64748B] hover:text-[#43B6D5] transition-all hover:bg-white rounded-xl shadow-sm hover:shadow-md border border-transparent hover:border-black/[0.03]"
                      >
                         <span>{section.title}</span>
                         <div className="w-1.5 h-1.5 rounded-full bg-[#43B6D5]/20 group-hover:bg-[#43B6D5] transition-all" />
                      </a>
                   ))}
                </nav>
             </div>
          </aside>

          {/* Main Content */}
          <article className="order-2 space-y-48">
             {/* 1 Abstract */}
             <section id="abstract" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><File02 className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Abstract</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-xl text-[#475569] leading-relaxed font-medium">
                    The Omen protocol provides a decentralized reputation layer for the Sui ecosystem. By linking human founders to their autonomous agents via zkLogin verified OmenBadges, we establish a permanent accountability layer. The system utilizes Walrus for secure storage of large audit metadata and Move PTBs for on-chain enforcement.
                  </p>
                </div>
             </section>

             {/* 2 Identity Primitive */}
             <section id="identity" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><UserCheck01 className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Identity Primitive</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-xl text-[#475569] leading-relaxed font-medium">
                    The foundation of the protocol is the <strong>OmenBadge</strong>, a soulbound identity object that cannot be transferred or sold.
                  </p>
                  <div className="p-10 glass-card border-white bg-white/40 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#43B6D5]" />
                    <p className="text-lg md:text-xl font-bold text-[#0B1220] italic relative z-10">
                      "Reputation is not a commodity. By making the identity object immobile at the Move bytecode level, we ensure trust belongs to the builder, not the highest bidder."
                    </p>
                  </div>
                </div>
             </section>

             {/* 3 Seek / Remit Architecture */}
             <section id="seek-remit" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><Zap className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Seek / Remit Architecture</h2>
                </div>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  The system operates as a read/write primitive. <strong>Seek</strong> refers to wallets and apps querying the OmenRegistry in real-time. <strong>Remit</strong> refers to security tools pushing audit results back into the builder's score.
                </p>
             </section>

             {/* 4 Storage Layer */}
             <section id="storage" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><Database01 className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Storage Layer</h2>
                </div>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  Heavy metadata—such as raw JSON outputs from AI code audits—is stored via <strong>Walrus Protocol</strong>. OmenBadges store a 256-bit hash and a Blob ID using Sui Dynamic Fields, ensuring O(1) verification efficiency.
                </p>
             </section>

             {/* 5 Execution Layer */}
             <section id="execution" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><LayersThree01 className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Execution Layer</h2>
                </div>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  Omen integrates with <strong>DeepBook V3</strong> to gate trading pools. Protocols can enforce a minimum trust score before allowing a builder to create or manage a liquidity pool, preventing initial seed attacks.
                </p>
             </section>

             {/* 6 AI Oracle Interface */}
             <section id="ai-oracle" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><CpuChip01 className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">AI Oracle Interface</h2>
                </div>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  The <strong>MCP Server</strong> acts as an Oracle, translating complex on-chain reputation data into machine-readable scores for LLM-based autonomous agents and trading bots.
                </p>
             </section>

             {/* 7 Agent Lineage Graph */}
             <section id="agent-lineage" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><Users01 className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Agent Lineage Graph</h2>
                </div>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  AI child agents are cryptographically linked to their creators. Malicious behavior at the agent level results in automatic <strong>reputation slashing</strong> for the parent founder badge, maintaining cross-generational accountability.
                </p>
             </section>

             {/* 8 Resilience Infrastructure */}
             <section id="resilience" className="scroll-mt-48 space-y-12 animate-fade-up">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><Activity className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Resilience Infrastructure</h2>
                </div>
                <p className="text-lg text-[#475569] leading-relaxed font-medium">
                  The OmenRegistry uses a hybrid indexing model with a custom PostgreSQL stack and failover RPC polling to ensure high data availability for institutional B2B partners.
                </p>
             </section>

             {/* 9 Conclusion */}
             <section id="conclusion" className="scroll-mt-48 space-y-12 animate-fade-up pb-32">
                <div className="flex items-center gap-6 pb-6 border-b border-black/[0.05]">
                   <div className="w-12 h-12 bg-[#0B1220] flex items-center justify-center text-white rounded-xl shadow-xl"><CheckCircle className="w-6 h-6"/></div>
                   <h2 className="text-4xl font-extrabold text-[#0B1220] tracking-tight">Conclusion</h2>
                </div>
                <p className="text-xl text-[#475569] leading-relaxed font-medium">
                  Omen is the trust infrastructure standard for the sui-native agentic economy. By making reputation programmatic and non-transferable, we ensure that as the ecosystem grows, accountability remains central to every transaction.
                </p>
             </section>
          </article>

          {/* Resources Sidebar */}
          <aside className="hidden xl:block order-3">
             <div className="sticky top-40 space-y-6">
                <div className="glass-card p-8 border-white bg-white/40 shadow-xl space-y-6">
                   <h4 className="text-[10px] font-black uppercase text-[#0B1220] tracking-[0.3em]">Documentation</h4>
                   <p className="text-xs text-[#475569] font-medium leading-relaxed">Download the complete cryptographic proof of the Omen Reputation Private Alpha V1.0 standard.</p>
                   <Button className="w-full bg-[#0B1220] hover:bg-[#0B1220]/90 text-white border-none text-[11px] font-bold h-12 rounded-xl flex gap-2 shadow-lg transition-all">
                      <Download01 className="w-4 h-4" /> Download PDF
                   </Button>
                </div>
                <div className="glass-card p-8 border-white bg-white/40 shadow-xl space-y-6">
                   <h4 className="text-[10px] font-black uppercase text-[#0B1220] tracking-[0.3em]">Institutional Access</h4>
                   <Button variant="secondary" className="w-full text-[11px] font-bold h-12 rounded-xl flex gap-2 border-black/[0.03] bg-white shadow-sm hover:shadow-md transition-all">
                      <Share01 className="w-4 h-4" /> Share Specification
                   </Button>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
