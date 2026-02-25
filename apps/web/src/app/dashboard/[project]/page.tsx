"use client";

import * as React from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  Code,
  Fingerprint,
  Cpu,
  Shield,
  FileText
} from "lucide-react";

const MOCK_PROJECTS_DETAIL: any = {
  "astra-finance": {
    name: "Astra Finance",
    score: 98,
    status: "verified",
    auditSummary: "Passed 3/3 critical audits with zero unresolved issues.",
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
    auditSummary: "1 Critical issue identified in governance module (unresolved).",
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
    auditSummary: "Audits expired. Critical treasury compromise signal detected.",
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
      <div className="max-w-6xl mx-auto py-12">
        <motion.div
           initial={{ opacity: 0, x: -10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.4 }}
        >
          <Link 
            href="/dashboard" 
            className="flex items-center gap-2 text-sm text-subtext hover:text-foreground mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
          </Link>
        </motion.div>

        {/* Overview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#E6E8EB] bg-white/90 p-8 md:p-12 mb-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur space-y-8"
        >
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant={projectData.status as any} className="uppercase px-3 py-1 font-black tracking-widest text-[10px]">
                  {projectData.status}
                </Badge>
                <span className="text-[10px] text-subtext font-mono font-bold uppercase tracking-widest">ID: {params.project}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter m-0 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                {projectData.name}
              </h1>
            </div>
            <div className="md:text-right">
              <div className="text-[10px] font-black text-subtext uppercase tracking-[0.2em] mb-2">Protocol Trust Index</div>
              <div className={`text-7xl md:text-8xl font-black font-mono tracking-tighter leading-none ${
                projectData.score > 80 ? "text-green-600" : 
                projectData.score > 50 ? "text-orange-600" : "text-accent"
              }`}>
                {projectData.score}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-border">
            <div className="space-y-8">
              <div>
                <div className="text-[10px] font-black text-subtext uppercase tracking-[0.2em] mb-3">Identity Verification</div>
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-5 h-5 text-accent" />
                  <p className="text-xl font-bold">{projectData.identityVerification}</p>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-black text-subtext uppercase tracking-[0.2em] mb-3">Audit Summary</div>
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <p className="text-subtext leading-relaxed font-medium">{projectData.auditSummary}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <Button asChild className="w-full h-14 rounded-none uppercase tracking-tighter font-black text-lg shadow-lg">
                <a href="#" className="flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  Download Full Report
                </a>
              </Button>
              <Button variant="secondary" className="w-full h-14 rounded-none uppercase tracking-tighter font-bold border-2">
                <span className="flex items-center justify-center gap-2">
                  View on SuiScan
                  <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Risk Breakdown Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { label: "Identity Score", value: projectData.breakdown.identity, icon: Fingerprint },
            { label: "Audit Score", value: projectData.breakdown.audit, icon: ShieldCheck },
            { label: "Behavior Score", value: projectData.breakdown.behavior, icon: Cpu }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="p-8 rounded-2xl border border-[#E6E8EB] bg-white/70 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-6">
                <item.icon className="w-5 h-5 text-accent" />
                <h3 className="text-[10px] font-black text-subtext uppercase tracking-[0.2em]">{item.label}</h3>
              </div>
              <div className="text-5xl font-black font-mono tracking-tighter mb-4">{item.value}%</div>
              <div className="w-full h-2 bg-gray-100/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                  className="h-full bg-accent" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border border-foreground bg-[#0A0A0A] p-10 text-background shadow-2xl relative overflow-hidden"
        >
          {/* subtle decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center bg-white/5">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em]">Quick Integration</h3>
          </div>
          <div className="space-y-8 relative z-10">
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Terminal — Package Setup</div>
              <div className="bg-white/5 p-5 font-mono text-sm border border-white/10 group cursor-pointer hover:bg-white/[0.07] transition-colors">
                <code className="text-gray-300">npm install <span className="text-white">@omen-labs/sdk</span></code>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">JavaScript — Trust Query</div>
              <div className="bg-white/5 p-6 font-mono text-sm border border-white/10 overflow-x-auto">
                <code className="text-gray-400 block whitespace-pre">
{`import { OmenSDK } from '@omen-labs/sdk';

const omen = new OmenSDK({ network: 'mainnet' });
const score = await omen.getTrustScore('${params.project}');`}
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
