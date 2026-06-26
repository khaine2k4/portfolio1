"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const { t } = useT();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gửi qua mailto (không cần backend). Có thể đổi sang Formspree/Resend sau.
    const subject = encodeURIComponent(t.contact.mailSubject(form.name));
    const body = encodeURIComponent(
      t.contact.mailBody(form.message, form.name, form.email)
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" subtitle={t.contact.subtitle} title={t.contact.title} index="06">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-gray-300">{t.contact.body}</p>
          <div className="mt-6 space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-gray-300 transition-colors hover:text-accent"
            >
              <Mail size={20} /> {site.email}
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 transition-colors hover:text-accent"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 transition-colors hover:text-accent"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              placeholder={t.contact.namePh}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-violet-500"
            />
            <input
              required
              type="email"
              placeholder={t.contact.emailPh}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-violet-500"
            />
            <textarea
              required
              rows={5}
              placeholder={t.contact.msgPh}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-white/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-violet-500"
            />
            <button
              type="submit"
              className="glow flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <Send size={16} /> {t.contact.send}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
