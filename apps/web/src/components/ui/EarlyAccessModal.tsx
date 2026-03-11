"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, FileText, MailCheck, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
        setMessage("");
        setError("");
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      email: String(formData.get("email") || ""),
      project: String(formData.get("project") || ""),
      wallet: String(formData.get("wallet") || ""),
      source: "modal",
    };

    try {
      const result = await submitEarlyAccessRegistration(data);
      setMessage(result.message || "You are on the list. Check your inbox for confirmation.");
      setIsSuccess(true);
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-4 py-6 sm:py-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#43B6D5]/20 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[540px] overflow-hidden rounded-[40px] border border-white/10 bg-[#0A0F14] shadow-[0_0_80px_rgba(0,0,0,0.8)]"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(67,182,213,0.15),transparent_80%)]" />

            <button
              onClick={onClose}
              className="absolute right-8 top-8 z-20 rounded-2xl p-3 text-body/40 transition-all hover:bg-white/5 hover:text-primary active:scale-95 border border-white/5"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="w-full p-8 sm:p-12 md:p-14"
                >
                  <div className="mb-10 text-center relative z-10">
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                      <MailCheck className="h-4 w-4" />
                      Registry_v2.0
                    </div>
                    <h2 className="mb-4 text-3xl font-black italic tracking-tighter text-foreground md:text-5xl leading-tight">
                      Secure your <br /> <span className="text-primary italic">Node_Shard</span>
                    </h2>
                    <p className="text-lg font-medium text-body opacity-60">
                      Onboarding high-trust protocols for Omen Alpha.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-6 relative z-10">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/40 ml-1">
                        Endpoint_Auth
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="founder@yourproject.com"
                        required
                        className="omen-input w-full bg-white/3 border-white/5 focus:border-primary/40 rounded-2xl px-6 py-4 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/40 ml-1">
                        Handle_Identity
                      </label>
                      <input
                        type="text"
                        name="project"
                        placeholder="@YourProject"
                        className="omen-input w-full bg-white/3 border-white/5 focus:border-primary/40 rounded-2xl px-6 py-4 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.6em] text-primary/40 ml-1">
                        Shard_Target
                      </label>
                      <input
                        type="text"
                        name="wallet"
                        placeholder="0x... or alias.sui"
                        className="omen-input w-full bg-white/3 border-white/5 focus:border-primary/40 rounded-2xl px-6 py-4 transition-all"
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-18 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)]"
                        isLoading={isLoading}
                      >
                        Initialize Onboarding
                      </Button>
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-4 text-sm font-bold text-red-400 italic"
                          role="alert"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex w-full flex-col items-center p-8 py-14 text-center sm:p-12 md:p-16"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] border border-primary/20 bg-primary/10 shadow-[0_0_50px_rgba(67,182,213,0.3)]"
                  >
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                  </motion.div>

                  <h3 className="mb-4 text-4xl font-black italic tracking-tighter text-foreground">Handshake_Success</h3>
                  <p className="mb-12 max-w-[360px] text-xl font-medium leading-relaxed text-body opacity-60 italic">
                    {message || "Telemetry received. Testnet V2 access will be synchronized in batches."}
                  </p>

                  <div className="flex w-full flex-col gap-4">
                    <Button variant="secondary" size="lg" className="h-16 w-full gap-3 rounded-[24px]" asChild>
                      <a href="/docs">
                        <FileText className="h-5 w-5" /> Read Terminal Docs
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="h-16 w-full gap-3 rounded-[24px] border-0 bg-[#000000] text-white hover:bg-[#1A1A1A]"
                      asChild
                    >
                      <a href="https://x.com/OmenLabsHQ" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" /> Follow System_Update
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

