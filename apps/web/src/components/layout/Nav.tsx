"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
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

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const navSocials = [
  { href: "https://x.com/OmenLabsHQ", label: "X (Twitter)", icon: <XIcon /> },
  { href: "https://github.com/omenprotocol", label: "GitHub", icon: <GitHubIcon /> },
  { href: "https://discord.gg/jQp2hzym", label: "Discord", icon: <DiscordIcon /> },
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
    { name: "Product", href: "/product" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Developers", href: "/developer" },
    { name: "Docs", href: "/docs" },
    { name: "Whitepaper", href: "/whitepaper" },
  ];

  return (
    <nav
      className={[
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "py-4" : "py-6",
      ].join(" ")}
    >
      <div className="max-container">
        <div className={[
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          scrolled ? "glass-panel" : "bg-transparent",
        ].join(" ")}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Omen home">
            <Image
              src="/omen-logo.png"
              alt="Omen"
              width={48}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("#");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (isAnchor) {
                      e.preventDefault();
                      scrollToId(link.href.replace("#", ""));
                      setIsOpen(false);
                    }
                  }}
                  className="text-[15px] font-medium text-[#4A5568] hover:text-[#43B6D5] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA + socials */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-3 mr-1">
              {navSocials.map(({ href, label, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#4A5568] transition-all duration-200 hover:text-[#43B6D5] hover:drop-shadow-[0_0_6px_rgba(67,182,213,0.5)]"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-[#0B1220]/10" />

            <Button size="sm" onClick={openModal}>
              Request Early Access
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#0B1220] rounded-md hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden overflow-hidden glass-panel mt-4"
            >
              <div className="flex flex-col gap-4 py-6 px-6">
                {navLinks.map((link) => {
                  const isAnchor = link.href.startsWith("#");
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        if (isAnchor) {
                          e.preventDefault();
                          scrollToId(link.href.replace("#", ""));
                        }
                        setIsOpen(false);
                      }}
                      className="text-lg font-medium text-[#0B1220] hover:text-[#43B6D5] transition-colors"
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[rgba(11,18,32,0.1)]">
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      setIsOpen(false);
                      openModal();
                    }}
                  >
                    Request Early Access
                  </Button>

                  {/* Mobile social icons */}
                  <div className="flex items-center justify-center gap-6 pt-2">
                    {navSocials.map(({ href, label, icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-[#4A5568] transition-all duration-200 hover:text-[#43B6D5]"
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
