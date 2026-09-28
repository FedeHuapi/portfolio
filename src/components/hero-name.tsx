"use client";

import { useEffect, useRef } from "react";

const BASE_WEIGHT = 380;
const MAX_WEIGHT = 880;
const MIN_RADIUS = 170;

// On load a weight "wave" runs through the letters once.
const WAVE_DELAY = 350;
const WAVE_STEP = 65;
const WAVE_HOLD = 420;

function setWeight(letter: HTMLElement, weight: number) {
  letter.style.fontVariationSettings = `"wght" ${Math.round(weight)}, "SOFT" 100, "WONK" 0`;
}

export function HeroName({ id, name }: { id: string; name: string }) {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const letters = Array.from(root.querySelectorAll<HTMLElement>("[data-letter]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    // Heavier the closer the pointer is. Smoothstep makes the falloff feel soft instead of linear.
    const react = (x: number, y: number) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const radius = Math.max(MIN_RADIUS, window.innerWidth * 0.22);
        for (const letter of letters) {
          const rect = letter.getBoundingClientRect();
          const distance = Math.hypot(x - (rect.left + rect.width / 2), y - (rect.top + rect.height / 2));
          const t = Math.max(0, 1 - distance / radius);
          setWeight(letter, BASE_WEIGHT + (MAX_WEIGHT - BASE_WEIGHT) * t * t * (3 - 2 * t));
        }
      });
    };

    const rest = () => {
      cancelAnimationFrame(frame);
      for (const letter of letters) setWeight(letter, BASE_WEIGHT);
    };

    // Touch is handled separately so it only reacts while dragging over the name, not the whole page.
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "touch") react(event.clientX, event.clientY);
    };
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) react(touch.clientX, touch.clientY);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", rest);
    root.addEventListener("touchmove", onTouchMove, { passive: true });
    root.addEventListener("touchend", rest);

    const timers: number[] = [];
    if (!reducedMotion) {
      letters.forEach((letter, index) => {
        timers.push(
          window.setTimeout(() => {
            setWeight(letter, MAX_WEIGHT);
            timers.push(window.setTimeout(() => setWeight(letter, BASE_WEIGHT), WAVE_HOLD));
          }, WAVE_DELAY + index * WAVE_STEP)
        );
      });
    }

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", rest);
      root.removeEventListener("touchmove", onTouchMove);
      root.removeEventListener("touchend", rest);
    };
  }, [name]);

  return (
    <h1
      ref={rootRef}
      id={id}
      aria-label={name}
      className="mb-[clamp(24px,3.4vw,44px)] cursor-default font-display text-[clamp(52px,17vw,236px)] leading-[0.86] tracking-[-0.04em]"
    >
      {name.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          aria-hidden
          className={`block whitespace-nowrap ${wordIndex > 0 ? "pl-[clamp(20px,8vw,150px)] text-accent" : ""}`}
        >
          {Array.from(word).map((char, charIndex) => (
            <span key={charIndex} data-letter className="hero-letter">
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
