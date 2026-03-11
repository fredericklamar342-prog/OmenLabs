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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/developer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData.error || errorData.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-[#060A0D] text-foreground">
        <div className="pointer-events-none absolute inset-0 omen-bg" />
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-20" />
        
        <div className="max-container flex flex-col items-center justify-center py-20 lg:py-32 relative z-10">
          
          <div className="w-full max-w-[650px]">
            <div className="glass-card p-10 md:p-14 relative flex flex-col border border-primary/10 rounded-[40px] shadow-2xl bg-panel/30">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div className="text-center mb-12">
                      <div className="w-20 h-20 mx-auto rounded-[24px] bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group animate-float">
                        <Terminal className="w-10 h-10 text-primary relative z-10" />
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.5em] text-primary uppercase mb-4 block">
                        Developer Access
                      </span>
                      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4 italic">
                        SDK Onboarding
                      </h1>
                      <p className="text-body text-lg font-medium leading-relaxed max-w-md mx-auto">
                        Apply for early access to the Omen SDK and trust primitives.
                      </p>
                    </div>

                    <form 
                      onSubmit={handleSubmit} 
                      className="w-full space-y-6"
                    >
                      
                      <div className="space-y-3">
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-body/60 px-1">
                          Project Identity
                        </label>
                        <input type="text" name="projectName" placeholder="Your Protocol or App Name" required className="omen-input bg-white/5 border-white/10" />
                      </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-body/60 px-1">
                        GitHub ID
                      </label>
                      <input type="text" name="github" placeholder="@YourOrg" required className="omen-input bg-white/5 border-white/10" />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-body/60 px-1">
                        Repository
                      </label>
                      <input type="url" name="repo" placeholder="github.com/org/repo" className="omen-input bg-white/5 border-white/10" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-body/60 px-1">
                      Documentation / Whitepaper
                    </label>
                    <input type="url" name="docs" placeholder="Link to project technical docs" className="omen-input bg-white/5 border-white/10" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-body/60 px-1">
                        X Handle
                      </label>
                      <input type="text" name="xHandle" placeholder="@" className="omen-input bg-white/5 border-white/10" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-body/60 px-1">
                        Sui Wallet
                      </label>
                      <input type="text" name="wallet" placeholder="0x... or name.sui" className="omen-input bg-white/5 border-white/10" />
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button type="submit" size="lg" className="w-full h-16 text-lg font-black" isLoading={isLoading}>
                      Submit Application
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 shadow-[0_0_30px_rgba(67,182,213,0.3)]"
                  >
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-4xl font-black text-foreground mb-6 leading-tight italic">
                    Application <br />Received.
                  </h3>
                  <p className="text-body text-xl font-medium max-w-[450px] mb-12 leading-relaxed">
                    Our technical team will review your project and contact you directly via the details provided.
                  </p>

                  <Button variant="secondary" size="lg" className="w-full max-w-sm h-14 gap-3 glass-panel" asChild>
                    <Link href="/">
                      <ChevronLeft className="w-5 h-5" /> Return to Home
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

