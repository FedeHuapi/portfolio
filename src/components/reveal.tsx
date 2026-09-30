"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds to wait before starting, to stagger neighbouring blocks. */
  delay?: number;
};

/**
 * Fades and lifts its content into place the first time it scrolls into view.
 *
 * The state lives in a data attribute instead of React state, so nothing
 * re-renders. The content is visible in the server HTML and is only hidden once
 * the browser confirms it can animate it: without JS, or with reduced motion,
 * nothing is ever hidden.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen (or scrolled past) when the page loads: leave it as is.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        observer.disconnect();
      },
      // No negative margin on purpose: blocks near the end of the page could
      // never get far enough above the bottom edge to count as visible.
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
