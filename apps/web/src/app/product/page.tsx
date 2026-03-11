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
      <div className="max-container py-8 md:py-12">
        <section className="glass-card overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#43B6D5]/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.3em] text-[#43B6D5]">
                <Sparkles className="h-4 w-4" />
                Core Product
              </div>
              <h1 className="max-w-4xl text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
                Trust infrastructure for wallets, apps, and autonomous agents on Sui.
              </h1>
              <p className="max-w-3xl text-lg text-[#4A5568]">
                Omen is not just a badge. It is a programmable trust stack that links builder identity,
                security evidence, and policy enforcement so users can evaluate who built a protocol before
                they route value into it.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/developer">
                    Build With Omen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/docs">Read Integration Docs</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-[#4A5568]">
                <span className="rounded-full border border-[#43B6D5]/10 bg-white/60 px-3 py-1.5">Sui-native scoring</span>
                <span className="rounded-full border border-[#43B6D5]/10 bg-white/60 px-3 py-1.5">SDK policy assertions</span>
                <span className="rounded-full border border-[#43B6D5]/10 bg-white/60 px-3 py-1.5">Walrus audit storage</span>
                <span className="rounded-full border border-[#43B6D5]/10 bg-white/60 px-3 py-1.5">Agent-aware enforcement</span>
              </div>
            </div>

            <div className="glass-panel rounded-[28px] border border-white/80 p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">
                    Runtime Flow
                  </p>
                  <p className="text-sm text-[#4A5568]">How the trust engine moves from data to enforcement.</p>
                </div>
                <Workflow className="h-7 w-7 text-[#43B6D5]" />
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
                    className="rounded-2xl border border-[#43B6D5]/8 bg-white/75 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-[#0B1220]">{title}</p>
                        <p className="text-sm text-[#4A5568]">{text}</p>
                      </div>
                      <div className="rounded-full bg-[#EAF3FA] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#43B6D5]">
                        Active
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">
              Trust Lifecycle
            </p>
            <h2 className="mb-4">Explain the product like infrastructure, not marketing.</h2>
            <p className="text-[#4A5568]">
              The strongest protocol sites make the mechanics legible. Omen now does the same: what gets
              collected, what gets scored, and where enforcement actually happens.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {lifecycle.map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="mb-5 inline-flex rounded-2xl bg-[#EAF3FA] p-3 text-[#43B6D5]">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl">{item.title}</h3>
                <p className="text-base text-[#4A5568]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card p-6 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Blocks className="h-6 w-6 text-[#43B6D5]" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">Primitives</p>
                <h2 className="mb-0 text-2xl md:text-3xl">Composable product surface</h2>
              </div>
            </div>
            <div className="grid gap-4">
              {primitives.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#43B6D5]/8 bg-white/65 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-[#43B6D5]" />
                    <h3 className="mb-0 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-base text-[#4A5568]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <div className="mb-8 flex items-center gap-3">
              <CheckCheck className="h-6 w-6 text-[#43B6D5]" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">Scoring Model</p>
                <h2 className="mb-0 text-2xl md:text-3xl">Readable trust composition</h2>
              </div>
            </div>
            <div className="space-y-4">
              {scorecards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#43B6D5]/8 bg-white/70 p-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#43B6D5]">{item.label}</p>
                    <span className="text-2xl font-bold text-[#0B1220]">{item.value}</span>
                  </div>
                  <p className="text-base text-[#4A5568]">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-[#43B6D5]/15 bg-[#F8FBFE] p-5">
              <p className="text-sm font-semibold text-[#0B1220]">Operational result</p>
              <p className="mt-2 text-base text-[#4A5568]">
                Policies consume the score as a runtime decision, not a vanity metric. That is the difference
                between trust content and product functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="glass-card p-6 md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#43B6D5]" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">Policy States</p>
                  <h2 className="mb-0 text-2xl md:text-3xl">Three operating modes</h2>
                </div>
              </div>
              <div className="space-y-4">
                {statuses.map((status) => (
                  <div key={status.title} className={`rounded-2xl border p-5 ${status.tone}`}>
                    <p className="text-sm font-bold uppercase tracking-[0.25em]">{status.title}</p>
                    <p className="mt-2 text-base">{status.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <Bot className="h-6 w-6 text-[#43B6D5]" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">Use Cases</p>
                  <h2 className="mb-0 text-2xl md:text-3xl">Where this becomes visible to users</h2>
                </div>
              </div>
              <div className="space-y-4">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-[#43B6D5]/8 bg-white/70 p-5"
                  >
                    <div className="mt-1 rounded-full bg-[#EAF3FA] p-2 text-[#43B6D5]">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <p className="text-base text-[#4A5568]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">
                Developer Surface
              </p>
              <h2 className="mb-4">The product page should hand developers an obvious next step.</h2>
              <p className="text-[#4A5568]">
                Your SDK already exposes trust reads, verification checks, audit report retrieval, and
                transaction assertions. This page now points developers toward that surface instead of hiding it.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild>
                  <Link href="/developer">Request SDK Access</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/dashboard">Open Dashboard</Link>
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#43B6D5]/10 bg-[#0B1220] p-5 text-sm text-white shadow-[0_20px_50px_rgba(11,18,32,0.18)]">
              <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
                <Braces className="h-4 w-4" />
                sdk.ts
              </div>
              <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[13px] leading-6 text-white/85">
{`import { OmenSDK } from "@omen-labs/sdk";

const omen = new OmenSDK({ network: "mainnet" });

const trust = await omen.getTrustScore("0xprotocol");

if (trust.score < 80) {
  throw new Error("Policy blocked: trust score below threshold");
}

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
