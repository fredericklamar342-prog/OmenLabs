import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  Braces,
  CheckCheck,
  Fingerprint,
  FileStack,
  ShieldCheck,
  ShieldEllipsis,
  Sparkles,
  Workflow,
} from "lucide-react";

const lifecycle = [
  {
    title: "Collect trust signals",
    description:
      "Bind wallets, teams, audits, and protocol metadata into a single builder profile without exposing unnecessary personal data.",
    icon: Fingerprint,
  },
  {
    title: "Score and classify risk",
    description:
      "Omen computes a protocol trust index from identity integrity, audit posture, and on-chain behavior to produce enforceable statuses.",
    icon: Activity,
  },
  {
    title: "Enforce in transactions",
    description:
      "Wallets and apps attach policy thresholds directly to execution so low-trust contracts, agents, or integrations can be blocked automatically.",
    icon: ShieldCheck,
  },
  {
    title: "Anchor evidence",
    description:
      "Reports and artifacts are stored against the project record so every decision has a durable audit trail and a human-review path.",
    icon: FileStack,
  },
];

const primitives = [
  {
    title: "Builder Identity Graph",
    description:
      "Map wallets, repos, teams, and contracts to the same protocol identity so users can verify who is actually behind a deployment.",
    icon: Fingerprint,
  },
  {
    title: "Trust Index API",
    description:
      "Return score, status, and freshness metadata in one read so wallets and frontends can render trust before the user signs.",
    icon: BadgeCheck,
  },
  {
    title: "Policy Assertions",
    description:
      "Inject minimum-score requirements into transaction construction to block risky targets at the point of execution.",
    icon: ShieldEllipsis,
  },
  {
    title: "Walrus-backed Evidence",
    description:
      "Anchor audits and supporting files in decentralized storage for reproducible security review and external verification.",
    icon: FileStack,
  },
];

const scorecards = [
  {
    label: "Identity integrity",
    value: "40%",
    detail: "KYB/KYC depth, wallet linkage, team continuity, and provenance confidence.",
  },
  {
    label: "Audit assertions",
    value: "35%",
    detail: "Audit coverage, unresolved findings, recency, and artifact availability.",
  },
  {
    label: "Behavior telemetry",
    value: "25%",
    detail: "Revocations, exploit signals, operator history, and abnormal protocol behavior.",
  },
];

const useCases = [
  "Wallet-level warnings before users sign high-risk protocol interactions.",
  "App-side route protection for integrations, contracts, and AI agents.",
  "Launchpad and grant review workflows with reusable trust evidence.",
  "Protocol dashboards that show trust posture, not just TVL and activity.",
];

const statuses = [
  {
    title: "Verified",
    description: "Eligible for default routing, featured placement, and green-path UX.",
    tone: "border-emerald-200 bg-emerald-50/70 text-emerald-700",
  },
  {
    title: "Watchlist",
    description: "Still queryable, but gated behind extra warnings or human approval.",
    tone: "border-amber-200 bg-amber-50/70 text-amber-700",
  },
  {
    title: "Revoked",
    description: "Automatically blocked by policy when score or evidence drops below threshold.",
    tone: "border-rose-200 bg-rose-50/70 text-rose-700",
  },
];

export default function ProductPage() {
  return (
    <Layout>
      <div className="max-container relative py-20 lg:py-32">
        {/* Aesthetic Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-10" />

        <section className="relative z-10 glass-card overflow-hidden px-8 py-16 md:px-16 md:py-24 lg:px-24 border border-white/5 rounded-[64px] bg-panel/20 backdrop-blur-3xl shadow-3xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary animate-float">
                <Sparkles className="h-4 w-4" />
                Product_Manifest_v2.0
              </div>
              <h1 className="max-w-4xl text-5xl leading-[0.9] md:text-8xl font-black tracking-tighter italic">
                Secure your <br />
                <span className="text-primary italic">Reputation_Stack</span>
              </h1>
              <p className="max-w-2xl text-2xl text-body font-medium leading-relaxed opacity-80">
                Omen is a programmable security layer that links builder identity and trust telemetry directly to the execution edge.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row pt-6">
                <Button size="lg" asChild className="h-18 px-12 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)]">
                  <Link href="/developer">
                    Forge Trust
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="h-18 px-12 text-xl font-black italic glass-panel border border-white/10">
                  <Link href="/docs">Docs</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-[11px] font-black uppercase tracking-[0.4em] text-primary/40">
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Sui-native scoring</span>
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full animate-pulse" /> SDK policy-enforced</span>
                <span className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Walrus audit storage</span>
              </div>
            </div>

            <div className="glass-panel rounded-[50px] border border-primary/20 p-10 md:p-14 bg-panel/40 shadow-3xl relative group overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Workflow className="w-64 h-64 text-primary" />
              </div>

              <div className="mb-12 relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary mb-4 opacity-100">
                  Ingress_Flow
                </p>
                <p className="text-2xl font-black italic text-foreground">Data to Enforcement Lifecycle</p>
              </div>
              <div className="space-y-5 relative z-10">
                {[
                  ["Profile", "Link builder, wallets, repos, and contracts"],
                  ["Score", "Compute trust index and lifecycle status"],
                  ["Assert", "Attach minimum score in transaction flow"],
                  ["Review", "Open evidence, audits, and decision history"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="group/item rounded-3xl border border-white/5 bg-white/5 px-7 py-6 hover:border-primary/20 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-[11px] font-black text-primary mb-2 uppercase tracking-[0.4em] group-hover/item:translate-x-1 transition-transform">{title}</p>
                        <p className="text-sm font-medium text-body leading-relaxed opacity-60">{text}</p>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/40 shadow-[0_0_10px_rgba(67,182,213,0.3)] animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-48 relative">
          <div className="mb-24 max-w-4xl mx-auto text-center">
            <p className="mb-8 text-[11px] font-black uppercase tracking-[0.8em] text-primary opacity-60">
              Primacy_Mechanics
            </p>
            <h2 className="mb-10 text-5xl md:text-8xl font-black italic tracking-tighter leading-tight">Programmable <br /> <span className="text-primary italic">Trust_Dynamics</span></h2>
            <p className="text-2xl text-body font-medium leading-relaxed opacity-80 max-w-3xl mx-auto">
              We make the underlying security layer fully legible and enforceable. What gets scored is what gets enforced.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 px-4">
            {lifecycle.map((item, i) => (
              <div key={item.title} className="glass-card p-12 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group rounded-[40px] shadow-2xl">
                <div className="mb-10 inline-flex rounded-2xl bg-primary/10 border border-primary/20 p-5 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-[0_0_20px_rgba(67,182,213,0.1)]">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-6 text-2xl font-black text-foreground italic tracking-tight uppercase tracking-[0.1em]">{item.title}</h3>
                <p className="text-lg font-medium text-body leading-relaxed opacity-60">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-16 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-card p-10 md:p-16 border border-white/5 rounded-[56px] bg-panel/20 backdrop-blur-3xl">
            <div className="mb-16 flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <Blocks className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/60 mb-2">Primitives_Layer</p>
                <h2 className="mb-0 text-4xl md:text-5xl font-black italic tracking-tight">System Surface</h2>
              </div>
            </div>
            <div className="grid gap-8">
              {primitives.map((item) => (
                <div key={item.title} className="rounded-[32px] border border-white/5 bg-white/3 px-10 py-8 hover:border-primary/20 hover:bg-white/5 transition-all group">
                  <div className="mb-6 flex items-center gap-5">
                    <item.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="mb-0 text-2xl font-black italic tracking-tight text-foreground/90">{item.title}</h3>
                  </div>
                  <p className="text-lg font-medium text-body leading-relaxed opacity-60">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-10 md:p-16 border border-white/5 rounded-[56px] bg-panel/20 backdrop-blur-3xl">
            <div className="mb-16 flex items-center gap-6">
              <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                <CheckCheck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/60 mb-2">Model_Engine</p>
                <h2 className="mb-0 text-4xl md:text-5xl font-black italic tracking-tight text-foreground/90">Trust Composition</h2>
              </div>
            </div>
            <div className="space-y-8">
              {scorecards.map((item) => (
                <div key={item.label} className="rounded-[32px] border border-white/5 bg-white/3 px-10 py-10 hover:border-primary/20 transition-all relative overflow-hidden group">
                  <div className="absolute right-0 top-0 h-full w-1 bg-primary/20 group-hover:w-2 transition-all" />
                  <div className="mb-6 flex items-center justify-between gap-6">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary/60">{item.label}</p>
                    <span className="text-5xl font-black text-primary italic drop-shadow-[0_0_15px_rgba(67,182,213,0.3)]">{item.value}</span>
                  </div>
                  <p className="text-xl font-medium text-body leading-relaxed opacity-70 italic">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-[40px] border border-dashed border-primary/30 bg-primary/5 p-12 relative group">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none" />
              <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-4">Operational_Logic</p>
              <p className="text-xl font-medium text-body leading-relaxed italic opacity-80 relative z-10">
                Policies consume the score as a runtime decision, not a vanity metric. That is the fundamental difference between data content and protocol functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-48">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card p-12 md:p-20 border border-white/5 rounded-[64px] bg-panel/30">
              <div className="mb-16 flex items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/60 mb-2">Policy_States</p>
                  <h2 className="mb-0 text-4xl md:text-5xl font-black italic tracking-tight">Ingress Modes</h2>
                </div>
              </div>
              <div className="space-y-8">
                {[
                  { ...statuses[0], tone: "border-green-500/20 bg-green-500/5 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.1)]" },
                  { ...statuses[1], tone: "border-amber-500/20 bg-amber-500/5 text-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.1)]" },
                  { ...statuses[2], tone: "border-red-500/20 bg-red-500/5 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.1)]" },
                ].map((status) => (
                  <div key={status.title} className={`rounded-[40px] border px-12 py-10 ${status.tone} transition-all hover:scale-[1.02]`}>
                    <p className="text-[11px] font-black uppercase tracking-[0.8em] mb-6 opacity-60 font-mono tracking-widest">{status.title}_SIGNAL</p>
                    <p className="text-2xl font-bold tracking-tight leading-relaxed italic">{status.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-12 md:p-20 border border-white/5 rounded-[64px] bg-panel/30">
              <div className="mb-16 flex items-center gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/60 mb-2">Applications</p>
                  <h2 className="mb-0 text-4xl md:text-5xl font-black italic tracking-tight">Protocol Visibility</h2>
                </div>
              </div>
              <div className="space-y-6">
                {useCases.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-8 rounded-[40px] border border-white/5 bg-white/5 p-10 hover:border-primary/20 hover:bg-white/10 transition-all group"
                  >
                    <div className="mt-1 rounded-2xl bg-primary/10 border border-primary/20 p-4 text-primary group-hover:scale-110 transition-transform">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <p className="text-xl font-bold text-body leading-relaxed group-hover:text-foreground transition-colors italic tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-12 md:p-24 lg:p-32 border border-white/5 rounded-[80px] relative overflow-hidden mb-32 group shadow-3xl">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10 group-hover:bg-primary/20 transition-all duration-1000" />
          <div className="grid gap-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
            <div className="space-y-12">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary">
                Ingress_Interface
              </p>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.9]">Forge on <br /><span className="text-primary italic">Handshake_V4</span></h2>
              <p className="text-2xl text-body font-medium leading-relaxed opacity-80 max-w-xl italic">
                Our SDK enables high-frequency trust reads and transaction-level assertions directly into your existing infrastructure.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row pt-4">
                <Button size="lg" asChild className="h-20 px-12 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)]">
                  <Link href="/developer">Initialize SDK</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="h-20 px-12 text-xl font-black italic glass-panel border border-white/10">
                  <Link href="/dashboard">Explorer</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[48px] border border-white/10 bg-[#0A0F14] p-12 text-sm text-white shadow-3xl relative group/code">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.5em] text-primary/60">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                   omen_handshake.ts
                </div>
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-white/10" />
                   <div className="w-3 h-3 rounded-full bg-white/10" />
                   <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[16px] leading-[1.8] text-foreground/90 font-medium italic">
{`import { OmenHandshake } from "@omen/core";

const omen = new OmenHandshake({ network: "sui_mainnet" });

// Evaluate Rep Shard with Multi-factor
const report = await omen.lookup(ENTITY_HASH);

if (report.trust_factor < 0.85) {
  system.revoke("Revocation: Trust_Threshold_Violation");
}

// Inject On-Chain Enforcement Shard
await omen.assert(transaction, {
  target: ASSET_HASH,
  threshold: 0.85,
});`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
