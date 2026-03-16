"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "@/utils/scroll";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

const navLinks = [
  { name: "Product", href: "/#product" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Developers", href: "/developer" },
  { name: "Docs", href: "/docs" },
  { name: "Whitepaper", href: "/whitepaper" },
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



  return (
    <nav
      className={[
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "py-2 sm:py-4" : "py-4 sm:py-8",
      ].join(" ")}
    >
      <div className="max-container">
        <div className={[
          "w-full flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500",
          scrolled ? "glass-panel shadow-2xl" : "bg-transparent",
        ].join(" ")}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group transition-transform hover:scale-105 active:scale-95 shrink-0" aria-label="Omen home">
            <Image
              src="/omen-logo.png"
              alt="Omen"
              width={32}
              height={32}
              className="h-7 w-auto sm:h-9 object-contain"
              priority
            />
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-black text-base sm:text-xl tracking-tighter text-[#49A5BD] leading-none">OMEN</span>
            </div>
          </Link>

          {/* Desktop Navigation Group */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-16 ml-12">
            {/* Desktop links */}
            <div className="flex items-center gap-5 xl:gap-10">
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
            <div className="flex items-center">


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
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden absolute top-full left-0 w-full px-4 mt-1"
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
                
                <div className="pt-6 sm:pt-8 border-t border-[#49A5BD]/10 transition-all">
                  <Button className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-[#49A5BD]/10 hover:scale-105 active:scale-95 transition-all" onClick={() => { setIsOpen(false); openModal(); }}>
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

