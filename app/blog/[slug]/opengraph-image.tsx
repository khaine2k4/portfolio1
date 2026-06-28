import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { translations } from "@/data/translations";

export const runtime = "edge";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+?)\) format\(/);
  if (!resource) throw new Error("Failed to load font");
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Slugs are language-independent; use the English copy for the OG image.
  const post = translations.en.blog.posts.find((p) => p.slug === slug);

  const title = post?.title ?? "Blog";
  const meta = post ? `${post.date}  •  ${post.readTime}` : site.name;

  const text = `${title}${meta}Blog khaidz.com ${site.name}•`;
  const [bold, regular] = await Promise.all([
    loadGoogleFont("Inter", 700, text),
    loadGoogleFont("Inter", 400, text),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0f",
          padding: "80px",
          position: "relative",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -150,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 8,
            color: "#a78bfa",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Blog
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 1000,
            backgroundImage: "linear-gradient(90deg,#a78bfa,#22d3ee,#f0abfc)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            fontWeight: 400,
            color: "#9ca3af",
          }}
        >
          {meta}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            alignItems: "center",
            fontSize: 24,
            fontWeight: 700,
            color: "#d1d5db",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 9999,
              marginRight: 16,
              background: "linear-gradient(90deg,#8b5cf6,#22d3ee)",
            }}
          />
          {site.name}  ·  khaidz.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: bold, weight: 700, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
      ],
    }
  );
}