"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export default function Experience() {
  const { t } = useT();
  return (
    <Section id="experience" subtitle={t.experience.subtitle} title={t.experience.title} index="04">
      <div className="relative border-l border-white/10 pl-8">
        {t.experience.items.map((exp, i) => (
          <Reveal key={exp.role + exp.company} delay={i * 0.1}>
            <div className="relative mb-10 last:mb-0">
              {/* Dot */}
              <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 ring-4 ring-bg" />
              <p className="text-sm text-accent">{exp.period}</p>
              <h3 className="mt-1 text-lg font-semibold">
                {exp.role} <span className="text-gray-400">@ {exp.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {exp.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
