"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MailCheck } from "lucide-react";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-x-hidden overflow-y-auto px-4 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#49A5BD]/10 backdrop-blur-[8px]"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[720px] overflow-hidden rounded-[40px] border border-white/10 bg-[#0B0C10] shadow-[0_32px_128px_-16px_rgba(73,165,189,0.2)]"
          >
            {/* Background Decorative Element */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(73,165,189,0.08),transparent_70%)]" />
            
            <button
              onClick={onClose}
              className="absolute right-8 top-8 z-20 rounded-full p-2.5 text-white/20 transition-all hover:bg-white/5 hover:text-white active:scale-90"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full p-6 sm:p-12 md:p-16">
              <div className="mb-10 lg:mb-14 text-center relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#49A5BD]/30 bg-[#49A5BD]/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.35em] text-[#49A5BD] shadow-[0_0_20px_rgba(73,165,189,0.15)]"
                >
                  <MailCheck className="h-3.5 w-3.5" />
                  Request Access
                </motion.div>
                
                <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase font-outfit leading-tight">
                  Join the Omen <br className="hidden sm:block" /> Waitlist
                </h2>
                <p className="mx-auto max-w-[500px] text-sm sm:text-[16px] font-bold leading-relaxed text-body/60">
                  Join the foundation of the agentic web. Secure your spot in the priority queue for early access and ecosystem insights.
                </p>
              </div>

              <div className="relative z-10">
                <WaitlistForm onSuccess={onClose} source="modal" />
              </div>
            </div>
            
            {/* Corner Decorative */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#49A5BD]/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#49A5BD]/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
