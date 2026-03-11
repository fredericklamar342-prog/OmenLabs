"use client";

import { motion } from "framer-motion";
import { EarlyAccessForm } from "./EarlyAccessForm";

export function BottomCta() {
  return (
    <section className="py-24 md:py-40 relative flex flex-col items-center justify-center text-center overflow-hidden bg-transparent z-10 w-full">
      <div className="max-container relative z-10">
        <div className="animate-fade-up space-y-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0B1220]">
            Omen verifies{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1220] to-[#43B6D5]">
              the people behind projects.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568] max-w-[560px] mx-auto leading-relaxed">
            So you always know who to trust. Join the waitlist and be first to try Omen Labs.
          </p>

          <div className="max-w-[560px] mx-auto w-full">
            <EarlyAccessForm layout="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}
