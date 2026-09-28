"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { HeroName } from "@/components/hero-name";
import { useLanguage } from "@/components/language-provider";
import { CONTACT } from "@/lib/contact";
import { btnLg, btnPrimary, ICON_STROKE, iconLink, wrap } from "@/lib/ui";

const heroIconLink = `${iconLink} text-foreground hover:bg-accent-soft hover:text-accent-ink`;

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-name"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-[clamp(40px,8vh,88px)] pt-[clamp(104px,14vh,160px)]"
    >
      <div
        aria-hidden
        className="blob-morph pointer-events-none absolute -right-[9%] -top-[7%] aspect-square w-[clamp(240px,42vw,620px)] rounded-[62%_38%_54%_46%/48%_58%_42%_52%] bg-decor-1 transition-colors duration-400 max-sm:-right-[26%] max-sm:-top-[5%] max-sm:w-[74vw]"
      />
      <div
        aria-hidden
        className="blob-bob pointer-events-none absolute right-[calc(clamp(240px,42vw,620px)*0.78)] top-[clamp(72px,9%,110px)] aspect-square w-[clamp(64px,10vw,150px)] rounded-full bg-decor-2 transition-colors duration-400 max-sm:right-[52vw] max-sm:top-[25%] max-sm:w-[18vw]"
      />

      <div className={`${wrap} relative z-1`}>
        <p className="mb-[clamp(12px,2vw,24px)] inline-flex items-center gap-2.5 rounded-full bg-surface py-2 pl-3 pr-4 text-[clamp(15px,1.4vw,18px)] font-semibold leading-tight">
          <span aria-hidden className="size-2.5 rounded-full bg-accent-2" />
          {t.hero.greeting}
        </p>

        <HeroName id="hero-name" name={t.hero.name} />

        <div className="flex flex-wrap items-end justify-between gap-x-14 gap-y-7">
          <p className="max-w-[26ch] text-[clamp(20px,2.2vw,28px)] leading-[1.35] text-balance">{t.hero.tagline}</p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className={`${btnPrimary} ${btnLg}`}>
              {t.hero.cta}
              <ArrowDown
                size={18}
                strokeWidth={ICON_STROKE}
                className="transition-transform duration-300 ease-organic group-hover/btn:translate-y-[3px]"
              />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={heroIconLink}>
              <Github size={20} strokeWidth={ICON_STROKE} />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={heroIconLink}>
              <Linkedin size={20} strokeWidth={ICON_STROKE} />
            </a>
            <a href={CONTACT.email} aria-label="Email" className={heroIconLink}>
              <Mail size={20} strokeWidth={ICON_STROKE} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
