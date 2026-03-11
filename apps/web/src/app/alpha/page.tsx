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
      <div className="relative min-h-screen overflow-hidden bg-[#060A0D] text-foreground flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 omen-bg" />
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-20" />
        
        <div className="max-w-2xl mx-auto px-6 py-20 text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex justify-center mb-10"
          >
            <div className="w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_rgba(67,182,213,0.3)]">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight italic">Access <span className="text-primary">Initiated</span></h1>
          <p className="text-body text-xl font-medium mb-12 leading-relaxed max-w-lg mx-auto">
            Your application for the Omen Private Alpha has been received. 
            Our infrastructure team will review your credentials and reach out via secure channels.
          </p>
          <Button variant="secondary" size="lg" className="h-[60px] px-10 glass-panel" onClick={() => window.location.href = "/"}>Terminal Home</Button>
        </div>
      </div>
    </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-[#060A0D] text-foreground">
        <div className="pointer-events-none absolute inset-0 omen-bg" />
        <div className="pointer-events-none absolute inset-0 omen-grid opacity-20" />

        <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-primary/20 bg-primary/10 rounded-full mb-4 animate-float">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Access Level: Secure Alpha</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground italic">
                Private <span className="text-primary italic">Alpha</span> Access
              </h1>
              <p className="text-body max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                Secure your protocol with infrastructure-level trust mechanics. Apply for early 
                integration with the Omen Registry and Shield SDK.
              </p>
            </div>

            <div className="glass-card border border-primary/10 bg-panel/30 backdrop-blur-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[40px]">
              {/* Form Header */}
              <div className="px-10 py-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/10" />
                </div>
                <div className="text-[11px] font-black uppercase tracking-[0.5em] text-primary opacity-60">System_Access_Manifest</div>
              </div>

              <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-12">
                <div className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-3">
                        <Terminal className="w-4 h-4" /> Operator Name
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Satoshi Nakamoto" 
                        required
                        className="omen-input bg-white/5 border-white/10"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Secure Alias (Email)</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="operator@protocol.xyz" 
                        required
                        className="omen-input bg-white/5 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Entity Archetype</label>
                      <Select 
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="omen-input bg-white/5 border-white/10"
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
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Protocol Designation</label>
                      <Input 
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        placeholder="Omen Protocol" 
                        required
                        className="omen-input bg-white/5 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Operational Stack</label>
                      <Select 
                        name="network"
                        value={formData.network}
                        onChange={handleChange}
                        required
                        className="omen-input bg-white/5 border-white/10"
                      >
                        <option value="">Select network...</option>
                        <option value="Testnet">Testnet / Devnet</option>
                        <option value="Mainnet">Production Mainnet</option>
                        <option value="Both">Multi-network Integration</option>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Historical Telemetry (Daily Active Users)</label>
                      <Input 
                        name="monthlyUsers"
                        value={formData.monthlyUsers}
                        onChange={handleChange}
                        placeholder="e.g. 10k - 100k DAU" 
                        className="omen-input bg-white/5 border-white/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Integration Strategy</label>
                    <textarea 
                      name="desiredIntegration"
                      value={formData.desiredIntegration}
                      onChange={handleChange}
                      className="flex min-h-[160px] w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-base text-foreground placeholder:text-body/30 focus-visible:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none shadow-inner"
                      placeholder="Describe your security requirements and how Omen will be integrated into your runtime flow..."
                      required
                    />
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col gap-8">
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-[70px] text-xl font-black shadow-[0_0_30px_rgba(67,182,213,0.3)]" 
                    disabled={!isFormValid || status === "loading"}
                    isLoading={status === "loading"}
                  >
                    Initiate Onboarding
                  </Button>
                  <div className="flex items-center justify-center gap-6 text-[11px] font-black uppercase tracking-[0.4em] text-primary/40">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" /> End-to-End Cryptography
                    </div>
                    <div className="w-[1.5px] h-4 bg-white/10" />
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" /> Sovereign Infrastructure
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

