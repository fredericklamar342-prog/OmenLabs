"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wraps any content in a viewport-triggered fade-up animation.
 * Uses the shared premium easing and duration (600ms, translateY 14px → 0).
 */
export function SectionReveal({
  children,
  delay = 0,
  className = "",
  ...rest
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

