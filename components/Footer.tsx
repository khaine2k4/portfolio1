"use client";

import { site } from "@/data/site";
import { useT } from "@/lib/i18n";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {t.name}. {t.footer.madeWith}
        </p>
        <div className="flex gap-5">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="text-gray-500 transition-colors hover:text-white" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 transition-colors hover:text-white" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${site.email}`} className="text-gray-500 transition-colors hover:text-white" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
