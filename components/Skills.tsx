"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { useT } from "@/lib/i18n";

export default function Skills() {
  const { t } = useT();
  return (
    <Section id="skills" subtitle={t.skills.subtitle} title={t.skills.title} index="03">
      <div className="grid gap-6 md:grid-cols-3">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.1}>
            <SpotlightCard className="h-full rounded-2xl border border-white/5 bg-surface p-6 transition-colors hover:border-violet-500/40">
              <h3 className="relative z-10 mb-4 text-lg font-semibold text-accent">
                {group.category}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
