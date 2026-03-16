import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  /** The final value to count to */
  end: number;
  /** Duration in ms. Default: 800 */
  duration?: number;
  /** Delay before starting in ms. Default: 0 */
  delay?: number;
  /** Number of decimal places. Default: 0 */
  decimals?: number;
}

/**
 * Animates a number from 0 → end when the element enters the viewport.
 * Returns [ref, displayValue] — attach ref to the container element.
 *
 * Uses cubic-easing (ease-out) to match the premium animation system.
 */
export function useCountUp({
  end,
  duration = 800,
  delay = 0,
  decimals = 0,
}: UseCountUpOptions): [React.RefObject<HTMLDivElement>, string] {
  const ref = useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "0px 0px -60px 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTs: number | null = null;
    let raf: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const elapsed = ts - startTs;
      const raw = Math.min(elapsed / duration, 1);
      const progress = easeOut(raw);
      const nextValue = progress * end;

      // Only update state if the value has changed significantly or it's the final tick
      // This prevents high-frequency re-renders for sub-pixel/sub-decimal changes
      if (raw === 1 || Math.abs(nextValue - value) >= 0.01) {
        setValue(nextValue);
      }

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [isInView, end, duration, delay]);

  const display = value.toFixed(decimals);
  return [ref, display];
}
