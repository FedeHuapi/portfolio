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

      <div className="mt-14">
        <h3 className="font-display text-xl font-semibold tracking-tight">{t.about.howHeading}</h3>
        <ul className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {t.about.items.map((item) => (
            <li key={item.title}>
              <p className="font-display text-lg font-semibold tracking-tight">{item.title}</p>
              <p className="mt-2 text-sm text-muted sm:text-base">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
