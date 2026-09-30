"use client";

import { useEffect, useRef } from "react";

type LoopVideoProps = {
  webm: string;
  mp4: string;
  /** Still frame shown while the video loads, and kept when motion is reduced. */
  poster: string;
  label: string;
  className?: string;
};

/**
 * A muted, looping clip that behaves like a GIF but weighs a fraction of it.
 * If the visitor asked for reduced motion it stays paused on its first frame.
 */
export function LoopVideo({ webm, mp4, poster, label, className }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
      className={className}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
