"use client";

import { useEffect, useRef } from "react";

const BASE_WEIGHT = 450;
const MAX_WEIGHT = 800;
const RADIUS = 200;


export function HeroName({ name }: { name: string }) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const letters = Array.from(root.querySelectorAll<HTMLElement>("[data-letter]"));

    const paint = (x: number | null, y: number | null) => {
      for (const el of letters) {
        let weight = BASE_WEIGHT;
        if (x !== null && y !== null) {
          const rect = el.getBoundingClientRect();
          const distance = Math.hypot(x - (rect.left + rect.width / 2), y - (rect.top + rect.height / 2));
          const closeness = Math.max(0, 1 - distance / RADIUS);
          weight = BASE_WEIGHT + (MAX_WEIGHT - BASE_WEIGHT) * closeness * closeness;
        }
        el.style.fontVariationSettings = `"wght" ${Math.round(weight)}`;
      }
    };

    const onMove = (event: PointerEvent) => paint(event.clientX, event.clientY);
    const onLeave = () => paint(null, null);

    paint(null, null);
    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [name]);

  return (
    <h1
      ref={rootRef}
      aria-label={name}
      className="font-display text-[clamp(2.75rem,10.5vw,7.5rem)] leading-[0.88] tracking-tight"
    >
      {name.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} aria-hidden className="block">
          {Array.from(word).map((char, charIndex) => (
            <span
              key={charIndex}
              data-letter
              className="inline-block transition-[font-variation-settings] duration-200 ease-out"
              style={{ fontVariationSettings: `"wght" ${BASE_WEIGHT}` }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
