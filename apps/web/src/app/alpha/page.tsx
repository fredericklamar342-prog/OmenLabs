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
        <div className="max-w-xl mx-auto py-40 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Access Initiated</h1>
          <p className="text-subtext mb-10 leading-relaxed">
            Your application for the Omen Private Alpha has been received. 
            Our infrastructure team will review your credentials and reach out via secure channels.
          </p>
          <Button variant="secondary" onClick={() => window.location.href = "/"}>Terminal Home</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#2A8FA8]/20 bg-[#2A8FA8]/5 rounded-full mb-4">
              <Lock className="w-3 h-3 text-[#43B6D5]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#43B6D5]">Access Level: Alpha</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-[#0B1220]">Private Alpha Access</h1>
            <p className="text-[#5B6B82] max-w-xl mx-auto">
              Secure your protocol with infrastructure-level security. Apply for early 
              integration with the Omen Registry and Shield SDK.
            </p>
          </div>

          <div className="border border-border bg-surface/50 backdrop-blur-md overflow-hidden shadow-2xl">
            {/* Form Header */}
            <div className="px-8 py-4 border-b border-border bg-muted/50 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent/20" />
                <div className="w-2 h-2 rounded-full bg-accent/20" />
                <div className="w-2 h-2 rounded-full bg-accent/20" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-subtext/40">Credential_Submission_Form</div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-subtext flex items-center gap-2">
                      <Terminal className="w-3 h-3" /> Full Name
                    </label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Satoshi Nakamoto" 
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-subtext">Work Email (Encrypted)</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ident@protocol.xyz" 
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-subtext">Infrastructure Role</label>
                    <Select 
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select role...</option>
                      <option value="Wallet">App Infrastructure</option>
                      <option value="DEX">Liquidity Protocol</option>
                      <option value="Protocol">L1/L2 Foundation</option>
                      <option value="Launchpad">Launchpad</option>
                      <option value="Explorer">Data Explorer</option>
                      <option value="Other">Security Firm / Other</option>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-subtext">Project / Entity Name</label>
                    <Input 
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      placeholder="Omen" 
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-subtext">Target Network</label>
                    <Select 
                      name="network"
                      value={formData.network}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select network...</option>
                      <option value="Testnet">Testnet / Devnet</option>
                      <option value="Mainnet">Production Mainnet</option>
                      <option value="Both">Multi-network Integration</option>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-subtext">Active User Base</label>
                    <Input 
                      name="monthlyUsers"
                      value={formData.monthlyUsers}
                      onChange={handleChange}
                      placeholder="e.g. 50k - 100k MAU" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-subtext">Security Integration Objectives</label>
                  <textarea 
                    name="desiredIntegration"
                    value={formData.desiredIntegration}
                    onChange={handleChange}
                    className="flex min-h-[140px] w-full border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-subtext/30 focus-visible:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all resize-none"
                    placeholder="Describe your security requirements and how Omen will be integrated..."
                    required
                  />
                </div>
              </div>

              <div className="pt-8 border-t border-border flex flex-col gap-6">
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full h-16" 
                  disabled={!isFormValid || status === "loading"}
                  isLoading={status === "loading"}
                >
                  Initiate Application
                </Button>
                <div className="flex items-center justify-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-subtext/40">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3 h-3" /> E2E Encrypted
                  </div>
                  <div className="w-[1px] h-3 bg-border" />
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3 h-3" /> Secure Infrastructure
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
