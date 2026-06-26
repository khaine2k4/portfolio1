"use client";

import { useRef } from "react";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n";
import Magnetic from "@/components/ui/Magnetic";
import Typewriter from "@/components/ui/Typewriter";
import LetterReveal from "@/components/ui/LetterReveal";
import Avatar from "@/components/ui/Avatar";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Title has no blur filter: it wraps 3D-transformed letters (LetterReveal),
// and animating `filter: blur` on a parent of will-change/3D children makes
// the blur "stick" in some browsers. Keep it a simple fade/slide.
const titleItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  // Cursor-driven 3D tilt for the name.
  const tiltX = useSpring(0, { stiffness: 150, damping: 18 });
  const tiltY = useSpring(0, { stiffness: 150, damping: 18 });

  // Fade + lift + shrink the hero content as you scroll away.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    // Normalised -0.5..0.5 → degrees of tilt.
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * 16);
    tiltX.set(-py * 12);
  }

  function handleLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Aurora that follows cursor + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
          <div className="h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[120px]" />
        </motion.div>
        <div className="absolute right-1/4 top-1/3 h-80 w-80 animate-blob rounded-full bg-cyan-500/20 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-1/4 left-1/3 h-80 w-80 animate-blob rounded-full bg-fuchsia-600/20 blur-3xl [animation-delay:8s]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Avatar with rotating gradient ring */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32">
            <div className="ring-glow absolute -inset-[3px] rounded-full" />
            <div className="absolute inset-[3px] overflow-hidden rounded-full border border-white/10 bg-bg">
              <Avatar fill position="center 25%" className="h-full w-full rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent"
        >
          {t.hero.greeting}
        </motion.p>

        <motion.div variants={titleItem} style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}>
          <h1 className="text-glow text-6xl font-bold leading-[1.02] tracking-tight sm:text-8xl">
            <LetterReveal text={t.name} className="shimmer-name" delay={0.45} />
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xl font-medium text-gray-200 sm:text-3xl"
        >
          <span className="text-gray-500">{"<"}</span>
          <Typewriter words={t.hero.roles} className="gradient-text font-semibold" />
          <span className="text-gray-500">{"/>"}</span>
        </motion.p>

        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-gray-400">
          {t.hero.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Magnetic>
            <a
              href="#projects"
              className="glow inline-block rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              {t.hero.cta1}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-gray-200 transition-colors duration-300 hover:bg-white/5"
            >
              {t.hero.cta2}
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <Magnetic strength={0.6}>
            <a href={site.socials.github} target="_blank" rel="noreferrer" className="block text-gray-400 transition-colors hover:text-white" aria-label="GitHub">
              <Github size={20} />
            </a>
          </Magnetic>
          <Magnetic strength={0.6}>
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="block text-gray-400 transition-colors hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </Magnetic>
          <Magnetic strength={0.6}>
            <a href={`mailto:${site.email}`} className="block text-gray-400 transition-colors hover:text-white" aria-label="Email">
              <Mail size={20} />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-white"
        aria-label="Cuộn xuống"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}
