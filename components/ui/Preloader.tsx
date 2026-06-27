"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Reduced motion: skip the count entirely, just clear the overlay.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(100);
      const id = setTimeout(() => setLoading(false), 150);
      return () => clearTimeout(id);
    }

    let raf = 0;
    let start = 0;
    let last = -1;
    const duration = 1100;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(eased * 100);
      // Only re-render when the displayed integer actually changes — phones
      // can fire rAF >60fps and we don't want a React render on every tick.
      if (next !== last) {
        last = next;
        setCount(next);
      }
      if (progress < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setLoading(false), 200);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg [transform:translateZ(0)] [will-change:transform]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-bold gradient-text sm:text-8xl"
          >
            {count}%
          </motion.div>
          <div className="mt-6 h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full origin-left bg-gradient-to-r from-violet-500 to-cyan-400 will-change-transform"
              style={{ transform: `scaleX(${count / 100})` }}
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Đang tải
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
