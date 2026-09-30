"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { HeroName } from "@/components/hero-name";
import { useLanguage } from "@/components/language-provider";
import { CONTACT } from "@/lib/contact";

const iconLink =
  "flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-in mx-auto flex min-h-screen max-w-5xl flex-col justify-end px-6 pb-12 pt-28 sm:pb-16">
      <p className="mb-4 text-sm text-muted sm:text-base">{t.hero.greeting}</p>

      <HeroName name={t.hero.name} />

      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex flex-col items-start gap-6">
          <p className="max-w-md text-base text-foreground sm:text-lg">{t.hero.tagline}</p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-transform hover:translate-y-0.5"
          >
            {t.hero.cta}
            <ArrowDown size={16} />
          </a>
        </div>

        <div className="flex gap-3">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <Github size={16} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <Linkedin size={16} />
          </a>
          <a href={CONTACT.email} aria-label="Email" className={iconLink}>
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
