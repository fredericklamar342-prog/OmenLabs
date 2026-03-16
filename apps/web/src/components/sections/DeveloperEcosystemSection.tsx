"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";

const features = [
  "Lightweight on-chain verification registry",
  "Heavy metadata anchored through Walrus Blob IDs",
  "Fast verification lookups for dApps",
  "SDK for wallets and protocols",
  "Support for AI agent lineage accountability",
];

export function DeveloperEcosystemSection() {
  return (
    <section className="py-24 bg-transparent relative z-10 border-y border-[rgba(14,47,118,0.08)]">
      <div className="max-container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24">
          
          {/* Title Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <span className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4 block">
              For Developers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] leading-[1.1] flex items-center justify-center lg:justify-start gap-2">
              Built for the <br className="hidden lg:block" /><SuiIcon className="w-8 h-8 md:w-10 md:h-10" /> Sui Ecosystem
            </h2>
          </motion.div>

          {/* Points List */}
          <div className="lg:w-2/3 w-full">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  className="flex items-start gap-4 p-5 glass-panel border border-[#43B6D5]/10 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#43B6D5] shrink-0 mt-0.5" />
                  <span className="text-[16px] font-medium text-[#4A5568] leading-tight">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
