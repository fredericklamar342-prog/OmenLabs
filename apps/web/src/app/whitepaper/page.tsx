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
      <div className="max-container py-10 sm:py-16 lg:py-24">

        {/* Mobile TOC — horizontal scroll pills */}
        <div className="lg:hidden mb-8 glass-panel p-4 overflow-x-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#43B6D5] mb-3">Table of Contents</p>
          <div className="flex gap-2 flex-wrap">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap text-[11px] font-medium text-[#5B6B82] hover:text-[#0B1220] bg-white/60 border border-black/5 rounded-lg px-3 py-1.5 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

          {/* Left Sticky Navigation (TOC) — desktop only */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 glass-panel p-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#43B6D5] mb-6">
                Table of Contents
              </h3>
              <nav className="flex flex-col gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm font-medium text-[#5B6B82] hover:text-[#0B1220] transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="flex-1 min-w-0">
            
            {/* Header */}
            <div className="mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-panel rounded-lg mb-6 border border-black/5">
                <FileText className="w-4 h-4 text-[#43B6D5]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1220]">
                  Omen Protocol
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1220] mb-4 sm:mb-6">
                The Omen Whitepaper
              </h1>
              <p className="text-lg sm:text-xl text-[#5B6B82] leading-relaxed">
                Programmable security, on-chain identity verification, and decentralized audit storage for Web3 protocols.
              </p>
            </div>

            {/* Resources card on mobile — above content */}
            <div className="lg:hidden mb-10 glass-card p-5">
              <h3 className="text-base font-bold text-[#0B1220] mb-3">Resources</h3>
              <p className="text-sm text-[#5B6B82] mb-4">
                Download the technical whitepaper for deep-dive cryptography and architecture details.
              </p>
              <div className="flex gap-3">
                <Button className="flex-1 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
                <button className="h-10 px-4 rounded-xl border border-[rgba(11,18,32,0.1)] hover:bg-[rgba(11,18,32,0.05)] transition-colors flex items-center gap-2 text-sm font-medium text-[#0B1220]">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="prose prose-lg prose-slate prose-a:text-[#43B6D5] max-w-none text-[#5B6B82]">
              
              {/* Overview */}
              <section id="overview" className="scroll-mt-32 mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] mb-4 sm:mb-6">1. Overview</h2>
                <p>
                  Omen provides a comprehensive suite of security and identity infrastructure designed explicitly for decentralized applications (dApps). By bridging Web2 identity proofs with Web3 accounts via zkLogin, and storing heavy immutable audit trails on Walrus, Omen offers a modular framework to assert protocol safety before a user signs a transaction.
                </p>
                
                <div className="my-6 sm:my-8 p-4 sm:p-6 glass-panel border border-[#43B6D5]/20 rounded-xl flex gap-3 sm:gap-4">
                  <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#43B6D5] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-[#0B1220] block mb-1">Decentralized Trust</strong>
                    Our architecture ensures that identity assertions are cryptographically guaranteed, meaning Omen cannot forge a badge.
                  </div>
                </div>
              </section>

              {/* Problem */}
              <section id="problem" className="scroll-mt-32 mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] mb-4 sm:mb-6">2. The Problem</h2>
                <p>
                  The Web3 ecosystem suffers from an acute lack of verifiable trust at the application layer. Users are routinely asked to sign transactions interacting with smart contracts without any cryptographic assurance of the contract&apos;s origin, the founder&apos;s identity, or the protocol&apos;s audit history.
                </p>
                <ul className="list-disc pl-6 space-y-2 my-6">
                  <li><strong>Anonymous Founders:</strong> While anonymity is a core tenet of crypto, it is often exploited by malicious actors to execute rug pulls without real-world consequences.</li>
                  <li><strong>Opaque Audit Trails:</strong> Security audits are typically hidden in disparate GitHub repositories or centralized websites, making them difficult for end-users to verify.</li>
                  <li><strong>User Hesitation:</strong> This lack of transparency leads to user friction and stymies the flow of Total Value Locked (TVL) into legitimate, emerging protocols.</li>
                </ul>
              </section>

              {/* Architecture */}
              <section id="architecture" className="scroll-mt-32 mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] mb-4 sm:mb-6">4. Architecture</h2>
                <p>
                  The Omen Protocol comprises three primary components:
                </p>
                
                <div className="bg-[#2A8FA8] text-white p-4 sm:p-6 rounded-xl my-6 sm:my-8 shadow-xl font-mono text-xs sm:text-sm overflow-x-auto">
                  <pre className="whitespace-pre">
{`[Web2 Identity (X/GitHub)]
          ↓ (OAuth)
[zkLogin Prover] ──> [Sui Identity Object]
                          │
                          ├─> Issue Soulbound Badge
                          │
[Auditors/Firms] ────> [Walrus Network] (Blob Storage)
                          │
                          └─> (Blob ID linked to Identity)`}
                  </pre>
                </div>
              </section>
              
              {/* Security Model */}
              <section id="security-model" className="scroll-mt-32 mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1220] mb-4 sm:mb-6">5. Security Model</h2>
                <div className="my-6 sm:my-8 p-4 sm:p-6 glass-panel border border-amber-500/20 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-xl flex gap-3 sm:gap-4">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="text-[#0B1220] block mb-1">Zero-Trust Enforcement</strong>
                    Never trust the client. All badge assertions are verified on-chain. If an audit blob hash on Walrus does not match the on-chain registry, the verification fails explicitly.
                  </div>
                </div>
              </section>

            </div>
          </article>

          {/* Right Sidebar (Downloads & Sharing) — desktop only */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 flex flex-col gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-[#0B1220] mb-4">Resources</h3>
                <p className="text-sm text-[#5B6B82] mb-6">
                  Download the technical whitepaper for deep-dive cryptography and architecture details.
                </p>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-sm font-bold text-[#0B1220] mb-4">Share</h3>
                <div className="flex gap-3">
                  <button className="flex-1 h-10 rounded-lg border border-[rgba(11,18,32,0.1)] hover:bg-[rgba(11,18,32,0.05)] transition-colors flex items-center justify-center gap-2 text-sm font-medium text-[#0B1220]">
                    <Share2 className="w-4 h-4" /> Copy Link
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
