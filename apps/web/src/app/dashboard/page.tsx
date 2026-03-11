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
    <div className="min-h-screen bg-white text-[#0B1220] flex flex-col md:flex-row overflow-hidden relative">
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-4" />

      {/* Mobile Top Nav */}
      <div className="md:hidden flex items-center justify-between p-4 glass-panel sticky top-0 z-50 rounded-none border-b border-l-0 border-r-0 border-t-0">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-[#43B6D5]" />
          <span className="font-bold tracking-tight">Omen</span>
        </Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar (Desktop) / Dropdown (Mobile) */}
      <aside className={`
        fixed md:relative top-0 left-0 w-full md:w-[260px] h-screen md:h-auto 
        glass-panel md:rounded-none z-40 transition-transform duration-300 md:translate-x-0
        flex flex-col border-r border-[rgba(11,18,32,0.08)]
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="hidden md:flex items-center gap-3 px-8 pt-10 pb-8">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 border-[3px] border-[#2A8FA8] rounded-lg rotate-45" />
            <div className="w-3 h-3 bg-gradient-to-tr from-[#2A8FA8] to-[#B3CDE0] rounded-sm" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0B1220]">Omen</span>
        </div>

        <nav className="flex-1 px-4 py-8 md:py-0 space-y-1">
          {SIDEBAR_LINKS.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200
                ${idx === 0
                  ? "bg-[#2A8FA8]/5 font-semibold text-[#0B1220]"
                  : "text-[#5B6B82] hover:text-[#0B1220] hover:bg-[rgba(11,18,32,0.05)]"}
              `}
              onClick={() => setMobileMenuOpen(false)}
            >
              <link.icon className={`w-5 h-5 ${idx === 0 ? "text-[#43B6D5]" : ""}`} />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-[rgba(11,18,32,0.08)]">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#5B6B82] hover:text-[#43B6D5] hover:bg-[#43B6D5]/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-10 relative z-10 w-full h-[calc(100vh-73px)] md:h-screen">
        <div className="max-w-5xl mx-auto space-y-8 pb-20 md:pb-10 pt-4 md:pt-0">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-1">Overview</h1>
              <p className="text-[#5B6B82] text-sm">Welcome back. Here is your protocol status.</p>
            </div>
            <Button size="sm" className="w-full sm:w-auto">
              Upgrade to Premium
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column (Status + Upload) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Status Pill */}
              <div className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-up stagger-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#43B6D5]/20 to-[#2A8FA8]/20 flex items-center justify-center border border-[#43B6D5]/20">
                    <Activity className="w-6 h-6 text-[#43B6D5]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#0B1220]">Identity Status</h3>
                    <p className="text-sm text-[#5B6B82]">Verification 60% complete</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-[#EAF3FA] text-[#43B6D5] text-xs font-bold uppercase tracking-wider border border-[#B3CDE0]/60">
                  In Progress
                </div>
              </div>

              {/* Upload Area */}
              <div className="glass-card p-8 text-center animate-fade-up stagger-2 border-dashed border-2 border-[rgba(11,18,32,0.08)] hover:border-[#43B6D5]/40 transition-colors cursor-pointer group">
                <div className="w-16 h-16 mx-auto rounded-full bg-[rgba(11,18,32,0.04)] flex items-center justify-center mb-4 group-hover:bg-[#43B6D5]/10 transition-colors">
                  <UploadCloud className="w-8 h-8 text-[#5B6B82] group-hover:text-[#43B6D5] transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">Upload Audit Storage</h3>
                <p className="text-sm text-[#5B6B82] max-w-sm mx-auto mb-6">
                  Drag and drop your smart contract audit PDFs here to anchor them to Walrus.
                </p>
                <Button variant="secondary" size="sm">Select Files</Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Soulbound Badge Preview */}
              <div className="glass-card p-6 flex flex-col items-center text-center animate-fade-up stagger-3">
                <h3 className="font-bold w-full text-left mb-6">Soulbound Badge</h3>
                <div className="relative w-32 h-32 mb-6 drop-shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2A8FA8] to-[#B3CDE0] rounded-3xl rotate-6 opacity-30 blur-lg" />
                  <div className="relative w-full h-full bg-gradient-to-br from-[#2A8FA8] to-[#43B6D5] rounded-[2rem] border-2 border-white/40 flex items-center justify-center text-white">
                    <ShieldCheck className="w-16 h-16" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#0B1220] mb-1">Omen Verified</p>
                <p className="text-xs text-[#5B6B82]">Secured by Omen Engine</p>
                <div className="w-full h-[1px] bg-[rgba(11,18,32,0.08)] my-4" />
                <Button variant="link" className="text-xs">View on Explorer</Button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-6 animate-fade-up stagger-4">
            <h3 className="font-bold mb-4">Recent Activity</h3>
            <div className="space-y-1">
              {RECENT_ACTIVITY.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-[rgba(11,18,32,0.04)] transition-colors gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${item.status === "success" ? "bg-[#43B6D5]" : "bg-[#B3CDE0]"}`} />
                    <span className="text-sm font-medium">{item.action}</span>
                  </div>
                  <span className="text-xs text-[#5B6B82]">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
