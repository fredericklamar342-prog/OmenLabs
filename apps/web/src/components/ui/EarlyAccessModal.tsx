"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, FileText, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Reset state when closing/opening
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
      }, 300); // Wait for exit animation
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    // Simulate API call for Vercel deployment
    new Promise((resolve) => setTimeout(resolve, 0))
      .then(() => setIsSuccess(true))
      .catch((error) => console.error("Form submission error:", error))
      .finally(() => setIsLoading(false));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#0E2F76]/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[480px] bg-white border border-[rgba(14,47,118,0.1)] rounded-3xl shadow-2xl overflow-hidden z-10 p-8 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[rgba(14,47,118,0.05)] text-[#4A5568] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="w-full"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0B1220] mb-3">
                      Secure Your Spot in the Omen Registry
                    </h2>
                    <p className="text-[#4A5568] text-[15px] leading-relaxed">
                      We are onboarding high-trust protocols and developers for Testnet V2.
                    </p>
                  </div>

                  <form 
                    onSubmit={handleSubmit} 
                    className="w-full space-y-5"
                  >
                    
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
                        Project Name or X Handle (required)
                      </label>
                      <input 
                        type="text" 
                        name="project"
                        placeholder="@YourProject" 
                        required 
                        className="omen-input"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-[#5B6B82]">
                        Sui Wallet Address (optional)
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
                        className="w-full h-12 text-[15px]"
                        isLoading={isLoading}
                      >
                        Request Testnet Access
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col items-center text-center py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#EAF3FA] flex items-center justify-center mb-6 border border-[#2B5C92]/10"
                  >
                    <CheckCircle2 className="w-8 h-8 text-[#2B5C92]" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#0B1220] mb-3">
                    Application Received
                  </h3>
                  <p className="text-[#4A5568] text-[15px] max-w-[320px] mb-10 leading-relaxed">
                    You are on the list. Testnet V2 access will be rolled out in batches.
                  </p>
                  
                  <div className="flex flex-col gap-3 w-full">
                    <Button variant="secondary" size="lg" className="w-full h-12 gap-2 glass-panel" asChild>
                      <a href="/docs">
                        <FileText className="w-4 h-4" /> Read the Docs
                      </a>
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full h-12 gap-2 bg-[#000000] text-white hover:bg-[#1A1A1A] hover:text-white border-0" asChild>
                      <a href="https://x.com/OmenLabs" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" /> Follow Omen Labs on X
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
