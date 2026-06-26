"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function BlogList() {
  const { t } = useT();
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} /> {t.blog.back}
        </Link>
        <LanguageToggle />
      </div>

      <h1 className="text-4xl font-bold">
        <span className="gradient-text">{t.blog.title}</span>
      </h1>
      <p className="mt-3 text-gray-400">{t.blog.intro}</p>

      <div className="mt-12 space-y-6">
        {t.blog.posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-white/5 bg-surface p-6 transition-colors hover:border-violet-500/40"
          >
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-2 text-xl font-semibold transition-colors group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
              {t.blog.readMore} <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
