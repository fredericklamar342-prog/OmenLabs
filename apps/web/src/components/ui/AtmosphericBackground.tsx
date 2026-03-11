"use client";

import React from "react";
import { motion } from "framer-motion";

export function AtmosphericBackground() {
  return (
    <div className="omen-bg pointer-events-none overflow-hidden">
      {/* Moving Grid - Perspective Effect */}
      <div className="omen-grid opacity-20" />
      
      {/* Primary Hero Glow */}
      <div className="omen-glow-hero" />

      {/* Dynamic Animated Beams */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              width: "40%",
              top: `${20 + i * 25}%`,
              left: "-50%",
              rotate: "-15deg",
            }}
            animate={{
              left: ["-50%", "150%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Particles - Very Light for Performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Subtle Noise Texture for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

