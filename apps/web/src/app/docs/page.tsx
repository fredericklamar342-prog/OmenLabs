"use client";

import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import React from "react";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ChevronRight,
  Code,
  Globe,
  Users,
  Database,
  Lock,
  Cpu,
  Zap,
  ShieldAlert,
  Network
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      id: "overview",
      title: "Overview",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "CORE_CONCEPT",
      content: (
        <div className="space-y-8">
          <p className="text-[#475569] leading-relaxed text-xl font-medium">
            Omen is a decentralized reputation protocol and trust infrastructure built natively for the Sui ecosystem. It bridges the gap between verified code and verifiable identity.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 my-12">
            <div className="p-8 glass-card border-white/40 bg-white/40 space-y-4">
               <h4 className="text-[#0B1220] font-black flex items-center gap-3 uppercase tracking-widest text-xs">
                 <ShieldCheck className="w-4 h-4 text-[#43B6D5]" /> The Trust Gap
               </h4>
               <p className="text-sm text-[#475569] leading-relaxed font-medium">Web3 lacks a non-transferable reputation layer. Omen fills this by linking real-world credibility to soulbound on-chain identities.</p>
            </div>
            <div className="p-8 glass-card border-white/40 bg-white/40 space-y-4">
               <h4 className="text-[#0B1220] font-black flex items-center gap-3 uppercase tracking-widest text-xs">
                 <Cpu className="w-4 h-4 text-[#43B6D5]" /> Agentic Web
               </h4>
               <p className="text-sm text-[#475569] leading-relaxed font-medium">As AI agents take over trading and governance, Omen provides the "Proof of Creator" layer needed for autonomous safety.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "installation",
      title: "Installation",
      icon: <Terminal className="w-5 h-5" />,
      tag: "SETUP_v2.0",
      content: (
        <div className="space-y-8">
          <p className="text-[#475569] leading-relaxed font-medium">Install the Omen SDK and MCP server tools to begin integrating trust checks into your application.</p>
          <div className="glass-card p-0 border-white overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 px-6 py-4 bg-white border-b border-black/[0.03]">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-[10px] text-[#94A3B8] font-black uppercase tracking-widest ml-2">Terminal</span>
            </div>
            <div className="p-8 bg-[#F8FAFC] font-mono text-sm">
              <code className="text-[#0B1220] block space-y-2">
                <div className="text-[#94A3B8] italic">// Install Omen SDK</div>
                <div><span className="text-[#43B6D5] font-bold">$</span> npm install @omen-protocol/sdk</div>
                <div className="pt-4 text-[#94A3B8] italic">// Install MCP AI Oracle</div>
                <div><span className="text-[#43B6D5] font-bold">$</span> npm install -g @omen-protocol/mcp-server</div>
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "sdk-setup",
      title: "SDK Setup",
      icon: <Code className="w-5 h-5" />,
      tag: "CONFIG_v2.0",
      content: (
        <div className="space-y-8">
          <p className="text-[#475569] leading-relaxed font-medium">Initialize the Omen provider with your Sui RPC and registry package IDs.</p>
          <div className="glass-card p-0 border-white overflow-hidden shadow-2xl">
            <div className="flex items-center gap-3 px-6 py-4 bg-white border-b border-black/[0.03]">
              <span className="text-[10px] text-[#94A3B8] font-black uppercase tracking-widest">omen_config.ts</span>
            </div>
            <div className="p-8 bg-[#F8FAFC] font-mono text-sm overflow-x-auto">
              <code className="text-[#0B1220] block whitespace-pre">
{`import { OmenProvider } from "@omen-protocol/sdk";

const omen = new OmenProvider({
  rpcUrl: "https://fullnode.mainnet.sui.io:443",
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
          <p className="text-[#475569] leading-relaxed font-medium">Query the builder reputation score for any target protocol or address in a single async call.</p>
          <div className="glass-card p-0 border-white overflow-hidden shadow-2xl">
            <div className="p-8 bg-[#F8FAFC] font-mono text-sm overflow-x-auto">
              <code className="text-[#0B1220] block whitespace-pre">
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
           <p className="text-[#475569] leading-relaxed font-medium">Establish institutional assertions based on the Omen risk score distribution.</p>
           <ul className="grid sm:grid-cols-4 gap-6">
              {[
                { score: "85+", label: "Institutional", color: "text-[#27C93F]", bg: "bg-[#27C93F]/5", border: "border-[#27C93F]/20" },
                { score: "60-84", label: "Verified", color: "text-[#43B6D5]", bg: "bg-[#43B6D5]/5", border: "border-[#43B6D5]/20" },
                { score: "30-59", label: "Warning", color: "text-[#FFBD2E]", bg: "bg-[#FFBD2E]/5", border: "border-[#FFBD2E]/20" },
                { score: "0-29", label: "High Risk", color: "text-[#FF5F56]", bg: "bg-[#FF5F56]/5", border: "border-[#FF5F56]/20" },
              ].map((th, i) => (
                <li key={i} className={`p-6 border ${th.border} ${th.bg} rounded-2xl flex flex-col items-center gap-3 shadow-sm`}>
                   <span className={`text-3xl font-black ${th.color}`}>{th.score}</span>
                   <span className="text-[10px] uppercase font-black text-[#0B1220] tracking-widest">{th.label}</span>
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
        <div className="grid sm:grid-cols-2 gap-8">
           {[
             { title: "DeepBook Firewall", desc: "Gate trading pool access based on Omen badges to protect liquidity from anonymous predators.", icon: <Database className="w-4 h-4" /> },
             { title: "Wallet Warning", desc: "Inject a 'Verified Builder' badge into the transaction approval screen in your wallet extension.", icon: <ShieldCheck className="w-4 h-4" /> },
             { title: "AI Agent Safety", desc: "Force autonomous bots to check creator reputation before engaging with new pools.", icon: <Network className="w-4 h-4" /> },
             { title: "Soulbound Index", desc: "Index move-native identities to create a leaderboard of the most trusted Sui developers.", icon: <Users className="w-4 h-4" /> }
           ].map((ex, i) => (
             <div key={i} className="p-8 glass-card border-white/40 bg-white/40 space-y-4 group hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#43B6D5]/10 flex items-center justify-center text-[#43B6D5] group-hover:bg-[#43B6D5] group-hover:text-white transition-all">
                  {ex.icon}
                </div>
                <h5 className="text-[#0B1220] font-black uppercase text-sm tracking-tight">{ex.title}</h5>
                <p className="text-sm text-[#475569] leading-relaxed font-medium">{ex.desc}</p>
             </div>
           ))}
        </div>
      )
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: <Database className="w-5 h-5" />,
      tag: "SDK_v2.0_SPEC",
      content: (
        <div className="space-y-8">
           <div className="glass-card p-0 border-white overflow-hidden shadow-xl">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#F8FAFC] border-b border-black/[0.05]">
                       <th className="py-5 px-8 text-[10px] font-black uppercase text-[#94A3B8] tracking-widest">Method</th>
                       <th className="py-5 px-8 text-[10px] font-black uppercase text-[#94A3B8] tracking-widest">Returns</th>
                       <th className="py-5 px-8 text-[10px] font-black uppercase text-[#94A3B8] tracking-widest">Description</th>
                    </tr>
                 </thead>
                 <tbody className="text-xs">
                    <tr className="border-b border-black/[0.03] hover:bg-[#F8FAFC] transition-colors">
                       <td className="py-6 px-8 font-mono text-[#0B1220] font-bold">getTrustScore(addr)</td>
                       <td className="py-6 px-8 font-mono text-[#43B6D5] font-bold">Promise&lt;num&gt;</td>
                       <td className="py-6 px-8 text-[#475569] font-medium leading-relaxed">Fetches the current 0-100 reputation score for an OmenBadge.</td>
                    </tr>
                    <tr className="border-b border-black/[0.03] hover:bg-[#F8FAFC] transition-colors">
                       <td className="py-6 px-8 font-mono text-[#0B1220] font-bold">getLineage(addr)</td>
                       <td className="py-6 px-8 font-mono text-[#43B6D5] font-bold">Promise&lt;Graph&gt;</td>
                       <td className="py-6 px-8 text-[#475569] font-medium leading-relaxed">Retrieves the parent creator for a given child AI agent identity.</td>
                    </tr>
                    <tr className="hover:bg-[#F8FAFC] transition-colors">
                       <td className="py-6 px-8 font-mono text-[#0B1220] font-bold">getAudit(id)</td>
                       <td className="py-6 px-8 font-mono text-[#43B6D5] font-bold">Promise&lt;Blob&gt;</td>
                       <td className="py-6 px-8 text-[#475569] font-medium leading-relaxed">Fetches a full security report from the Walrus storage network.</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-24 sm:py-32 px-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-24 animate-fade-up">
           <span className="text-[10px] font-black tracking-[0.4em] text-[#43B6D5] uppercase mb-6">Developer Documentation</span>
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[#0B1220] mb-8">Specifications & SDK</h1>
           <p className="text-xl md:text-2xl text-[#475569] max-w-3xl leading-relaxed font-medium">Build the trust layer for the agentic economy using Omen's Move-native reputation primitives.</p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-20 py-12">
          {/* Desktop Sidebar Nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-40 space-y-2">
              <div className="px-5 py-3 mb-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8]">Protocol Guide</p>
              </div>
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="flex items-center justify-between group px-5 py-4 text-[11px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#43B6D5] hover:bg-white border-l-2 border-transparent hover:border-[#43B6D5] rounded-r-xl transition-all shadow-sm hover:shadow-md"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Area */}
          <div className="space-y-48">
            {sections.map((s, i) => (
              <section 
                key={s.id} 
                id={s.id} 
                className="scroll-mt-40 space-y-16 animate-fade-up"
              >
                <div className="flex flex-col gap-8 pb-12 border-b border-black/[0.03]">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#0B1220] flex items-center justify-center text-white shadow-xl">
                      {s.icon}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#43B6D5]">{s.tag}</span>
                        <div className="w-px h-3 bg-black/10" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] font-mono italic">Module_0{i+1}</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1220]">{s.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-20">
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
