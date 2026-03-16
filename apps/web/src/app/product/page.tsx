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
    tone: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "Watchlist",
    description: "Still queryable, but gated behind extra warnings or human approval.",
    tone: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  },
  {
    title: "Revoked",
    description: "Automatically blocked by policy when score or evidence drops below threshold.",
    tone: "border-rose-500/30 bg-rose-500/10 text-rose-400",
  },
];

export default function ProductPage() {
  return (
    <Layout>
      <div className="max-container py-8 md:py-12 font-outfit">
        <section className="glass-card overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-14 border-[#49A5BD]/20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#49A5BD]/20 bg-surface/50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">
                <Sparkles className="h-4 w-4" />
                Core Product
              </div>
              <h1 className="max-w-4xl text-4xl leading-[1.02] md:text-5xl lg:text-6xl font-black text-foreground uppercase">
                Trust infrastructure for wallets, apps, and agents on Sui.
              </h1>
              <p className="max-w-3xl text-lg text-body font-bold leading-relaxed">
                Omen is not just a badge. It is a programmable trust stack that links builder identity,
                security evidence, and policy enforcement so users can evaluate who built a protocol before
                they route value into it on the Sui network.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="h-14 px-8 bg-[#49A5BD] text-white hover:bg-[#49A5BD]/90 rounded-xl shadow-xl shadow-[#49A5BD]/20 border-none font-bold" asChild>
                  <Link href="/developer">
                    Build With Omen
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" className="h-14 px-8 bg-surface/80 text-[#49A5BD] border-[#49A5BD]/20 rounded-xl font-bold" asChild>
                  <Link href="/docs">Read Integration Docs</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-black font-mono uppercase tracking-widest text-body">
                <span className="rounded-full border border-[#49A5BD]/20 bg-surface/50 px-3 py-1.5 opacity-60">Sui-native scoring</span>
                <span className="rounded-full border border-[#49A5BD]/20 bg-surface/50 px-3 py-1.5 opacity-60">SDK policy assertions</span>
                <span className="rounded-full border border-[#49A5BD]/20 bg-surface/50 px-3 py-1.5 opacity-60">Walrus audit storage</span>
                <span className="rounded-full border border-[#49A5BD]/20 bg-surface/50 px-3 py-1.5 opacity-60">Agent-aware enforcement</span>
              </div>
            </div>

            <div className="glass-panel rounded-[28px] border border-[#49A5BD]/30 p-6 md:p-8 bg-surface/30">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">
                    Runtime Flow
                  </p>
                  <p className="text-sm text-body font-bold">How the trust engine moves from data to enforcement.</p>
                </div>
                <Workflow className="h-7 w-7 text-[#49A5BD]" />
              </div>
              <div className="space-y-4">
                {[
                  ["Profile", "Link builder, wallets, repos, and contracts"],
                  ["Score", "Compute trust index and lifecycle status"],
                  ["Assert", "Attach minimum score in transaction flow"],
                  ["Review", "Open evidence, audits, and decision history"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#49A5BD]/10 bg-surface/50 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-black text-foreground uppercase tracking-tight">{title}</p>
                        <p className="text-sm text-body font-bold">{text}</p>
                      </div>
                      <div className="rounded-full bg-[#49A5BD]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#49A5BD] font-mono">
                        Active
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-32">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">
              Trust Lifecycle
            </p>
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-black text-foreground uppercase">Infrastructure over Marketing</h2>
            <p className="text-lg text-body font-bold leading-relaxed">
              The strongest protocol sites make the mechanics legible. Omen now does the same: what gets
              collected, what gets scored, and where enforcement actually happens.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {lifecycle.map((item) => (
              <div key={item.title} className="glass-card p-8 border-[#49A5BD]/10 hover:border-[#49A5BD]/30 transition-all duration-300">
                <div className="mb-6 inline-flex rounded-2xl bg-surface border border-[#49A5BD]/20 p-4 text-[#49A5BD] shadow-xl">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-black text-foreground uppercase tracking-tight">{item.title}</h3>
                <p className="text-base text-body font-bold leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-8 md:p-10 border-[#49A5BD]/10 shadow-2xl bg-surface/20">
            <div className="mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#49A5BD] rounded-xl flex items-center justify-center text-white shadow-xl shadow-[#49A5BD]/10 shrink-0">
                <Blocks className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">Primitives</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight leading-none">Composable surface</h2>
              </div>
            </div>
            <div className="grid gap-6">
              {primitives.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#49A5BD]/10 bg-surface/50 p-6 hover:border-[#49A5BD]/30 transition-all">
                  <div className="mb-4 flex items-center gap-4">
                    <item.icon className="h-5 w-5 text-[#49A5BD]" />
                    <h3 className="text-lg font-black text-foreground uppercase tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-base text-body font-bold leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 md:p-10 border-[#49A5BD]/10 shadow-2xl bg-surface/20">
            <div className="mb-8 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#49A5BD] rounded-xl flex items-center justify-center text-white shadow-xl shadow-[#49A5BD]/10 shrink-0">
                <CheckCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">Scoring Model</p>
                <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight leading-none">Trust composition</h2>
              </div>
            </div>
            <div className="space-y-6">
              {scorecards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#49A5BD]/10 bg-surface/50 p-6 hover:border-[#49A5BD]/30 transition-all">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#49A5BD] font-mono">{item.label}</p>
                    <span className="text-3xl font-black text-foreground">{item.value}</span>
                  </div>
                  <p className="text-base text-body font-bold leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-[#49A5BD]/30 bg-[#49A5BD]/5 p-6">
              <p className="text-sm font-black text-foreground uppercase tracking-tight mb-2">Operational Result</p>
              <p className="text-base text-body font-bold leading-relaxed">
                Policies consume the score as a runtime decision, not a vanity metric. That is the difference
                between trust content and product functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-32 lg:py-48">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="glass-card p-8 md:p-10 border-[#49A5BD]/10 shadow-2xl">
              <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-surface border border-[#49A5BD]/20 rounded-xl flex items-center justify-center text-[#49A5BD] shadow-xl shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">Policy States</p>
                  <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">Operating modes</h2>
                </div>
              </div>
              <div className="space-y-4">
                {statuses.map((status) => (
                  <div key={status.title} className={`rounded-2xl border p-6 ${status.tone} shadow-lg`}>
                    <p className="text-sm font-black uppercase tracking-[0.25em] mb-2">{status.title}</p>
                    <p className="text-base font-bold leading-relaxed">{status.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 border-[#49A5BD]/10 shadow-2xl">
              <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-surface border border-[#49A5BD]/20 rounded-xl flex items-center justify-center text-[#49A5BD] shadow-xl shrink-0">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">Use Cases</p>
                  <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">Ecosystem Surface</h2>
                </div>
              </div>
              <div className="space-y-4">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-[#49A5BD]/10 bg-surface/50 p-6 hover:border-[#49A5BD]/30 transition-all shadow-md"
                  >
                    <div className="mt-1 rounded-full bg-[#49A5BD]/10 p-2 text-[#49A5BD] shrink-0">
                      <CheckCheck className="h-4 w-4" />
                    </div>
                    <p className="text-base text-body font-bold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#49A5BD] font-mono">
                Developer Surface
              </p>
              <h2 className="mb-4 text-foreground font-outfit">Seamless Integration</h2>
              <p className="text-body font-bold leading-relaxed">
                The Omen SDK exposes trust reads, verification checks, audit report retrieval, and
                transaction assertions. Integrate trust into your protocol in minutes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="bg-[#49A5BD] hover:opacity-80 text-white rounded-xl px-8 h-12 shadow-lg shadow-[#49A5BD]/20">
                  <Link href="/developer">Request SDK Access</Link>
                </Button>
                <Button variant="secondary" asChild className="bg-surface border border-[#49A5BD]/20 text-foreground rounded-xl px-8 h-12 hover:bg-[#49A5BD]/5">
                  <Link href="/dashboard">Open Console</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#49A5BD]/20 bg-surface/50 p-6 text-sm text-white shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">
                  <Braces className="h-4 w-4" />
                  omen_integration.ts
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[13px] leading-6 text-white/90 selection:bg-[#49A5BD]/30">
{`import { OmenSDK } from "@omen-labs/sdk";

const omen = new OmenSDK({ network: "mainnet" });

// Query trust for any protocol address
const trust = await omen.getTrustScore("0xprotocol");

if (trust.score < 80) {
  throw new Error("Policy blocked: low trust score");
}

// Inject assertion into transaction
await omen.injectSecurityAssertion(tx, {
  target: "0xprotocol",
  minScore: 80,
});`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
