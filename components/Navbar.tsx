"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useT } from "@/lib/i18n";
import { site } from "@/data/site";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { href: "#about", label: t.nav.about, id: "about" },
    { href: "#projects", label: t.nav.projects, id: "projects" },
    { href: "#skills", label: t.nav.skills, id: "skills" },
    { href: "#experience", label: t.nav.experience, id: "experience" },
    { href: "#music", label: t.nav.music, id: "music" },
    { href: "#contact", label: t.nav.contact, id: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-bg/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#home" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">{site.nickname}</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    active === l.id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/5" />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="rounded-full px-3 py-1.5 text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t.nav.blog}
              </Link>
            </li>
          </ul>
          <LanguageToggle />
        </div>

        {/* Mobile toggles */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/5 bg-bg/95 px-6 py-6 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="block text-gray-300 transition-colors hover:text-white"
            >
              {t.nav.blog}
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
