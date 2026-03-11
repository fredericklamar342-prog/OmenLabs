"use client";

import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { 
  Terminal, 
  ShieldCheck, 
  Settings,
  Zap,
  Lock,
  Search,
  BookOpen,
  ArrowRight,
  Database,
  Cpu,
  FileCode
} from "lucide-react";
import { motion } from "framer-motion";

export default function DocsPage() {
  return (
    <DocsLayout>
      {/* Hero / Introduction */}
      <section id="introduction" className="space-y-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-black uppercase tracking-[0.3em] mb-4 animate-float">
          Documentation v2.4.0_STABLE
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.9] mb-10 italic">
          Forge <br />
          <span className="text-primary italic">Reputation</span>
        </h1>
        <p className="text-2xl text-body font-medium leading-relaxed max-w-4xl opacity-90">
          Integrate the Omen Security Primitives directly into your runtime. Our SDK is designed for zero-latency trust evaluation and real-time decentralized reputation flow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[{
            title: "Quickstart Handshake",
            desc: "Establish a secure protocol handshake in under 120 seconds.",
            icon: Zap,
            href: "#quickstart"
          }, {
            title: "Registry Query Shards",
            desc: "Access cryptographically signed reputation for trillions of entities.",
            icon: Database,
            href: "#registry"
          }].map((card, i) => (
            <a 
              key={i} 
              href={card.href}
              className="group p-10 border border-white/10 rounded-[40px] bg-panel/30 backdrop-blur-3xl hover:border-primary/40 hover:bg-primary/5 transition-all shadow-2xl"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center mb-10 group-hover:border-primary/40 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(67,182,213,0.1)]">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4 flex items-center gap-3 italic tracking-tight text-foreground">
                {card.title} <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-primary" />
              </h3>
              <p className="text-lg font-medium text-body leading-relaxed opacity-70">{card.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="space-y-12 scroll-mt-32 pt-24 border-t border-white/5">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Settings className="w-6 h-6 text-primary" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-black tracking-tight italic text-foreground" id="installation-header">Binary Installation</h2>
          </div>
          <p className="text-xl text-body font-medium leading-relaxed opacity-80">Inject the Omen Security Framework into your dependency graph to begin infrastructure-level trust enforcement.</p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {['npm', 'yarn', 'pnpm'].map(pkg => (
              <button 
                key={pkg}
                className="px-6 py-3 rounded-xl border border-white/5 bg-white/5 text-[11px] font-black uppercase tracking-[0.4em] text-body/40 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {pkg} install
              </button>
            ))}
          </div>
          
          <CodeBlock 
            code="npm install @omen-protocol/shield-sdk" 
            language="bash" 
            filename="shell_session"
          />
        </div>
      </section>

      {/* Registry Handshake */}
      <section id="quickstart" className="space-y-12 scroll-mt-32 pt-24 border-t border-white/5">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Terminal className="w-6 h-6 text-primary" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-black tracking-tight italic text-foreground" id="quickstart-header">Registry Handshake</h2>
          </div>
          <p className="text-xl text-body font-medium leading-relaxed opacity-80">Initialize the secure client sequence to establish a multi-node handshake with the Omen Registry Cluster.</p>
          
          <div className="bg-panel/20 border border-primary/10 p-10 rounded-[40px] backdrop-blur-3xl relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock className="w-64 h-64 text-primary" />
            </div>
            
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-6 opacity-60">System_Initialization_v1</h4>
            <div className="space-y-6">
              <p className="text-lg text-body font-medium mb-8 leading-relaxed">Instantiate the <code className="px-3 py-1 rounded-xl bg-primary/10 border border-primary/20 font-mono text-primary font-black uppercase text-[13px]">OmenClient</code> to access real-time reputation shards from the Sui Mainnet.</p>
              
              <CodeBlock 
                language="typescript"
                filename="OmenInterface.ts"
                code={`import { OmenClient } from '@omen/shield';

// Initialize with Secure Cryptographic Handshake
const omen = new OmenClient({ 
  network: 'sui_mainnet',
  apiKey: process.env.OMEN_SHIELD_KEY 
});

// Evaluate Reputation Shard Multi-factor
const report = await omen.reputation.evaluate(ORIGIN_ID);
console.log(report.trust_factor); // returns 0.00 - 1.00 float`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shield Middleware */}
      <section id="shield" className="space-y-12 scroll-mt-32 pt-24 border-t border-white/5">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary" />
             </div>
             <h2 className="text-4xl lg:text-5xl font-black tracking-tight italic text-foreground" id="shield-header">Shield Enforcement</h2>
          </div>
          <p className="text-xl text-body font-medium leading-relaxed opacity-80">The Shield Enforcement Layer acts as a granular firewall at the transaction edge, preventing interaction with revoked or flagged entities.</p>
          
          <CodeBlock 
            language="typescript"
            filename="security_middleware.ts"
            code={`// Granular Enforcement Sequence
await omen.shield.enforce(payload, {
  target: ASSET_HASH,
  threshold: 0.85,
  onViolation: (signal) => {
    // Automated Revocation Sequence Triggered
    securityLog.transmit(signal.telemetry);
  }
});`}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[{
              score: "0.95+",
              label: "Verified_Prime",
              desc: "Optimal for high-liquidity routing.",
              border: "border-green-500/20"
            }, {
              score: "0.75+",
              label: "Advisory_Shard",
              desc: "Manual telemetry review required.",
              border: "border-blue-400/20"
            }, {
              score: "0.40-",
              label: "Blackhole_Revoked",
              desc: "Immediate system revocation.",
              border: "border-primary/20"
            }].map((level, i) => (LevelCard(level, i)))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-48">
        <div className="p-16 border border-primary/10 bg-panel/40 rounded-[64px] overflow-hidden group text-center relative shadow-3xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[500px] bg-primary/10 rotate-12 blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-all duration-1000" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground italic leading-tight">Request Custom <br /> <span className="text-primary italic">Security_Logic</span></h2>
            <p className="text-body text-xl font-medium max-w-2xl mx-auto opacity-70">Our engineering core assists enterprise protocols in architecting custom risk thresholds and enforcement primitives.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button className="h-16 px-10 bg-primary text-white font-black italic rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(67,182,213,0.3)]">Contact Engineering</button>
              <button className="h-16 px-10 bg-white/5 text-white font-black italic rounded-2xl hover:bg-white/10 transition-all border border-white/10 backdrop-blur-3xl">Join Command Center (Discord)</button>
            </div>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}

function LevelCard(level: any, i: number) {
  return (
    <div key={i} className={`p-8 border ${level.border} rounded-[32px] bg-panel/40 backdrop-blur-3xl space-y-6 group hover:translate-y-[-4px] transition-all`}>
      <span className="text-5xl font-black font-mono tracking-tighter text-primary italic drop-shadow-[0_0_10px_rgba(67,182,213,0.3)]">{level.score}</span>
      <div className="space-y-2">
        <h4 className="font-black text-lg tracking-tight text-foreground italic">{level.label}</h4>
        <p className="text-sm font-medium text-body leading-relaxed opacity-60">{level.desc}</p>
      </div>
    </div>
  );
}

