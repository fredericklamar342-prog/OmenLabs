"use client";

import * as React from "react";
import { Layout } from "@/components/layout/Layout";
import { Terminal, Shield, CheckCircle2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function DeveloperPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    // Simulate API call for Vercel deployment
    new Promise((resolve) => setTimeout(resolve, 0))
      .then(() => setIsSuccess(true))
      .catch((error) => console.error("Form submission error:", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0B1220]">
        <div className="max-container flex flex-col items-center justify-center py-20 lg:py-32 relative z-10">
          
          <div className="w-full max-w-[600px]">
            <div className="glass-card p-8 md:p-12 relative flex flex-col border border-[rgba(14,47,118,0.1)] rounded-[32px] shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="text-center mb-10">
                      <div className="w-16 h-16 mx-auto rounded-full bg-[#EAF3FA] flex items-center justify-center mb-6 relative border border-[#0E2F76]/10">
                        <Terminal className="w-8 h-8 text-[#0E2F76] relative z-10" />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.4em] text-[#2B5C92] uppercase mb-4 block">
                        Developer Portal
                      </span>
                      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1220] mb-4">
                        Beta Onboarding
                      </h1>
                      <p className="text-[#4A5568] text-[15px] leading-relaxed">
                        Join the Omen developer beta. Submit your project details below to request access to the SDK.
                      </p>
                    </div>

                    <form 
                      onSubmit={handleSubmit} 
                      className="w-full space-y-5"
                    >
                      
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                          Project Name
                        </label>
                        <input type="text" name="projectName" placeholder="Your Protocol or App" required className="omen-input" />
                      </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        GitHub Username / Org
                      </label>
                      <input type="text" name="github" placeholder="@YourOrg" required className="omen-input" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Repo Link (Optional)
                      </label>
                      <input type="url" name="repo" placeholder="github.com/org/repo" className="omen-input" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                      Notion / Docs Link
                    </label>
                    <input type="url" name="docs" placeholder="Link to whitepaper or docs" className="omen-input" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        X Handle
                      </label>
                      <input type="text" name="xHandle" placeholder="@" className="omen-input" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Sui Wallet Address
                      </label>
                      <input type="text" name="wallet" placeholder="0x..." className="omen-input" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full h-14 text-[15px]" isLoading={isLoading}>
                      Submit Application
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-[#EAF3FA] flex items-center justify-center mb-6 border border-[#2B5C92]/10"
                  >
                    <CheckCircle2 className="w-10 h-10 text-[#2B5C92]" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-[#0B1220] mb-4">
                    Application Successfully Submitted
                  </h3>
                  <p className="text-[#4A5568] text-lg max-w-[400px] mb-12 leading-relaxed">
                    Thank you for applying. The team will review your project details and reach out regarding SDK integration.
                  </p>

                  <Button variant="secondary" size="lg" className="w-full max-w-sm h-12 gap-2 glass-panel" asChild>
                    <Link href="/">
                      <ChevronLeft className="w-4 h-4" /> Return to Home
                    </Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
              
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
