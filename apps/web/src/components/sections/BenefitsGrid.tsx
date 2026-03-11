"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { UserCheck, ShieldCheck, Zap } from "lucide-react";

export function BenefitsGrid() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent" aria-labelledby="benefits-title">
      <div className="max-container">
        <div className="flex flex-col items-center text-center mb-20 animate-fade-up">
          <span 
            className="text-[11px] font-bold tracking-widest text-[#43B6D5] uppercase mb-4"
          >
            What Omen Labs Does
          </span>
          <h2 
            id="benefits-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B1220] mb-6"
          >
            Bring Trust to Web3.
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-[#2A8FA8] to-[#B3CDE0] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-fade-up stagger-1">
            <FeatureCard 
              title="Verify Without Doxxing" 
              subtitle="For Builders" 
              description="Use zkLogin to link your GitHub or X reputation to your on-chain identity without exposing your wallet."
              icon={UserCheck}
            />
          </div>
          <div className="animate-fade-up stagger-2">
            <FeatureCard 
              title="Reputation That Cannot Be Sold" 
              subtitle="For Projects" 
              description="Receive a Soulbound Omen Badge that cannot be bought, sold, or transferred. Your reputation stays tied to your work."
              icon={ShieldCheck}
            />
          </div>
          <div className="animate-fade-up stagger-3">
            <FeatureCard 
              title="Turn Trust Into Infrastructure" 
              subtitle="For Developers" 
              description="Integrate the Omen SDK so wallets and apps can detect verified or suspicious entities before users approve transactions."
              icon={Zap}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
