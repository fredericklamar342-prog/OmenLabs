"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function InfrastructureVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center pointer-events-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,182,213,0.1)_0%,transparent_70%)] animate-pulse-subtle" />
      
      {/* Abstract Grid SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 500 500">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Rotating Core System */}
      <div className="relative w-4/5 h-4/5 flex items-center justify-center">
        {/* Layer 1: Outer Slow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-primary/10 rounded-full"
        />
        
        {/* Layer 2: Dashed Counter-Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[10%] border border-dashed border-primary/20 rounded-full"
        />

        {/* Layer 3: Accent Ring Segment */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[20%] border-t border-primary/40 rounded-full"
        />

        {/* Data Nodes Cluster */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.6, 0.1], 
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                top: `${50 + 35 * Math.sin(i * (Math.PI / 6))}%`,
                left: `${50 + 35 * Math.cos(i * (Math.PI / 6))}%`,
                boxShadow: "0 0 12px #43B6D5",
              }}
            />
          ))}
        </div>

        {/* Central Identity Monolith */}
        <div className="relative w-36 h-36 glass-card rounded-[32px] flex items-center justify-center overflow-hidden border border-primary/20 bg-primary/5 backdrop-blur-3xl shadow-[0_0_50px_rgba(67,182,213,0.2)]">
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "200% 200%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(67,182,213,0.3)_50%,transparent_75%)] bg-[length:250%_250%]"
          />
          <div className="relative z-10 w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-primary/40 rotate-45 rounded-lg" />
            <div className="w-6 h-6 bg-primary shadow-[0_0_20px_#43B6D5] rounded-sm animate-pulse" />
          </div>
        </div>

        {/* Floating Security Badges */}
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[5%] -right-8 px-4 py-2 glass-card border-primary/30 rounded-xl"
        >
          <span className="text-[10px] font-black font-mono text-primary uppercase tracking-widest italic">PROTOCOL: SECURE</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[15%] -left-12 px-4 py-2 glass-card border-white/10 rounded-xl"
        >
          <span className="text-[10px] font-black font-mono text-white/40 uppercase tracking-widest italic">Node: SUI_OS_v4</span>
        </motion.div>
      </div>

      {/* Cyber-Scanning Laser Line */}
      <motion.div
        animate={{ top: ["-10%", "110%", "-10%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20"
      >
        <div className="absolute inset-0 blur-[3px] bg-primary/80" />
      </motion.div>

      {/* Peripheral Data Readouts */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1.5 opacity-30 font-mono text-[9px] text-primary tracking-[0.2em] font-black uppercase italic">
        <span>sys.status: stable</span>
        <span>integrity.chk: 1.00</span>
        <span>latency: 00.12ms</span>
      </div>
    </div>
  );
}
