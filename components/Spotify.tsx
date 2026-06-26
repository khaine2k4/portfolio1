"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n";
import { Music } from "lucide-react";

export default function Spotify() {
  const { t } = useT();
  return (
    <Section id="music" subtitle={t.music.subtitle} title={t.music.title} index="05">
      <Reveal>
        <div className="gradient-border rounded-2xl border border-white/5 p-6">
          <p className="mb-4 flex items-center gap-2 text-gray-400">
            <Music size={18} className="text-accent" />
            {t.music.note}
          </p>
          <iframe
            title="Spotify Player"
            src={site.spotify}
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </Reveal>
    </Section>
  );
}
