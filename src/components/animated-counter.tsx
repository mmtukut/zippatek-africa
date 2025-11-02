"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedCounter({
  from = 0,
  to,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${value.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, prefix, suffix, decimals]);

  const initialValue = `${prefix}${from.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return <span ref={ref} className={cn(className)}>{initialValue}</span>;
}
