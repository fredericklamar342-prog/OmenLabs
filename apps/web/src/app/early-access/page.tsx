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
    <div className="relative min-h-screen overflow-hidden text-foreground bg-[#060A0D]">
      <div className="pointer-events-none absolute inset-0 omen-bg" />
      <div className="pointer-events-none absolute inset-0 omen-grid opacity-20" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-12 px-4 py-24 lg:py-32 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <Link
              href="/"
              className="mb-16 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-body transition-all hover:text-primary hover:gap-4 group"
            >
              <ArrowLeft className="h-4 w-4 text-primary group-hover:-translate-x-1" />
              Back to terminal
            </Link>

            <div className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-primary animate-float">
              <Sparkles className="h-4 w-4" />
              Secure Alpha Session
            </div>

            <h1 className="max-w-xl text-6xl leading-[0.9] md:text-8xl font-black mb-12 tracking-tighter italic">
              Join the <br />
              <span className="text-primary italic">Reputation</span> Queue
            </h1>
            <p className="mt-4 max-w-xl text-2xl text-body font-medium leading-relaxed opacity-80">
              Submit your project telemetry to join our private cohort. We deploy access in phased, cryptographically-secure batches.
            </p>
          </div>

          <div className="mt-20 space-y-8">
            {[
              "Native verification optimized for Sui Network.",
              "Proof-of-builder identity for dApps and AI agents.",
              "Secure reputation anchored on Walrus storage.",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                className="flex items-start gap-6 rounded-[32px] border border-white/5 bg-panel/30 px-8 py-7 hover:border-primary/20 hover:bg-panel/50 transition-all group shadow-2xl"
              >
                <div className="rounded-2xl bg-primary/10 p-3.5 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="text-lg font-bold text-body group-hover:text-foreground transition-colors leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="glass-card rounded-[64px] p-10 sm:p-14 lg:p-20 border border-primary/10 bg-panel/30 backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] h-fit sticky top-32"
        >
          <AnimatePresence mode="wait">
            {submitState.status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex min-h-[560px] flex-col items-center justify-center text-center py-10"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mb-12 flex h-32 w-32 items-center justify-center rounded-[40px] border border-primary/30 bg-primary/10 shadow-[0_0_50px_rgba(67,182,213,0.3)]"
                >
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </motion.div>
                <h2 className="text-5xl font-black text-foreground mb-6 italic tracking-tight">Access <span className="text-primary italic">Granted</span></h2>
                <p className="max-w-md text-xl text-body font-medium leading-relaxed opacity-80">{submitState.message}</p>
                <div className="mt-16 flex w-full max-w-sm flex-col gap-6">
                  <Button variant="secondary" size="lg" asChild className="h-16 glass-panel text-lg font-black italic">
                    <Link href="/docs">
                      <MailCheck className="mr-3 h-6 w-6 text-primary" />
                      Decrypt the Docs
                    </Link>
                  </Button>
                  <button 
                    onClick={() => setSubmitState(initialState)}
                    className="text-[11px] font-black uppercase tracking-[0.4em] text-primary/40 hover:text-primary transition-colors py-2"
                  >
                    Register new telemetry shard
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                <div className="mb-12">
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary mb-6 opacity-60">
                    Registration_Protocol_v4
                  </p>
                  <h2 className="text-5xl font-black text-foreground italic tracking-tight mb-6 leading-tight">Request <br /><span className="text-primary italic">Secure Access</span></h2>
                  <p className="text-xl text-body font-medium opacity-80">
                    Omen currently prioritizes builders with a verifiable Sui mainnet history.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8">
                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/60 px-1">
                        Secure Alias (Email)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="founder@omen.protocol"
                        required
                        className="omen-input h-16 bg-white/5 border-white/10 px-8 text-lg"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/60 px-1">
                        Designation (Project Name)
                      </label>
                      <input
                        type="text"
                        name="project"
                        placeholder="Omen Protocol"
                        className="omen-input h-16 bg-white/5 border-white/10 px-8 text-lg"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/60 px-1">
                        Sui Identity (Wallet/NS)
                      </label>
                      <input
                        type="text"
                        name="wallet"
                        placeholder="0x... or pseudonym.sui"
                        className="omen-input h-16 bg-white/5 border-white/10 px-8 text-lg"
                      />
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-primary/10 bg-primary/5 px-8 py-6 text-base text-body leading-relaxed font-medium">
                    <span className="text-primary font-black uppercase text-[10px] tracking-widest block mb-2 opacity-60">Security Notice</span>
                    Your credentials will be reviewed by the Omen Core triage team. Approved operators will receive a secure ingress link.
                  </div>

                  <AnimatePresence>
                    {submitState.status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="rounded-2xl border border-red-500/20 bg-red-500/10 px-6 py-4 text-sm font-black text-red-500 uppercase tracking-widest text-center"
                        role="alert"
                      >
                        {submitState.message}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-20 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                    isLoading={submitState.status === "submitting"}
                  >
                    {submitState.status === "submitting" ? "Encrypting Signal..." : "Transmit Application"}
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

