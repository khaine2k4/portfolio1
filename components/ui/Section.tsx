import { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  index?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  index,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-24 ${className}`}>
      {title && (
        <Reveal className="mb-14">
          {subtitle && (
            <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
              {subtitle}
            </p>
          )}
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
            {index && (
              <Parallax offset={30} className="inline-block">
                <span className="text-2xl font-bold text-white/10 sm:text-3xl">
                  {index}
                </span>
              </Parallax>
            )}
          </div>
        </Reveal>
      )}
      {children}
    </section>
  );
}
