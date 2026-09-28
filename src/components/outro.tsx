"use client";

import { Check, Copy, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { CONTACT } from "@/lib/contact";
import { btnOutlineOnMoss, ICON_STROKE, iconLink, section, wrap } from "@/lib/ui";

const COPIED_DURATION = 2200;

const mossIconLink = `${iconLink} border-on-moss/30 text-on-moss hover:bg-moss-accent hover:text-moss`;

export function Outro() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const address = CONTACT.email.replace("mailto:", "");
  const [user, domain] = address.split("@");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  // mailto: does nothing on machines without a default mail app, so the address can also be copied.
  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), COPIED_DURATION);
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className={section}>
      <div className={wrap}>
        <div className="reveal relative overflow-hidden rounded-[clamp(32px,5vw,60px)] bg-moss p-[clamp(28px,6vw,88px)] text-on-moss [&_:focus-visible]:outline-moss-accent">
          <div
            aria-hidden
            className="blob-morph-slow pointer-events-none absolute -bottom-[24%] -right-[9%] aspect-square w-[clamp(200px,30vw,420px)] rounded-[58%_42%_50%_50%/46%_54%_46%_54%] bg-moss-decor"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-[clamp(120px,24vw,340px)] max-sm:hidden top-[clamp(28px,5vw,64px)] aspect-square w-[clamp(40px,5vw,72px)] rounded-full bg-accent"
          />

          <div className="relative z-1">
            <h2
              id="contact-title"
              className="mb-4 max-w-[14ch] text-balance break-words text-[clamp(34px,6vw,76px)] leading-[1.02] hyphens-auto"
            >
              {t.outro.heading}
            </h2>
            <p className="max-w-[40ch] text-pretty text-[clamp(18px,1.8vw,22px)] text-on-moss/85">{t.outro.body}</p>

            {/* <wbr> lets the address break right after the "@" on narrow screens. */}
            <a
              href={CONTACT.email}
              aria-label={`${t.outro.cta}: ${address}`}
              className="email-link my-[clamp(28px,4.4vw,56px)] inline-block pb-1.5 font-heading text-[clamp(28px,5.4vw,84px)] leading-[1.06] tracking-[-0.015em] text-moss-accent [overflow-wrap:anywhere] focus-visible:rounded-xl focus-visible:outline-offset-[6px]"
            >
              {user}@<wbr />
              {domain}
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyAddress}
                className={`${btnOutlineOnMoss} min-h-13 px-6 text-base ${
                  copied ? "border-moss-accent! bg-moss-accent! text-moss!" : ""
                }`}
              >
                {copied ? (
                  <Check size={18} strokeWidth={ICON_STROKE} />
                ) : (
                  <Copy size={18} strokeWidth={ICON_STROKE} />
                )}
                {copied ? t.outro.copied : t.outro.copy}
              </button>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={mossIconLink}>
                <Github size={20} strokeWidth={ICON_STROKE} />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={mossIconLink}>
                <Linkedin size={20} strokeWidth={ICON_STROKE} />
              </a>
              <span aria-live="polite" className="sr-only">
                {copied ? t.outro.copied : ""}
              </span>
            </div>
          </div>
        </div>

        <footer className="flex flex-wrap justify-between gap-x-6 gap-y-1.5 pb-10 pt-7 text-sm text-muted">
          <p>© {year} Federico Curto</p>
          <p>{t.outro.made}</p>
        </footer>
      </div>
    </section>
  );
}
