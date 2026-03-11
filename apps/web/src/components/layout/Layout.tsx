import * as React from "react";
import Link from "next/link";

import { Logo } from "@/components/ui/Logo";
import { Nav } from "./Nav";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <AtmosphericBackground />
      <Nav />
      <main className="relative z-10 flex-1 pt-28 pb-20">{children}</main>
      <footer className="relative z-10 border-t border-white/5 bg-panel/20 py-20 backdrop-blur-3xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="max-container flex flex-col items-center justify-between gap-12 md:flex-row">
          <Link href="/" className="group flex flex-col items-center md:items-start gap-4">
            <Logo className="h-10 w-auto text-primary group-hover:scale-105 transition-transform duration-500" />
            <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.4em] text-body/40">
              Session_Active: v2.4.0
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { name: "Product", href: "/product" },
              { name: "Docs", href: "/docs" },
              { name: "Developers", href: "/developer" },
              { name: "Dashboard", href: "/dashboard" },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-[11px] font-black uppercase tracking-[0.3em] text-body/60 transition-all hover:text-primary hover:tracking-[0.4em] italic"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="max-container mt-20 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-body/30">&copy; {new Date().getFullYear()} Omen. Trust the Shard.</p>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/40">Status: OMEN_PROTOCOL_STABLE</p>
        </div>
      </footer>
    </div>
  );
}

