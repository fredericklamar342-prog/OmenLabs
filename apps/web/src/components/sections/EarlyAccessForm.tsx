"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";

interface EarlyAccessFormProps {
  layout?: "hero" | "bottom";
}

export function EarlyAccessForm({ layout = "hero" }: EarlyAccessFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) => {
    return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email format.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const result = await submitEarlyAccessRegistration({
        email,
        source: `inline-${layout}`,
      });

      setStatus("success");
      setMessage(result.message || "Your request is in. Check your inbox for confirmation.");
      setEmail("");
    } catch (err: unknown) {
      console.error("Form Error:", err);
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full items-center justify-center py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl glass-card border border-primary/20 bg-panel/30 p-10 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl rounded-[40px] overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          
          <div className="relative mb-8 flex justify-center">
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
              className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-primary/20 shadow-[0_0_30px_rgba(67,182,213,0.3)] border border-primary/30"
            >
              <svg className="h-10 w-10 text-primary" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          </div>

          <h2 className="text-4xl font-black tracking-tighter text-foreground italic">Registry_Synced</h2>
          <p className="mt-6 text-xl text-body opacity-60 italic leading-relaxed">{message}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={["relative w-full", layout === "bottom" ? "max-w-3xl mx-auto" : ""].join(" ")}
      noValidate
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          id="waitlist-email"
          type="email"
          name="email"
          placeholder="ENTER_EP_AUTH"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          required
          disabled={status === "submitting"}
          className={[
            "omen-input h-18 text-lg font-bold italic tracking-tight flex-1 bg-white/3 border-white/5 text-foreground placeholder:text-body/20 rounded-[24px] px-8 transition-all duration-300",
            status === "error" ? "border-red-500/30 focus:border-red-500/50" : "focus:border-primary/40 focus:bg-white/5",
          ].join(" ")}
          aria-label="Email address"
        />

        <Button
          type="submit"
          isLoading={status === "submitting"}
          size="lg"
          className="w-full shrink-0 md:w-auto h-18 px-12 text-lg font-black italic shadow-[0_0_30px_rgba(67,182,213,0.3)] transition-all duration-500"
        >
          {status === "submitting" ? "SYNCHRONIZING..." : "INITIALIZE_AUTH"}
        </Button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 text-[11px] font-black uppercase tracking-[0.4em] text-red-400 italic ml-2"
            role="alert"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-center md:justify-start gap-8 px-2">
        <a
          href="/docs"
          className="text-[11px] font-black uppercase tracking-[0.4em] text-body/30 hover:text-primary transition-all flex items-center gap-3 group italic"
        >
          <span className="w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(67,182,213,0.5)]" />
          SYSTEM_TERMINAL
        </a>
      </div>
    </form>
  );
}

