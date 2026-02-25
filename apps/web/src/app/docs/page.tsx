"use client";

import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ListChecks,
  ChevronRight,
  Clipboard
} from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      id: "install",
      title: "Install",
      icon: <Terminal className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">Add the Omen SDK to your project via your preferred package manager.</p>
          <div className="bg-[#0A0A0A] p-6 font-mono text-sm border border-white/10 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <Clipboard className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
            </div>
            <code className="text-white block">npm install <span className="text-accent">@omen-labs/sdk</span></code>
          </div>
        </div>
      )
    },
    {
      id: "quickstart",
      title: "Quickstart",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">Initialize the client and start querying trust scores immediately.</p>
          <div className="bg-[#0A0A0A] p-6 font-mono text-sm border border-white/10 overflow-x-auto">
            <code className="text-gray-400 block whitespace-pre">
{`<span className="text-accent">import</span> { OmenSDK } <span className="text-accent">from</span> <span className="text-green-400">'@omen-labs/sdk'</span>;

<span className="text-accent">const</span> omen = <span className="text-accent">new</span> OmenSDK({ network: <span className="text-green-400">'mainnet'</span> });
<span className="text-accent">const</span> { score, status } = <span className="text-accent">await</span> omen.getTrustScore(CONTRACT_ADDRESS);`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "reader",
      title: "Reader Module",
      icon: <Activity className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">The Reader module provides granular access to risk breakdowns and historical trust signals.</p>
          <div className="bg-[#0A0A0A] p-6 font-mono text-sm border border-white/10 overflow-x-auto">
            <code className="text-gray-400 block whitespace-pre">
{`<span className="text-accent">const</span> details = <span className="text-accent">await</span> omen.reader.getBreakdown(CONTRACT_ADDRESS);
console.log(details.identity_score); <span className="text-gray-600">// 0-100</span>`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "shield",
      title: "Shield Middleware",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-subtext">Inject security assertions into your transaction pipeline to prevent malicious interactions at the edge.</p>
          <div className="bg-[#0A0A0A] p-6 font-mono text-sm border border-white/10 overflow-x-auto">
            <code className="text-gray-400 block whitespace-pre">
{`<span className="text-accent">await</span> omen.shield.enforce(tx, {
  target: POOL_ID,
  minTrustScore: <span className="text-orange-400">85</span>,
  categories: [<span className="text-green-400">'defi'</span>, <span className="text-green-400">'bridge'</span>]
});`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "thresholds",
      title: "Threshold Guidance",
      icon: <CheckCircle2 className="w-5 h-5" />,
      content: (
        <div className="rounded-2xl border border-border bg-white/50 p-8 space-y-6 backdrop-blur-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-subtext border-b pb-4">Standard Operational Thresholds</p>
          <ul className="space-y-6">
            <li className="flex gap-6 items-start">
              <span className="font-black font-mono text-3xl text-green-600 leading-none">80+</span>
              <div className="space-y-1">
                <p className="font-bold">Protocol Safe</p>
                <p className="text-sm text-subtext leading-relaxed text-balance">Safe for retail. Recommended for default white-listing and automated routing.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="font-black font-mono text-3xl text-orange-600 leading-none">50+</span>
              <div className="space-y-1">
                <p className="font-bold">Caution Advisory</p>
                <p className="text-sm text-subtext leading-relaxed text-balance">Caution required. Trigger secondary confirmations or specialized disclosure UI components.</p>
              </div>
            </li>
            <li className="flex gap-6 items-start">
              <span className="font-black font-mono text-3xl text-accent leading-none">00+</span>
              <div className="space-y-1">
                <p className="font-bold">High Risk Breach</p>
                <p className="text-sm text-subtext leading-relaxed text-balance">Protocol Failure or Identity Compromise. Block by default in user-facing applications.</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "checklist",
      title: "Integration Checklist",
      icon: <ListChecks className="w-5 h-5" />,
      content: (
        <div className="space-y-2">
          {[
            "Secure API Key in environment variables",
            "Implement fail-safe logic for offline periods",
            "Set appropriate trust thresholds per module",
            "Configure real-time signal listeners",
            "Verify contract addresses on SuiScan"
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 border border-border bg-white/40 p-5 group hover:border-accent/30 hover:bg-white transition-all"
            >
              <div className="w-5 h-5 border-2 border-foreground flex items-center justify-center shrink-0 group-hover:bg-foreground transition-colors">
                <div className="w-2 h-2 bg-transparent group-hover:bg-white transition-colors" />
              </div>
              <span className="text-sm font-bold tracking-tight">{item}</span>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageHeader 
            title="Developer Documentation" 
            description="Build trust directly into your protocol using the Omen SDK."
          />
        </motion.div>

        <div className="grid md:grid-cols-[240px_1fr] gap-20 py-16">
          {/* Sidebar Nav */}
          <aside className="hidden md:block">
            <nav className="sticky top-32 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-subtext mb-6">Documentation Index</p>
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="flex items-center justify-between group p-3 text-[11px] font-bold uppercase tracking-widest text-subtext hover:text-foreground hover:bg-white/50 border-r-2 border-transparent hover:border-accent transition-all"
                >
                  {s.title}
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-40">
            {sections.map((s, i) => (
              <motion.section 
                key={s.id} 
                id={s.id} 
                className="scroll-mt-32 space-y-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center shadow-2xl relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl -z-10" />
                    {s.icon}
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Module 0{i+1}</p>
                    <h2 className="text-4xl font-black tracking-tighter">{s.title}</h2>
                  </div>
                </div>
                <div className="pl-0 md:pl-20">
                  {s.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
