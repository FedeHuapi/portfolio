"use client";

import { useLanguage } from "@/components/language-provider";
import { section, sectionTitle, wrap } from "@/lib/ui";

// The capture group makes split() keep the matches: they land on the odd indexes.
const HIGHLIGHT = /(React|Next\.js|TypeScript)/;

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className={section}>
      <div
        className={`${wrap} reveal grid gap-x-16 gap-y-5 min-[900px]:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] min-[900px]:items-start`}
      >
        <h2 id="about-title" className={sectionTitle}>
          {t.about.heading}
        </h2>
        <p className="max-w-[34ch] text-pretty text-[clamp(21px,2.3vw,31px)] leading-[1.45]">
          {t.about.body.split(HIGHLIGHT).map((part, index) =>
            index % 2 === 1 ? (
              <mark
                key={index}
                className="rounded-full bg-accent-2-soft px-[0.32em] font-semibold text-accent-2-ink [box-decoration-break:clone]"
              >
                {part}
              </mark>
            ) : (
              part
            )
          )}
        </p>
      </div>
    </section>
  );
}
