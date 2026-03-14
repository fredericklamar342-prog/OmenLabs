"use client";

import React, { useState, useTransition, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";
import { SubmissionQueue } from "@/utils/submissionQueue";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, WifiOff } from "lucide-react";

interface WaitlistFormProps {
  onSuccess?: () => void;
  source?: string;
}

type FormStatus = {
  type: "success" | "error" | "pending-offline" | null;
  message: string;
};

export function WaitlistForm({ onSuccess, source = "modal" }: WaitlistFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email")).trim().toLowerCase();
    const honeypot = formData.get("website_url");

    // Honeypot check (client-side simple)
    if (honeypot) {
      setStatus({ type: "success", message: "You’re on the list. We’ll notify you when access opens." });
      formRef.current?.reset();
      return;
    }

    // Basic client-side format validation before submission
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: ["Please enter a valid email address."] });
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/early-access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, source }),
        });

        const result = await response.json();

        if (response.ok) {
          // Trigger EmailJS in background for secondary notification
          submitEarlyAccessRegistration({ email, source }).catch(err => {
            console.error("Background EmailJS notification failed:", err);
          });

          setStatus({ type: "success", message: result.message || "You’re on the list. We’ll notify you when access opens." });
          formRef.current?.reset();
          if (onSuccess) {
            setTimeout(onSuccess, 3000);
          }
        } else {
          // Handle specific errors
          if (response.status === 429) {
             setStatus({ type: "error", message: "Too many requests. Please try again shortly." });
          } else {
             setStatus({ type: "error", message: result.error || "Your request has been received, but our server is busy. We'll process it shortly." });
          }
          
          if (result.details) {
            setErrors(result.details as Record<string, string[]>);
          }
        }
      } catch (err) {
        console.error("Waitlist submission network error:", err);
        
        // Handle Offline / Network Failure
        SubmissionQueue.enqueue(email, source);
        setStatus({ 
          type: "pending-offline", 
          message: "Connection looks unstable, but we saved your request and will retry automatically." 
        });
        formRef.current?.reset();
      }
    });
  }

  if (status.type === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-10 text-center"
      >
        <div className="mb-6 rounded-full bg-[#49A5BD]/10 p-4 relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#49A5BD]/5 blur-xl"
          />
          <CheckCircle2 className="h-10 w-10 text-[#49A5BD] relative z-10" />
        </div>
        <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-foreground font-outfit">
          Confirmed
        </h3>
        <p className="max-w-[260px] text-sm font-bold text-body leading-relaxed">
          {status.message}
        </p>
      </motion.div>
    );
  }

  if (status.type === "pending-offline") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-10 text-center"
      >
        <div className="mb-6 rounded-full bg-amber-500/10 p-4 relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-amber-500/5 blur-xl"
          />
          <WifiOff className="h-10 w-10 text-amber-500 relative z-10" />
        </div>
        <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-foreground font-outfit">
          Request Saved
        </h3>
        <p className="max-w-[300px] text-sm font-bold text-body leading-relaxed px-4">
          {status.message}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form ref={formRef} onSubmit={handleSubmit} className="relative group">
        {/* Honeypot field */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              className="h-14 sm:h-16 px-6 sm:px-8 rounded-2xl sm:rounded-full border-2 border-[#49A5BD]/20 bg-surface text-[15px] sm:text-lg font-bold text-foreground placeholder:text-body/30 focus:outline-none focus:border-[#49A5BD]/40 focus:ring-4 focus:ring-[#49A5BD]/5 transition-all shadow-sm group-hover:border-[#49A5BD]/30 font-mono"
              error={!!errors.email}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isPending}
            isLoading={isPending}
            className="h-14 sm:h-16 px-8 sm:px-12 rounded-2xl sm:rounded-full bg-[#49A5BD] text-white font-black uppercase tracking-[0.2em] text-xs sm:text-sm shadow-xl shadow-[#49A5BD]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 border-none"
          >
            <span>{isPending ? "Joining..." : "Secure Access"}</span>
          </Button>
        </div>

        <AnimatePresence>
          {status.type === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-2.5 px-2"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-[#49A5BD]/20 bg-surface px-5 py-3 shadow-2xl">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                  <AlertCircle className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-black uppercase tracking-[0.15em] text-foreground">
                  {status.message}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      
      {!status.type && (
        <p className="mt-6 text-center text-[10px] sm:text-[11px] font-bold text-body opacity-40 uppercase tracking-[0.15em] leading-relaxed font-mono">
          Encrypted Storage • Early Access Priority • Ecosystem Updates
        </p>
      )}
    </div>
  );
}

