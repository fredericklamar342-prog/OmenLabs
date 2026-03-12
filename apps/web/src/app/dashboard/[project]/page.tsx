"use client";

import * as React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Code,
  Fingerprint,
  Cpu,
  Shield,
  FileText,
  Activity,
  AlertCircle,
  Database,
  Terminal
} from "lucide-react";

const MOCK_PROJECTS_DETAIL: any = {
  "astra-finance": {
    name: "Astra Finance",
    score: 98,
    status: "verified",
    auditSummary: "Passed 3/3 critical audits with zero unresolved issues. Fully compliant with Omen Protocol V2.",
    identityVerification: "Full KYB (Level 3)",
    breakdown: {
      identity: 100,
      audit: 96,
      behavior: 98
    }
  },
  "nebula-loop": {
    name: "Nebula Loop",
    score: 65,
    status: "watchlist",
    auditSummary: "1 Critical issue identified in governance module (unresolved). Audit recency 45 days.",
    identityVerification: "Partial KYC (Level 1)",
    breakdown: {
      identity: 45,
      audit: 72,
      behavior: 78
    }
  },
  "void-swap": {
    name: "Void Swap",
    score: 12,
    status: "revoked",
    auditSummary: "Audits expired. Critical treasury compromise signal detected. Entity placed on global blacklist.",
    identityVerification: "Anonymous / Not Verified",
    breakdown: {
      identity: 0,
      audit: 15,
      behavior: 21
    }
  }
};

export default function ProjectPage({ params }: { params: { project: string } }) {
  const projectData = MOCK_PROJECTS_DETAIL[params.project] || {
    name: params.project.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
    score: 0,
    status: "unknown",
    auditSummary: "No audit data found.",
    identityVerification: "Not Verified",
    breakdown: { identity: 0, audit: 0, behavior: 0 }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0B1220] selection:bg-[#43B6D5]/20 pb-32">
        <div className="max-w-7xl mx-auto py-20 px-10">
          
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] hover:text-[#43B6D5] mb-16 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Registry Hierarchy
            </Link>
          </motion.div>

          {/* Core Identity Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card bg-white border-white p-12 md:p-20 mb-12 relative overflow-hidden rounded-[48px] shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43B6D5]/30 to-transparent" />
            
            <div className="flex flex-col lg:flex-row justify-between gap-16 relative z-10">
              <div className="space-y-10 flex-1">
                <div className="flex items-center gap-4">
                  <div className={["px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border", 
                    projectData.status === "verified" ? "bg-green-500/10 text-green-600 border-green-500/20" : 
                    projectData.status === "watchlist" ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : 
                    "bg-red-500/10 text-red-600 border-red-500/20"
                  ].join(" ")}>
                    {projectData.status === "verified" ? "Authorized Entity" : projectData.status}
                  </div>
                  <div className="w-[1px] h-3 bg-black/10" />
                  <span className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-[0.2em]">SEQ_REF: {params.project.toUpperCase()}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter m-0 text-[#0B1220] uppercase leading-none">
                  {projectData.name}
                </h1>
                <p className="text-lg text-[#64748B] font-medium max-w-2xl leading-relaxed">
                  Comprehensive reputational profile and cryptographic security evaluation for the {projectData.name} system cluster.
                </p>
              </div>
              
              <div className="lg:text-right flex flex-col items-center lg:items-end justify-center">
                <span className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.4em] mb-6 shadow-sm">Protocol Trust Index</span>
                <div className="relative group">
                   <div className="absolute inset-0 bg-[#43B6D5]/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                   <div className={["text-9xl font-black tracking-tighter leading-none relative",
                    projectData.score > 80 ? "text-[#27C93F]" : 
                    projectData.score > 50 ? "text-amber-500" : "text-red-500"
                  ].join(" ")}>
                    {projectData.score.toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 pt-20 mt-20 border-t border-black/[0.03]">
              <div className="space-y-4">
                <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em] flex items-center gap-3">
                  <Fingerprint className="w-4 h-4 text-[#43B6D5]" /> Identity Status
                </div>
                <p className="text-2xl font-black tracking-tight text-[#0B1220] uppercase">{projectData.identityVerification}</p>
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em] flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#43B6D5]" /> Assessment Summary
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed font-bold uppercase tracking-tight opacity-80">{projectData.auditSummary}</p>
              </div>
              <div className="flex flex-col gap-4">
                <Button className="w-full h-14 bg-[#0B1220] text-white border-none shadow-xl text-[10px] font-black uppercase tracking-widest rounded-2xl">
                  <FileText className="w-4 h-4 mr-3" /> Technical Audit
                </Button>
                <Button variant="secondary" className="w-full h-14 bg-white border-black/[0.03] text-[#0B1220] text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <ExternalLink className="w-4 h-4 mr-3" /> Sui Scan Artifacts
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Telemetry Grid */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { label: "Identity Integrity", value: projectData.breakdown.identity, icon: Fingerprint, delay: 0 },
              { label: "Audit Assertions", value: projectData.breakdown.audit, icon: ShieldCheck, delay: 0.1 },
              { label: "Behavioral Analysis", value: projectData.breakdown.behavior, icon: Cpu, delay: 0.2 }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + item.delay }}
                className="p-12 glass-card bg-white border-white flex flex-col gap-8 rounded-[40px] relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F8FAFC] border border-black/[0.03] flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">
                      <item.icon className="w-6 h-6 text-[#43B6D5]" />
                    </div>
                    <h3 className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.3em]">{item.label}</h3>
                  </div>
                  <span className="font-black text-[10px] text-black/5">VECTOR_{i+1}</span>
                </div>
                <div className="text-6xl font-black text-[#0B1220] tracking-tighter tabular-nums leading-none">{item.value}%</div>
                <div className="w-full h-1.5 bg-[#F8FAFC] relative rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute h-full bg-[#43B6D5] shadow-[0_0_20px_rgba(67,182,213,0.4)] rounded-full" 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration Specs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="glass-card bg-[#0B1220] p-12 md:p-20 relative overflow-hidden rounded-[48px] shadow-2xl text-white"
          >
            <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12">
              <Database className="w-64 h-64 text-white" />
            </div>
            
            <div className="flex items-center gap-6 mb-16 relative z-10">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-2xl shadow-2xl">
                <Terminal className="w-7 h-7 text-[#43B6D5]" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#43B6D5]">Integration_Cluster</p>
                <h3 className="text-3xl font-black tracking-tight uppercase leading-none">Induction Registry Node</h3>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] font-black text-white/40 mb-2">
                  <span>CLI / Secure Terminal</span>
                  <span className="text-[#27C93F] font-mono opacity-80">STABLE_VECTOR</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 font-mono text-sm border border-white/10 rounded-2xl group cursor-pointer hover:bg-white/10 transition-all relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-[#43B6D5]" />
                  <code className="text-white/90">
                    <span className="text-white/30 mr-4">#</span> npm i <span className="text-[#43B6D5]">@omen/registry-node</span>
                  </code>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] font-black text-white/40 mb-2">
                  <span>SDK Implementation</span>
                  <span className="text-[#43B6D5] font-mono opacity-80">E2E_HARDENED</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 font-mono text-sm border border-white/10 rounded-2xl overflow-x-auto relative">
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-[#43B6D5]" />
                  <code className="text-white/40 block whitespace-pre leading-relaxed">
{`<span className="text-[#43B6D5]">const</span> node = <span className="text-[#43B6D5]">await</span> omen.query({
  id: <span className="text-white">'${params.project}'</span>,
  sync: <span className="text-white">true</span>
});

console.log(node.is_authorized);`}
                  </code>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
