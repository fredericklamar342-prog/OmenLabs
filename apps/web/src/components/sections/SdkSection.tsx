"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal, ArrowRight } from "lucide-react";

export function SdkSection() {
  return (
    <section id="developer" className="py-32 md:py-48 relative z-10 bg-transparent" aria-labelledby="sdk-title">
      <div className="max-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full">
              <Terminal className="w-3.5 h-3.5 text-[#43B6D5]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#475569]">
                Developer Experience
              </span>
            </div>
            
            <div className="space-y-8">
              <h2 id="sdk-title" className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0B1220]">
                Simple to <span className="text-gradient">Integrate.</span>
              </h2>
              <p className="text-xl text-[#475569] leading-relaxed font-medium">
                Wallets, dApps, and autonomous AI agents integrate the Omen SDK to verify protocol safety before any transaction executes. A single check prevents interaction with malicious or unverified code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Performance", val: "O(1) Lookup" },
                { label: "Storage", val: "Walrus Native" },
                { label: "Verification", val: "zkLogin" },
                { label: "Execution", val: "Sui PTBs" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">{stat.label}</div>
                  <div className="text-lg font-bold text-[#0B1220]">{stat.val}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="h-14 px-8 text-base font-bold bg-[#0B1220] hover:bg-[#0B1220]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all group" asChild>
                <Link href="/docs" className="flex items-center">
                  Explore SDK Docs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* High-Fidelity Terminal */}
          <div className="relative animate-fade-up">
            <div className="absolute inset-0 bg-[#43B6D5]/5 blur-3xl rounded-full -z-10" />
            <div className="glass-card rounded-2xl border border-white shadow-2xl p-0 font-mono text-sm relative overflow-hidden bg-white">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.03] bg-white">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[10px] text-[#94A3B8] font-bold tracking-widest uppercase font-sans">omen-sdk-integration.ts</div>
              </div>
              
              <div className="p-8 bg-[#F8FAFC]">
                <div className="text-[14px] leading-relaxed font-mono text-[#0B1220] overflow-x-auto whitespace-pre">
{`const trustScore = await omen.getTrustScore(protocol)

if (trustScore < 85) {
  abortTransaction()
}`}
                </div>
                
                <div className="mt-12 pt-6 border-t border-black/[0.05]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse" />
                    <span className="text-[10px] font-black uppercase text-[#43B6D5] tracking-widest">Omen Security Firewall Active</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#94A3B8] space-y-1">
                    <div>&gt; Checking protocol reputation on Walrus...</div>
                    <div className="text-[#0B1220] font-bold">&gt; Verification: [92/100] INSTITUTIONAL GRADE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Floating Label */}
            <div className="absolute -bottom-6 -right-6 bg-[#0B1220] px-5 py-3 rounded-xl shadow-2xl z-20 border border-white/10">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Sui Mainnet Live</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
