"use client";

import { Layout } from "@/components/layout/Layout";
import { BookOpen, Sparkles, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  return (
    <Layout>
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EAF3FA]/50 rounded-full blur-[120px] -z-10" />
        
        <div className="max-container w-full flex flex-col items-center text-center px-4 relative z-10">
          <div className="w-20 h-20 rounded-full bg-white border border-[#43B6D5]/10 flex items-center justify-center mb-8 shadow-sm">
            <BookOpen className="w-8 h-8 text-[#43B6D5]" />
          </div>

          <span className="text-[11px] font-bold tracking-[0.4em] text-[#43B6D5] uppercase mb-4 block">
            Publication Engine
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1220] mb-6">
            Omen Intelligence <br /> <span className="text-[#5B6B82]">Coming Soon</span>
          </h1>

          <p className="text-[#4A5568] text-lg max-w-[600px] mb-12 leading-relaxed">
            We are preparing deep-dive research into programmable security, sui ecosystem updates, and technical whitepapers. Stay tuned for our inaugural release.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <Button size="lg" className="w-full gap-2" asChild>
              <Link href="/">
                Return Home <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="w-full gap-2 glass-panel" asChild>
              <a href="https://x.com/OmenLabsHQ" target="_blank" rel="noopener noreferrer">
                Follow Updates
              </a>
            </Button>
          </div>
          
          {/* Subtle micro-animation element */}
          <div className="mt-20 flex items-center gap-2 px-4 py-2 rounded-full border border-[#43B6D5]/10 bg-white/50 backdrop-blur-sm shadow-sm animate-pulse">
            <Sparkles className="w-4 h-4 text-[#43B6D5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#43B6D5]/70">
              Protocol Beta Launching Soon
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
