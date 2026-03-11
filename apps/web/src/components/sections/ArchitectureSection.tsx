"use client";

import { motion } from "framer-motion";
import { Cpu, Fingerprint, Layers, Activity } from "lucide-react";

const items = [
  {
    title:       "Step 1: Join the Waitlist",
    description: "Start by joining our private alpha waitlist. We will notify you as soon as identity verification is ready.",
    icon:        Cpu,
  },
  {
    title:       "Step 2: Verify Your Identity",
    description: "Link your GitHub or X (Twitter) account. Omen confirms you are a real person — without storing your personal data.",
    icon:        Fingerprint,
  },
  {
    title:       "Step 3: Get Your Verified Badge",
    description: "Once verified, you receive a secure Omen Badge. It appears on your profile and shows users that a real, confirmed person is behind it.",
    icon:        Layers,
  },
  {
    title:       "Step 4: Users Can Trust You",
    description: "Your community can now see your badge and feel safe. No more guessing — they know exactly who built the project.",
    icon:        Activity,
  },
];

export function ArchitectureSection() {
  return (
    <section
      className="py-24 md:py-32 relative z-10 bg-transparent"
      aria-labelledby="arch-title"
    >
      <div className="max-container">
        {/* Header */}
        <div className="flex flex-col mb-16 items-center text-center animate-fade-up">
          <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4">
            How Omen Works
          </span>
          <h2
            id="arch-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B1220] mb-6"
          >
            4 Simple Steps to <br />Get Verified.
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#2A8FA8] to-[#B3CDE0] rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative glass-card p-10 hover:shadow-lg transition-all duration-300 rounded-[22px] overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col gap-5 relative z-10 animate-fade-up">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-[#2A8FA8]/20 bg-gradient-to-tr from-[#2A8FA8]/5 to-[#B3CDE0]/5 transition-colors duration-300 rounded-xl group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-[#43B6D5] transition-colors duration-200" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0B1220] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#4A5568] leading-relaxed max-w-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
