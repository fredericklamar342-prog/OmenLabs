"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Github, Twitter, Mail, Loader2, AlertCircle, MailWarning, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccessFlow } from "@/hooks/useAccessFlow";

export function DeveloperAccessForm() {
  const [formData, setFormData] = useState({
    github: "",
    x_profile: "",
    email: "",
  });
  const { submit, status, isPending, errors: apiErrors } = useAccessFlow({
    apiEndpoint: "/api/developer",
    successTimeout: 2500,
  });
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.github.trim()) newErrors.github = "GitHub identifier required";
    if (!formData.x_profile.trim()) newErrors.x_profile = "X authority link required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid communication node";
    }
    setLocalErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (localErrors[name]) {
      setLocalErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isPending) return;

    submit({
      github: formData.github.trim(),
      x_profile: formData.x_profile.trim(),
      email: formData.email.trim() || null,
    });
  };

  if (!isMounted) {
    return <div className="h-[400px] w-full bg-surface/5 rounded-3xl animate-pulse" />;
  }

  if (status.type && (status.type === "success" || status.type === "partial_success" || status.type === "already_exists")) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, filter: "blur(5px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col items-center text-center p-14 bg-[#151922] border border-[#49A5BD]/20 rounded-[44px] shadow-[0_0_80px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(73,165,189,0.08),transparent_70%)] pointer-events-none" />
        
        <div className="mb-10 success-glow relative">
          <div className={`w-24 h-24 rounded-full ${status.type === 'partial_success' ? 'bg-amber-500/10 border-amber-500/20' : 'bg-[#49A5BD]/10 border-[#49A5BD]/20'} border flex items-center justify-center relative z-10 shadow-[0_0_50px_-10px_rgba(73,165,189,0.2)]`}>
            {status.type === 'partial_success' ? (
              <ShieldCheck className="w-12 h-12 text-amber-500" />
            ) : status.type === 'already_exists' ? (
              <Clock className="w-12 h-12 text-[#49A5BD]" />
            ) : (
              <motion.svg 
                viewBox="0 0 52 52" 
                className="w-12 h-12 text-[#49A5BD]"
                initial="hidden"
                animate="visible"
              >
                <circle 
                  cx="26" cy="26" r="25" 
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeDasharray="157" strokeDashoffset="157"
                  className="opacity-20"
                />
                <motion.path 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                  className="animate-check"
                />
              </motion.svg>
            )}
          </div>
          <motion.div 
            className={`absolute inset-0 rounded-full border ${status.type === 'partial_success' ? 'border-amber-500/10' : 'border-[#49A5BD]/10'}`}
            animate={{ scale: [1, 1.3, 1.5], opacity: [0.3, 0.1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 12 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1, duration: 0.4 }}
           className="space-y-4"
        >
          <h3 className="text-4xl font-black text-white uppercase tracking-tight font-outfit leading-[0.9] mb-4">
            {status.type === "success" && <>Access <br /> Authorized</>}
            {status.type === "partial_success" && <>Registry <br /> Updated</>}
            {status.type === "already_exists" && <>Identity <br /> Verified</>}
          </h3>
          <p className="text-body font-bold max-w-sm mx-auto leading-relaxed text-[13px] uppercase tracking-[0.15em] opacity-60">
            {status.message}
          </p>
          
          {status.type === "partial_success" && (
            <div className="inline-flex items-center justify-center gap-2.5 text-[10px] text-amber-500 font-black uppercase tracking-widest px-5 py-2.5 bg-amber-500/5 rounded-full border border-amber-500/10 mt-2">
              <MailWarning className="w-3.5 h-3.5" />
              <span>Identity Persistent • Sync Temporarily Delayed</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 relative">
      <div className="space-y-6">
        <div className="space-y-2.5">
          <label htmlFor="github" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] ml-1">
            GitHub Identification
          </label>
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-body/40 group-focus-within:text-[#49A5BD] transition-all">
              <Github className="w-5 h-5" />
            </div>
            <input
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="github.com/username"
              className={`form-input-premium w-full h-15 pl-14 pr-6 ${localErrors.github || apiErrors.github ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
              disabled={isPending}
            />
          </div>
          {(localErrors.github || apiErrors.github) && (
            <p className="text-[10px] font-bold text-red-400 ml-1 uppercase tracking-widest">
              {localErrors.github || (apiErrors.github?.[0])}
            </p>
          )}
        </div>

        <div className="space-y-2.5">
          <label htmlFor="x_profile" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] ml-1">
            X Authority Link
          </label>
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-body/40 group-focus-within:text-[#49A5BD] transition-all">
              <Twitter className="w-5 h-5" />
            </div>
            <input
              id="x_profile"
              name="x_profile"
              value={formData.x_profile}
              onChange={handleChange}
              placeholder="x.com/username"
              className={`form-input-premium w-full h-15 pl-14 pr-6 ${localErrors.x_profile || apiErrors.x_profile ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
              disabled={isPending}
            />
          </div>
          {(localErrors.x_profile || apiErrors.x_profile) && (
            <p className="text-[10px] font-bold text-red-400 ml-1 uppercase tracking-widest">
              {localErrors.x_profile || (apiErrors.x_profile?.[0])}
            </p>
          )}
        </div>

        <div className="space-y-2.5">
          <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#49A5BD] ml-1">
            Communication Node (Optional)
          </label>
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-body/40 group-focus-within:text-[#49A5BD] transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="developer@omen.network"
              className={`form-input-premium w-full h-15 pl-14 pr-6 ${localErrors.email || apiErrors.email ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
              disabled={isPending}
            />
          </div>
          {(localErrors.email || apiErrors.email) && (
            <p className="text-[10px] font-bold text-red-400 ml-1 uppercase tracking-widest">
              {localErrors.email || (apiErrors.email?.[0])}
            </p>
          )}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {status.type === "error" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-center gap-4 backdrop-blur-md"
          >
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <p className="text-[11px] font-black uppercase tracking-widest text-red-400">{status.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        disabled={isPending}
        className="btn-premium w-full h-16 bg-[#49A5BD] text-white hover:bg-[#49A5BD]/90 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-[#49A5BD]/20 group border-none overflow-hidden relative"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isPending ? (
            <motion.div 
               key="loading"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="flex items-center gap-3"
            >
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="animate-pulse">Authorizing...</span>
            </motion.div>
          ) : (
            <motion.span 
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-3"
            >
              Secure Developer Access <ShieldCheck className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
            </motion.span>
          )}
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </Button>

      <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-body/30 font-mono">
        Verification Managed via <span className="text-[#49A5BD]/60">OmenCore::Registry</span>
      </p>
    </form>
  );
}
