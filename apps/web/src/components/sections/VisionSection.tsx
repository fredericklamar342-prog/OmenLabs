"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function VisionSection() {
  return (
    <section className="py-24 bg-transparent flex flex-col items-center text-center px-4 relative z-10">
      <div className="flex flex-col items-center animate-fade-up">
        <Lock className="w-10 h-10 text-[#43B6D5]/10 mb-8" aria-hidden="true" />
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mb-8 text-[#0B1220]">
          "Anyone can deploy a project.{" "}
          <br className="hidden md:block" />
          Not everyone should hide who they are."
        </h2>
        <div className="h-[2px] w-16 bg-gradient-to-r from-[#2A8FA8] to-[#B3CDE0] rounded-full mb-6" />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#4A5568]">
          The Omen Labs Promise
        </p>
      </div>
    </section>
  );
}
