"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const SIDEBAR_LINKS = [
  { name: "Dashboard",    icon: LayoutDashboard, href: "#" },
  { name: "Verification", icon: CheckCircle,      href: "#" },
  { name: "Badges",       icon: ShieldCheck,      href: "#" },
  { name: "Audit Storage",icon: FileText,          href: "#" },
  { name: "Settings",     icon: Settings,          href: "#" },
];

const RECENT_ACTIVITY = [
  { id: 1, action: "Identity verification initiated", date: "2 hours ago", status: "pending" },
  { id: 2, action: "Identity profile created",           date: "1 day ago",   status: "success" },
  { id: 3, action: "Email address confirmed",          date: "1 day ago",   status: "success" },
];

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#060A0D] text-foreground flex flex-col md:flex-row overflow-hidden relative">
      <div className="pointer-events-none absolute inset-0 omen-bg" />
      <div className="pointer-events-none absolute inset-0 omen-grid opacity-10" />

      {/* Mobile Top Nav */}
      <div className="md:hidden flex items-center justify-between p-5 glass-panel sticky top-0 z-50 rounded-none border-b border-white/5 bg-[#060A0D]/80 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-7 h-7 flex items-center justify-center">
             <div className="absolute inset-0 border-[2.5px] border-primary rounded-md rotate-45" />
             <div className="w-2.5 h-2.5 bg-foreground rounded-sm" />
          </div>
          <span className="font-black tracking-tighter text-lg uppercase italic">Omen</span>
        </Link>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="p-2 text-foreground hover:bg-primary/10 rounded-xl transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-30 md:hidden animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar (Desktop) / Dropdown (Mobile) */}
      <aside className={`
        fixed md:relative top-0 left-0 w-[280px] md:w-[280px] h-screen
        glass-panel md:rounded-none z-40 transition-transform duration-300 ease-premium
        flex flex-col border-r border-white/5 bg-panel/20 md:bg-panel/10 backdrop-blur-3xl
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="hidden md:flex items-center gap-4 px-10 pt-12 pb-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="absolute inset-0 border-[3px] border-primary/50 group-hover:border-primary rounded-xl rotate-45 transition-colors" />
              <div className="w-3.5 h-3.5 bg-foreground rounded-sm" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-foreground uppercase italic underline decoration-primary decoration-4 underline-offset-4">Omen</span>
          </Link>
        </div>

        <nav className="flex-1 px-5 py-10 md:py-0 space-y-2">
          {SIDEBAR_LINKS.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`
                flex items-center gap-4 px-5 py-4 rounded-[20px] transition-all duration-300
                ${idx === 0
                  ? "bg-primary/20 font-bold text-primary shadow-[0_4px_20px_rgba(67,182,213,0.15)] border border-primary/20"
                  : "text-body hover:text-foreground hover:bg-white/5"}
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              <link.icon className={`w-5 h-5 ${idx === 0 ? "text-primary" : "text-body/60"}`} />
              <span className="text-[15px] font-bold tracking-tight">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 mt-auto border-t border-white/5">
          <Link
            href="/"
            className="flex items-center gap-4 px-5 py-4 rounded-[20px] text-body/60 hover:text-red-400 hover:bg-red-400/5 transition-all font-bold"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-[15px] tracking-tight">System Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-5 md:p-12 lg:p-16 relative z-10 w-full h-[calc(100vh-65px)] md:h-screen scroll-smooth">
        <div className="max-w-6xl mx-auto space-y-12 pb-20 md:pb-10 pt-4 md:pt-0">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 animate-fade-up">
            <div className="relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full blur-[2px]" />
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2 italic">Protocol Overview</h1>
              <p className="text-body text-lg font-medium opacity-70">Welcome to the core trust operational layer.</p>
            </div>
            <Button size="lg" className="w-full sm:w-auto px-8 h-[55px] text-base font-black shadow-[0_0_30px_rgba(67,182,213,0.2)]">
              Node Application
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Status Pill - Full width on md, 2/3 width on lg */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="glass-card p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-8 animate-fade-up stagger-1 h-full border border-primary/10 bg-panel/40">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Activity className="w-8 h-8 text-primary relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-foreground mb-1 uppercase tracking-tighter">Identity Flow</h3>
                    <p className="text-body font-medium">Verification sequence 60% active</p>
                  </div>
                </div>
                <div className="px-5 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] border border-primary/30 self-start sm:self-center shadow-[0_0_15px_rgba(67,182,213,0.1)]">
                  Operational
                </div>
              </div>
            </div>

            {/* Soulbound Badge Preview - Side by side on md+ */}
            <div className="md:col-span-1 lg:col-span-1 md:row-span-2">
              <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-up stagger-3 h-full border border-primary/10 bg-panel/30">
                <h3 className="font-bold w-full text-left mb-8 text-[11px] uppercase tracking-[0.3em] text-body/60">Trust Archetype</h3>
                <div className="mt-auto mb-auto flex flex-col items-center relative py-10">
                  <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full scale-150" />
                  <div className="relative w-40 h-40 mb-10 drop-shadow-[0_0_40px_rgba(67,182,213,0.3)] animate-float">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black rounded-[40px] rotate-6 opacity-40 blur-xl" />
                    <div className="relative w-full h-full bg-[#060A0D] rounded-[48px] border-2 border-primary/40 flex items-center justify-center text-primary group overflow-hidden">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                      <ShieldCheck className="w-20 h-20 relative z-10 drop-shadow-[0_0_15px_rgba(67,182,213,0.5)]" />
                    </div>
                  </div>
                  <p className="text-2xl font-black text-foreground mb-1 italic">Verified.</p>
                  <p className="text-[12px] text-primary uppercase tracking-[0.4em] font-black">Omen Protocol Node</p>
                </div>
                <div className="w-full h-px bg-white/5 my-6 mt-auto" />
                <Button variant="link" className="text-[11px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">Explorer Archive</Button>
              </div>
            </div>

            {/* Upload Area */}
            <div className="md:col-span-1 lg:col-span-2">
              <div className="glass-card p-10 text-center animate-fade-up stagger-2 border-dashed border-2 border-primary/20 hover:border-primary/50 transition-all cursor-pointer group h-full flex flex-col justify-center items-center bg-panel/20 hover:bg-panel/40">
                <div className="w-20 h-20 mx-auto rounded-[30px] bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all group-hover:scale-110">
                  <UploadCloud className="w-10 h-10 text-body group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-black mb-3 italic">Audit Injection</h3>
                <p className="text-lg text-body font-medium max-w-[320px] mx-auto mb-8 leading-relaxed">
                  Anchor security telemetry and report shards to decentralized storage.
                </p>
                <Button variant="secondary" size="lg" className="px-12 h-[55px] font-black glass-panel">Select Artifacts</Button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-10 animate-fade-up stagger-4 border border-primary/10 bg-panel/30">
            <h3 className="font-black mb-8 text-[11px] uppercase tracking-[0.4em] text-primary">Live Operations Log</h3>
            <div className="space-y-4">
              {RECENT_ACTIVITY.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-[24px] hover:bg-white/5 transition-all border border-transparent hover:border-white/5 gap-4 group">
                  <div className="flex items-center gap-5">
                    <div className={`w-3 h-3 rounded-full transition-all group-hover:scale-150 group-hover:shadow-[0_0_10px_currentColor] ${item.status === "success" ? "bg-primary text-primary" : "bg-primary/40 text-primary/40"}`} />
                    <span className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{item.action}</span>
                  </div>
                  <span className="text-[13px] text-body/40 font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
