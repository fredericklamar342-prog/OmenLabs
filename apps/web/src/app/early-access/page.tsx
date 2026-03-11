"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, MailCheck, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { submitEarlyAccessRegistration } from "@/utils/emailjs";

type SubmitState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: SubmitState = {
  status: "idle",
  message: "",
};

export default function EarlyAccessPage() {
  const [submitState, setSubmitState] = React.useState<SubmitState>(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitState.status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitState({ status: "submitting", message: "" });

    try {
      const result = await submitEarlyAccessRegistration({
        email: String(formData.get("email") || ""),
        project: String(formData.get("project") || ""),
        wallet: String(formData.get("wallet") || ""),
        source: "early-access-page",
      });

      form.reset();
      setSubmitState({
        status: "success",
        message: result.message,
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitState({ status: "error", message });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#0B1220]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,205,224,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,47,118,0.18),transparent_30%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.section
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass-card flex flex-col justify-between rounded-[32px] p-6 sm:p-8 lg:p-10"
        >
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#43B6D5] transition-colors hover:text-[#43B6D5]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#43B6D5]/10 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#43B6D5]">
              <Sparkles className="h-4 w-4" />
              Early Access
            </div>

            <h1 className="max-w-xl text-4xl leading-[1.03] md:text-5xl">
              Join the onboarding queue for Omen&apos;s trust registry.
            </h1>
            <p className="mt-4 max-w-xl text-base text-[#4A5568] md:text-lg">
              Submit your team or project details. Once registered, we confirm the request by email and review
              access in batches.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              "Responsive onboarding flow optimized for mobile and desktop.",
              "Immediate confirmation state after successful registration.",
              "Confirmation email dispatched to every valid signup when Resend is configured.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#43B6D5]/8 bg-white/65 px-4 py-4"
              >
                <div className="rounded-full bg-[#EAF3FA] p-2 text-[#43B6D5]">
                  <Shield className="h-4 w-4" />
                </div>
                <p className="text-sm text-[#4A5568]">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 18, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="glass-card rounded-[32px] p-5 sm:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">
            {submitState.status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex min-h-[520px] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#43B6D5]/10 bg-[#EAF3FA]"
                >
                  <CheckCircle2 className="h-10 w-10 text-[#43B6D5]" />
                </motion.div>
                <h2 className="text-3xl font-bold text-[#0B1220]">Registration complete</h2>
                <p className="mt-3 max-w-md text-base text-[#4A5568]">{submitState.message}</p>
                <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/docs">
                      <MailCheck className="mr-2 h-4 w-4" />
                      Read the docs while you wait
                    </Link>
                  </Button>
                  <Button size="lg" onClick={() => setSubmitState(initialState)}>
                    Register another email
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="w-full"
              >
                <div className="mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#43B6D5]">
                    Registration Form
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-[#0B1220] md:text-3xl">Request access</h2>
                  <p className="mt-3 text-sm text-[#4A5568] md:text-base">
                    Use a real inbox. This flow sends the registration confirmation to the email entered below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="founder@project.xyz"
                        required
                        className="omen-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Project or team
                      </label>
                      <input
                        type="text"
                        name="project"
                        placeholder="Omen Core"
                        className="omen-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Sui wallet
                      </label>
                      <input
                        type="text"
                        name="wallet"
                        placeholder="0x... or name.sui"
                        className="omen-input"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#43B6D5]/8 bg-[#F8FBFE] px-4 py-4 text-sm text-[#4A5568]">
                    You will see an in-app success state immediately. Email delivery depends on your EmailJS
                    service ID, public key, and template IDs being configured in the environment.
                  </div>

                  <AnimatePresence>
                    {submitState.status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
                        role="alert"
                      >
                        {submitState.message}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={submitState.status === "submitting"}
                  >
                    {submitState.status === "submitting" ? "Registering..." : "Request early access"}
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
}
