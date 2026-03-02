import * as React from "react";
import { Nav } from "./Nav";
import { CyberBackground } from "@/components/ui/CyberBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <CyberBackground />
      <Nav />
      <main className="flex-1 container mx-auto px-4 pb-12 relative z-10 text-[#0A0A0A]">
        {children}
      </main>
      <footer className="border-t border-border py-12 bg-gray-50/30">
        <div className="container mx-auto px-4 text-center text-sm text-subtext">
          <p>© 2026 Omen Protocol. Built on White Canvas.</p>
        </div>
      </footer>
    </div>
  );
}
