"use client";

import { ArrowDown, Mail } from "lucide-react";
import type { MouseEvent } from "react";
import { HeroName } from "@/components/hero-name";
import { useLanguage } from "@/components/language-provider";
import { CONTACT } from "@/lib/contact";

export function Hero() {
  const { t } = useLanguage();

  // Scroll without writing "#projects" into the address bar.
  function goToProjects(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("projects");
    if (!target) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <section className="hero-in mx-auto flex min-h-screen max-w-5xl flex-col justify-end px-6 pb-12 pt-28 sm:pb-16">
      <p className="mb-4 text-sm text-muted sm:text-base">{t.hero.greeting}</p>

      <HeroName name={t.hero.name} />

      <div className="mt-8 flex flex-col items-start gap-6">
        <div className="max-w-2xl">
          <p className="text-base text-muted sm:text-lg">{t.hero.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.email}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-transform hover:translate-y-0.5"
          >
            <Mail size={16} />
            {t.outro.cta}
          </a>
          <a
            href="#projects"
            onClick={goToProjects}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.cta}
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
