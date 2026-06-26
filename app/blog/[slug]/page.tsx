import { translations } from "@/data/translations";
import BlogPost from "@/components/blog/BlogPost";

export function generateStaticParams() {
  // Slugs are language-independent (same in every locale).
  return translations.en.blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = translations.en.blog.posts.find((p) => p.slug === slug);
  return {
    title: post?.title ?? "Post",
    description: post?.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
