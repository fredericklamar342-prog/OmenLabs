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

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
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
  {
    href: "https://discord.gg/jQp2hzym",
    label: "Join Omen on Discord",
    icon: <DiscordIcon />,
  },
];

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-transparent text-[#0B1220]">
      <AtmosphericBackground />
      <Nav />
      
      <main className="relative z-10 flex-1 pt-28 pb-20">{children}</main>

      <footer className="relative z-10 bg-white/60 border-t border-black/[0.03] backdrop-blur-3xl pt-32 pb-16 overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#43B6D5]/10 to-transparent -z-10" />
        
        <div className="max-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
            
            <div className="col-span-2 lg:col-span-2 space-y-10 pr-12">
              <div className="flex items-center gap-3.5 group/logo cursor-default">
                <Image
                  src="/omen-logo.png"
                  alt="Omen"
                  width={48}
                  height={40}
                  className="h-11 w-auto object-contain transition-transform group-hover/logo:scale-110"
                />
                <span className="text-2xl font-black uppercase tracking-tighter text-[#0B1220]">OMEN</span>
              </div>
              <p className="text-[13px] text-[#5B6B82] font-semibold leading-relaxed max-w-sm">
                The trust primitive for the Sui Stack. Solving accountability in on-chain finance and the agentic economy through Move-native reputation infrastructure.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#5B6B82] transition-all hover:bg-[#43B6D5]/10 hover:text-[#43B6D5] hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Sitemap Columns */}
            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#0B1220]">Protocol</h4>
              <ul className="space-y-4">
                {[
                  { name: "Overview", href: "/product" },
                  { name: "Dashboard", href: "/dashboard" },
                  { name: "Security", href: "/whitepaper#resilience" },
                  { name: "Audit Trail", href: "/dashboard" }
                ].map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-bold text-[#5B6B82] hover:text-[#43B6D5] transition-all flex items-center gap-2 group/link">
                      <span className="w-0 h-px bg-[#43B6D5] transition-all group-hover/link:w-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#0B1220]">Developers</h4>
              <ul className="space-y-4">
                {[
                  { name: "Documentation", href: "/docs" },
                  { name: "SDK Reference", href: "/docs#sdk" },
                  { name: "API Access", href: "/developer" },
                  { name: "MCP Server", href: "/docs#mcp" }
                ].map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-bold text-[#5B6B82] hover:text-[#43B6D5] transition-all flex items-center gap-2 group/link">
                      <span className="w-0 h-px bg-[#43B6D5] transition-all group-hover/link:w-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#0B1220]">Company</h4>
              <ul className="space-y-4">
                {[
                  { name: "About Omen", href: "/" },
                  { name: "Whitepaper", href: "/whitepaper" },
                  { name: "Early Access", href: "/" },
                  { name: "Blog", href: "/blog" }
                ].map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-bold text-[#5B6B82] hover:text-[#43B6D5] transition-all flex items-center gap-2 group/link">
                      <span className="w-0 h-px bg-[#43B6D5] transition-all group-hover/link:w-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t border-black/[0.03] pt-12 gap-8">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4">
               <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B6B82]/50 italic">&copy; {new Date().getFullYear()} OMEN. ALL RIGHTS RESERVED.</p>
               <div className="flex gap-8">
                 <Link href="/privacy" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#5B6B82]/60 hover:text-[#43B6D5] transition-colors underline decoration-transparent hover:decoration-[#43B6D5] underline-offset-4">Privacy</Link>
                 <Link href="/terms" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#5B6B82]/60 hover:text-[#43B6D5] transition-colors underline decoration-transparent hover:decoration-[#43B6D5] underline-offset-4">Terms</Link>
               </div>
            </div>
            
            <div className="flex items-center">
                <div className="flex items-center gap-3 px-5 py-2.5 bg-[#43B6D5]/5 border border-[#43B6D5]/10 rounded-full hover:bg-[#43B6D5]/10 transition-all group cursor-default shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#43B6D5] animate-pulse shadow-[0_0_8px_#43B6D5]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#43B6D5] group-hover:scale-105 transition-all">Status: OMEN_TESTNET_ACTIVE</span>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
