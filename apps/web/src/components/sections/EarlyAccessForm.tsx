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
      <div className="flex w-full items-center justify-center py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 blur-xl" />

          <div className="relative mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">You&apos;re on the list</h2>
          <p className="mt-3 text-base text-white/75 sm:text-lg">{message}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={["relative w-full", layout === "bottom" ? "max-w-2xl" : ""].join(" ")}
      noValidate
    >
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          id="waitlist-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          required
          disabled={status === "submitting"}
          className={[
            "omen-input flex-1",
            status === "error" ? "border-[#FF3B30] focus:border-[#FF3B30] focus:ring-[#FF3B30]/10" : "",
          ].join(" ")}
          aria-label="Email address"
        />

        <Button
          type="submit"
          isLoading={status === "submitting"}
          size="lg"
          className="w-full shrink-0 md:w-auto"
        >
          {status === "submitting" ? "Joining..." : "Request Access"}
        </Button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            key="error"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-xs font-medium text-[#FF3B30]"
            role="alert"
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-4 flex items-center gap-4 px-1">
        <a
          href="/docs"
          className="text-[11px] font-semibold uppercase tracking-widest text-[#5B6B82] underline decoration-black/10 underline-offset-4 transition-colors duration-200 hover:text-[#43B6D5] hover:decoration-[#43B6D5]/40"
        >
          SDK Documentation
        </a>
      </div>
    </form>
  );
}
