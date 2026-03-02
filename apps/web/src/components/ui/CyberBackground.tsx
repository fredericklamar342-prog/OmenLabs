"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CyberBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#FAFBFC]">
      {/* Dynamic Grid */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.4]"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      {/* Scanning Line */}
      <motion.div
        animate={{
          top: ["-10%", "110%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B0000]/20 to-transparent shadow-[0_0_20px_rgba(139,0,0,0.3)]"
      />

      {/* Cyber Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#8B0000]/5 to-transparent blur-[120px] opacity-60"
      />
      
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] right-[5%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gray-200/40 to-transparent blur-[100px] opacity-40"
      />

      {/* Distant Particles/Grid Dots */}
      <div 
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
