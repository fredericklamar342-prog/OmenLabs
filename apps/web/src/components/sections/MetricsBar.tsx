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
    <div className="space-y-4 group" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="text-5xl font-bold tracking-tight text-[#0B1220] font-mono tabular-nums group-hover:text-[#43B6D5] transition-colors">
        {prefix}{count}{suffix}
      </div>
      <div className="h-[2px] w-full bg-black/5 relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#2A8FA8] to-[#B3CDE0]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
        />
      </div>
      <div className="text-[11px] font-bold uppercase tracking-widest text-[#4A5568]">
        {label}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
export function MetricsBar() {
  const { openModal } = useEarlyAccessModal();

  return (
    <section className="py-24 bg-transparent relative z-10 w-full">
      <div className="max-container">

        {/* Animated stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 animate-fade-up">
          <AnimatedStat label="Always Online"         numericEnd={99.99} suffix="%" decimals={2} delay={0}    />
          <AnimatedStat label="Fake Projects Flagged" numericEnd={1.2}    suffix="M+" decimals={1} prefix="" delay={0.1} />
          <AnimatedStat label="Verified Builders"     numericEnd={4820}   suffix="" delay={0.2} />
          <AnimatedStat label="Protected User Funds"  numericEnd={2.4}    prefix="$" suffix="B+" decimals={1} delay={0.3} />
        </div>

        {/* Final CTA card */}
        <div className="relative glass-card p-12 md:p-20 flex flex-col items-center text-center overflow-hidden rounded-[32px] animate-fade-up border border-black/5">
          {/* Shield watermark */}
          <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-5" aria-hidden="true">
            <Shield className="w-64 h-64 text-[#43B6D5]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl text-[#0B1220] relative z-10">
            Ready to protect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#0B1220] to-[#43B6D5]">your users?</span>
          </h2>
          <p className="text-lg text-[#4A5568] mb-10 max-w-xl leading-relaxed relative z-10">
            Join Omen Labs and give your community the one thing they need most — the ability to trust who is building for them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button size="lg" className="px-12" onClick={openModal}>
              Get Early Access
            </Button>
            <Button variant="secondary" size="lg" className="px-12">
              See How It Works
            </Button>
          </div>

          {/* Status badges */}
          <div className="absolute bottom-6 left-8 flex gap-6 relative z-10 mt-16 md:mt-0 md:absolute">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[11px] font-bold text-[#4A5568] uppercase tracking-widest">Live Now</span>
            </div>
            <div className="flex items-center gap-2 text-[#4A5568]">
              <Lock className="w-3 h-3" />
              <span className="text-[11px] font-bold uppercase tracking-widest">Secure & Private</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
