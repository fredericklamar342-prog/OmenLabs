"use client";

import { Layout } from "@/components/layout/Layout";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  ChevronDown,
  Code2,
  Users,
  Database,
  Lock,
  Cpu,
  Zap,
  Layers
} from "lucide-react";

/* ──────── API Method Card (mobile stacked) ──────── */
interface ApiMethod {
  method: string;
  returns: string;
  description: React.ReactNode;
}

const apiMethods: ApiMethod[] = [
  {
    method: "getTrustScore(addr)",
    returns: "Promise<num>",
    description: "Fetches the current 0-100 reputation score for an OmenBadge.",
  },
  {
    method: "getLineage(addr)",
    returns: "Promise<Graph>",
    description: "Retrieves the parent creator for a given child AI agent identity.",
  },
  {
    method: "getAudit(id)",
    returns: "Promise<Blob>",
    description: (
      <>Fetches a full security report from the <WalrusIcon className="inline-block w-4 h-4 mx-0.5" /> Walrus storage network.</>
    ),
  },
];

function ApiMethodCard({ method, returns, description }: ApiMethod) {
  return (
    <div className="glass-card p-6 space-y-4 border border-[#49A5BD]/20 group hover:border-[#49A5BD]/40 transition-all duration-300">
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#49A5BD] block mb-1 font-mono">Method</span>
        <code className="font-mono text-sm font-bold text-foreground break-all">{method}</code>
      </div>
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#49A5BD] block mb-1 font-mono">Returns</span>
        <code className="font-mono text-sm font-bold text-[#49A5BD]">{returns}</code>
      </div>
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-[#49A5BD] block mb-1 font-mono">Description</span>
        <p className="text-sm text-body leading-relaxed font-bold">Fetches a full security report from the Walrus storage network.</p>
      </div>
    </div>
  );
}

function ApiDesktopTable() {
  return (
    <div className="glass-card p-0 border border-[#49A5BD]/20 overflow-hidden shadow-2xl shadow-[#49A5BD]/5">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-surface/50 border-b border-[#49A5BD]/10">
              <th className="py-5 px-8 text-[10px] font-black uppercase text-[#49A5BD] tracking-widest font-mono">Method</th>
              <th className="py-5 px-8 text-[10px] font-black uppercase text-[#49A5BD] tracking-widest font-mono">Returns</th>
              <th className="py-5 px-8 text-[10px] font-black uppercase text-[#49A5BD] tracking-widest font-mono">Description</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {apiMethods.map((m, i) => (
              <tr key={i} className={`${i < apiMethods.length - 1 ? "border-b border-[#49A5BD]/5" : ""} hover:bg-surface/30 transition-colors`}>
                <td className="py-6 px-8 font-mono text-foreground font-bold whitespace-nowrap">{m.method}</td>
                <td className="py-6 px-8 font-mono text-[#49A5BD] font-bold whitespace-nowrap">{m.returns}</td>
                <td className="py-6 px-8 text-body font-bold leading-relaxed">{m.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function DocsPage() {
  const [activeId, setActiveId] = React.useState("overview");

  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "CORE_CONCEPT",
      content: (
        <div className="space-y-8">
          <p className="text-[#49A5BD] leading-relaxed text-lg md:text-xl font-bold">
            Omen is a decentralized reputation protocol and trust infrastructure built natively for the Sui ecosystem. It bridges the gap between verified code and verifiable identity.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 my-8 md:my-12">
            <div className="p-6 md:p-8 glass-card space-y-4 border-[#49A5BD]/10 hover:border-[#49A5BD]/30 transition-all duration-300">
               <h4 className="text-[#49A5BD] font-black flex items-center gap-3 uppercase tracking-widest text-xs font-mono">
                 <ShieldCheck className="w-4 h-4" /> THE TRUST GAP
               </h4>
               <p className="text-sm text-body leading-relaxed font-bold">Web3 lacks a non-transferable reputation layer. Omen fills this by linking real-world credibility to soulbound on-chain identities.</p>
            </div>
            <div className="p-6 md:p-8 glass-card space-y-4 border-[#49A5BD]/10 hover:border-[#49A5BD]/30 transition-all duration-300">
               <h4 className="text-[#49A5BD] font-black flex items-center gap-3 uppercase tracking-widest text-xs font-mono">
                 <Cpu className="w-4 h-4" /> AGENTIC WEB
               </h4>
               <p className="text-sm text-body leading-relaxed font-bold">As AI agents take over trading and governance, Omen provides the &ldquo;Proof of Creator&rdquo; layer needed for autonomous safety.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "installation",
      title: "Installation",
      icon: <Terminal className="w-5 h-5" />,
      tag: "SETUP",
      content: (
        <div className="space-y-8">
          <p className="text-body leading-relaxed font-bold">Install the Omen SDK and MCP server tools to begin integrating trust checks into your application.</p>
          <div className="glass-card p-0 overflow-hidden border-[#49A5BD]/20 shadow-2xl">
            <div className="flex items-center gap-3 px-5 md:px-6 py-4 bg-surface border-b border-[#49A5BD]/10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#49A5BD]/30" />
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#49A5BD]/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#49A5BD]" />
              </div>
              <span className="text-[10px] text-[#49A5BD] font-black uppercase tracking-widest ml-2 font-mono">Terminal</span>
            </div>
            <div className="p-5 md:p-8 font-mono text-sm overflow-x-auto">
              <code className="text-[#49A5BD] block space-y-2">
                <div className="opacity-40 italic underline decoration-[#49A5BD]/20">// Install Omen SDK</div>
                <div><span className="text-[#49A5BD] font-black">$</span> npm install @omen-protocol/sdk</div>
                <div className="pt-4 opacity-40 italic underline decoration-[#49A5BD]/20">// Install MCP AI Oracle</div>
                <div><span className="text-[#49A5BD] font-black">$</span> npm install -g @omen-protocol/mcp-server</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "sdk-setup",
      title: "SDK Setup",
      icon: <Code2 className="w-5 h-5" />,
      tag: "CONFIG",
      content: (
        <div className="space-y-8">
          <p className="text-body leading-relaxed font-bold">Initialize the Omen provider with your Sui RPC and registry package IDs.</p>
          <div className="glass-card p-0 overflow-hidden border-[#49A5BD]/20">
            <div className="flex items-center gap-3 px-5 md:px-6 py-4 bg-surface border-b border-[#49A5BD]/10">
              <span className="text-[10px] text-[#49A5BD] font-black uppercase tracking-widest font-mono">omen_config.ts</span>
            </div>
            <div className="p-5 md:p-8 font-mono text-sm overflow-x-auto bg-surface/30">
              <code className="text-foreground block whitespace-pre">
{`import { OmenProvider } from "@omen-protocol/sdk";

const omen = new OmenProvider({
  rpcUrl: "https://fullnode.testnet.sui.io:443",
  packageId: OMEN_PACKAGE_ID,
  registryId: REGISTRY_OBJECT_ID
});`}
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "verify-trust",
      title: "Verify Trust Score",
      icon: <Zap className="w-5 h-5" />,
      tag: "TRUST_LOOKUP",
      content: (
        <div className="space-y-8">
          <p className="text-body leading-relaxed font-bold">Query the builder reputation score for any target protocol or address in a single async call.</p>
          <div className="glass-card p-0 overflow-hidden border border-[#49A5BD]/20">
            <div className="p-5 md:p-8 font-mono text-sm overflow-x-auto bg-surface/50">
              <code className="text-foreground block whitespace-pre">
{`const trustScore = await omen.getTrustScore(protocolAddress);

console.log(\`Reputation Score: \${trustScore}/100\`);

if (trustScore < 85) {
  throw new Error("Protocol failed reputation threshold.");
}`}
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "security-thresholds",
      title: "Security Thresholds",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "GOVERNANCE",
      content: (
        <div className="space-y-10">
           <p className="text-body leading-relaxed font-bold">Establish institutional assertions based on the Omen risk score distribution.</p>
           <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {[
                { score: "85+", label: "INSTITUTIONAL", color: "text-white", bg: "bg-[#49A5BD]", border: "border-[#49A5BD]" },
                { score: "60-84", label: "VERIFIED", color: "text-foreground", bg: "bg-surface", border: "border-[#49A5BD]/30" },
                { score: "30-59", label: "WARNING", color: "text-foreground", bg: "bg-surface/50", border: "border-[#49A5BD]/20" },
                { score: "0-29", label: "HIGH RISK", color: "text-foreground", bg: "bg-surface/30", border: "border-[#49A5BD]/15" },
              ].map((th, i) => (
                <li key={i} className={`p-4 md:p-6 border-2 ${th.border} ${th.bg} rounded-2xl flex flex-col items-center gap-2 md:gap-3 shadow-xl`}>
                   <span className={`text-2xl md:text-3xl font-black ${th.color}`}>{th.score}</span>
                   <span className={`text-[9px] md:text-[10px] uppercase font-black tracking-widest ${th.color === "text-white" ? "text-white" : "text-[#49A5BD]"}`}>{th.label}</span>
                </li>
              ))}
           </ul>
        </div>
      )
    },
    {
      id: "integration-examples",
      title: "Integration Examples",
      icon: <Activity className="w-5 h-5" />,
      tag: "USE_CASES",
      content: (
         <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "DEEPBOOK FIREWALL", desc: "Gate trading pool access based on Omen badges to protect liquidity from anonymous predators.", icon: <Database className="w-4 h-4" /> },
              { title: "WALLET WARNING", desc: "Inject a 'Verified Builder' badge into the transaction approval screen in your wallet extension.", icon: <ShieldCheck className="w-4 h-4" /> },
              { title: "AI AGENT SAFETY", desc: "Force autonomous bots to check creator reputation before engaging with new pools.", icon: <Layers className="w-4 h-4" /> },
              { title: "SOULBOUND INDEX", desc: "Index move-native identities to create a leaderboard of the most trusted Sui developers.", icon: <Users className="w-4 h-4" /> }
            ].map((ex, i) => (
              <div key={i} className="p-6 md:p-8 glass-card space-y-4 group border-[#49A5BD]/10 hover:border-[#49A5BD]/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-[#49A5BD] group-hover:bg-[#49A5BD] group-hover:text-white transition-all shadow-md">
                   {ex.icon}
                </div>
                <h5 className="text-foreground font-black uppercase text-sm tracking-tight font-outfit">{ex.title}</h5>
                <p className="text-sm text-body leading-relaxed font-bold">{ex.desc}</p>
              </div>
            ))}
         </div>
      )
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Database className="w-5 h-5" />,
      tag: "SDK_SPEC",
      content: (
        <div className="space-y-8">
          {/* Desktop table */}
          <div className="hidden md:block">
            <ApiDesktopTable />
          </div>
          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {apiMethods.map((m, i) => (
              <ApiMethodCard key={i} {...m} />
            ))}
          </div>
        </div>
      )
    }
  ];

  const activeItem = sections.find(s => s.id === activeId) || sections[0];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12 sm:mb-16 lg:mb-24 animate-fade-up">
           <div className="flex items-center gap-3 mb-4 sm:mb-6">
             <SuiIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
             <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] text-[#49A5BD] uppercase">Developer Documentation</span>
           </div>
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-foreground mb-4 sm:mb-6 md:mb-8 uppercase font-outfit leading-[0.9] sm:leading-[0.85] text-balance px-2">
             Specifications <br className="hidden lg:block md:hidden" />&amp; SDK
           </h1>
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body max-w-3xl leading-relaxed font-bold px-2 sm:px-0">
             Build the trust layer for the agentic economy using Omen&apos;s Move-native reputation primitives.
           </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Navigation (Desktop & Mobile Accordion Headers) */}
          <div className="flex flex-col gap-3 sm:gap-4 relative z-20">
             {sections.map((item, i) => {
               const isActive = item.id === activeId;
               return (
                 <div key={item.id} className="relative">
                   <button 
                     onClick={() => setActiveId(item.id)}
                     aria-expanded={isActive}
                     className={["w-full text-left p-5 sm:p-6 rounded-2xl sm:rounded-[32px] border-2 transition-all duration-300 relative overflow-hidden group outline-none", isActive ? 'bg-[#49A5BD]/5 border-[#49A5BD] shadow-[0_0_30px_rgba(73,165,189,0.15)] shadow-[#49A5BD]/10' : 'bg-surface/30 border-[#49A5BD]/10 hover:border-[#49A5BD]/40 hover:bg-surface/60 opacity-80 hover:opacity-100'].join(" ")}
                   >
                     {isActive && (
                        <motion.div 
                          layoutId="active-glow-docs"
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
