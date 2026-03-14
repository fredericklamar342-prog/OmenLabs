"use client";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

export default function AlphaPage() {
  const { openModal } = useEarlyAccessModal();

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground selection:bg-[#43B6D5]/20 pb-32 font-outfit">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#49A5BD]/5 to-transparent blur-[120px] -mr-64 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(73,165,189,0.05),transparent_70%)] blur-[100px] -ml-48 -mb-32 pointer-events-none" />

        <div className="max-container flex flex-col items-center justify-center pt-24 lg:pt-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#49A5BD]/20 bg-[#49A5BD]/10 rounded-full mb-4 shadow-xl">
                <Lock className="w-3.5 h-3.5 text-[#49A5BD]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">Access Level: Private Alpha</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-none">
                Alpha Induction
              </h1>
              <p className="text-body text-xl font-bold max-w-2xl mx-auto leading-relaxed">
                Secure your protocol with core infrastructure primitives. Apply for early 
                integration with the Omen Registry and Shield SDK.
              </p>
            </div>

            <div className="glass-card bg-surface/30 border-[#49A5BD]/20 overflow-hidden shadow-2xl rounded-[48px] relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#49A5BD]/30 to-transparent" />
              
              {/* Form Header */}
              <div className="px-10 py-6 border-b border-[#49A5BD]/10 bg-surface/50 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/20 border border-[#FF5F56]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/20 border border-[#FFBD2E]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/20 border border-[#27C93F]/40" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-body italic font-mono">Entity_Handshake_Registry</div>
              </div>

              <div className="p-10 md:p-16 space-y-12 text-center">
                <div className="space-y-8">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-[28px] bg-surface border border-[#49A5BD]/20 flex items-center justify-center shadow-xl">
                      <Shield className="w-10 h-10 text-[#49A5BD]" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
                    Join the <br /> Early Registry
                  </h2>
                  <p className="text-body text-lg font-bold leading-relaxed max-w-sm mx-auto">
                    Secure your spot in the Omen trust hierarchy. We are onboarding high-trust protocols for the next phase of the Agentic Web.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <Button 
                    onClick={openModal}
                    size="lg"
                    className="w-full h-16 bg-[#49A5BD] hover:opacity-70 text-white border-none rounded-2xl shadow-xl shadow-[#49A5BD]/20 transition-all text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center" 
                  >
                    Request Early Access
                  </Button>
                  <div className="flex items-center justify-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-body opacity-50 font-mono">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#49A5BD]" /> Verified Identity
                    </div>
                    <div className="w-[1px] h-3 bg-white/10" />
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#49A5BD]" /> Secure Node Hub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
