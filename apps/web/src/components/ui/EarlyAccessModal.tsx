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
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[540px] overflow-hidden rounded-[32px] border border-[rgba(14,47,118,0.1)] bg-white shadow-2xl"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(170,192,225,0.5),transparent_70%)]" />

            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 rounded-full p-2 text-[#4A5568] transition-colors hover:bg-[rgba(14,47,118,0.05)]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="w-full p-6 sm:p-8 md:p-10"
                >
                  <div className="mb-8 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#43B6D5]/10 bg-[#F8FBFE] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#43B6D5]">
                      <MailCheck className="h-4 w-4" />
                      Fast Onboarding
                    </div>
                    <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#0B1220] md:text-3xl">
                      Secure Your Spot in the Omen Registry
                    </h2>
                    <p className="text-[15px] leading-relaxed text-[#4A5568]">
                      We are onboarding high-trust protocols and developers for Testnet V2.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Email (required)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="founder@yourproject.com"
                        required
                        className="omen-input"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Project Name or X Handle
                      </label>
                      <input
                        type="text"
                        name="project"
                        placeholder="@YourProject"
                        className="omen-input"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Sui Wallet Address
                      </label>
                      <input
                        type="text"
                        name="wallet"
                        placeholder="0x... or alias.sui"
                        className="omen-input"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="h-12 w-full text-[15px]"
                        isLoading={isLoading}
                      >
                        Request Testnet Access
                      </Button>
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex w-full flex-col items-center p-6 py-10 text-center sm:p-8 md:p-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#43B6D5]/10 bg-[#EAF3FA]"
                  >
                    <CheckCircle2 className="h-8 w-8 text-[#43B6D5]" />
                  </motion.div>

                  <h3 className="mb-3 text-2xl font-bold text-[#0B1220]">Application Received</h3>
                  <p className="mb-10 max-w-[360px] text-[15px] leading-relaxed text-[#4A5568]">
                    {message || "You are on the list. Testnet V2 access will be rolled out in batches."}
                  </p>

                  <div className="flex w-full flex-col gap-3">
                    <Button variant="secondary" size="lg" className="glass-panel h-12 w-full gap-2" asChild>
                      <a href="/docs">
                        <FileText className="h-4 w-4" /> Read the Docs
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="h-12 w-full gap-2 border-0 bg-[#000000] text-white hover:bg-[#1A1A1A] hover:text-white"
                      asChild
                    >
                      <a href="https://x.com/OmenLabsHQ" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" /> Follow Omen Labs on X
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
