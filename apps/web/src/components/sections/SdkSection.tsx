"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Terminal, ArrowRight } from "lucide-react";

export function SdkSection() {
  return (
    <section id="docs" className="py-24 md:py-32 relative z-10 bg-transparent" aria-labelledby="sdk-title">
      <div className="max-container relative z-10">
        <div className="text-center lg:text-left mb-16 lg:mb-24 animate-fade-up">
           <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4 inline-block">For Developers</span>
           <h3 id="sdk-title" className="text-3xl md:text-5xl font-bold text-[#0B1220] mb-6 uppercase">Plug trust into your app. Fast.</h3>
           <p className="text-[#4A5568] text-lg max-w-xl mx-auto lg:mx-0">
             Use the Omen SDK to show your users whether a project is verified. It only takes a few lines of code to add a trust check to your app.
           </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-panel rounded-lg animate-fade-up stagger-1 border border-black/5">
              <Terminal className="w-4 h-4 text-[#43B6D5]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B1220]">Developer Tools</span>
            </div>
            
            <div className="space-y-6 animate-fade-up stagger-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220]">Simple to build. <br />Easy to trust.</h2>
              <p className="text-lg text-[#4A5568] leading-relaxed max-w-lg">
                Add Omen verification to your project in minutes. Your users will instantly see whether a builder is verified — before they interact with them.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-up stagger-3">
              {[
                { label: "Runs Before Sign", val: "Pre-Tx" },
                { label: "Verification", val: "Identity Check" },
                { label: "Speed", val: "Near Instant" },
                { label: "Accuracy", val: "99.99%" }
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#4A5568]">{stat.label}</div>
                  <div className="text-xl font-bold text-[#0B1220]">{stat.val}</div>
                </div>
              ))}
            </div>

            <div className="animate-fade-up stagger-4 pt-4">
              <Button size="lg" className="group px-8" asChild>
                <Link href="/docs">
                  View the Docs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* High-Fidelity Terminal */}
          <div className="relative animate-fade-up stagger-2">
            <div className="glass-card rounded-[22px] border border-[rgba(255,255,255,0.7)] p-8 font-mono text-sm relative overflow-hidden shadow-xl bg-white/40">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(11,18,32,0.08)]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2A8FA8]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#43B6D5]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#B3CDE0]/40" />
                </div>
                <div className="text-[10px] text-[#5B6B82] font-bold tracking-widest uppercase">shield_engine.sys</div>
              </div>
              
              <div className="space-y-6">
                <div className="text-[#43B6D5] font-bold tracking-widest text-[11px] border-b border-[#43B6D5]/10 pb-2">OMEN BENEFITS</div>
                
                <div className="space-y-1">
                  <div className="text-[#0B1220] font-bold text-[13px]">
                    • Know who built the project
                  </div>
                  <div className="pl-4 text-[#4A5568] text-[12px] leading-relaxed">
                    Users can see if a builder is verified.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[#0B1220] font-bold text-[13px]">
                    • Harder for scammers
                  </div>
                  <div className="pl-4 text-[#4A5568] text-[12px] leading-relaxed">
                    Fake projects cannot easily pretend to be real.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[#0B1220] font-bold text-[13px]">
                    • Safer interactions
                  </div>
                  <div className="pl-4 text-[#4A5568] text-[12px] leading-relaxed">
                    Users know who they are dealing with before signing anything.
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-[#0B1220] font-bold text-[13px]">
                    • Trust for real builders
                  </div>
                  <div className="pl-4 text-[#4A5568] text-[12px] leading-relaxed">
                    Honest teams can prove they are real.
                  </div>
                </div>
              </div>

            </div>

            {/* Status Floating Label */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#2A8FA8] to-[#43B6D5] px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white shadow-lg z-20">
              Verification Active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
