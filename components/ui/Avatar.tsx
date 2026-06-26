"use client";

import { useState } from "react";
import { site } from "@/data/site";

type AvatarProps = {
  size?: number;
  className?: string;
  /** When true, the image fills its container (set width/height via className). */
  fill?: boolean;
  /** CSS object-position, e.g. "center 30%" to favour the face. */
  position?: string;
};

export default function Avatar({ size = 64, className = "", fill = false, position = "center" }: AvatarProps) {
  const [error, setError] = useState(false);
  const showImage = Boolean(site.avatar) && !error;

  const content = showImage ? (
    // Plain <img> for a robust onError fallback to the initial.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={site.avatar}
      alt={site.name}
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
