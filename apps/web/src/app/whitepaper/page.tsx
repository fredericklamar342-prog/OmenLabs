"use client";

import { Layout } from "@/components/layout/Layout";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Network,
  BadgeCheck,
  ArrowLeftRight,
  BarChart3,
  Database,
  GitBranch,
  Share2,
  ShieldCheck,
  KeyRound,
  Layers,
  Scale,
  Coins,
  LayoutGrid,
  Rocket,
  Users,
  BookOpen,
  Map,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";

export default function WhitepaperPage() {
  const [activeId, setActiveId] = React.useState("abstract");

  const sections = [
    { 
      id: "abstract", 
      title: "A1. Abstract",
      icon: <Network className="w-5 h-5" />,
      tag: "ROOT_ARCH",
      content: (
        <div className="space-y-6">
          <div className="p-4 bg-[#49A5BD]/10 border-l-4 border-[#49A5BD] rounded-r-xl">
            <p className="text-xs text-foreground font-black uppercase tracking-widest mb-1 italic opacity-70">Confidential — Omen Labs Founding Team — Sui Blockchain (Move VM)</p>
          </div>
          <div className="p-6 bg-[#49A5BD]/5 border-l-4 border-[#49A5BD] rounded-r-xl">
            <h4 className="text-[#49A5BD] font-black uppercase tracking-widest text-xs mb-2">How to read this document</h4>
            <p className="text-sm text-body leading-relaxed font-bold">
              This whitepaper is organized in two parts. Part A covers the technical protocol specification — what Omen is, how it works at the contract level, and every security and infrastructure decision. Part B covers the business model, user experience, and go-to-market strategy. Readers who only need integration details can stop after Part A.
            </p>
          </div>
          <h2 className="text-2xl font-black text-foreground uppercase pt-4">A1. Abstract & System Architecture</h2>
          <p className="text-body leading-relaxed font-bold">Omen Labs is a decentralized reputation protocol designed to solve the accountability crisis in on-chain finance and the emerging agentic economy. It functions as the Read/Write Trust Primitive for the Sui network.</p>
          <p className="text-body leading-relaxed font-bold">The core insight is that Move Registry (MVR) verification confirms what a contract does, not who built it. Omen fills this identity gap by binding on-chain developer addresses to verified off-chain personas, then making that binding programmable, revocable, and queryable in O(1) time.</p>
          <p className="text-body leading-relaxed font-bold">Our architecture integrates Mysten Labs’ four core infrastructure pillars with a native Model Context Protocol (MCP) server: <strong>Storage (Walrus), Execution (Move PTBs), Identity (zkLogin), Liquidity (DeepBook V3).</strong></p>
          <p className="text-body leading-relaxed font-bold">By bridging these pillars, Omen shifts the ecosystem from anonymous risk to programmatic, institutional-grade accountability.</p>
        </div>
      )
    },
    { 
      id: "identity", 
      title: "A2. Identity Primitive",
      icon: <BadgeCheck className="w-5 h-5" />,
      tag: "SOULBOUND_SPEC",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A2. The Move-Native Identity Primitive</h2>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase">A2.1 Object Capability Model</h3>
          <p className="text-body leading-relaxed font-bold">The foundation of the protocol is the OmenBadge — a soulbound identity object. True soulbound enforcement requires two conditions to be satisfied simultaneously:</p>
          <ul className="space-y-3 pl-4">
            <li className="flex gap-3 text-body font-bold text-sm"><span className="text-[#49A5BD]">●</span> <strong>Condition 1:</strong> The object possesses the key ability and strictly lacks store, copy, and drop.</li>
            <li className="flex gap-3 text-body font-bold text-sm"><span className="text-[#49A5BD]">●</span> <strong>Condition 2:</strong> The defining module exposes zero transfer functions. An object with key can still be transferred within its own module via transfer::transfer. Without this second constraint, the badge is not physically soulbound at the bytecode level.</li>
          </ul>
          <div className="p-5 bg-orange-500/10 border border-orange-500/20 rounded-xl">
             <div className="text-orange-500 text-[10px] font-black uppercase mb-2">Correction from v1.0</div>
             <p className="text-xs text-body font-bold italic">Prior versions stated 'key without store = soulbound.' This is incorrect. True soulbound requires both: (1) no store ability, AND (2) no transfer function exposed by the module. The v2.1 contract enforces both.</p>
          </div>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase pt-4">A2.2 zkLogin Authentication — Salt Security</h3>
          <p className="text-body leading-relaxed font-bold text-sm">Badges are minted via verified zkLogin instances (GitHub, X). The backend stores the zkLogin salt in an encrypted key-value store (AWS KMS or HashiCorp Vault). The OmenBadge stores only the zero-knowledge proof commitment on-chain. The raw Web2 identifier is never written to the ledger.</p>
          <div className="p-4 bg-[#49A5BD]/10 border border-[#49A5BD]/20 rounded-xl">
             <p className="text-xs text-body font-bold italic">Salt mismanagement enables off-chain identity correlation. Treat salt storage with the same discipline as private key management.</p>
          </div>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase pt-4">A2.3 Dynamic Field Scaling</h3>
          <p className="text-body leading-relaxed font-bold text-sm">Trust scores, security audits, and behavioral flags are stored as Sui Dynamic Fields attached to the OmenBadge UID. Heavy metadata is anchored to Walrus, with only the Blob ID pointer stored on-chain. This ensures O(1) performance.</p>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase pt-4">A2.4 Sybil Resistance</h3>
          <p className="text-body leading-relaxed font-bold text-sm">Omen uses a three-layer defense: 1. <strong>Staked deposit</strong> (50 SUI), 2. <strong>Score isolation</strong> (starts at zero), 3. <strong>Pool circuit breaker</strong> (auto-pauses on 20% drain).</p>
        </div>
      )
    },
    { 
      id: "seek-remit", 
      title: "A3. Seek & Remit",
      icon: <ArrowLeftRight className="w-5 h-5" />,
      tag: "SYM_ARCH",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A3. The Seek & Remit Architecture</h2>
          <p className="text-body leading-relaxed font-bold text-sm">The Omen system operates as a symmetric read/write primitive. Seek is the read path — wallets and apps querying trust data. Remit is the write path — auditors and the on-chain formula updating it.</p>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase pt-4">A3.1 Seek — Read Data</h3>
          <p className="text-body leading-relaxed font-bold text-sm">The OmenRegistry is a Shared Object. B2B integrators query a target’s verification status and Trust Score in a single transaction block with O(1) complexity.</p>
          <div className="p-4 bg-surface border border-[#49A5BD]/20 rounded-xl font-mono text-xs">
            <div className="text-[#49A5BD] opacity-60">// Returns: (is_verified, trust_score)</div>
            <div className="text-foreground font-bold">OmenRegistry::get_score(target_address) → (bool, u64)</div>
          </div>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase pt-4">A3.2 SDK Fallback</h3>
          <p className="text-body leading-relaxed font-bold text-sm">The SDK queries api.omenlabs.com as primary. If the API times out (2s), it falls back to a direct Sui RPC call on the OmenRegistry.</p>
          <h3 className="text-lg font-black text-[#49A5BD] uppercase pt-4">A3.3 Remit — Write Data</h3>
          <p className="text-body leading-relaxed font-bold text-sm">Only AuditorBadge holders can write trust data. Enforcement is at the Move bytecode level.</p>
        </div>
      )
    },
    { 
      id: "trust-score", 
      title: "A4. Trust Score",
      icon: <BarChart3 className="w-5 h-5" />,
      tag: "DETERMINISTIC",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A4. Trust Score Computation</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Computed on-chain from a deterministic, immutable formula. Score manipulation is impossible without on-chain state changes.</p>
          <div className="p-6 bg-surface border border-[#49A5BD]/20 rounded-2xl text-center space-y-4">
             <code className="text-sm sm:text-base font-black text-[#49A5BD] font-mono">score = f(audit_count, slash_history, stake_amount, recency_weight, lineage_depth)</code>
             <div className="pt-2"><code className="text-xs sm:text-sm font-black text-foreground font-mono">recency_weight = e^(-λ × days_since_last_activity)</code></div>
             <div className="text-[10px] font-black text-[#49A5BD] uppercase tracking-widest pt-2">λ = 0.002 | Score decays to 50% after ~1 year</div>
          </div>
        </div>
      )
    },
    { 
      id: "storage", 
      title: "A5. Storage Layer",
      icon: <Database className="w-5 h-5" />,
      tag: "WALRUS_SUI",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A5. Storage Layer — Walrus Hybrid Architecture</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Omen uses a Hybrid-State architecture. Sui L1 stores only state/hashes; Walrus stores heavy metadata via RedStuff erasure coding.</p>
          <div className="p-5 border-l-4 border-[#49A5BD]/30 bg-surface">
            <h4 className="text-foreground font-black uppercase text-[10px] mb-1">Blob TTL Policy</h4>
            <p className="text-xs text-body font-bold">Renewal every 6 months required. Blobs that cannot be resolved flag the badge as <code>metadata_unavailable</code>.</p>
          </div>
        </div>
      )
    },
    { 
      id: "execution", 
      title: "A6. Execution Layer",
      icon: <GitBranch className="w-5 h-5" />,
      tag: "PTB_GATE",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A6. Execution Layer — DeepBook PTB Middleware</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Injects gating logic into PTBs. Protocols can enforce a minimum Trust Score for founders.</p>
          <div className="p-4 bg-surface border border-[#49A5BD]/20 rounded-xl font-mono text-[10px]">
            <pre className="text-foreground font-bold">tx.moveCall({"{"} target: OMEN_PACKAGE_ID::router::gated_trade, ... {"}"})</pre>
          </div>
          <p className="text-xs text-[#49A5BD] font-black uppercase">Critical: Return type must be (bool, u64), not assert!</p>
          <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl">
            <p className="text-[11px] text-body font-bold italic">Sui threat model is not Ethereum MEV. Actual execution threat is latency arbitrage mitigated by atomicity, not gas-boosted priority.</p>
          </div>
        </div>
      )
    },
    { 
      id: "lineage", 
      title: "A7. Lineage Graph",
      icon: <Share2 className="w-5 h-5" />,
      tag: "LIABILITY",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A7. Agentic Lineage Graph</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Every AI agent is cryptographically tethered to a human founder’s root badge. Accountability is inherited.</p>
          <h4 className="text-foreground font-black uppercase text-xs">Slash Rules (Max Depth 3)</h4>
          <ul className="space-y-2 pl-4">
             <li className="text-xs text-body font-bold"><strong>Level 1:</strong> 100% agent stake burned + 25% parent stake slashed.</li>
             <li className="text-xs text-body font-bold"><strong>Level 2:</strong> 15% grandparent stake slashed.</li>
             <li className="text-xs text-body font-bold"><strong>Level 3+:</strong> No cascade.</li>
          </ul>
        </div>
      )
    },
    { 
      id: "oracle", 
      title: "A8. Oracle Security",
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: "TRIPLE_GUARD",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A8. Oracle Security</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Three safeguards: 1. <strong>TWAP</strong> (prevents flash-loan manipulation), 2. <strong>Dual-oracle median</strong> (Pyth + Switchboard), 3. <strong>Deviation circuit breaker</strong> (dev-pause if &gt;5%).</p>
        </div>
      )
    },
    { 
      id: "recovery", 
      title: "A9. Social Recovery",
      icon: <KeyRound className="w-5 h-5" />,
      tag: "ON_CHAIN_MIG",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A9. Social Recovery</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Enforced on-chain: 1. <strong>Propose</strong> (7-day timelock), 2. <strong>Authorize</strong> (3-of-5 signatures), 3. <strong>Execute</strong> (migrate score/history), 4. <strong>Cancel</strong> (abort by original owner).</p>
        </div>
      )
    },
    { 
      id: "resilience", 
      title: "A10. Indexing",
      icon: <Layers className="w-5 h-5" />,
      tag: "HYBRID_INDEX",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A10. Resilience & Indexing Infrastructure</h2>
          <p className="text-body leading-relaxed font-bold text-sm">PostgreSQL with queryEvents polling fallback. Hybrid Indexer guarantees data availability even across backend restarts via <code>lastEventCursor</code> persistence.</p>
        </div>
      )
    },
    { 
      id: "governance", 
      title: "A11. Governance",
      icon: <Scale className="w-5 h-5" />,
      tag: "PATH_TO_DAO",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">A11. Governance</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Day 1: AdminCap held in 3-of-5 multisig. Transition to timelocked contract at 100 protocols. Key compromise rotation requires 4-of-5 multisig + 48h timelock.</p>
        </div>
      )
    },
    { 
      id: "economics", 
      title: "B1. Business Model",
      icon: <Coins className="w-5 h-5" />,
      tag: "IAAS_REVENUE",
      content: (
        <div className="space-y-6">
          <h2 className="text-[#49A5BD] text-[10px] font-black tracking-widest uppercase mb-4 opacity-70">PART B — BUSINESS MODEL, DESIGN & GO-TO-MARKET</h2>
          <h2 className="text-2xl font-black text-foreground uppercase">B1. Business & Economic Model</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Five streams: <strong>Verification Fees</strong> ($200-500), <strong>Annual Maintenance</strong> ($100), <strong>Enterprise API</strong>, <strong>Audit Marketplace</strong> (15% fee), <strong>Safe Route Premium</strong> (0.05%).</p>
          <div className="p-4 bg-surface border border-[#49A5BD]/20 rounded-xl">
            <p className="text-xs text-body font-bold italic">Note: 50 SUI anti-sybil deposit is separate from verification fees.</p>
          </div>
        </div>
      )
    },
    { 
      id: "design", 
      title: "B2. User Experience",
      icon: <LayoutGrid className="w-5 h-5" />,
      tag: "TRUST_SIGNAL",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">B2. User Experience & Design Language</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Institutional aesthetic: <strong>Charcoal (#0B0C10)</strong> for backgrounds, <strong>Emerald Green (#059669)</strong> for verified status. The Omen Mark (+) is the primary trust signal next to verified trades.</p>
          <p className="text-body leading-relaxed font-bold text-sm"><strong>Cryptographic Insignia:</strong> Precision-engineered seal with zero softness—pure cryptographic authority.</p>
        </div>
      )
    },
    { 
      id: "operations", 
      title: "B3. Go-To-Market",
      icon: <Rocket className="w-5 h-5" />,
      tag: "STRATEGY",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">B3. Go-To-Market & Operations</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Omen’s go-to-market strategy focuses on high-impact protocol integration and establishing a baseline for security awareness across the Sui ecosystem.</p>
        </div>
      )
    },
    { 
      id: "cartel", 
      title: "B3.1. Founder Cartel",
      icon: <Users className="w-5 h-5" />,
      tag: "ALPHA_GROUP",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-foreground uppercase">B3.1 Private Alpha — The Founder Cartel</h3>
          <p className="text-body leading-relaxed font-bold text-sm">Omen Labs bypasses the cold-start problem by hand-onboarding the top 50 protocol founders and AI developers on Sui before Mainnet Genesis. By securing the elite volume drivers first, retail users follow verified talent.</p>
        </div>
      )
    },
    { 
      id: "ledger", 
      title: "B3.2. Loss Ledger",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "SECURITY_ADOPT",
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-foreground uppercase">B3.2 The Loss Ledger</h3>
          <p className="text-body leading-relaxed font-bold text-sm">To drive SDK integration across all major Sui wallets and DEXs, Omen Labs maintains a public ledger of capital lost to unverified contracts on Sui. Integration becomes a PR and security necessity.</p>
        </div>
      )
    },
    { 
      id: "roadmap", 
      title: "B4. Roadmap",
      icon: <Map className="w-5 h-5" />,
      tag: "GENESIS_2026",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase">B4. Roadmap</h2>
          <ul className="space-y-3 pl-4">
             <li className="text-xs text-body font-bold"><strong>Q1 2026:</strong> Genesis, Pilot Program, multisig activation.</li>
             <li className="text-xs text-body font-bold"><strong>Q2 2026:</strong> Mainnet, Omen Shield Extension, Audit Marketplace.</li>
             <li className="text-xs text-body font-bold"><strong>Q3 2026:</strong> Omen Oracle deployment (AI-driven behavior monitoring).</li>
             <li className="text-xs text-body font-bold"><strong>100 Protocols:</strong> Governance decentralization trigger.</li>
          </ul>
        </div>
      )
    },
    { 
      id: "conclusion", 
      title: "Conclusion",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "FINAL_VISION",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-foreground uppercase pt-8">Conclusion</h2>
          <p className="text-body leading-relaxed font-bold text-sm">Omen builds the infrastructure for the Age of Trust. Identity becomes as verifiable as code. The (+) mark becomes invisible when trust is the default.</p>
          <div className="pt-8 text-center"><p className="text-[10px] font-black tracking-[0.5em] text-[#49A5BD] uppercase opacity-60">omen.labs | Sui Blockchain | Protocol Draft v1.0 | March 2026</p></div>
        </div>
      )
    }
  ];

  const activeItem = sections.find(s => s.id === activeId) || sections[0];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-24 animate-fade-up">
           <div className="flex flex-col items-center gap-2 mb-8">
              <span className="text-[11px] sm:text-[13px] font-black tracking-[0.6em] text-[#49A5BD] uppercase block mb-1">OMEN</span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-outfit">Whitepaper v1.0</h1>
              <div className="h-0.5 w-12 bg-[#49A5BD] my-1" />
              <span className="text-[11px] sm:text-[13px] font-black tracking-[0.4em] text-body uppercase">The Sign of Trust</span>
           </div>

           <div className="max-w-3xl glass-card p-8 sm:p-10 border-[#49A5BD]/20 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#49A5BD]/5 blur-[60px] rounded-full -mr-16 -mt-16" />
              <p className="text-base sm:text-lg text-foreground leading-relaxed font-bold mb-8 text-center italic opacity-90">
                "The decentralized identity and attestation protocol for the Sui ecosystem."
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 sm:gap-x-12 border-t border-[#49A5BD]/10 pt-8">
                {[
                  { k: "Author", v: "Omen Labs Founding Team" },
                  { k: "Date", v: "March 2026" },
                  { k: "Version", v: "Protocol Draft v1.0" },
                  { k: "Ecosystem", v: "Sui Blockchain (Move VM)" },
                  { k: "Status", v: "Initial Whitepaper Release" }
                ].map(item => (
                  <div key={item.k}>
                    <div className="text-[10px] font-black uppercase text-[#49A5BD] mb-1 tracking-widest">{item.k}</div>
                    <div className="text-xs sm:text-sm font-black text-white">{item.v}</div>
                  </div>
                ))}
              </div>
           </div>
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
