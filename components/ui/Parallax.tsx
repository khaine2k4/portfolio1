"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  /** Positive moves up on scroll, negative moves down. ~50-200 looks good. */
  offset?: number;
  className?: string;
};

export default function Parallax({ children, offset = 80, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  // Translating large blurred orbs every scroll frame is a real jank source on
  // phones — keep them static on touch / small screens / reduced motion.
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const skip = window.matchMedia(
      "(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)"
    ).matches;
    if (!skip) setEnabled(true);
  }, []);

  return (
    <motion.div ref={ref} style={enabled ? { y } : undefined} className={className}>
      {children}
    </motion.div>
  );
}
