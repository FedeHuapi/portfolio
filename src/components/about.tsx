"use client";

import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.about.heading}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed">
          {t.about.body}
        </p>
      </div>
    </section>
  );
}
