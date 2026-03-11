"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, CheckCircle, AlertCircle } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              className="flex items-center gap-3 px-5 py-3 glass-card ring-premium rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] min-w-[280px] pointer-events-auto"
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${t.type === "success" ? "bg-green-500/10 text-green-500" : ""}
                ${t.type === "error" ? "bg-accent/10 text-accent" : ""}
                ${t.type === "info" ? "bg-secondary/10 text-secondary" : ""}
              `}>
                {t.type === "success" && <CheckCircle className="w-4 h-4" />}
                {t.type === "error" && <AlertCircle className="w-4 h-4" />}
                {t.type === "info" && <Shield className="w-4 h-4" />}
              </div>
              <div className="flex-1 text-[11px] font-bold uppercase tracking-widest text-white/80">
                {t.message}
              </div>
              <button 
                onClick={() => setToasts(prev => prev.filter(toast => toast.id !== t.id))}
                className="p-1 hover:bg-white/5 rounded-full text-white/20 hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

