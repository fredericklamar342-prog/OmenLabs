"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Terminal, 
  BookOpen, 
  ShieldCheck, 
  Code, 
  Settings, 
  Layers,
  Search,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

import { useState, type ElementType } from "react";

interface NavLink {
  name: string;
  href: string;
  icon?: ElementType;
}

interface NavCategory {
  title: string;
  links: NavLink[];
}

const DOCS_NAV: NavCategory[] = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/docs", icon: BookOpen },
      { name: "Installation", href: "/docs/installation", icon: Terminal },
      { name: "Quickstart", href: "/docs/quickstart", icon: Settings },
    ],
  },
  {
    title: "SDK Reference",
    links: [
      { name: "Omen Client", href: "/docs/sdk/client", icon: Code },
      { name: "Shield Middleware", href: "/docs/sdk/shield", icon: ShieldCheck },
      { name: "Registry API", href: "/docs/sdk/registry", icon: Layers },
    ],
  },
  {
    title: "Concepts",
    links: [
      { name: "Reputation Layer", href: "/docs/concepts/reputation" },
      { name: "Trust Evaluations", href: "/docs/concepts/trust" },
      { name: "Privacy Model", href: "/docs/concepts/privacy" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <aside className="w-full h-full flex flex-col py-8 px-5 bg-transparent">
      {/* Search Bar - Omen Style */}
      <div className="relative mb-10 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-body/40 group-focus-within:text-primary transition-all" />
        <input 
          type="text" 
          placeholder="Decrypt docs..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 h-12 bg-white/5 border border-white/10 group-focus-within:border-primary group-focus-within:bg-white/10 rounded-[14px] text-[15px] font-medium outline-none transition-all placeholder:text-body/30 text-foreground"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 border border-white/10 bg-white/5 text-[10px] font-black font-mono text-body/40 rounded-md hidden sm:block">
          /
        </div>
      </div>

      <nav className="flex-1 space-y-10 overflow-y-auto pr-2 custom-scrollbar">
        {DOCS_NAV.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-primary/40 px-4">
              {category.title}
            </h3>
            <div className="space-y-1.5">

              {category.links.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-bold transition-all group ${
                      isActive 
                        ? "bg-primary/20 text-primary shadow-[0_4px_20px_rgba(67,182,213,0.1)]" 
                        : "text-body/60 hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {Icon && <Icon className={`w-4.5 h-4.5 transition-colors ${isActive ? "text-primary" : "text-body/30 group-hover:text-primary"}`} />}
                      <span className="tracking-tight">{link.name}</span>
                    </div>
                    {isActive && (
                      <motion.div 
                        layoutId="sidebar-active"
                        className="w-1 h-5 bg-primary rounded-full shadow-[0_0_10px_rgba(67,182,213,0.5)]" 
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-white/5">
        <Link href="/developer" className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10 text-[11px] font-black uppercase tracking-[0.3em] text-primary hover:bg-primary/10 hover:border-primary/20 transition-all">
          <ChevronRight className="w-3.5 h-3.5" /> Developer Hub
        </Link>
      </div>
    </aside>
  );
}

