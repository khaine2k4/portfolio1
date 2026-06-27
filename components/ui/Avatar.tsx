"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

type AvatarProps = {
  size?: number;
  className?: string;
  /** When true, the image fills its container (set width/height via className). */
  fill?: boolean;
  /** CSS object-position, e.g. "center 30%" to favour the face. */
  position?: string;
  /** Preload (use for the above-the-fold hero avatar). */
  priority?: boolean;
  /** Responsive sizes hint so next/image serves a small file on phones. */
  sizes?: string;
};

export default function Avatar({
  size = 64,
  className = "",
  fill = false,
  position = "center",
  priority = false,
  sizes,
}: AvatarProps) {
  const [error, setError] = useState(false);
  const showImage = Boolean(site.avatar) && !error;

  const content = showImage ? (
    // next/image optimises + resizes the source (was a 1.2MB png shipped raw)
    // and serves webp at the requested size — big first-load win on mobile.
    <Image
      src={site.avatar}
      alt={site.name}
      {...(fill
        ? { fill: true, sizes: sizes ?? "(max-width: 768px) 50vw, 320px" }
        : { width: size, height: size })}
      priority={priority}
      style={{ objectPosition: position }}
      className="h-full w-full object-cover"
      onError={() => setError(true)}
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center text-4xl font-bold gradient-text">
      {site.name.charAt(0)}
    </div>
  );

  if (fill) {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-violet-600/40 to-cyan-500/40 ${className}`}>
        {content}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600/40 to-cyan-500/40 ${className}`}
      style={{ width: size, height: size }}
    >
      {content}
    </div>
  );
}
