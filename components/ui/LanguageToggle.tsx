"use client";

import { useT } from "@/lib/i18n";
import { motion } from "framer-motion";
import type { Locale } from "@/data/translations";

const options: Locale[] = ["en", "vi"];

export default function LanguageToggle() {
  const { lang, setLang } = useT();

  return (
    <div className="relative flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-semibold">
      {options.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            onClick={() => setLang(opt)}
            className={`relative z-10 rounded-full px-2.5 py-1 uppercase transition-colors ${
              active ? "text-white" : "text-gray-400 hover:text-white"
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {opt}
          </button>
        );
      })}
    </div>
  );
}
