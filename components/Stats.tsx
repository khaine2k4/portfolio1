"use client";

import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export default function Stats() {
  const { t } = useT();
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4">
          {t.stats.map((s) => (
            <div
              key={s.label}
              className="bg-bg/60 px-6 py-8 text-center backdrop-blur"
            >
              <div className="text-4xl font-bold gradient-text sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
