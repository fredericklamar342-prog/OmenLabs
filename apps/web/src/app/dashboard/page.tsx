"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  LayoutDashboard, 
  CheckCircle, 
  FileText, 
  Settings, 
  UploadCloud, 
  Activity,
  Menu,
  X,
  LogOut,
  Bell,
  ChevronRight,
  GitBranch,
  Database,
  Search,
  AlertTriangle,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const SIDEBAR_LINKS = [
  { name: "Overview",       icon: LayoutDashboard, href: "#", active: true },
  { name: "OmenBadge",      icon: ShieldCheck,     href: "#" },
  { name: "Agent Lineage",  icon: GitBranch,       href: "#" },
  { name: "Walrus Storage", icon: Database,        href: "#" },
  { name: "My Protocols",   icon: Activity,        href: "#" },
  { name: "Developer Settings", icon: Settings,    href: "#" },
];

const RECENT_ALERTS = [
  { id: 1, action: "Trust score updated via AI Audit", date: "2 hours ago",  status: "success" },
  { id: 2, action: "New child agent 'Bot_Alpha' linked", date: "1 day ago",    status: "info" },
  { id: 3, action: "Walrus blob '0x44a...' pinned",      date: "2 days ago",   status: "success" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1220] flex font-sans selection:bg-[#43B6D5]/20">
      
      {/* ── Sidebar overlay (mobile) ─────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0B1220]/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ──────────────────────────────────────── */}
      <aside
        className={[
          "fixed top-0 left-0 h-full w-[280px] bg-white border-r border-black/[0.03] flex flex-col z-40 transition-all duration-500 ease-in-out shadow-2xl lg:shadow-none",
          "lg:relative lg:translate-x-0 lg:flex lg:shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-8 py-10">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/omen-logo.png" alt="Omen" width={32} height={32} className="h-8 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter uppercase leading-none">Omen</span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#43B6D5]">V2.0 Protocol</span>
            </div>
          </Link>
          <button
            className="ml-auto lg:hidden p-2 text-[#64748B] hover:bg-black/5 rounded-xl transition-colors"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
          <div className="px-4 py-3 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8] italic">Main Menu</p>
          </div>
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 group",
                link.active
                  ? "bg-[#0B1220] text-white shadow-xl shadow-black/10"
                  : "text-[#64748B] hover:text-[#0B1220] hover:bg-black/[0.02]",
              ].join(" ")}
            >
              <link.icon className={["w-5 h-5 shrink-0 transition-transform duration-300", !link.active && "group-hover:scale-110"].join(" ")} />
              <span>{link.name}</span>
              {link.active && <div className="ml-auto w-1 h-1 rounded-full bg-[#43B6D5]" />}
            </Link>
          ))}
        </nav>

        {/* User Card */}
        <div className="mx-4 mb-8 p-6 glass-card bg-[#F8FAFC] border-black/[0.03] space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#43B6D5] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#43B6D5]/20">
               OM
             </div>
             <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-tight text-[#0B1220]">lamar.sui</span>
                <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">Premium Entity</span>
             </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2.5 pt-4 border-t border-black/[0.05] text-[10px] font-black uppercase tracking-widest text-[#64748B] hover:text-[#FF5F56] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

        {/* Top Bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between gap-6 px-10 py-6 bg-white/60 backdrop-blur-xl border-b border-black/[0.03]">
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-black/5 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6 text-[#0B1220]" />
          </button>
          
          <div className="hidden lg:flex items-center gap-4 bg-[#F8FAFC] px-5 py-3 rounded-2xl border border-black/[0.03] w-full max-w-lg transition-all focus-within:ring-2 focus-within:ring-[#43B6D5]/20 focus-within:bg-white group">
            <Search className="w-4 h-4 text-[#94A3B8] group-focus-within:text-[#43B6D5] transition-colors" />
            <input 
              type="text" 
              placeholder="Query protocol registry..." 
              className="bg-transparent border-none text-[11px] font-bold uppercase tracking-widest focus:ring-0 w-full placeholder:text-[#94A3B8]/60" 
            />
            <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-black/[0.05] rounded-lg shadow-sm">
               <span className="text-[8px] font-black text-[#94A3B8]">⌘</span>
               <span className="text-[8px] font-black text-[#94A3B8]">K</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-8">
             <div className="flex items-center gap-6 pr-6 border-r border-black/[0.05]">
                <button className="relative group" aria-label="Notifications">
                   <Bell className="w-5 h-5 text-[#64748B] group-hover:text-[#0B1220] transition-colors" />
                   <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF5F56] border-2 border-white rounded-full group-hover:scale-125 transition-transform" />
                </button>
             </div>
             <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0B1220]">Mainnet Online</span>
                </div>
                <span className="text-[10px] font-bold text-[#94A3B8] uppercase">Sync Latency: 42ms</span>
             </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC] selection:bg-[#43B6D5]/10">
          <div className="max-w-7xl mx-auto p-10 space-y-12 pb-24">

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 animate-fade-up">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="h-px w-8 bg-[#43B6D5]" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#43B6D5]">Protocol Overview</span>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1220] tracking-tighter uppercase leading-none">Identity Console</h1>
                 <p className="text-lg text-[#64748B] font-medium max-w-xl">Master view of your soulbound reputational primitives and deep-graph agent lineage.</p>
              </div>
              <div className="flex gap-4">
                 <Button variant="secondary" className="glass-card bg-white border-black/[0.03] text-[10px] px-6 h-12 shadow-sm hover:shadow-md transition-all">Audit History</Button>
                 <Button className="bg-[#0B1220] hover:bg-[#0B1220]/90 text-white border-none px-8 h-12 shadow-xl hover:shadow-2xl transition-all group">
                   Manage Badge <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-up delay-100">
              {[
                { label: "Omen Trust Score", value: "92 / 100", sub: "Institutional Prime", icon: ShieldCheck, color: "text-[#43B6D5]", bg: "bg-[#43B6D5]/5" },
                { label: "Active Lineage", value: "08", sub: "Verified Entities", icon: GitBranch, color: "text-[#0B1220]", bg: "bg-[#0B1220]/5" },
                { label: "Storage Pinned", value: "24.8 GB", sub: "Walrus Network", icon: Database, color: "text-[#0B1220]", bg: "bg-[#0B1220]/5" },
                { label: "Security Health", value: "Optimal", sub: "No active risk", icon: Activity, color: "text-[#27C93F]", bg: "bg-[#27C93F]/5" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-black/[0.03] shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-black/[0.02] -mr-8 -mt-8 rounded-full" />
                   <div className="flex items-center justify-between mb-8">
                      <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[10px] font-black uppercase text-[#94A3B8] tracking-widest">v2.0</span>
                         <span className="text-[8px] font-bold text-[#27C93F] uppercase tracking-tighter">Live</span>
                      </div>
                   </div>
                   <p className="text-[10px] font-black uppercase text-[#94A3B8] tracking-widest mb-2">{stat.label}</p>
                   <div className="flex items-baseline gap-2">
                     <p className="text-3xl font-black text-[#0B1220] tracking-tighter">{stat.value}</p>
                   </div>
                   <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 animate-fade-up delay-200">
               
               {/* Left Column: Lineage & Storage */}
               <div className="space-y-10">
                  
                  {/* Walrus Area */}
                  <div className="glass-card bg-white border-white overflow-hidden shadow-2xl rounded-[40px]">
                     <div className="px-10 py-8 border-b border-black/[0.03] flex items-center justify-between bg-white/50">
                        <div className="space-y-1">
                           <h3 className="text-xl font-black uppercase tracking-tight text-[#0B1220]">Walrus Storage Blobs</h3>
                           <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest italic">Immutable encryption layer</p>
                        </div>
                        <Button size="sm" className="bg-[#0B1220] hover:bg-[#0B1220]/90 text-white border-none text-[10px] font-black uppercase tracking-widest px-6 h-10 rounded-xl shadow-lg">Upload Data</Button>
                     </div>
                     <div className="p-10 space-y-4">
                        {[
                          { name: "protocol_audit_v4.pdf", size: "12.2 MB", hash: "walrus://0x882...91a", status: "Active", time: "2h ago" },
                          { name: "agent_behavior_spec.json", size: "2.4 MB", hash: "walrus://0xf2a...c02", status: "Active", time: "1d ago" },
                          { name: "lineage_graph_root.bin",   size: "844 KB", hash: "walrus://0xbe3...001", status: "Syncing", time: "Just now" },
                        ].map((file, i) => (
                          <div key={i} className="flex items-center justify-between p-6 bg-[#F8FAFC] rounded-2xl border border-black/[0.03] group hover:bg-white hover:shadow-xl hover:border-black/[0.08] transition-all duration-300">
                             <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.03] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                   <FileText className="w-5 h-5 text-[#64748B] group-hover:text-[#43B6D5] transition-colors" />
                                </div>
                                <div>
                                   <p className="text-[13px] font-black text-[#0B1220] mb-0.5">{file.name}</p>
                                   <div className="flex items-center gap-3">
                                      <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{file.size}</span>
                                      <div className="w-1 h-1 rounded-full bg-black/10" />
                                      <span className="text-[10px] font-mono font-bold text-[#43B6D5] tracking-tighter">{file.hash}</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex flex-col items-end gap-1">
                                <span className={["text-[9px] font-black uppercase px-3 py-1 rounded-full border", file.status === "Syncing" ? "bg-amber-500/10 text-amber-600 border-amber-500/20 animate-pulse" : "bg-green-500/10 text-green-600 border-green-500/20"].join(" ")}>
                                  {file.status}
                                </span>
                                <span className="text-[8px] font-bold text-[#94A3B8] uppercase">{file.time}</span>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Agent Lineage Graph */}
                  <div className="glass-card bg-white border-white p-10 shadow-2xl rounded-[40px]">
                     <div className="flex items-center justify-between mb-10">
                        <div className="space-y-1">
                           <h3 className="text-xl font-black uppercase tracking-tight text-[#0B1220]">Deep-Graph Lineage</h3>
                           <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest italic">Encrypted entity relationships</p>
                        </div>
                        <GitBranch className="w-6 h-6 text-[#43B6D5]" />
                     </div>
                     <div className="relative p-10 border border-black/[0.03] rounded-[32px] bg-[#F8FAFC] overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rotate-12 -mr-32 -mt-32 rounded-[64px]" />
                        <div className="flex items-center gap-8 relative z-10">
                           <div className="w-20 h-20 rounded-[28px] bg-[#0B1220] flex items-center justify-center text-white font-black text-2xl shadow-2xl relative">
                              OM
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#43B6D5] border-4 border-[#F8FAFC] flex items-center justify-center">
                                 <ShieldCheck className="w-3.5 h-3.5 text-white" />
                              </div>
                           </div>
                           <div className="flex-1 space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#43B6D5]">Root Principal Badge</p>
                              <h4 className="text-2xl font-black uppercase tracking-tighter text-[#0B1220]">Omen_Legacy_001</h4>
                              <div className="flex items-center gap-3">
                                 <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-[0.2em]">Institutional ID</span>
                                 <div className="w-1 h-3 bg-black/10 rotate-12" />
                                 <span className="text-[9px] font-bold text-[#43B6D5] uppercase tracking-[0.2em] font-mono">Rank: Apex</span>
                              </div>
                           </div>
                        </div>
                        <div className="mt-10 ml-24 space-y-4 border-l-2 border-[#43B6D5]/10 pl-10 relative">
                           <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-b-2 border-black/[0.03] -ml-[2px] rounded-bl-3xl" />
                           {[
                             { name: "TradeBot_Alpha_v2", trust: 98, status: "Active" },
                             { name: "Liquidity_Master_Proxy", trust: 94, status: "Active" },
                             { name: "Risk_Mitigation_Agent", trust: 91, status: "Resting" }
                           ].map((agent, i) => (
                             <div key={i} className="p-5 bg-white rounded-2xl border border-black/[0.03] flex items-center justify-between hover:shadow-lg hover:translate-x-2 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                   <div className={`w-2 h-2 rounded-full ${agent.status === "Active" ? "bg-[#27C93F]" : "bg-[#94A3B8]"}`} />
                                   <span className="text-[11px] font-black uppercase tracking-widest text-[#0B1220]">{agent.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                   <span className="text-[10px] font-black uppercase text-[#94A3B8] tracking-widest">Trust</span>
                                   <span className="text-sm font-black text-[#27C93F]">{agent.trust}%</span>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>

               </div>

               {/* Right Column: Physical Badge & Activity */}
               <div className="space-y-10">
                  
                  {/* Badge Physical Representation */}
                  <div className="bg-[#0B1220] rounded-[48px] p-10 text-white relative overflow-hidden group shadow-2xl hover:scale-[1.02] transition-transform duration-700">
                     <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#43B6D5]/40 to-transparent blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-80 transition-opacity" />
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#43B6D5]/10 to-transparent blur-[80px] opacity-30" />
                     
                     <div className="relative z-10 space-y-12">
                        <div className="flex justify-between items-start">
                           <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center">
                              <ShieldCheck className="w-8 h-8 text-[#43B6D5]" />
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="text-[9px] font-black tracking-[0.4em] text-white/40 uppercase">Sui Network</span>
                              <span className="text-[10px] font-black text-[#43B6D5] uppercase tracking-widest">Authenticated</span>
                           </div>
                        </div>
                        
                        <div className="space-y-3">
                           <h4 className="text-3xl font-black uppercase tracking-tighter leading-[0.9] text-balance">Omen Verified <br /> Institutional</h4>
                           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#43B6D5] opacity-80 italic">Programmatic Identity primitive</p>
                        </div>

                        <div className="pt-10 space-y-8 border-t border-white/10">
                           <div className="grid grid-cols-2 gap-6">
                              <div>
                                 <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1.5">Entity Handle</p>
                                 <p className="text-[11px] font-black tracking-tight text-white uppercase">lamar_ventures.sui</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1.5">Registry ID</p>
                                 <p className="text-[11px] font-mono font-bold text-[#43B6D5]">OMN-01-44B1</p>
                              </div>
                           </div>
                           <div className="w-full h-8 bg-white/5 rounded-lg border border-white/10 overflow-hidden relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
                              <div className="flex items-center justify-between px-3 h-full">
                                 <div className="flex gap-1">
                                    {[...Array(24)].map((_, i) => (
                                       <div key={i} className={`w-0.5 h-3 ${i % 3 === 0 ? 'bg-white/40' : 'bg-white/10'}`} />
                                    ))}
                                 </div>
                                 <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Secured</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Security Activity */}
                  <div className="glass-card bg-white border-white p-10 shadow-2xl rounded-[40px]">
                     <div className="flex items-center justify-between mb-8">
                        <h3 className="text-sm font-black uppercase tracking-widest text-[#0B1220]">Security Ledger</h3>
                        <Bell className="w-4 h-4 text-[#94A3B8]" />
                     </div>
                     <div className="space-y-8">
                        {RECENT_ALERTS.map((alert, i) => (
                          <div key={i} className="flex gap-5 relative group">
                             {i !== RECENT_ALERTS.length - 1 && (
                               <div className="absolute top-8 left-1.5 w-px h-10 bg-black/[0.03]" />
                             )}
                             <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 border-2 border-white shadow-sm ${alert.status === 'success' ? 'bg-[#43B6D5]' : 'bg-[#AAC0E1]'}`} />
                             <div className="flex-1 space-y-1">
                                <p className="text-[12px] font-bold text-[#0B1220] leading-snug group-hover:text-[#43B6D5] transition-colors">{alert.action}</p>
                                <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{alert.date}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                     <Button variant="secondary" className="w-full mt-10 border-black/[0.03] text-[9px] font-black uppercase tracking-[0.2em] h-10 rounded-xl bg-transparent hover:bg-[#F8FAFC]">Expand Security Logs</Button>
                  </div>

                  {/* Contextual CTA */}
                  <div className="p-10 bg-[#0B1220] rounded-[40px] text-white relative shadow-2xl group overflow-hidden">
                     <div className="absolute top-0 right-0 w-48 h-48 bg-[#43B6D5]/10 rotate-45 -mr-24 -mt-24 rounded-[48px]" />
                     <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                           <Activity className="w-5 h-5 text-[#43B6D5]" />
                           <h4 className="text-lg font-black uppercase tracking-tight">System Status</h4>
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-white/70">Registry V2.0 is fully synced with Sui Mainnet. DeepBook V3 integration is active for all gated liquidity pools.</p>
                        <Button className="w-full bg-[#43B6D5] hover:bg-[#3AA0BD] text-white border-none text-[10px] font-black uppercase tracking-widest h-12 rounded-2xl shadow-lg shadow-[#43B6D5]/20">Protocol Terminal</Button>
                     </div>
                  </div>

               </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
