import { Layout } from "@/components/layout/Layout";
import { Download, Share2, Info, AlertTriangle, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const sections = [
  { id: "overview", title: "1. Overview" },
  { id: "problem", title: "2. The Problem" },
  { id: "solution", title: "3. Our Solution" },
  { id: "architecture", title: "4. Architecture" },
  { id: "security-model", title: "5. Security Model" },
  { id: "badge-registry", title: "6. Badge & Registry Flow" },
  { id: "walrus-storage", title: "7. Walrus Storage" },
  { id: "sdk-integration", title: "8. SDK & Integration" },
  { id: "faq", title: "9. FAQ" },
];

export default function WhitepaperPage() {
  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-[#060A0D] text-foreground">
        <div className="pointer-events-none absolute inset-0 omen-bg" />
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-10" />

        <div className="max-container py-24 lg:py-48 flex flex-col lg:flex-row gap-16 lg:gap-32 relative z-10">
          
          {/* Left Sticky Navigation (TOC) */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-40 glass-card p-10 border border-white/5 bg-panel/30 backdrop-blur-3xl rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.5)]">
              <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-primary mb-10 px-1 italic">
                INDEX_SHARDS
              </h3>
              <nav className="flex flex-col gap-6">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-[15px] font-black italic text-body/40 hover:text-primary transition-all flex items-center gap-4 group uppercase tracking-tight"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all shadow-[0_0_10px_#43B6D5]" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="flex-1 max-w-[900px]">
            
            {/* Header */}
            <div className="mb-32 animate-fade-up">
              <div className="inline-flex items-center gap-4 px-6 py-3 glass-card rounded-2xl mb-10 border border-primary/20 bg-primary/5 shadow-2xl">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary italic">
                  PROTOCOL_DOCUMENTATION_v2.0
                </span>
              </div>
              <h1 className="text-6xl lg:text-9xl font-black tracking-tighter text-foreground mb-10 italic leading-none">
                The <span className="text-primary italic">Omen</span> <br />Whitepaper
              </h1>
              <p className="text-3xl text-body italic leading-relaxed max-w-3xl opacity-60">
                Programmable security primitives, on-chain identity flow, and decentralized audit telemetry for the next era of decentralized finance.
              </p>
            </div>

            <div className="prose prose-invert prose-2xl max-w-none prose-a:text-primary prose-headings:italic prose-headings:font-black prose-headings:tracking-tight prose-p:text-body prose-p:italic prose-p:opacity-60 prose-p:leading-relaxed prose-strong:text-foreground prose-strong:font-black">
              
              {/* Overview */}
              <section id="overview" className="scroll-mt-48 mb-24 animate-fade-up stagger-1">
                <h2 className="text-5xl text-foreground mb-10 italic underline decoration-primary/20 underline-offset-8">01_Overview</h2>
                <p>
                  Omen provides a comprehensive suite of security and identity infrastructure designed explicitly for decentralized applications (dApps). By bridging Web2 identity proofs with Web3 accounts via zkLogin, and storing heavy immutable audit trails on Walrus, Omen offers a modular framework to assert protocol safety before a user signs a transaction.
                </p>
                
                <div className="my-16 p-12 glass-card border border-white/5 bg-panel/30 rounded-[48px] flex flex-col md:flex-row gap-8 group hover:border-primary/20 transition-all duration-700 shadow-[0_0_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-700 shadow-2xl">
                    <Info className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <strong className="text-foreground text-2xl block mb-4 italic uppercase tracking-tighter">Decentralized_Trust_Mechanics</strong>
                    <p className="text-xl leading-relaxed mb-0 opacity-100">Our architecture ensures that identity assertions are cryptographically guaranteed. Every shard of telemetry is signed and anchored to decentralized storage in the <span className="text-primary font-black">OMEN_REGISTRY</span>.</p>
                  </div>
                </div>
              </section>

              {/* Problem */}
              <section id="problem" className="scroll-mt-48 mb-24 animate-fade-up stagger-2">
                <h2 className="text-5xl text-foreground mb-10 italic underline decoration-primary/20 underline-offset-8">02_The_Problem</h2>
                <p>
                  The Web3 ecosystem suffers from an acute lack of verifiable trust at the application layer. Users are routinely asked to sign transactions interacting with smart contracts without any cryptographic assurance of the contract's origin, the founder's identity, or the protocol's audit history.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                  {[
                    { label: "ANONYMOUS_RISK", desc: "Founders can rug protocols without real-world identity accountability." },
                    { label: "OPAQUE_AUDITS", desc: "Security reports are fragmented across disparate Web2 silos." },
                    { label: "FRICTION_BARRIER", desc: "Lack of transparency prevents institutional capital entry." }
                  ].map((p, i) => (
                    <div key={i} className="p-8 glass-card border border-white/5 bg-panel/20 rounded-[32px] hover:border-primary/20 transition-all group">
                      <h4 className="text-primary font-black uppercase text-[11px] tracking-widest mb-4 italic">{p.label}</h4>
                      <p className="text-base text-body opacity-60 leading-relaxed mb-0 group-hover:opacity-100 transition-opacity">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Architecture */}
              <section id="architecture" className="scroll-mt-48 mb-24 animate-fade-up stagger-3">
                <h2 className="text-5xl text-foreground mb-10 italic underline decoration-primary/20 underline-offset-8">04_Architecture</h2>
                <p>
                  The Omen Protocol comprises three primary components:
                </p>
                
                <div className="bg-[#05080A] text-primary p-12 rounded-[48px] my-16 shadow-[0_40px_100px_rgba(0,0,0,0.8)] font-mono text-sm overflow-x-auto border border-white/5 relative group backdrop-blur-3xl">
                  <div className="absolute top-6 right-10 text-[10px] font-black uppercase tracking-[0.4em] text-primary/20 group-hover:text-primary transition-opacity italic">SYSTEM_DIAGRAM_V2.0_STABLE</div>
                  <pre className="opacity-80 italic leading-relaxed">
{`[Web2_Identity (X/GitHub)]
          ↓ (Secure_Prover)
[zkLogin_Layer] ───────────> [Omen_Identity_Shard]
                               │
                               ├─> Issue Soulbound_Badge
                               │
[Audit_Shards] ────────────> [Walrus_Network] (Blob IDs)
                               │
                               └─> (Telemetry_Hash_Link)`}
                  </pre>
                </div>
              </section>
              
              {/* Warning Callout Example */}
              <section id="security-model" className="scroll-mt-48 mb-24 animate-fade-up stagger-4">
                <h2 className="text-5xl text-foreground mb-10 italic underline decoration-primary/20 underline-offset-8">05_Security_Model</h2>
                <div className="my-16 p-12 glass-card border border-red-500/20 bg-red-500/5 rounded-[48px] flex flex-col md:flex-row gap-8 shadow-2xl backdrop-blur-3xl">
                  <AlertTriangle className="w-20 h-20 text-red-500 shrink-0 opacity-40" />
                  <div>
                    <strong className="text-red-400 text-2xl block mb-4 italic uppercase tracking-tighter">ZERO_TRUST_ENFORCEMENT</strong>
                    <p className="text-xl leading-relaxed mb-0 opacity-100 italic">Never trust the client runtime. All badge assertions are verified on-chain. If an audit blob hash on Walrus does not match the on-chain registry, the verification sequence fails explicitly.</p>
                  </div>
                </div>
              </section>

            </div>
          </article>

          {/* Right Sidebar (Downloads & Sharing) */}
          <aside className="w-full lg:w-96 shrink-0 animate-fade-up stagger-3">
            <div className="sticky top-40 flex flex-col gap-10">
              <div className="glass-card p-10 border border-white/5 bg-panel/30 backdrop-blur-3xl rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.5)]">
                <h3 className="text-3xl font-black text-foreground mb-6 italic uppercase tracking-tighter">Artifacts</h3>
                <p className="text-xl text-body italic mb-10 leading-relaxed opacity-60">
                  Download the technical whitepaper for deep-dive cryptography and architecture specifications.
                </p>
                <Button size="lg" className="w-full h-20 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)] tracking-tighter">
                  <Download className="w-6 h-6 mr-3" /> Download_PDF
                </Button>
              </div>
              
              <div className="glass-card p-10 border border-white/5 bg-panel/20 rounded-[40px] backdrop-blur-3xl">
                <h3 className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/30 mb-8 px-1 italic">Social_Sync</h3>
                <div className="flex gap-4">
                  <button className="flex-1 h-16 rounded-2xl glass-card border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center justify-center gap-4 text-[13px] font-black italic uppercase tracking-widest text-body/40 hover:text-primary backdrop-blur-xl">
                    <Share2 className="w-5 h-5 text-primary" /> Copy_Node_Link
                  </button>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </Layout>
  );
}
