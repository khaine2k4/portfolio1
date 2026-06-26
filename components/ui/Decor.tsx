"use client";

import Parallax from "@/components/ui/Parallax";

// Floating blurred orbs that drift at different speeds while scrolling,
// creating a strong sense of depth (parallax).
export default function Decor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-[5] overflow-hidden">
      <Parallax offset={180} className="absolute -left-24 top-[12%]">
        <div className="h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      </Parallax>
      <Parallax offset={-220} className="absolute -right-20 top-[38%]">
        <div className="h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </Parallax>
      <Parallax offset={160} className="absolute left-1/4 top-[62%]">
        <div className="h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </Parallax>
      <Parallax offset={-160} className="absolute right-1/4 top-[85%]">
        <div className="h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </Parallax>
    </div>
  );
}
