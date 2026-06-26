"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useT } from "@/lib/i18n";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function BlogPost({ slug }: { slug: string }) {
  const { t } = useT();
  const post = t.blog.posts.find((p) => p.slug === slug);

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} /> {t.blog.allPosts}
        </Link>
        <LanguageToggle />
      </div>

      {!post ? (
        <p className="text-gray-400">404 — {t.blog.allPosts}</p>
      ) : (
        <>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {post.title}
          </h1>

          <article className="mt-8 space-y-5 text-lg leading-relaxed text-gray-300">
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
        </>
      )}
    </main>
  );
}
