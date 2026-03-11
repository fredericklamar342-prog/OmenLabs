"use client";

import { motion } from "framer-motion";

const pillars = [
  "Verified founders",
  "Identity confirmed",
  "Omen trust score",
  "Safer Web3 interactions",
];

const partners = [
  { name: "ShieldLink", icon: "circle", delay: 0.1, x: "-15%", y: "-20%" },
  { name: "EtherGuard", icon: "square", delay: 0.3, x: "20%", y: "-15%" },
  { name: "zkProof",    icon: "circle", delay: 0.5, x: "-10%", y: "25%" },
  { name: "SafeVault",  icon: "square", delay: 0.7, x: "25%", y: "20%" },
];

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 border-y border-[rgba(14, 47, 118, 0.08)] bg-transparent relative z-10 overflow-hidden">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up text-center lg:text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#43B6D5] uppercase">
              Why Omen matters
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-[1.1]">
              Trust should be clear <br />before users interact.
            </h2>
            <p className="text-[#4A5568] text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Omen helps people see which builders are real, which identities are confirmed, and which projects deserve confidence.
            </p>
            
            {/* Trust Points (Pillars) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 pt-4">
              {pillars.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-1.5 h-1.5 bg-[#43B6D5] rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A5568] whitespace-nowrap">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Creative Ecosystem Visual */}
          <div className="relative min-h-[400px] flex items-center justify-center animate-fade-up">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[10px] font-bold text-[#4A5568]/20 uppercase tracking-[0.5em] select-none">
                Trusted Ecosystem
              </div>
            </div>

            {/* Floating Glass Nodes */}
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ 
                  y: ["0%", i % 2 === 0 ? "5%" : "-5%", "0%"],
                  x: ["0%", i % 2 === 0 ? "-3%" : "3%", "0%"]
                }}
                transition={{ 
                  delay: p.delay, 
                  duration: 6 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute glass-panel p-4 md:p-6 flex flex-col items-center gap-3 md:backdrop-blur-md border border-white/50 shadow-xl group cursor-pointer hover:bg-white/40 transition-colors"
                style={{ left: `calc(50% + ${p.x})`, top: `calc(50% + ${p.y})` }}
              >
                <div className="w-10 h-10 border border-[#43B6D5]/10 flex items-center justify-center p-2 rounded-xl group-hover:scale-110 group-hover:bg-[#43B6D5]/5 transition-all duration-500">
                  <div className={`w-full h-full bg-[#43B6D5]/20 group-hover:bg-[#43B6D5]/40 transition-colors ${p.icon === "circle" ? "rounded-full" : "rounded-sm"}`} />
                </div>
                <span className="text-[11px] font-bold tracking-tight text-[#4A5568]/60 group-hover:text-[#0B1220] transition-colors whitespace-nowrap">
                  {p.name}
                </span>
                
                {/* Connecting light (visual only) */}
                <div className="absolute -z-10 w-24 h-24 bg-[#AAC0E1]/10 blur-xl md:blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-[#AAC0E1]/15 blur-3xl md:blur-[100px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
