"use client";

import { useEffect, useState } from "react";

interface TypingProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}

export function Typing({
  words,
  className,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1400,
}: TypingProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {words[index % words.length].substring(0, subIndex)}
      <span className="ml-0.5 inline-block w-[2px] translate-y-0.5 bg-accent animate-blink">
        &nbsp;
      </span>
    </span>
  );
}
