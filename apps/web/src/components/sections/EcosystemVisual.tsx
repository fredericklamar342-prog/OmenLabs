"use client";

import { motion } from "framer-motion";
import SuiIcon from "@/components/icons/SuiIcon";
import WalrusIcon from "@/components/icons/WalrusIcon";
import { Zap, ShieldCheck, Database, Activity, UserCheck } from "lucide-react";

const SoftBlur = ({ color, size, top, left, delay = 0, duration = 20 }: { color: string; size: string; top: string; left: string; delay?: number; duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.1, 1],
      x: ["-2%", "2%"],
      y: ["-2%", "2%"]
    }}
    transition={{
      opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={`absolute rounded-full blur-[120px] ${size} ${color}`}
    style={{ top, left }}
  />
);

export function EcosystemVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Static Atmosphere - Fixed Blurs */}
      <div className="absolute rounded-full blur-[160px] w-[800px] h-[800px] top-[-10%] left-[-10%] bg-[#49A5BD]/10" />
      <div className="absolute rounded-full blur-[140px] w-[600px] h-[600px] top-[40%] left-[60%] bg-[#49A5BD]/5" />

      {/* Connection Network (Simplified Static) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <path
          d="M 30% 25% L 70% 45% M 30% 25% L 20% 60% M 70% 45% L 80% 20%"
          stroke="#FFFFFF"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 5"
        />
      </svg>

      {/* Main Hubs - Minimal movement */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] opacity-[0.2]"
      >
        <SuiIcon className="w-48 h-48 text-[#FFFFFF]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[30%] opacity-[0.15]"
      >
        <WalrusIcon className="w-40 h-40 text-[#FFFFFF]" />
      </motion.div>

      {/* Floating Ecosystem Symbols - Reduced count and simple motion */}
      {[
        { icon: Zap, x: "15%", y: "20%" },
        { icon: ShieldCheck, x: "80%", y: "15%" },
        { icon: Database, x: "10%", y: "70%" },
        { icon: Database, x: "50%", y: "85%" },
      ].map((node, i) => (
        <motion.div
          key={`node-${i}`}
          animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -5, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-8 h-8 text-[#FFFFFF]"
          style={{ left: node.x, top: node.y }}
        >
          <node.icon className="w-full h-full opacity-[0.4]" />
        </motion.div>
      ))}
    </div>
  );
}
