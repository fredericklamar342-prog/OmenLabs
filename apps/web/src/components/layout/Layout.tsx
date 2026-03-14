import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "./Nav";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    href: "https://x.com/OmenLabsHQ",
    label: "Follow Omen on X (Twitter)",
    icon: <XIcon />,
  },
  {
    href: "https://github.com/omenprotocol",
    label: "View Omen on GitHub",
    icon: <GitHubIcon />,
  },
];

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <AtmosphericBackground />
      <Nav />
      
      <main className="relative z-10 flex-1 pt-28 pb-20">{children}</main>

      <footer className="relative z-10 bg-[#0B0C10] border-t border-white/5 pt-24 sm:pt-32 pb-16 overflow-hidden">
        {/* Signal Lines Decor */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#49A5BD]/30 to-transparent" />
        
        <div className="max-container px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16 mb-24">
            
            {/* OMEN Brand Detail */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-10">
               <div className="flex items-center gap-4 group/logo cursor-default">
                  <Image
                    src="/omen-logo.png"
                    alt="Omen"
                    width={56}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                     <span className="text-2xl font-black uppercase tracking-tighter text-white font-outfit">OMEN</span>
                     <span className="text-[9px] font-mono font-black text-[#49A5BD] uppercase tracking-[0.4em]">Reputation Oracle</span>
                  </div>
               </div>
               <p className="text-[14px] text-body font-bold leading-relaxed max-w-sm tracking-tight">
                 Solving accountability in the agentic economy through Move-native reputation infrastructure. The deterministic trust primitive for the Sui Stack.
               </p>
               <div className="inline-flex items-center gap-6 px-6 py-3 bg-[#111418] border border-white/5 rounded-2xl">
                 {socialLinks.map(({ href, label, icon }) => (
                    <a
                     key={href}
                     href={href}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={label}
                     className="text-white/40 hover:text-[#49A5BD] hover:scale-110 transition-all duration-300"
                   >
                     {icon}
                   </a>
                 ))}
               </div>
            </div>

            {/* Sitemap Columns */}
            {[
              { 
                title: "Protocol", 
                links: [
                  { name: "Global Score", href: "/dashboard" },
                  { name: "Security V3", href: "/whitepaper" },
                  { name: "Lineage Graph", href: "/product" },
                  { name: "Audit Trail", href: "/dashboard" }
                ] 
              },
              { 
                title: "Developers", 
                links: [
                  { name: "Core SDK", href: "/docs" },
                  { name: "Move Stubs", href: "/docs" },
                  { name: "API Reference", href: "/docs" },
                  { name: "MCP Scripts", href: "/docs" }
                ] 
              },
              { 
                title: "Ecosystem", 
                links: [
                  { name: "Sui Network", href: "https://sui.io" },
                  { name: "Walrus Storage", href: "https://walrus.xyz" },
                  { name: "zkLogin", href: "/" },
                  { name: "DeepBook", href: "/" }
                ] 
              },
              { 
                title: "Technical", 
                links: [
                  { name: "Whitepaper", href: "/whitepaper" },
                  { name: "Audit Reports", href: "/docs" },
                  { name: "Deterministic Fix", href: "/whitepaper" },
                  { name: "Status", href: "/dashboard" }
                ] 
              }
            ].map((col, idx) => (
              <div key={idx} className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#49A5BD] font-mono">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[13px] font-black text-white/40 hover:text-white transition-all flex items-center gap-2 group/link uppercase tracking-tight font-outfit">
                        <span className="w-0 h-[2px] bg-[#49A5BD] transition-all group-hover/link:w-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

           <div className="flex flex-col lg:flex-row items-center justify-between border-t border-white/5 pt-12 gap-10">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-12 gap-y-6">
               <p className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-white/20">&copy; {new Date().getFullYear()} OMEN LABS. ALL RIGHTS RESERVED.</p>
               <div className="flex gap-10">
                 {['Privacy', 'Terms', 'Security'].map(item => (
                   <span key={item} className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30 cursor-not-allowed hover:text-white/60 transition-colors" title="Institutional Review Pending">{item}</span>
                 ))}
               </div>
            </div>
            
            <div className="flex items-center gap-4 px-6 py-2.5 bg-[#111418] border border-white/10 rounded-full shadow-2xl">
               <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#49A5BD] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
               </div>
               <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#49A5BD]">REPUTATION_ENGINE_v4.0_STABLE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
