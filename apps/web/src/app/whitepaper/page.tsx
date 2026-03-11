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
      <div className="max-container py-12 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Sticky Navigation (TOC) */}
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
        <article className="flex-1 max-w-[860px]">
          
          {/* Header */}
          <div className="mb-16 animate-fade-up stagger-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-panel rounded-lg mb-6 border border-black/5">
              <FileText className="w-4 h-4 text-[#43B6D5]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1220]">
                Omen Protocol
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1220] mb-6">
              The Omen Whitepaper
            </h1>
            <p className="text-xl text-[#5B6B82] leading-relaxed">
              Programmable security, on-chain identity verification, and decentralized audit storage for Web3 protocols.
            </p>
          </div>

          <div className="prose prose-lg prose-slate prose-a:text-[#43B6D5] max-w-none text-[#5B6B82]">
            
            {/* Overview */}
            <section id="overview" className="scroll-mt-32 mb-16 animate-fade-up stagger-2">
              <h2 className="text-3xl font-bold text-[#0B1220] mb-6">1. Overview</h2>
              <p>
                Omen provides a comprehensive suite of security and identity infrastructure designed explicitly for decentralized applications (dApps). By bridging Web2 identity proofs with Web3 accounts via zkLogin, and storing heavy immutable audit trails on Walrus, Omen offers a modular framework to assert protocol safety before a user signs a transaction.
              </p>
              
              <div className="my-8 p-6 glass-panel border border-[#43B6D5]/20 rounded-xl flex gap-4">
                <Info className="w-6 h-6 text-[#43B6D5] shrink-0" />
                <div className="text-sm">
                  <strong className="text-[#0B1220] block mb-1">Decentralized Trust</strong>
                  Our architecture ensures that identity assertions are cryptographically guaranteed, meaning Omen cannot forge a badge.
                </div>
              </div>
            </section>

            {/* Problem */}
            <section id="problem" className="scroll-mt-32 mb-16 animate-fade-up stagger-3">
              <h2 className="text-3xl font-bold text-[#0B1220] mb-6">2. The Problem</h2>
              <p>
                The Web3 ecosystem suffers from an acute lack of verifiable trust at the application layer. Users are routinely asked to sign transactions interacting with smart contracts without any cryptographic assurance of the contract's origin, the founder's identity, or the protocol's audit history.
              </p>
              <ul className="list-disc pl-6 space-y-2 my-6">
                <li><strong>Anonymous Founders:</strong> While anonymity is a core tenet of crypto, it is often exploited by malicious actors to execute rug pulls without real-world consequences.</li>
                <li><strong>Opaque Audit Trails:</strong> Security audits are typically hidden in disparate GitHub repositories or centralized websites, making them difficult for end-users to verify.</li>
                <li><strong>User Hesitation:</strong> This lack of transparency leads to user friction and stymies the flow of Total Value Locked (TVL) into legitimate, emerging protocols.</li>
              </ul>
            </section>

            {/* Architecture */}
            <section id="architecture" className="scroll-mt-32 mb-16 animate-fade-up stagger-4">
              <h2 className="text-3xl font-bold text-[#0B1220] mb-6">4. Architecture</h2>
              <p>
                The Omen Protocol comprises three primary components:
              </p>
              
              <div className="bg-[#2A8FA8] text-white p-6 rounded-xl my-8 shadow-xl font-mono text-sm overflow-w-auto">
                <pre>
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
            
            {/* Warning Callout Example */}
            <section id="security-model" className="scroll-mt-32 mb-16 animate-fade-up stagger-5">
              <h2 className="text-3xl font-bold text-[#0B1220] mb-6">5. Security Model</h2>
              <div className="my-8 p-6 glass-panel border border-amber-500/20 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-xl flex gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                <div className="text-sm">
                  <strong className="text-[#0B1220] block mb-1">Zero-Trust Enforcement</strong>
                  Never trust the client. All badge assertions are verified on-chain. If an audit blob hash on Walrus does not match the on-chain registry, the verification fails explicitly.
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Right Sidebar (Downloads & Sharing) */}
        <aside className="w-full lg:w-72 shrink-0 animate-fade-up stagger-4">
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
    </Layout>
  );
}
