"use client";

import { useEffect, useState } from "react";

// Each section shifts the ambient glow to a different hue as you scroll.
const tints: Record<string, string> = {
  home: "139,92,246", // violet
  about: "124,58,237", // deep violet
  projects: "34,211,238", // cyan
  skills: "217,70,239", // fuchsia
  experience: "59,130,246", // blue
  music: "34,197,94", // green
  contact: "139,92,246", // violet
};

export default function AmbientBackground() {
  const [rgb, setRgb] = useState("139,92,246");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const tint = tints[e.target.id];
          if (e.isIntersecting && tint) setRgb(tint);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.keys(tints).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 transition-all duration-1000 ease-out"
      style={{
        background: `radial-gradient(70% 55% at 50% 0%, rgba(${rgb}, 0.14), transparent 70%), radial-gradient(50% 50% at 100% 100%, rgba(${rgb}, 0.08), transparent 70%)`,
      }}
    />
  );
}
