"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { CONTACT } from "@/lib/contact";

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
    <section className="pb-10 pt-12 sm:pt-16">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.outro.heading}
          </h2>
          <p className="mt-3 max-w-md text-base text-muted sm:text-lg">{t.outro.body}</p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={CONTACT.email}
            aria-label={`${t.outro.cta}: ${address}`}
            className="group -my-2 mt-6 flex items-start gap-2 py-2 font-display text-[clamp(1.15rem,3.8vw,2.5rem)] font-semibold leading-tight tracking-tight transition-colors hover:text-accent"
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
        </Reveal>

        <Reveal delay={240} className="mt-10">
          <p className="text-sm text-muted">© {year} Federico Curto</p>
        </Reveal>
      </div>
    </section>
  );
}
