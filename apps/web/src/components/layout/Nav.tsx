"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState<string | null>(null);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setWalletAddress("0x7...f4ae");
      setIsOpen(false);
    }, 1500);
  };

  const loginButton = (
    <Button asChild variant="secondary" size="sm" className="rounded-none border-2 px-6">
      <Link href="/login">Login</Link>
    </Button>
  );

  const walletButton = walletAddress ? (
    <div className="flex items-center gap-2 px-4 h-9 bg-foreground/5 border-2 border-border rounded-none group cursor-default">
      <div className="w-2 h-2 bg-green-500 rounded-full" />
      <span className="text-[10px] font-black uppercase tracking-widest text-foreground">
        {walletAddress}
      </span>
    </div>
  ) : (
    <Button 
      size="sm" 
      onClick={handleConnect}
      isLoading={isConnecting}
      className="rounded-none px-6 font-black uppercase tracking-tighter"
    >
      Connect
    </Button>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-foreground flex items-center justify-center group-hover:bg-accent transition-colors">
                 <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-foreground uppercase pt-0.5">
                Omen<span className="text-accent">.</span>
              </span>
            </Link>
            <div className="hidden lg:flex gap-8">
              {[
                { name: "Dashboard", href: "/dashboard" },
                { name: "Documentation", href: "/docs" },
                { name: "Private Alpha", href: "/alpha" }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-subtext hover:text-foreground transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {loginButton}
              {walletButton}
            </div>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="flex flex-col gap-6 py-8 px-4">
                {[
                  { name: "Dashboard", href: "/dashboard" },
                  { name: "Documentation", href: "/docs" },
                  { name: "Private Alpha", href: "/alpha" }
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-black uppercase tracking-[0.2em] text-subtext hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-6 border-t border-border">
                  {loginButton}
                  {walletButton}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
