"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "@/utils/scroll";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

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
          <Link href="/" className="flex items-center gap-3 group" aria-label="Omen home">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border-[3px] border-[#43B6D5] rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-200" />
              <div className="w-3 h-3 bg-gradient-to-tr from-[#2A8FA8] to-[#B3CDE0] rounded-sm" />
            </div>
            <span className="text-xl font-bold font-plus-jakarta tracking-tight text-[#0B1220]">
              Omen
            </span>
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
