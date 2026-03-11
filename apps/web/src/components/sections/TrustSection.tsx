"use client";

import { motion } from "framer-motion";

const pillars = [
  "Founder_Auth",
  "Identity_Sync",
  "Trust_Score_Init",
  "Secure_Handshake",
];

const partners = [
  { name: "SHIELD_CLUSTER_v2", icon: "circle", delay: 0.1, x: "-20%", y: "-15%" },
  { name: "ETHER_GUARD_INIT", icon: "square", delay: 0.3, x: "25%", y: "-10%" },
  { name: "ZK_PROOF_SHARD",    icon: "circle", delay: 0.5, x: "-15%", y: "25%" },
  { name: "SAFE_VAULT_EVAL",  icon: "square", delay: 0.7, x: "30%", y: "20%" },
];

export function TrustSection() {
  return (
    <section className="py-40 md:py-60 border-y border-white/5 bg-transparent relative z-10 overflow-hidden">
      <div className="max-container">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-40 items-center">
          
          {/* Text Content */}
          <div className="space-y-10 text-center lg:text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[11px] font-black tracking-[0.6em] text-primary uppercase italic"
            >
              PROTOCOL_RATIONALE
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85] italic"
            >
              Trust_Sync: <br />Absolute_Clarity.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-body italic opacity-60 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Omen synchronizes verified identities directly into the decentralized handshake, ensuring every interaction is anchored in cryptographic trust.
            </motion.p>
            
            {/* Trust Points (Pillars) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6 pt-6">
              {pillars.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#43B6D5]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary italic whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Creative Ecosystem Visual */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="text-[11px] font-black text-primary/10 uppercase tracking-[1em] select-none italic animate-pulse">
                TRUST_NETWORK_ACTIVE
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
                  y: ["0%", i % 2 === 0 ? "8%" : "-8%", "0%"],
                  x: ["0%", i % 2 === 0 ? "-5%" : "5%", "0%"]
                }}
                transition={{ 
                  delay: p.delay, 
                  duration: 8 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute glass-card p-6 md:p-10 flex flex-col items-center gap-5 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group cursor-pointer hover:bg-white/5 transition-all duration-700 rounded-[32px] backdrop-blur-3xl"
                style={{ left: `calc(50% + ${p.x})`, top: `calc(50% + ${p.y})` }}
              >
                <div className="w-14 h-14 border border-primary/20 bg-primary/5 flex items-center justify-center p-3 rounded-2xl group-hover:scale-125 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-700 shadow-2xl">
                  <div className={`w-full h-full bg-primary/30 group-hover:bg-primary/50 transition-colors shadow-[0_0_15px_#43B6D5] ${p.icon === "circle" ? "rounded-full" : "rounded-lg"}`} />
                </div>
                <span className="text-[12px] font-black tracking-widest text-foreground group-hover:text-primary transition-all duration-500 whitespace-nowrap italic uppercase">
                  {p.name}
                </span>
                
                {/* Connecting light (visual only) */}
                <div className="absolute -z-10 w-32 h-32 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}

            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-primary/5 blur-[150px] rounded-full -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}

