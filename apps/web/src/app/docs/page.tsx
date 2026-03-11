"use client";

import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import React, { useState } from "react";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  ListChecks,
  ChevronRight,
  Clipboard,
  Cpu,
  Code,
  ChevronDown
} from "lucide-react";

export default function DocsPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "install",
      title: "Core Installation",
      icon: <Terminal className="w-5 h-5" />,
      tag: "V1.02.4",
      content: (
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed">Integrate the Omen Security Framework directly into your runtime. Our SDK is designed for zero-latency trust evaluation.</p>
          <div className="bg-background/50 p-4 sm:p-6 font-mono text-sm border border-border group relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
               <Clipboard className="w-4 h-4 text-subtext hover:text-accent cursor-pointer transition-colors" />
            </div>
            <div className="flex items-center gap-3 mb-4 text-[10px] text-subtext/40 font-bold uppercase tracking-[0.2em] border-b border-border/50 pb-3">
              <Terminal className="w-3 h-3" /> bash_terminal
            </div>
            <code className="text-foreground block">
              <span className="text-subtext/40">$</span> npm install <span className="text-accent">@omen-labs/sdk-shield</span>
            </code>
          </div>
        </div>
      )
    },
    {
      id: "quickstart",
      title: "Registry Handshake",
      icon: <BookOpen className="w-5 h-5" />,
      tag: "NETWORK_SYNC",
      content: (
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed">Initialize the secure client to establish a multi-node handshake with the Omen Registry Cluster.</p>
          <div className="bg-background/80 p-4 sm:p-8 font-mono text-sm border border-border overflow-x-auto relative">
             <div className="flex items-center gap-3 mb-4 sm:mb-6 text-[10px] text-subtext/40 font-bold uppercase tracking-[0.2em] border-b border-border/50 pb-3 sm:pb-4">
              <Code className="w-3 h-3" /> typescript_initialization
            </div>
            <code className="text-subtext/80 block whitespace-pre text-xs sm:text-sm">
{`<span className="text-accent">import</span> { OmenRegistry } <span className="text-accent">from</span> <span className="text-[#2F81F7]">'@omen-labs/sdk'</span>;

<span className="text-subtext/40">// Initialize with Secure Handshake</span>
<span className="text-accent">const</span> omen = <span className="text-accent">new</span> OmenRegistry({ 
  network: <span className="text-[#2F81F7]">'sue_mainnet'</span>,
  apiKey: process.env.OMEN_SECURE_KEY 
});

<span className="text-subtext/40">// Evaluate Trust Multi-factor</span>
<span className="text-accent">const</span> profile = <span className="text-accent">await</span> omen.evaluate(CONTRACT_ID);
console.log(profile.trust_score); <span className="text-subtext/40">// 0-100</span>`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "shield",
      title: "Shield Middleware",
      icon: <ShieldCheck className="w-5 h-5" />,
      tag: "ENFORCEMENT",
      content: (
        <div className="space-y-6">
          <p className="text-subtext leading-relaxed">The Shield module acts as a granular enforcement layer at the transaction edge, preventing interaction with revoked entities.</p>
          <div className="bg-background/50 p-4 sm:p-8 font-mono text-sm border border-border overflow-x-auto">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 text-[10px] text-subtext/40 font-bold uppercase tracking-[0.2em] border-b border-border/50 pb-3 sm:pb-4">
              <Cpu className="w-3 h-3" /> transaction_enforcement
            </div>
            <code className="text-subtext/80 block whitespace-pre text-xs sm:text-sm">
{`<span className="text-accent">await</span> omen.shield.enforce(transaction, {
  target: ASSET_ID,
  minScore: <span className="text-accent">85</span>,
  onBreach: (alert) => {
    <span className="text-subtext/40">// Trigger Automated Revocation Logic</span>
    auditLog.record(alert.severity);
  }
});`}
            </code>
          </div>
        </div>
      )
    },
    {
      id: "thresholds",
      title: "Security Thresholds",
      icon: <CheckCircle2 className="w-5 h-5" />,
      tag: "POLICIES",
      content: (
        <div className="border border-border bg-surface/50 p-6 sm:p-10 space-y-8 sm:space-y-10">
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Policy Configuration</p>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Assertion Levels</h3>
          </div>
          <ul className="space-y-8 sm:space-y-10">
            {[
              { score: "80+", label: "Verified Infrastructure", desc: "Safe for high-volume routing. Automated whitelisting active.", color: "text-green-500" },
              { score: "50+", label: "Advisory Watchlist", desc: "Manual verification recommended. Enforced cooling-off periods recommended.", color: "text-blue-400" },
              { score: "00+", label: "Critical Revocation", desc: "Immediate block. Identity compromise or protocol-level failure detected.", color: "text-accent" },
            ].map((th, i) => (
              <li key={i} className="flex gap-4 sm:gap-8 items-start group">
                <span className={`font-mono text-3xl sm:text-4xl font-bold ${th.color} leading-none tabular-nums shrink-0`}>{th.score}</span>
                <div className="space-y-1 sm:space-y-2">
                  <p className="font-bold text-base sm:text-lg tracking-tight group-hover:text-foreground transition-colors">{th.label}</p>
                  <p className="text-sm text-subtext leading-relaxed max-w-md">{th.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "checklist",
      title: "Deployment Checklist",
      icon: <ListChecks className="w-5 h-5" />,
      tag: "PROD_READY",
      content: (
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Secure Handshake established",
            "Environment variables hardened",
            "Fail-safe redirection logic active",
            "Trust signal listeners registered",
            "E2E telemetry verified",
            "Identity badges synced"
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 border border-border bg-surface p-4 sm:p-6 group hover:border-accent/30 transition-colors cursor-default"
            >
              <div className="w-4 h-4 border border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors">
                <div className="w-1.5 h-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-subtext group-hover:text-foreground transition-colors">{item}</span>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        <PageHeader 
          title="Developer Documentation" 
          description="Build resilient infrastructure with the Omen cryptographic risk engine."
        />

        {/* Mobile: accordion nav */}
        <div className="lg:hidden mt-6 mb-8 glass-panel p-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-subtext/40 mb-3">Jump to section</p>
          <div className="flex flex-wrap gap-2">
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-[11px] font-bold uppercase tracking-wider text-[#4A5568] hover:text-[#43B6D5] bg-white/60 border border-black/5 rounded-lg px-3 py-1.5 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-24 py-4 lg:py-12">
          {/* Desktop Sidebar Nav */}
          <aside className="hidden lg:block">
            <nav className="sticky top-40 space-y-1">
              <div className="px-4 py-2 mb-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-subtext/40">Infrastructure Index</p>
              </div>
              {sections.map(s => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="flex items-center justify-between group px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-subtext hover:text-foreground hover:bg-surface border-l-2 border-transparent hover:border-accent transition-all"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-48">
            {sections.map((s, i) => (
              <section 
                key={s.id} 
                id={s.id} 
                className="scroll-mt-32 space-y-8 sm:space-y-12"
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-border pb-6 sm:pb-8">
                  <div className="flex items-center gap-4 sm:gap-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border border-border bg-surface flex items-center justify-center relative overflow-hidden shrink-0">
                      {s.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Module_0{i+1}</span>
                        <div className="w-1 h-3 bg-border/50 rotate-12 hidden sm:block" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-subtext/40 font-mono italic">{s.tag}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{s.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="lg:pl-24">
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
