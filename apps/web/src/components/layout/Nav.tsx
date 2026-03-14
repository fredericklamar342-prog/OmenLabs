"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu01, XClose } from "@untitled-ui/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "@/utils/scroll";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.795 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navSocials = [
  { href: "https://x.com/OmenLabsHQ", label: "X (Twitter)", icon: <XIcon /> },
  { href: "https://github.com/omenprotocol", label: "GitHub", icon: <GitHubIcon /> },
];

export function Nav() {
  const [isOpen, setIsOpen]   = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { openModal } = useEarlyAccessModal();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "/#product" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Developers", href: "/developer" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <nav
      className={[
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "py-4" : "py-8",
      ].join(" ")}
    >
      <div className="max-container">
        <div className={[
          "flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500",
          scrolled ? "glass-panel shadow-2xl" : "bg-transparent",
        ].join(" ")}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group transition-transform hover:scale-105 active:scale-95 shrink-0" aria-label="Omen home">
            <Image
              src="/omen-logo.png"
              alt="Omen"
              width={32}
              height={32}
              className="h-8 w-auto sm:h-9 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tighter text-foreground leading-none">OMEN</span>
              <div className="flex items-center gap-1.5">
                 <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] text-[#49A5BD] whitespace-nowrap">Security Infrastructure</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Group */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-16">
            {/* Desktop links */}
            <div className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isAnchor = link.href.includes("#");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (isAnchor && window.location.pathname === '/') {
                        e.preventDefault();
                        scrollToId(link.href.split("#")[1]);
                      }
                    }}
                    className="text-[12px] xl:text-[13px] font-black uppercase tracking-[0.1em] text-foreground hover:text-[#49A5BD] transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#49A5BD] transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="flex items-center gap-4 xl:gap-6">
              <div className="flex items-center gap-3 xl:gap-4">
                {navSocials.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-foreground transition-all duration-300 hover:text-[#49A5BD] hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>

              <div className="h-6 w-px bg-[#49A5BD]/10" />

              <Button size="sm" className="h-10 px-4 xl:px-6 font-bold bg-[#49A5BD] hover:bg-[#49A5BD]/90 text-white rounded-xl border-none shadow-lg shadow-[#49A5BD]/10 whitespace-nowrap hover:scale-105 active:scale-95 transition-all" onClick={openModal}>
                Early Access
              </Button>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#49A5BD] rounded-xl hover:bg-[#49A5BD]/5 transition-all focus:ring-2 focus:ring-[#49A5BD]/20 outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <XClose className="w-6 h-6" /> : <Menu01 className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-full left-0 w-full px-4 mt-2"
            >
              <div className="glass-panel p-6 sm:p-8 space-y-6 sm:space-y-8 shadow-2xl rounded-[24px] sm:rounded-[32px] overflow-y-auto max-h-[80vh]">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl sm:text-2xl font-extrabold text-foreground hover:text-[#49A5BD] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                <div className="pt-6 sm:pt-8 border-t border-[#49A5BD]/10 space-y-6 sm:space-y-8">
                  <Button className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-[#49A5BD]/10 hover:scale-105 active:scale-95 transition-all" onClick={() => { setIsOpen(false); openModal(); }}>
                    Request Early Access
                  </Button>
                  
                  <div className="flex items-center justify-center gap-8">
                    {navSocials.map(({ href, label, icon }) => (
                      <a 
                        key={href} 
                        href={href} 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-foreground hover:text-[#49A5BD] scale-125 transition-all"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

