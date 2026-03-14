"use client";

import { useState, useTransition, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";
import { SubmissionQueue } from "@/utils/submissionQueue";
import { CheckCircle2, AlertCircle, WifiOff } from "lucide-react";

interface EarlyAccessFormProps {
  layout?: "hero" | "bottom";
}

type FormStatus = {
  type: "success" | "error" | "pending-offline" | null;
  message: string;
};

export function EarlyAccessForm({ layout = "hero" }: EarlyAccessFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: "",
  });

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return;

    const sanitizedEmail = email.trim().toLowerCase();
    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website_url");

    // Honeypot check
    if (honeypot) {
      setStatus({ type: "success", message: "You’re on the list. We’ll notify you when access opens." });
      setEmail("");
      return;
    }

    if (!sanitizedEmail) {
      setStatus({ type: "error", message: "Please enter your email address." });
      return;
    }

    if (!validateEmail(sanitizedEmail)) {
      setStatus({ type: "error", message: "Please enter a valid email format." });
      return;
    }

    setStatus({ type: null, message: "" });

    startTransition(async () => {
      try {
        const source = `inline-${layout}`;
        const response = await fetch("/api/early-access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: sanitizedEmail, source }),
        });

        const result = await response.json();

        if (response.ok) {
          // Trigger EmailJS in background
          submitEarlyAccessRegistration({ email: sanitizedEmail, source }).catch(err => {
            console.error("Background EmailJS notification failed:", err);
          });

          setStatus({ type: "success", message: result.message || "You’re on the list. We’ll notify you when access opens." });
          setEmail("");
        } else {
          if (response.status === 429) {
            setStatus({ type: "error", message: "Too many requests. Please try again shortly." });
          } else {
            setStatus({ type: "error", message: result.error || "Something went wrong. Please try again." });
          }
        }
      } catch (err) {
        console.error("Form Error:", err);
        
        // Handle Offline
        SubmissionQueue.enqueue(sanitizedEmail, `inline-${layout}`);
        setStatus({ 
          type: "pending-offline", 
          message: "Connection looks unstable, but we saved your request and will retry automatically." 
        });
        setEmail("");
      }
    });
  };

  if (status.type === "success") {
    return (
      <div className="flex w-full items-center justify-center py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-3xl border-2 border-[#49A5BD] bg-surface p-8 text-center shadow-xl shadow-[#49A5BD]/5 sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle,rgba(73,165,189,0.05),transparent_70%)]" />

          <div className="relative mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#49A5BD] shadow-lg shadow-[#49A5BD]/20">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground uppercase font-outfit">You&apos;re on the list</h2>
          <p className="mt-3 text-base text-body sm:text-lg font-bold">{status.message}</p>
        </motion.div>
      </div>
    );
  }

  if (status.type === "pending-offline") {
    return (
      <div className="flex w-full items-center justify-center py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-3xl border-2 border-amber-500/50 bg-surface p-8 text-center shadow-xl sm:p-10"
        >
          <div className="relative mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
              <WifiOff className="h-8 w-8" />
            </div>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground uppercase font-outfit">Request Saved</h2>
          <p className="mt-3 text-base text-body sm:text-lg font-bold">{status.message}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={["relative w-full", layout === "bottom" ? "max-w-2xl" : ""].join(" ")}
      noValidate
    >
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          id="waitlist-email-inline"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status.type === "error") setStatus({ type: null, message: "" });
          }}
          required
          disabled={isPending}
          className={[
            "omen-input flex-1",
            status.type === "error" ? "border-red-500/50 focus:border-red-500" : "",
          ].join(" ")}
          aria-label="Email address"
        />

        <Button
          type="submit"
          isLoading={isPending}
          size="lg"
          className="w-full shrink-0 md:w-auto border-none"
        >
          {isPending ? "Joining..." : "Request Access"}
        </Button>
      </div>

      <AnimatePresence>
        {status.type === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-xs font-black uppercase tracking-widest text-red-500"
            role="alert"
          >
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-4 flex items-center gap-4 px-1">
        <a
          href="/docs"
          className="text-[11px] font-black uppercase tracking-[0.2em] text-[#49A5BD] underline decoration-[#49A5BD]/20 underline-offset-4 transition-colors duration-200 hover:opacity-70"
        >
          SDK Documentation
        </a>
      </div>
    </form>
  );
}

