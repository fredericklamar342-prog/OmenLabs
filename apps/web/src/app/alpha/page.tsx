"use client";

import * as React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Lock, Terminal } from "lucide-react";

export default function AlphaPage() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    role: "",
    projectName: "",
    network: "",
    monthlyUsers: "",
    desiredIntegration: "",
    telegram: "",
  });

  const isValidEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const isFormValid = 
    formData.name.trim() !== "" &&
    isValidEmail(formData.email) &&
    formData.role !== "" &&
    formData.projectName.trim() !== "" &&
    formData.network !== "" &&
    formData.desiredIntegration.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <Layout>
        <div className="min-h-screen bg-white flex items-center justify-center p-6">
          <div className="max-w-xl w-full text-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-10"
            >
              <div className="w-24 h-24 rounded-[32px] bg-[#27C93F]/10 border border-[#27C93F]/20 flex items-center justify-center shadow-xl shadow-[#27C93F]/5">
                <CheckCircle2 className="w-12 h-12 text-[#27C93F]" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-[#0B1220] leading-tight">
              Access <br /> Initiated
            </h1>
            <p className="text-[#64748B] text-lg font-medium mb-12 leading-relaxed max-w-sm mx-auto">
              Your application for the Omen Private Alpha has been hashed and submitted. 
              Our infrastructure team will review your credentials and synchronize shortly.
            </p>
            <Button size="lg" className="px-10 h-14 bg-[#0B1220] text-white border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all text-xs font-black uppercase tracking-widest" onClick={() => window.location.href = "/"}>
               Return to Base
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-white text-[#0B1220] selection:bg-[#43B6D5]/20 pb-32">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#43B6D5]/5 to-transparent blur-[120px] -mr-64 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0B1220]/5 to-transparent blur-[100px] -ml-48 -mb-32 pointer-events-none" />

        <div className="max-container flex flex-col items-center justify-center pt-24 lg:pt-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#43B6D5]/20 bg-[#43B6D5]/5 rounded-full mb-4">
                <Lock className="w-3.5 h-3.5 text-[#43B6D5]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#43B6D5]">Access Level: Private Alpha</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-[#0B1220] uppercase leading-none">
                Alpha Induction
              </h1>
              <p className="text-[#64748B] text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Secure your protocol with core infrastructure primitives. Apply for early 
                integration with the Omen Registry and Shield SDK.
              </p>
            </div>

            <div className="glass-card bg-white/40 backdrop-blur-2xl border-black/[0.03] overflow-hidden shadow-2xl rounded-[48px] relative">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43B6D5]/30 to-transparent" />
              
              {/* Form Header */}
              <div className="px-10 py-6 border-b border-black/[0.03] bg-white/30 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/20" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] italic">Entity_Handshake_Registry</div>
              </div>

              <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-12">
                <div className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                        Full Name / Principal
                      </label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Satoshi Nakamoto" 
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Communications Node (Email)</label>
                      <input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ident@protocol.xyz" 
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Infrastructure Role</label>
                      <select 
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold text-[#0B1220] focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select entity role...</option>
                        <option value="Wallet">App Infrastructure</option>
                        <option value="DEX">Liquidity Protocol</option>
                        <option value="Protocol">L1/L2 Foundation</option>
                        <option value="Launchpad">Launchpad</option>
                        <option value="Explorer">Data Explorer</option>
                        <option value="Other">Security Firm / Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Project / Entity Label</label>
                      <input 
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        placeholder="Omen Protocol" 
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Deployment Network</label>
                      <select 
                        name="network"
                        value={formData.network}
                        onChange={handleChange}
                        required
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold text-[#0B1220] focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select network...</option>
                        <option value="Testnet">Testnet / Devnet</option>
                        <option value="Mainnet">Production Mainnet</option>
                        <option value="Both">Multi-network Integration</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Active Telemetry (MAU)</label>
                      <input 
                        name="monthlyUsers"
                        value={formData.monthlyUsers}
                        onChange={handleChange}
                        placeholder="e.g. 50k - 100k MAU" 
                        className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Security Induction Objectives</label>
                    <textarea 
                      name="desiredIntegration"
                      value={formData.desiredIntegration}
                      onChange={handleChange}
                      className="flex min-h-[160px] w-full border border-black/[0.03] bg-[#F8FAFC] px-6 py-4 rounded-2xl text-sm font-bold text-[#0B1220] placeholder:text-[#94A3B8]/40 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all resize-none outline-none"
                      placeholder="Describe your security requirements and how Omen will be integrated into your stack..."
                      required
                    />
                  </div>
                </div>

                <div className="pt-10 border-t border-black/[0.03] flex flex-col gap-8">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-16 bg-[#0B1220] hover:bg-[#0B1220]/90 text-white border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all text-xs font-black uppercase tracking-[0.2em]" 
                    disabled={!isFormValid || status === "loading"}
                    isLoading={status === "loading"}
                  >
                    Initiate Application
                  </Button>
                  <div className="flex items-center justify-center gap-6 text-[9px] font-black uppercase tracking-[0.4em] text-[#94A3B8]">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#43B6D5]" /> Hashed PII
                    </div>
                    <div className="w-[1px] h-3 bg-black/10" />
                    <div className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#43B6D5]" /> Secure Node Hub
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
