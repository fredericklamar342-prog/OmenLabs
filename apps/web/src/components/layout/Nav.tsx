"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "@/utils/scroll";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";
import { Logo } from "@/components/ui/Logo";

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
          <Link href="/" className="flex items-center group py-1" aria-label="Omen home">
            <Logo className="h-10 w-auto text-primary group-hover:scale-105 transition-transform duration-300" />
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
                  className="text-[11px] font-black uppercase tracking-[0.3em] text-body hover:text-primary transition-all duration-300 italic"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" onClick={openModal} className="px-8 italic font-black">
              JOIN ALPHA
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-3 text-foreground rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden glass-panel mt-4 rounded-[32px] border border-white/10"
            >
              <div className="flex flex-col gap-6 py-10 px-8">
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
                      className="text-2xl font-black italic text-foreground hover:text-primary transition-all tracking-tight"
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                  <Button 
                    className="w-full" 
                    onClick={() => {
                      setIsOpen(false);
                      openModal();
                    }}
                  >
                    Request Early Access
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

