"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[60]"
        >
          <Magnetic strength={0.5}>
            <button
              onClick={toTop}
              aria-label="Back to top"
              className="glow flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white ring-1 ring-inset ring-white/15 transition-transform duration-300 hover:scale-110"
            >
              <ArrowUp size={18} />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}