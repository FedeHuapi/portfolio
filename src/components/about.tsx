"use client";

import { Database, Monitor, Rocket } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

// One icon per item in about.items, in the same order: frontend, backend and data, deployment.
const itemIcons = [Monitor, Database, Rocket];

export function About() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal className="rounded-[2rem] border border-border/60 bg-background/55 p-7 shadow-sm backdrop-blur-xl sm:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.about.heading}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-relaxed">
            {t.about.body}
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold tracking-tight">{t.about.howHeading}</h3>
          <ul className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-10">
            {t.about.items.map((item, index) => {
              const Icon = itemIcons[index];
              return (
                <li key={item.title}>
                  <Reveal delay={index * 100}>
                    {Icon && (
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Icon size={20} />
                      </span>
                    )}
                    <p className="font-display text-lg font-semibold tracking-tight">{item.title}</p>
                    <p className="mt-2 text-sm text-muted sm:text-base">{item.text}</p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
