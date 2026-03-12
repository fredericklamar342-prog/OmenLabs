"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, Mail01, ShieldTick, Stars01 } from "@untitled-ui/icons-react";
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
    <div className="relative min-h-screen overflow-hidden bg-white text-[#0B1220] selection:bg-[#43B6D5]/20 pb-20">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#43B6D5]/5 to-transparent blur-[120px] -ml-48 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0B1220]/5 to-transparent blur-[100px] -mr-48 -mb-32 pointer-events-none" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-16 px-10 py-32 lg:grid-cols-[1fr_1fr]">
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            <motion.div
               whileHover={{ x: -4 }}
               transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="mb-12 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] hover:text-[#43B6D5] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to Base
              </Link>
            </motion.div>

            <div className="mb-10 inline-flex items-center gap-3 px-4 py-1.5 border border-[#43B6D5]/20 bg-[#43B6D5]/5 rounded-full shadow-sm">
              <Stars01 className="h-4 w-4 text-[#43B6D5]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#43B6D5]">Registry Induction</span>
            </div>

            <h1 className="max-w-xl text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-[#0B1220] uppercase mb-8">
              Early <br /> 
              Registry <br /> 
              Induction
            </h1>
            <p className="mt-8 max-w-lg text-xl font-medium text-[#64748B] leading-relaxed">
              Secure your position in the trust hierarchy. Register your project details 
              to receive prioritized synchronization and badge allocation.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {[
              "Automated verification for established L1/L2 primitives.",
              "Cryptographic confirmation dispatched upon successful registration.",
              "Prioritized SDK access for all validated early registry members.",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex items-start gap-4 p-6 glass-card bg-white/40 border-black/[0.03] rounded-3xl"
              >
                <div className="rounded-2xl bg-[#F8FAFC] border border-black/[0.03] p-3 text-[#43B6D5] shadow-sm">
                  <ShieldTick className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-[#64748B] leading-relaxed uppercase tracking-tight">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-card bg-white border-black/[0.03] rounded-[48px] p-10 sm:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#43B6D5]/30 to-transparent" />
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
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="mb-10 flex h-24 w-24 items-center justify-center rounded-[32px] border border-[#27C93F]/20 bg-[#27C93F]/10 shadow-xl shadow-[#27C93F]/5"
                >
                  <CheckCircle className="h-12 w-12 text-[#27C93F]" />
                </motion.div>
                <h2 className="text-4xl font-black text-[#0B1220] uppercase tracking-tighter">Registration complete</h2>
                <p className="mt-6 max-w-sm text-lg font-medium text-[#64748B] leading-relaxed">{submitState.message}</p>
                <div className="mt-12 flex w-full max-w-sm flex-col gap-4">
                  <Button variant="secondary" size="lg" className="h-14 rounded-2xl border-black/[0.03] text-xs font-black uppercase tracking-widest bg-white shadow-sm" asChild>
                    <Link href="/docs">
                      <Mail01 className="mr-3 h-4 w-4" />
                      Protocol Documentation
                    </Link>
                  </Button>
                  <Button size="lg" className="h-14 rounded-2xl bg-[#0B1220] text-white border-none shadow-xl text-xs font-black uppercase tracking-widest" onClick={() => setSubmitState(initialState)}>
                    Induct Another Node
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
                <div className="mb-14">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#43B6D5]" />
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#43B6D5]">
                      Credential Intake
                    </p>
                  </div>
                  <h2 className="text-4xl font-black text-[#0B1220] uppercase tracking-tighter leading-none mb-6">Request access</h2>
                  <p className="text-lg font-medium text-[#64748B] leading-relaxed">
                    Submit your credentials to initiate the handshake process with the Omen infrastructure hub.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                        Communications Node (Email)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="founder@project.xyz"
                        required
                        className="w-full h-16 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none"
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                          Project Identity
                        </label>
                        <input
                          type="text"
                          name="project"
                          placeholder="Node-Alpha"
                          className="w-full h-16 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">
                          Settlement Pointer (Sui)
                        </label>
                        <input
                          type="text"
                          name="wallet"
                          placeholder="0x... or name.sui"
                          className="w-full h-16 px-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.03] text-sm font-bold placeholder:text-[#94A3B8]/60 focus:ring-2 focus:ring-[#43B6D5]/20 focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-black/[0.03] bg-[#F8FAFC] p-8 text-[11px] font-bold text-[#64748B] italic leading-relaxed uppercase tracking-widest">
                    Confirmation email will be dispatched to the verified communications node. Synchronization time may vary by network load.
                  </div>

                  <AnimatePresence>
                    {submitState.status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-4 text-sm font-bold text-rose-700"
                        role="alert"
                      >
                        {submitState.message}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 bg-[#0B1220] hover:bg-[#0B1220]/90 text-white border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all text-xs font-black uppercase tracking-[0.2em]"
                      isLoading={submitState.status === "submitting"}
                    >
                      {submitState.status === "submitting" ? "Synchronizing..." : "Initiate Handshake"}
                    </Button>
                    <p className="text-center mt-6 text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest italic leading-relaxed">
                       Security verified by Omen Protocol Private Alpha V1.0 <br /> Guaranteed end-to-end cryptographic transit.
                    </p>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </div>
    </div>
  );
}
