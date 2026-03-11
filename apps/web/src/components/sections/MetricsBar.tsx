"use client";

import { motion, useInView } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { scrollToId } from "@/utils/scroll";
import { useCountUp } from "@/hooks/useCountUp";
import { useRef } from "react";
import { useEarlyAccessModal } from "@/context/EarlyAccessModalContext";

/* ── Animated stat item ──────────────────────────────────────────────────── */
interface StatItemProps {
  label: string;
  /** Numeric value to count to */
  numericEnd: number;
  /** Prefix e.g. "$" */
  prefix?: string;
  /** Suffix e.g. "%" or "M+" */
  suffix?: string;
  /** Decimal places */
  decimals?: number;
  delay?: number;
}

function AnimatedStat({ label, numericEnd, prefix = "", suffix = "", decimals = 0, delay = 0 }: StatItemProps) {
  const [ref, count] = useCountUp({ end: numericEnd, duration: 400, delay: delay * 1000, decimals });

  return (
    <div className="space-y-6 group" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="text-6xl md:text-8xl font-black tracking-tighter text-foreground group-hover:text-primary transition-all duration-500 italic">
        {prefix}{count}{suffix}
      </div>
      <div className="h-px w-full bg-white/5 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-primary shadow-[0_0_10px_#43B6D5]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left center" }}
        />
      </div>
      <div className="text-[11px] font-black uppercase tracking-[0.4em] text-body/40 group-hover:text-primary transition-colors italic">
        {label}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
export function MetricsBar() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section className="py-40 bg-transparent relative z-10 w-full mb-20">
      <div className="max-container">

        {/* Animated stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-48">
          <AnimatedStat label="Uptime_Sync"         numericEnd={99.99} suffix="%" decimals={2} delay={0}    />
          <AnimatedStat label="Registry_Violations" numericEnd={1.2}    suffix="M+" decimals={1} prefix="" delay={0.1} />
          <AnimatedStat label="Verified_Shards"     numericEnd={4820}   suffix="" delay={0.2} />
          <AnimatedStat label="Locked_Liquidity"  numericEnd={2.4}    prefix="$" suffix="B+" decimals={1} delay={0.3} />
        </div>

        {/* Final CTA card */}
        <div className="relative glass-card p-12 md:p-32 flex flex-col items-center text-center overflow-hidden rounded-[48px] border border-white/5 bg-panel/30 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] group">
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-primary/5 blur-[150px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-700" aria-hidden="true" />
          
          {/* Shield watermark */}
          <div className="absolute -top-10 -right-10 pointer-events-none opacity-[0.03] rotate-12" aria-hidden="true">
            <Shield className="w-96 h-96 text-primary" />
          </div>

          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 max-w-4xl text-foreground relative z-10 leading-[0.85] italic">
            Secure your <br />
            <span className="text-primary italic">Protocol_Legacy</span>
          </h2>
          <p className="text-2xl text-body mb-16 max-w-3xl leading-relaxed relative z-10 font-medium italic opacity-60">
            Join the Omen ecosystem and synchronize your trust telemetry directly into the decentralized execution handshake.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 relative z-10">
            <Button size="lg" className="px-16 h-20 text-xl font-black italic shadow-[0_0_40px_rgba(67,182,213,0.3)]" onClick={openModal}>
              INITIALIZE_SHARD
            </Button>
            <Button variant="secondary" size="lg" className="px-16 h-20 text-xl font-black italic glass-panel border-white/10">
              Access_Docs
            </Button>
          </div>

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-12 relative z-10 mt-24 border-t border-white/5 pt-12 w-full max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_15px_#43B6D5]" />
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em] italic">OMEN_AUTH: STABLE</span>
            </div>
            <div className="flex items-center gap-3 text-body">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] italic opacity-40">mTLS_ENCRYPTION: ACTIVE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

