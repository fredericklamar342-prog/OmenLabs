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
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0B1220] selection:bg-[#43B6D5]/20">
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#43B6D5]/5 to-transparent blur-[120px] -mr-64 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0B1220]/5 to-transparent blur-[100px] -ml-48 -mb-32 pointer-events-none" />

        <div className="max-container flex flex-col items-center justify-center py-24 lg:py-36 relative z-10">
          
          <div className="w-full max-w-[640px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 md:p-14 relative flex flex-col border border-black/[0.03] rounded-[48px] shadow-2xl bg-white/40 backdrop-blur-2xl"
            >
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full"
                  >
                    <div className="text-center mb-14">
                      <div className="inline-flex items-center gap-3 mb-8">
                         <div className="h-px w-6 bg-[#43B6D5]" />
                         <span className="text-[10px] font-black tracking-[0.4em] text-[#43B6D5] uppercase">
                           Protocol Induction
                         </span>
                         <div className="h-px w-6 bg-[#43B6D5]" />
                      </div>
                      <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0B1220] mb-6 uppercase">
                        Developer <br /> Onboarding
                      </h1>
                      <p className="text-[#64748B] text-lg font-medium leading-relaxed max-w-md mx-auto">
                        Join the Omen private beta. Submit your technical profile to request SDK access.
                      </p>
                    </div>

                    <form 
                      onSubmit={handleSubmit} 
                      className="w-full space-y-8"
                    >
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                            Project Identifier
                          </label>
                          <input 
                            type="text" 
                            name="projectName" 
                            placeholder="Your Protocol Name" 
                            required 
                            className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                              GitHub Namespace
                            </label>
                            <input 
                              type="text" 
                              name="github" 
                              placeholder="@org-or-handle" 
                              required 
                              className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                              Repo Pointer
                            </label>
                            <input 
                              type="url" 
                              name="repo" 
                              placeholder="github.com/..." 
                              className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                            Technical Specification
                          </label>
                          <input 
                            type="url" 
                            name="docs" 
                            placeholder="Link to docs, notion, or whitepaper" 
                            className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                              Social Node (X)
                            </label>
                            <div className="relative group">
                              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8] font-bold">@</span>
                              <input 
                                type="text" 
                                name="xHandle" 
                                placeholder="handle" 
                                className="w-full h-14 pl-12 pr-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                              Settlement Address
                            </label>
                            <input 
                              type="text" 
                              name="wallet" 
                              placeholder="0x... (Sui)" 
                              className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-8">
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full h-16 text-xs font-black uppercase tracking-[0.2em] bg-[#0B1220] hover:bg-[#0B1220]/90 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all" 
                          isLoading={isLoading}
                        >
                          Submit Technical Application
                        </Button>
                        <p className="text-center mt-6 text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest italic leading-relaxed">
                          By submitting, you agree to the protocol's developer terms <br /> and confidentiality agreement.
                        </p>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full flex flex-col items-center text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                        className="w-24 h-24 rounded-[32px] bg-[#27C93F]/10 flex items-center justify-center mb-10 border border-[#27C93F]/20 shadow-xl shadow-[#27C93F]/5"
                      >
                        <CheckCircle2 className="w-10 h-10 text-[#27C93F]" />
                      </motion.div>
                      
                      <h3 className="text-4xl font-black text-[#0B1220] mb-6 tracking-tighter uppercase leading-tight">
                        Induction <br /> Initiated
                      </h3>
                      <p className="text-[#64748B] text-lg font-medium max-w-sm mb-14 leading-relaxed">
                        Your technical profile has been hashed and submitted to the review registry. We will synchronize shortly.
                      </p>

                      <Button variant="secondary" size="lg" className="w-full max-w-sm h-14 gap-3 glass-card bg-[#F8FAFC] border-black/[0.03] text-xs font-black uppercase tracking-widest rounded-2xl group transition-all" asChild>
                        <Link href="/">
                          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Base
                        </Link>
                      </Button>
                    </motion.div>
                  )}
              </AnimatePresence>
                
            </motion.div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
