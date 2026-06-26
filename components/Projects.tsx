"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Tilt from "@/components/ui/Tilt";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { projectMeta } from "@/data/projects";
import { useT } from "@/lib/i18n";

export default function Projects() {
  const { t } = useT();
  const projects = t.projects.items.map((p, i) => ({ ...p, ...projectMeta[i] }));
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? projects[selected] : null;

  // Close on Escape + lock scroll while modal is open.
  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <Section id="projects" subtitle={t.projects.subtitle} title={t.projects.title} index="02">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Tilt className="h-full">
              <SpotlightCard
                className="glow-hover group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-surface transition-colors hover:border-violet-500/40"
              >
                <button
                  onClick={() => setSelected(i)}
                  className="absolute inset-0 z-20"
                  aria-label={`${p.title} — ${t.projects.details}`}
                />
                <div className="relative z-10 h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-bg/60 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative z-30 mt-5 flex gap-4">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-accent"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-accent"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface"
            >
              <div className="relative h-60 w-full overflow-hidden sm:h-72">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  aria-label={t.projects.close}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-bg/70 text-gray-300 backdrop-blur transition-colors hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold">{active.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-300">{active.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="glow flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                    >
                      <ExternalLink size={16} /> {t.projects.visitSite}
                    </a>
                  )}
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/5"
                    >
                      <Github size={16} /> {t.projects.sourceCode}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
