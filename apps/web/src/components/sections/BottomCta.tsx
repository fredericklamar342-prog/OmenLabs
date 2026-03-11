"use client";

import { motion } from "framer-motion";
import { EarlyAccessForm } from "./EarlyAccessForm";

export function BottomCta() {
  return (
    <section className="py-24 md:py-40 relative flex flex-col items-center justify-center text-center overflow-hidden bg-transparent z-10 w-full border-t border-border">
      <div className="max-container relative z-10">
        <div className="animate-fade-up space-y-10">
          <h2 className="text-5xl md:text-[84px] font-black tracking-tighter text-foreground leading-[0.9] mb-8">
            Omen verifies <br />
            <span className="text-primary italic">
              the people behind projects.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-body max-w-[650px] mx-auto leading-relaxed mb-6">
            So you always know who to trust. Join the waitlist and be first to try Omen.
          </p>

          <div className="max-w-[560px] mx-auto w-full">
            <EarlyAccessForm layout="bottom" />
          </div>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-primary/10 blur-[150px] -z-10 rounded-full" />
    </section>
  );
}

