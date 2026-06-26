"use client";

import { motion, type Variants } from "framer-motion";
import Section from "@/components/ui/Section";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Avatar from "@/components/ui/Avatar";
import Clock from "@/components/ui/Clock";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n";
import { MapPin, Clock as ClockIcon, Sparkles, Target, BadgeCheck, Mail } from "lucide-react";

const card: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardClass =
  "flex h-full flex-col gap-3 rounded-2xl border border-white/5 bg-surface p-5 transition-colors hover:border-violet-500/40";

export default function About() {
  const { t } = useT();
  const b = t.about.bento;

  return (
    <Section id="about" subtitle={t.about.subtitle} title={t.about.title} index="01">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-4"
      >
        {/* Bio — wide, image left + text right */}
        <motion.div custom={0} variants={card}>
          <SpotlightCard className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-surface p-6 transition-colors hover:border-violet-500/40 md:flex-row md:items-center">
            <Avatar
              fill
              position="center 25%"
              className="glow relative z-10 h-60 w-full shrink-0 rounded-xl md:h-64 md:w-72"
            />
            <div className="relative z-10 flex flex-col">
              <p className="text-base leading-relaxed text-gray-300">{t.about.body}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-accent"
              >
                <Mail size={15} className="text-accent" /> {site.email}
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Quick facts — 4 equal cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <motion.div custom={1} variants={card}>
            <SpotlightCard className={cardClass}>
              <MapPin size={20} className="relative z-10 text-accent" />
              <div className="relative z-10 mt-auto">
                <p className="text-xs uppercase tracking-wider text-gray-500">{b.locationLabel}</p>
                <p className="mt-1 font-semibold">{t.about.location}</p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div custom={2} variants={card}>
            <SpotlightCard className={cardClass}>
              <ClockIcon size={20} className="relative z-10 text-accent" />
              <div className="relative z-10 mt-auto">
                <p className="text-xs uppercase tracking-wider text-gray-500">{b.timeLabel}</p>
                <p className="mt-1 text-lg font-semibold gradient-text">
                  <Clock />
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div custom={3} variants={card}>
            <SpotlightCard className={cardClass}>
              <Sparkles size={20} className="relative z-10 text-accent" />
              <div className="relative z-10 mt-auto">
                <p className="text-xs uppercase tracking-wider text-gray-500">{b.learningLabel}</p>
                <p className="mt-1 font-semibold">{b.learningValue}</p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div custom={4} variants={card}>
            <SpotlightCard className={cardClass}>
              <Target size={20} className="relative z-10 text-accent" />
              <div className="relative z-10 mt-auto">
                <p className="text-xs uppercase tracking-wider text-gray-500">{b.focusLabel}</p>
                <p className="mt-1 font-semibold">{b.focusValue}</p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Main stack + status — wide */}
        <motion.div custom={5} variants={card}>
          <SpotlightCard className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-surface p-5 transition-colors hover:border-violet-500/40 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative z-10">
              <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500">
                <BadgeCheck size={14} className="text-accent" /> {b.mainStackLabel}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {b.mainStack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <span className="relative z-10 flex shrink-0 items-center gap-2 self-start rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs text-green-300 sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              {b.statusValue}
            </span>
          </SpotlightCard>
        </motion.div>
      </motion.div>
    </Section>
  );
}
