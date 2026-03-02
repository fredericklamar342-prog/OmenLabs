"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, ArrowRight } from "lucide-react";
import { CyberBackground } from "@/components/ui/CyberBackground";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [socialLoading, setSocialLoading] = React.useState<string | null>(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isForgotSent, setIsForgotSent] = React.useState(false);

  // Strength calculation
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (pass.length === 0) return 0;
    if (pass.length > 5) score += 1;
    if (pass.length > 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;
    return score;
  };

  const strength = getPasswordStrength(password);
  const strengthText = ["None", "Very Weak", "Weak", "Medium", "Strong", "Great"][strength];
  const isPassStrongEnough = strength >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !isPassStrongEnough) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1200);
  };

  const handleSocialLogin = (provider: string) => {
    setSocialLoading(provider);
    setTimeout(() => {
      setSocialLoading(null);
      router.push("/dashboard");
    }, 1000);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }
    setIsForgotSent(true);
    setTimeout(() => setIsForgotSent(false), 5000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#0A0A0A]">
      <CyberBackground />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="rounded-2xl border border-[#E6E8EB] bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.10)] backdrop-blur">
            {/* Brand mark */}
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#E6E8EB] bg-white shadow-sm">
                <Shield className="w-5 h-5 text-[#8B0000]" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wide uppercase">Omen Protocol</div>
                <div className="text-xs text-[#6B7280]">Secure access to the Trust Layer</div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome back<span className="text-[#8B0000]">.</span>
            </h1>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">
              Sign in to view partner trust indexes and SDK integration status.
            </p>

            {isForgotSent && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-100 text-green-800 text-sm rounded-xl text-center"
              >
                <p className="font-bold mb-1 uppercase tracking-widest text-[10px]">Recovery Email Sent</p>
                <p className="text-[11px]">Check your inbox at <strong>{email}</strong>.</p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-xl border border-[#E6E8EB] px-4 text-sm outline-none focus:border-[#8B0000]/50 focus:ring-4 focus:ring-[#8B0000]/10 transition"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium uppercase tracking-wide text-[#6B7280]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-xs font-medium text-[#8B0000] hover:opacity-80 transition-opacity uppercase tracking-widest"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-xl border border-[#E6E8EB] px-4 text-sm outline-none focus:border-[#8B0000]/50 focus:ring-4 focus:ring-[#8B0000]/10 transition"
                />

                {/* Password Strength Indicator */}
                {password.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-2 pt-1 overflow-hidden"
                  >
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                      <span className="text-[#6B7280]">Security Strength</span>
                      <span className={strength < 3 ? "text-red-600" : "text-green-600"}>
                        {strengthText}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-[#E6E8EB] flex gap-1 rounded-full overflow-hidden">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div 
                          key={i}
                          className={`h-full flex-1 transition-all duration-500 ${
                            i <= strength 
                              ? (strength < 3 ? "bg-red-500" : "bg-[#0A0A0A]") 
                              : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Primary button */}
              <motion.button
                type="submit"
                disabled={isLoading || !email || !isPassStrongEnough || socialLoading !== null}
                whileHover={!isLoading && email && isPassStrongEnough ? { scale: 1.01 } : {}}
                whileTap={!isLoading && email && isPassStrongEnough ? { scale: 0.99 } : {}}
                className="h-12 w-full rounded-xl bg-[#0A0A0A] text-sm font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="h-4 w-4 animate-spin border-2 border-current border-t-transparent rounded-full" />
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="h-px w-full bg-[#E6E8EB]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[11px] font-medium uppercase tracking-wide text-[#6B7280]">
                  or continue with
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  type="button"
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading || socialLoading !== null}
                  onClick={() => handleSocialLogin("github")}
                  className="flex items-center gap-3 justify-center h-12 rounded-xl border border-[#E6E8EB] bg-white text-sm font-medium transition-all duration-200 hover:border-gray-300 disabled:opacity-50"
                >
                  {socialLoading === "github" ? (
                    <span className="h-4 w-4 animate-spin border-2 border-black border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </>
                  )}
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading || socialLoading !== null}
                  onClick={() => handleSocialLogin("google")}
                  className="flex items-center gap-3 justify-center h-12 rounded-xl border border-[#E6E8EB] bg-white text-sm font-medium transition-all duration-200 hover:border-gray-300 disabled:opacity-50"
                >
                  {socialLoading === "google" ? (
                    <span className="h-4 w-4 animate-spin border-2 border-black border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                      Google
                    </>
                  )}
                </motion.button>
              </div>

              <p className="pt-2 text-center text-sm text-[#6B7280]">
                Don’t have access?{" "}
                <Link href="/alpha" className="font-semibold text-[#0A0A0A] hover:underline transition-all">
                  Join the Private Alpha
                </Link>
                <span className="text-[#8B0000]">.</span>
              </p>
            </form>
          </div>

          {/* tiny footer */}
          <p className="mt-6 text-center text-xs text-[#6B7280]">
            Omen Labs • Infrastructure-grade trust verification
          </p>
        </motion.div>
      </div>
    </div>
  );
}
