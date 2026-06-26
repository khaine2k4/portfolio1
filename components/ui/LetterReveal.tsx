"use client";

import { motion, Variants } from "framer-motion";

type LetterRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

const container = (delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

// Clean rise + fade per letter. NO filter blur — `filter: blur` on
// gradient-clipped text sticks permanently in Chrome.
const letter: Variants = {
  hidden: { opacity: 0, y: "0.9em" },
  show: {
    opacity: 1,
    y: "0em",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LetterReveal({ text, className = "", delay = 0 }: LetterRevealProps) {
  // Split into words so a word never breaks mid-letter while revealing —
  // each word wraps as a whole unit.
  const words = text.split(" ");

  return (
    <motion.span
      aria-label={text}
      variants={container(delay)}
      initial="hidden"
      animate="show"
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, wi) => (
        <motion.span key={wi} className="inline-flex whitespace-nowrap">
          {Array.from(word).map((char, ci) => (
            <motion.span
              key={ci}
              variants={letter}
              aria-hidden
              whileHover={{ y: -8, scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 15 } }}
              className="inline-block cursor-default"
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </motion.span>
      ))}
    </motion.span>
  );
}
