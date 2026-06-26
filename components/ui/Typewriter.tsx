"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: readonly string[];
  className?: string;
};

export default function Typewriter({ words, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1600; // pause at full word
    } else if (deleting && text === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}
