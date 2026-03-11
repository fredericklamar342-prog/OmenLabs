"use client";

import { motion } from "framer-motion";
import { Cpu, Fingerprint, Layers, Activity } from "lucide-react";

const items = [
  {
    title:       "STEP_01: REGISTRY_QUEUE",
    description: "Initialize your presence by joining our private alpha registry queue. Peer verification nodes prioritize early adopters.",
    icon:        Cpu,
  },
  {
    title:       "STEP_02: IDENTITY_HANDSHAKE",
    description: "Link your cryptographically-signed social handles. Omen confirms entity legitimacy without compromising private telemetry.",
    icon:        Fingerprint,
  },
  {
    title:       "STEP_03: BADGE_EMISSION",
    description: "Upon verification, a secure Omen Shard is minted. This Soulbound primitive serves as a non-transferable proof of build-trust.",
    icon:        Layers,
  },
  {
    title:       "STEP_04: NETWORK_TRUST_SYNC",
    description: "The global registry synchronizes your status. Users instantly recognize your authorized node across the Sui ecosystem.",
    icon:        Activity,
  },
];

export function ArchitectureSection() {
  return (
    <section className="py-40 md:py-60 relative z-10 bg-transparent">
      <div className="max-container">
        {/* Header */}
        <div className="flex flex-col mb-24 items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[11px] font-black tracking-[0.6em] text-primary uppercase mb-6 italic"
          >
            PROTOCOL_DEPLOYMENT_FLOW
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-8 italic leading-none"
          >
            Four_Stages_of <br />Verification.
          </motion.h2>
          <div className="h-px w-24 bg-primary/30 mt-8" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-card p-12 md:p-16 transition-all duration-700 rounded-[48px] overflow-hidden border border-white/5 hover:border-primary/20 bg-panel/30 hover:bg-panel/50 shadow-[0_0_80px_rgba(0,0,0,0.5)] cursor-default backdrop-blur-3xl"
            >
              <div className="flex flex-col gap-10 relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center border border-primary/20 bg-primary/5 transition-all duration-700 rounded-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/20 shadow-2xl">
                  <item.icon className="w-8 h-8 text-primary shadow-[0_0_15px_#43B6D5]" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-foreground tracking-tighter group-hover:text-primary transition-colors italic uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xl text-body italic leading-relaxed opacity-40 group-hover:opacity-80 transition-opacity duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Step Number */}
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-primary/5 italic select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform font-mono">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

