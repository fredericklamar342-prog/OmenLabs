"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ShieldCheck, MailWarning, Clock } from "lucide-react";
import { useAccessFlow } from "@/hooks/useAccessFlow";

interface WaitlistFormProps {
  onSuccess?: () => void;
  source?: string;
}

export function WaitlistForm({ onSuccess, source = "modal" }: WaitlistFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { submit, status, isPending, errors } = useAccessFlow({
    apiEndpoint: "/api/early-access",
    onSuccess,
    successTimeout: 2500,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email")).trim().toLowerCase();
    const honeypot = formData.get("website_url");

    if (honeypot) {
      submit({ website_url: "honeypot" }); // Will be handled by hook/API
      return;
    }

    submit({ email, source });
    if (formRef.current && (status.type === "success" || status.type === "already_exists")) {
        formRef.current.reset();
    }
  }

  // Clear form on successful result from hook
  useEffect(() => {
    if (status.type === "success" || status.type === "already_exists" || status.type === "partial_success") {
      formRef.current?.reset();
    }
  }, [status.type]);

  if (!isMounted) {
    return <div className="h-[80px] w-full bg-surface/10 rounded-full animate-pulse blur-sm mb-8" />;
  }

  if (status.type && (status.type === "success" || status.type === "partial_success" || status.type === "already_exists")) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <div className="mb-10 success-glow relative">
          <div className={`w-24 h-24 rounded-full ${status.type === 'partial_success' ? 'bg-amber-500/10 border-amber-500/20' : 'bg-[#49A5BD]/10 border-[#49A5BD]/20'} border flex items-center justify-center relative z-10 shadow-[0_0_40px_-10px_rgba(73,165,189,0.3)]`}>
            {status.type === 'partial_success' ? (
              <ShieldCheck className="w-12 h-12 text-amber-500" />
            ) : status.type === 'already_exists' ? (
              <Clock className="w-12 h-12 text-[#49A5BD]" />
            ) : (
              <motion.svg 
                viewBox="0 0 52 52" 
                className="w-12 h-12 text-[#49A5BD]"
                initial="hidden"
                animate="visible"
              >
                <circle 
                  cx="26" cy="26" r="25" 
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeDasharray="157" strokeDashoffset="157"
                  className="opacity-20"
                />
                <motion.path 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                  className="animate-check"
                />
              </motion.svg>
            )}
          </div>
          <motion.div 
            className={`absolute inset-0 rounded-full border ${status.type === 'partial_success' ? 'border-amber-500/10' : 'border-[#49A5BD]/10'}`}
            animate={{ scale: [1, 1.3, 1.5], opacity: [0.3, 0.1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </div>

        <motion.div
           initial={{ opacity: 0, y: 12 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 0.4 }}
           className="space-y-4"
        >
          <h3 className="text-4xl font-black uppercase tracking-tight text-foreground font-outfit leading-none mb-2">
            {status.type === "success" && "Spot Secured"}
            {status.type === "partial_success" && "Registry Updated"}
            {status.type === "already_exists" && "Account Verified"}
          </h3>
          <p className="max-w-[360px] mx-auto text-[13px] font-bold text-body/70 leading-relaxed uppercase tracking-widest leading-relaxed">
            {status.message}
          </p>
          {status.type === "partial_success" && (
            <div className="inline-flex items-center gap-2.5 text-[10px] text-amber-500 font-black uppercase tracking-widest px-5 py-2.5 bg-amber-500/5 rounded-full border border-amber-500/10 mt-2">
              <MailWarning className="w-3.5 h-3.5" />
              <span>Email Delivery Delayed • Data Integrity Verified</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="relative">
        <div className="hidden" aria-hidden="true">
          <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="relative flex-1 group">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              className={`form-input-premium h-14 sm:h-16 px-8 rounded-2xl sm:rounded-full text-lg font-bold font-mono ${errors.email ? 'border-red-500/50 focus:border-red-500/60' : ''}`}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isPending}
            className="btn-premium h-14 sm:h-16 px-10 sm:px-14 rounded-2xl sm:rounded-full bg-[#49A5BD] text-white font-black uppercase tracking-[0.25em] text-xs sm:text-sm shadow-2xl shadow-[#49A5BD]/20 border-none group overflow-hidden relative"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status.type === "loading" ? (
                <motion.div 
                   key="loading"
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.2 }}
                   transition={{ duration: 0.2 }}
                   className="flex items-center gap-3"
                >
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="animate-pulse">Syncing...</span>
                </motion.div>
              ) : (
                <motion.span 
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  Secure Access <ShieldCheck className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.span>
              )}
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {status.type === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              className="mt-6 flex justify-center w-full"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-3 shadow-2xl backdrop-blur-md">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <span className="text-[11px] font-black uppercase tracking-widest text-red-400">
                  {status.message}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      
      {!status.type || status.type === "loading" || status.type === "error" ? (
        <p className="mt-8 text-center text-[10px] sm:text-[11px] font-black text-body/40 uppercase tracking-[0.3em] font-mono leading-relaxed px-4">
          <span className="text-[#49A5BD]/60">Encrypted Path</span> • <span className="text-white/20">Protocol Entry</span> • <span className="text-[#49A5BD]/60">Verified Node</span>
        </p>
      ) : null}
    </div>
  );
}

