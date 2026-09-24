"use client";

import { ArrowUpRight, Check, Copy, Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { CONTACT } from "@/lib/contact";

const iconLink =
  "flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent";

export function Outro() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const address = CONTACT.email.replace("mailto:", "");
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
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="border-t px-6 pb-10 pt-20 sm:pt-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.outro.heading}
        </h2>
        <p className="mt-3 max-w-md text-base text-muted sm:text-lg">{t.outro.body}</p>

        <a
          href={CONTACT.email}
          aria-label={`${t.outro.cta}: ${address}`}
          className="group mt-10 flex items-start gap-2 font-display text-[clamp(1.15rem,3.8vw,2.5rem)] font-semibold leading-tight tracking-tight transition-colors hover:text-accent"
        >
          <span className="break-all underline decoration-2 underline-offset-8 decoration-accent">
            {address}
          </span>
          <ArrowUpRight
            className="mt-0.5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            size={24}
          />
        </a>

        <button
          type="button"
          onClick={copyAddress}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span role="status">{copied ? t.outro.copied : t.outro.copy}</span>
        </button>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted">© {year} Federico Curto</p>
          <div className="flex gap-3">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
              <Github size={16} />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
