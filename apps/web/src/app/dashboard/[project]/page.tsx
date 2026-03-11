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
    name: "ASTRA_SHARD_v2",
    score: 98,
    status: "verified",
    auditSummary: "Passed 3/3 critical audits with zero unresolved issues. Fully compliant with OMEN_PROTOCOL_V2.",
    identityVerification: "Full_KYB_Security_Level_3",
    breakdown: {
      identity: 100,
      audit: 96,
      behavior: 98
    }
  },
  "nebula-loop": {
    name: "NEBULA_PROTOCOL_SYNC",
    score: 65,
    status: "watchlist",
    auditSummary: "1 Critical issue identified in governance module (unresolved). Audit recency 45 days.",
    identityVerification: "Partial_KYC_Level_1",
    breakdown: {
      identity: 45,
      audit: 72,
      behavior: 78
    }
  },
  "void-swap": {
    name: "VOID_SWAP_MALICIOUS",
    score: 12,
    status: "revoked",
    auditSummary: "Audits expired. Critical treasury compromise signal detected. Entity placed on global blacklist.",
    identityVerification: "ANONYMOUS_UNVERIFIED",
    breakdown: {
      identity: 0,
      audit: 15,
      behavior: 21
    }
  }
};

export default function ProjectPage({ params }: { params: { project: string } }) {
  const projectData = MOCK_PROJECTS_DETAIL[params.project] || {
    name: params.project.split('-').map((s: string) => s.toUpperCase()).join('_'),
    score: 0,
    status: "unknown",
    auditSummary: "No audit data found.",
    identityVerification: "Not Verified",
    breakdown: { identity: 0, audit: 0, behavior: 0 }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-24 px-6 md:py-32">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link 
            href="/dashboard" 
            className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-body/30 hover:text-primary mb-16 transition-all group italic"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
            Return_to_Registry_Cluster
          </Link>
        </motion.div>

        {/* Overview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-12 md:p-24 mb-12 border border-white/5 relative overflow-hidden rounded-[48px] shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-panel/40 backdrop-blur-3xl"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60" />
          
          <div className="flex flex-col lg:flex-row justify-between gap-20 relative z-10">
            <div className="space-y-10 flex-1">
              <div className="flex items-center gap-6">
                <Badge variant={projectData.status as any}>
                  {projectData.status === "verified" ? "AUTHORIZED_ENTITY" : projectData.status.toUpperCase()}
                </Badge>
                <div className="w-[1px] h-4 bg-white/10" />
                <span className="text-[11px] text-primary/40 font-mono font-black uppercase tracking-[0.4em]">HANDSHAKE_ID: {params.project.toUpperCase()}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter m-0 text-foreground italic leading-none">
                {projectData.name}
              </h1>
              <p className="text-2xl text-body max-w-2xl leading-relaxed italic opacity-60">
                Comprehensive security profile and cryptographic risk evaluation for the selected node instance.
              </p>
            </div>
            
            <div className="lg:text-right flex flex-col items-center lg:items-end justify-center">
              <div className="text-[10px] font-black text-primary/30 uppercase tracking-[0.6em] mb-6">TRUST_INDEX_RATING</div>
              <div className="relative">
                 <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full opacity-40 animate-pulse" />
                 <div className={`text-9xl md:text-[11rem] font-black font-mono tracking-tighter leading-none relative italic flex items-baseline gap-2 ${
                  projectData.status === "verified" ? "text-primary drop-shadow-[0_0_30px_#43B6D5]" : 
                  projectData.status === "watchlist" ? "text-amber-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]" : "text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                }`}>
                  {projectData.score.toString().padStart(2, '0')}<span className="text-3xl opacity-20">.0</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 pt-20 mt-20 border-t border-white/5">
            <div className="space-y-6">
              <div className="text-[11px] font-black text-primary/40 uppercase tracking-[0.5em] flex items-center gap-3 italic">
                <Fingerprint className="w-4 h-4 text-primary" /> Identity_Integrity
              </div>
              <p className="text-2xl font-black tracking-tighter text-foreground italic uppercase">{projectData.identityVerification}</p>
            </div>
            <div className="space-y-6">
              <div className="text-[11px] font-black text-primary/40 uppercase tracking-[0.5em] flex items-center gap-3 italic">
                <ShieldCheck className="w-4 h-4 text-primary" /> Security_Posture
              </div>
              <p className="text-lg text-body leading-relaxed font-bold uppercase tracking-widest opacity-80 italic">{projectData.auditSummary}</p>
            </div>
            <div className="flex flex-col gap-6">
              <Button size="lg" className="w-full h-18 text-lg font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)]">
                <FileText className="w-5 h-5 mr-3" /> System_Report
              </Button>
              <Button variant="secondary" size="lg" className="w-full h-18 text-lg font-black italic border-white/10 bg-white/3 glass-panel">
                <ExternalLink className="w-5 h-5 mr-3" /> Explorer_Verify
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Risk Breakdown Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: "Identity_Anchor", value: projectData.breakdown.identity, icon: Fingerprint, delay: 0 },
            { label: "Audit_Proof", value: projectData.breakdown.audit, icon: ShieldCheck, delay: 0.1 },
            { label: "Behavior_Sync", value: projectData.breakdown.behavior, icon: Cpu, delay: 0.2 }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + item.delay, ease: [0.16, 1, 0.3, 1] }}
              className="p-12 glass-card border border-white/5 flex flex-col gap-8 rounded-[40px] relative overflow-hidden group hover:border-primary/20 transition-all duration-500 bg-panel/20 backdrop-blur-3xl"
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-white/10 bg-white/3 flex items-center justify-center rounded-2xl group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-[11px] font-black text-primary/40 uppercase tracking-[0.5em] italic">{item.label}</h3>
                </div>
                <span className="font-mono text-[10px] text-primary/10 font-bold group-hover:text-primary/20 transition-colors">INIT_V{i+1}</span>
              </div>
              <div className="text-6xl font-black font-mono tracking-tighter tabular-nums text-foreground italic relative z-10">{item.value}%</div>
              <div className="w-full h-1 bg-white/5 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute h-full bg-primary shadow-[0_0_20px_#43B6D5]" 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Architecture */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-12 md:p-24 relative overflow-hidden rounded-[48px] border border-white/5 bg-panel/30 shadow-[0_0_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl"
        >
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
            <Database className="w-64 h-64 text-primary" />
          </div>
          
          <div className="flex items-center gap-6 mb-16 relative z-10">
            <div className="w-16 h-16 border border-primary/20 bg-primary/10 flex items-center justify-center rounded-2xl shadow-[0_0_30px_rgba(67,182,213,0.2)]">
              <Terminal className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/60 italic">INTEGRATION_SYNC</p>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter italic text-foreground">Handshake_Init_Terminal</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] font-black text-primary/30 mb-2 italic">
                <span>CLI_AUTH_COMMAND</span>
                <span className="text-primary font-mono opacity-80">STABLE_BUILD</span>
              </div>
              <div className="bg-[#05080A] p-8 font-mono text-sm border border-white/10 rounded-3xl group cursor-pointer hover:border-primary/30 transition-all relative overflow-hidden shadow-2xl">
                <div className="absolute inset-y-0 left-0 w-[4px] bg-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                <code className="text-foreground/80 whitespace-nowrap block">
                  <span className="text-primary/40 mr-4">#</span> npm install <span className="text-primary font-black">@omen/node_shard</span>
                </code>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] font-black text-primary/30 mb-2 italic">
                <span>TS_VERIFIED_EVAL</span>
                <span className="text-primary/60 font-mono italic">E2E_HARDENED</span>
              </div>
              <div className="bg-[#05080A] p-10 font-mono text-sm border border-white/10 rounded-3xl overflow-x-auto relative shadow-2xl">
                <div className="absolute inset-y-0 left-0 w-[4px] bg-primary opacity-40" />
                <code className="text-body block whitespace-pre leading-relaxed italic">
{`<span className="text-primary">const</span> shard_v2 = <span className="text-primary">await</span> omen.sync({
  id: <span className="text-foreground">'${params.project}'</span>,
  force_telem_sync: <span className="text-primary">true</span>
});

console.log(shard_v2.is_authorized_handshake);`}
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
