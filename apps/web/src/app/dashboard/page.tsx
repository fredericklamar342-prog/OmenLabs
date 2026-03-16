"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  LayoutGrid, 
  CheckCircle2, 
  FileText, 
  Settings, 
  Upload, 
  Activity,
  Menu,
  X,
  LogOut,
  Bell,
  GitBranch,
  Database,
  Search,
  CircleAlert,
  CircleHelp
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const SIDEBAR_LINKS = [
  { name: "Overview",       icon: LayoutGrid,      href: "#", active: true },
  { name: "OmenBadge",      icon: ShieldCheck,      href: "#" },
  { name: "Agent Lineage",  icon: GitBranch,     href: "#" },
  { name: "Walrus Storage", icon: Database,      href: "#" },
  { name: "My Protocols",   icon: Activity,        href: "#" },
  { name: "Developer Settings", icon: Settings,  href: "#" },
];

const RECENT_ALERTS = [
  { id: 1, action: "Trust score updated via AI Audit", date: "2 hours ago",  status: "success" },
  { id: 2, action: "New child agent 'Bot_Alpha' linked", date: "1 day ago",    status: "info" },
  { id: 3, action: "Walrus blob '0x44a...' pinned",      date: "2 days ago",   status: "success" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex font-outfit selection:bg-[#49A5BD]/20">
      
      {/* ── Sidebar overlay (mobile) ─────────────────────── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar ──────────────────────────────────────── */}
      <aside
        className={[
          "fixed top-0 left-0 h-full w-[280px] bg-surface border-r border-[#49A5BD]/20 flex flex-col z-40 transition-all duration-500 ease-in-out shadow-2xl lg:shadow-none",
          "lg:relative lg:translate-x-0 lg:flex lg:shrink-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-8 py-10">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/omen-logo.png" alt="Omen" width={32} height={32} className="h-8 w-auto object-contain brightness-100" />
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter uppercase leading-none text-foreground">Omen</span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#49A5BD] font-mono">Private Alpha V1.0</span>
            </div>
          </Link>
          <button
            className="ml-auto lg:hidden p-2 text-foreground hover:bg-[#49A5BD]/10 rounded-xl transition-colors"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-2 space-y-1.5 overflow-y-auto">
          <div className="px-4 py-3 mb-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-body/50 italic font-mono">Main Menu</p>
          </div>
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={[
                "flex items-center gap-3 px-4 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 group",
                link.active
                  ? "bg-[#49A5BD] text-white shadow-lg shadow-[#49A5BD]/20"
                  : "text-body hover:text-foreground hover:bg-[#49A5BD]/5",
              ].join(" ")}
            >
              <link.icon className={["w-5 h-5 shrink-0 transition-transform duration-300", !link.active && "group-hover:scale-110"].join(" ")} />
              <span>{link.name}</span>
              {link.active && <div className="ml-auto w-1 h-1 rounded-full bg-white" />}
            </Link>
          ))}
        </nav>

        {/* User Card */}
        <div className="mx-4 mb-8 p-6 glass-card bg-surface border border-[#49A5BD]/20 space-y-4 rounded-2xl">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#49A5BD] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-[#49A5BD]/20">
               OM
             </div>
             <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-tight text-foreground">lamar.sui</span>
                <span className="text-[9px] font-bold text-body/70 uppercase tracking-widest font-mono">Premium Entity</span>
             </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2.5 pt-4 border-t border-[#49A5BD]/20 text-[10px] font-black uppercase tracking-widest text-[#49A5BD] hover:opacity-70 transition-colors font-mono"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

        <header className="sticky top-0 z-20 flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 py-4 sm:py-6 bg-background/80 backdrop-blur-md border-b border-[#49A5BD]/20">
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-[#49A5BD]/10 transition-colors shrink-0"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={sidebarOpen}
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
          
          <div className="hidden lg:flex items-center gap-4 bg-surface px-5 py-3 rounded-2xl border border-[#49A5BD]/20 w-full max-w-lg transition-all focus-within:ring-2 focus-within:ring-[#49A5BD]/20 group">
            <Search className="w-4 h-4 text-body group-focus-within:text-[#49A5BD] transition-colors" />
            <input 
              type="text" 
              placeholder="Query protocol registry..." 
              className="bg-transparent border-none text-[11px] font-bold uppercase tracking-widest focus:ring-0 w-full placeholder:text-body/30 text-foreground font-mono" 
            />
            <div className="flex items-center gap-1.5 px-2 py-1 bg-[#49A5BD]/10 border border-[#49A5BD]/20 rounded-lg shadow-sm">
               <span className="text-[8px] font-black text-[#49A5BD]">⌘</span>
               <span className="text-[8px] font-black text-[#49A5BD]">K</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4 sm:gap-8">
             <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 border-r border-[#49A5BD]/20">
                <button className="relative group" aria-label="Notifications">
                   <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-body hover:text-foreground transition-colors" />
                   <span className="absolute -top-1 -right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#49A5BD] border-2 border-background rounded-full" />
                </button>
             </div>
             <div className="hidden sm:flex flex-col items-end">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#49A5BD] animate-pulse" />
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#49A5BD] font-mono whitespace-nowrap">Sui Testnet Online</span>
                </div>
                <span className="text-[10px] font-bold text-body/70 uppercase font-mono whitespace-nowrap">Sync Latency: 42ms</span>
             </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-background selection:bg-[#49A5BD]/10">
          <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-10 space-y-8 sm:space-y-12 pb-24">

            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-10 animate-fade-up">
              <div className="space-y-3 sm:space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="h-px w-6 sm:w-10 bg-[#49A5BD]/30 shrink-0" />
                   <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[#49A5BD] font-mono">Protocol Overview</span>
                 </div>
                 <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-tight md:leading-[0.9] font-outfit">Identity Console</h1>
                 <p className="text-sm sm:text-lg md:text-xl text-body font-bold max-w-xl leading-relaxed pr-2">Master view of your soulbound reputational primitives and deep-graph agent lineage.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full md:w-auto">
                 <div className="w-full sm:w-auto relative group">
                    <Button variant="secondary" disabled className="w-full sm:w-auto bg-surface border border-[#49A5BD]/20 text-[#49A5BD] opacity-50 cursor-not-allowed text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-6 sm:px-8 h-12 sm:h-14 shadow-xl font-mono">
                      Audit History
                    </Button>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#49A5BD] text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">Coming in V2</div>
                 </div>
                 <Link href="/alpha" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#49A5BD] hover:opacity-80 text-white border-none px-6 sm:px-10 h-12 sm:h-14 rounded-xl sm:rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all hover:scale-[1.02] sm:hover:scale-105 shadow-xl shadow-[#49A5BD]/20 font-mono">
                      Manage Badge
                    </Button>
                 </Link>
              </div>
            </div>


            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-up delay-100">
              {[
                { label: "Omen Trust Score", value: "92 / 100", sub: "Institutional Prime", icon: ShieldCheck, color: "text-[#49A5BD]", bg: "bg-surface" },
                { label: "Active Lineage", value: "08", sub: "Verified Entities", icon: GitBranch, color: "text-[#49A5BD]", bg: "bg-surface" },
                { label: "Storage Pinned", value: "24.8 GB", sub: "Walrus Network", icon: Database, color: "text-[#49A5BD]", bg: "bg-surface" },
                { label: "Security Health", value: "Optimal", sub: "No active risk", icon: Activity, color: "text-[#49A5BD]", bg: "bg-surface" },
              ].map((stat, i) => (
                <div key={i} className="bg-surface/50 p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-[#49A5BD]/20 transition-all duration-500 group relative overflow-hidden text-foreground hover:border-[#49A5BD]/40 shadow-xl sm:shadow-2xl">
                   <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-[#49A5BD]/20 flex items-center justify-center ${stat.color} group-hover:bg-[#49A5BD] group-hover:text-white transition-all duration-500 shadow-lg shrink-0`}>
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                         <span className="text-[9px] sm:text-[10px] font-black uppercase text-body/40 tracking-widest font-mono">Alpha V1.0</span>
                         <span className="text-[8px] font-black text-[#49A5BD] uppercase tracking-tighter animate-pulse">Live</span>
                      </div>
                   </div>
                   <p className="text-[9px] sm:text-[10px] font-black uppercase text-body/70 tracking-widest mb-1 sm:mb-2 font-mono">{stat.label}</p>
                   <div className="flex items-baseline gap-2">
                     <p className="text-2xl sm:text-3xl font-black text-foreground tracking-tighter truncate">{stat.value}</p>
                   </div>
                   <p className="text-[9px] sm:text-[10px] font-bold text-body/70 uppercase tracking-wider mt-1 font-mono truncate">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 sm:gap-10 animate-fade-up delay-200">
               
               {/* Left Column: Lineage & Storage */}
               <div className="space-y-6 sm:space-y-10 min-w-0">
                  
                  {/* Walrus Area */}
                  <div className="glass-card bg-surface/30 border border-[#49A5BD]/20 overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-xl sm:shadow-2xl">
                     <div className="px-5 sm:px-8 md:px-10 py-6 sm:py-8 border-b border-[#49A5BD]/10 flex flex-col sm:flex-row sm:items-center justify-between bg-surface/50 gap-4">
                        <div className="space-y-1">
                           <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-foreground">Walrus Storage Blobs</h3>
                           <p className="text-[9px] sm:text-[10px] font-bold text-body/70 uppercase tracking-widest italic font-mono">Immutable encryption layer</p>
                        </div>
                        <div className="w-full sm:w-auto relative group">
                           <Button size="sm" disabled className="w-full sm:w-auto bg-[#49A5BD] text-white border-none text-[10px] font-black uppercase tracking-widest px-6 h-10 rounded-xl font-mono shadow-lg shadow-[#49A5BD]/20 opacity-50 cursor-not-allowed">Upload Data</Button>
                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#49A5BD] text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">Uploads Locked</div>
                        </div>
                     </div>
                     <div className="p-5 sm:p-8 md:p-10 space-y-3 sm:space-y-4">
                        {[
                          { name: "protocol_audit_v4.pdf", size: "12.2 MB", hash: "walrus://0x882...91a", status: "Active", time: "2h ago" },
                          { name: "agent_behavior_spec.json", size: "2.4 MB", hash: "walrus://0xf2a...c02", status: "Active", time: "1d ago" },
                          { name: "lineage_graph_root.bin",   size: "844 KB", hash: "walrus://0xbe3...001", status: "Syncing", time: "Just now" },
                        ].map((file, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 bg-[#FFFFFF] rounded-xl sm:rounded-2xl border-2 border-[#49A5BD]/10 group hover:border-[#49A5BD] transition-all duration-300 gap-4 sm:gap-0">
                             <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#FFFFFF] border-2 border-[#49A5BD] flex items-center justify-center group-hover:bg-[#49A5BD] transition-all shrink-0 mt-1 sm:mt-0">
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#49A5BD] group-hover:text-[#FFFFFF] transition-colors" />
                                </div>
                                <div className="min-w-0 flex-1">
                                   <p className="text-[12px] sm:text-[13px] font-black text-[#49A5BD] mb-1 sm:mb-0.5 truncate">{file.name}</p>
                                   <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                      <span className="text-[9px] sm:text-[10px] font-bold text-[#49A5BD] opacity-70 uppercase tracking-widest whitespace-nowrap">{file.size}</span>
                                      <div className="w-1 h-1 rounded-full bg-[#49A5BD]/10 shrink-0" />
                                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#49A5BD] tracking-tighter truncate">{file.hash}</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 shrink-0 px-1 sm:px-0">
                                <span className={["text-[8px] sm:text-[9px] font-black uppercase px-2 sm:px-3 py-1 rounded-full border-2 border-[#49A5BD]", file.status === "Syncing" ? "opacity-50" : ""].join(" ")}>
                                  {file.status}
                                </span>
                                <span className="text-[8px] font-bold text-[#49A5BD] opacity-70 uppercase">{file.time}</span>
                             </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Agent Lineage Graph */}
                   <div className="glass-card bg-surface/30 border border-[#49A5BD]/20 p-5 sm:p-8 md:p-10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-xl sm:shadow-2xl overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-10 gap-3 sm:gap-0">
                         <div className="space-y-1">
                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-foreground">Deep-Graph Lineage</h3>
                            <p className="text-[9px] sm:text-[11px] font-black text-body/70 uppercase tracking-[0.15em] sm:tracking-[0.25em] italic font-mono">Encrypted entity relationships</p>
                         </div>
                         <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 text-[#49A5BD] hidden sm:block" />
                      </div>
                     <div className="relative p-5 sm:p-10 border-2 border-[#49A5BD]/10 rounded-2xl sm:rounded-[32px] bg-[#FFFFFF] overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-[#FFFFFF]/40 rotate-12 -mr-20 -mt-20 sm:-mr-32 sm:-mt-32 rounded-3xl sm:rounded-[64px]" />
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 relative z-10">
                           <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-[28px] bg-[#49A5BD] flex items-center justify-center text-[#FFFFFF] font-black text-xl sm:text-2xl relative shrink-0">
                              OM
                                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                              </div>
                           <div className="flex-1 space-y-1">
                              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#49A5BD]">Root Principal Badge</p>
                              <h4 className="text-lg sm:text-2xl font-black uppercase tracking-tighter text-[#49A5BD] truncate">Omen_Legacy_001</h4>
                              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                                 <span className="text-[8px] sm:text-[9px] font-bold text-[#49A5BD] uppercase tracking-[0.1em] sm:tracking-[0.2em]">Institutional ID</span>
                                 <div className="w-1 h-2 sm:h-3 bg-[#49A5BD]/10 rotate-12" />
                                 <span className="text-[8px] sm:text-[9px] font-bold text-[#49A5BD] uppercase tracking-[0.1em] sm:tracking-[0.2em] font-mono">Rank: Apex</span>
                              </div>
                           </div>
                        </div>
                        <div className="mt-8 sm:mt-10 ml-6 sm:ml-24 space-y-3 sm:space-y-4 border-l border-[#49A5BD]/20 pl-6 sm:pl-10 relative">
                           <div className="absolute top-0 left-0 w-6 sm:w-10 h-8 sm:h-10 border-l border-b border-[#49A5BD]/20 -ml-[1px] rounded-bl-2xl sm:rounded-bl-3xl" />
                           {[
                             { name: "TradeBot_Alpha_v2", trust: 98, status: "Active" },
                             { name: "Liquidity_Master_Proxy", trust: 94, status: "Active" },
                             { name: "Risk_Mitigation_Agent", trust: 91, status: "Resting" }
                           ].map((agent, i) => (
                             <div key={i} className="p-3 sm:p-5 bg-surface/80 rounded-xl sm:rounded-2xl border border-[#49A5BD]/10 flex flex-col sm:flex-row sm:items-center justify-between hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300 text-foreground shadow-md hover:border-[#49A5BD]/40 gap-2 sm:gap-0">
                                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                   <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#49A5BD] shrink-0 ${agent.status !== "Active" ? "opacity-30" : "animate-pulse"}`} />
                                   <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest font-mono truncate">{agent.name}</span>
                                </div>
                                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2 sm:gap-3 pl-3 sm:pl-0">
                                   <span className="text-[9px] sm:text-[10px] font-black uppercase opacity-50 tracking-wider sm:tracking-widest font-mono">Trust</span>
                                   <span className="text-xs sm:text-sm font-black text-[#49A5BD]">{agent.trust}%</span>
                                </div>
                             </div>
                           ))}
                        </div>
                     </div>
                   </div>
                </div>

                {/* Right Column: Physical Badge & Activity */}
                <div className="space-y-6 sm:space-y-10 min-w-0">
                   
                   {/* Badge Physical Representation */}
                  <div className="bg-[#49A5BD] rounded-[32px] sm:rounded-[48px] p-6 sm:p-10 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-700 shadow-xl sm:shadow-2xl shadow-[#49A5BD]/30">
                     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
                     <div className="relative z-10 space-y-8 sm:space-y-12">
                        <div className="flex justify-between items-start mb-2 sm:mb-0">
                           <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/10 rounded-xl sm:rounded-2xl border border-white/40 flex items-center justify-center text-white shadow-xl backdrop-blur-md">
                               <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                           </div>
                           <div className="flex flex-col items-end">
                              <span className="text-[8px] sm:text-[9px] font-black tracking-[0.2em] sm:tracking-[0.4em] text-white/70 uppercase font-mono">Sui Network</span>
                              <span className="text-[9px] sm:text-[10px] font-black text-white uppercase tracking-wider sm:tracking-widest">Authenticated</span>
                           </div>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                           <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none sm:leading-[0.9] text-white">Omen Verified <br className="hidden sm:block" /> Institutional</h4>
                           <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.3em] text-white/80 italic font-mono leading-relaxed">Programmatic Identity primitive</p>
                        </div>

                        <div className="pt-6 sm:pt-10 space-y-6 sm:space-y-8 border-t border-white/20">
                           <div className="grid grid-cols-2 gap-4 sm:gap-6">
                              <div className="min-w-0">
                                 <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider sm:tracking-widest text-white/50 mb-1 sm:mb-1.5 font-mono truncate">Entity Handle</p>
                                 <p className="text-[9px] sm:text-[11px] font-black tracking-tight text-white uppercase truncate">lamar_ventures.sui</p>
                              </div>
                              <div className="text-right min-w-0">
                                 <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider sm:tracking-widest text-white/50 mb-1 sm:mb-1.5 font-mono truncate">Registry ID</p>
                                 <p className="text-[9px] sm:text-[11px] font-mono font-bold text-white uppercase truncate">OMN-01-44B1</p>
                              </div>
                           </div>
                           <div className="w-full h-6 sm:h-8 bg-white/10 rounded-md sm:rounded-lg border border-white/20 overflow-hidden relative">
                              <div className="flex items-center justify-between px-2 sm:px-3 h-full">
                                 <div className="flex gap-1 sm:gap-1.5 overflow-hidden">
                                    {[...Array(24)].map((_, i) => (
                                       <div key={i} className={`w-0.5 h-2 sm:h-3 ${i % 3 === 0 ? 'bg-white/40' : 'bg-white/10'}`} />
                                    ))}
                                 </div>
                                 <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-white/60 font-mono ml-2">Secured</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                   {/* Security Activity */}
                  <div className="glass-card bg-surface/30 border border-[#49A5BD]/20 p-6 sm:p-10 rounded-[24px] sm:rounded-[40px] shadow-xl sm:shadow-2xl">
                     <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-foreground font-mono">Security Ledger</h3>
                        <Bell className="w-4 h-4 text-[#49A5BD]" />
                     </div>
                     <div className="space-y-6 sm:space-y-8">
                        {RECENT_ALERTS.map((alert, i) => (
                          <div key={i} className="flex gap-3 sm:gap-5 relative group text-foreground">
                             <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mt-1 sm:mt-1.5 shrink-0 border border-[#49A5BD]/30 ${alert.status === 'success' ? 'bg-[#49A5BD] shadow-[0_0_10px_rgba(73,165,189,0.5)]' : 'bg-surface'}`} />
                             <div className="flex-1 space-y-0.5 sm:space-y-1">
                                <p className="text-[10px] sm:text-[12px] font-black leading-snug sm:hover:text-[#49A5BD] transition-colors uppercase tracking-tight">{alert.action}</p>
                                <p className="text-[8px] sm:text-[9px] font-bold text-body/50 uppercase tracking-widest font-mono">{alert.date}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                     <Button variant="secondary" className="w-full mt-8 sm:mt-10 border border-[#49A5BD]/20 text-[#49A5BD] text-[8px] sm:text-[9px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] h-10 rounded-xl bg-surface hover:bg-[#49A5BD]/5 transition-all font-mono">Expand Security Logs</Button>
                  </div>

                   {/* Contextual CTA */}
                  <div className="p-6 sm:p-10 bg-surface/30 border border-[#49A5BD]/20 rounded-[24px] sm:rounded-[40px] text-foreground relative group overflow-hidden shadow-xl sm:shadow-2xl">
                     <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#49A5BD]/5 rounded-full blur-2xl sm:blur-3xl -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 pointer-events-none" />
                     <div className="relative z-10 space-y-4 sm:space-y-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                           <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#49A5BD]" />
                           <h4 className="text-lg sm:text-xl font-black uppercase tracking-tighter">System Status</h4>
                        </div>
                        <p className="text-xs sm:text-sm font-bold leading-relaxed text-body">Registry Alpha V1.0 is fully synced with Sui Testnet. DeepBook V3 integration is active for all gated liquidity pools.</p>
                        <div className="w-full relative group">
                           <Button disabled className="w-full bg-[#49A5BD] text-white border-none text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest h-10 sm:h-12 rounded-xl sm:rounded-2xl shadow-lg shadow-[#49A5BD]/20 font-mono opacity-50 cursor-not-allowed">Protocol Terminal</Button>
                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#49A5BD]/80 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-[#49A5BD]/30 z-50">Pending Node Sync</div>
                        </div>
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
