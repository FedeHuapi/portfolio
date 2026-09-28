"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { localeNames, locales, type Locale } from "@/i18n/dictionaries";
import { ICON_STROKE } from "@/lib/ui";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    // Moving focus into the menu lets the arrow keys start from the current language.
    optionRefs.current[locales.indexOf(locale)]?.focus();

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, locale]);

  function closeAndFocusButton() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  function choose(next: Locale) {
    setLocale(next);
    closeAndFocusButton();
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const options = optionRefs.current;
    const index = options.indexOf(document.activeElement as HTMLButtonElement);

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      options[(index + step + options.length) % options.length]?.focus();
    } else if (event.key === "Escape") {
      closeAndFocusButton();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.ui.language}: ${localeNames[locale]}`}
        className="inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full px-3.5 text-sm font-bold leading-none tracking-[0.04em] text-foreground transition-colors hover:bg-foreground/8 active:bg-foreground/14"
      >
        <Globe size={18} strokeWidth={ICON_STROKE} />
        <span>{locale.toUpperCase()}</span>
        <ChevronDown
          size={14}
          strokeWidth={ICON_STROKE}
          className={`transition-transform duration-250 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        onKeyDown={handleMenuKeyDown}
        // Visibility flips instantly on open (so the options can take focus right away)
        // but is transitioned on close, which keeps the menu visible while it fades out.
        className={`absolute -right-12 top-[calc(100%+10px)] grid min-w-57 origin-top-right gap-0.5 rounded-[26px] bg-surface p-2 shadow-soft-lg duration-180 ${
          open
            ? "visible opacity-100 transition-[opacity,scale,translate]"
            : "invisible -translate-y-1 scale-96 opacity-0 transition-[opacity,scale,translate,visibility]"
        }`}
      >
        {locales.map((l, index) => (
          <button
            key={l}
            ref={(el) => {
              optionRefs.current[index] = el;
            }}
            type="button"
            role="menuitemradio"
            aria-checked={l === locale}
            lang={l}
            tabIndex={-1}
            onClick={() => choose(l)}
            className="flex min-h-11 items-center justify-between gap-4 rounded-full px-4 text-left text-[15px] text-foreground hover:bg-foreground/7 focus-visible:-outline-offset-2 aria-checked:bg-accent-soft aria-checked:text-accent-ink"
          >
            <span>{localeNames[l]}</span>
            <span className="text-xs font-bold tracking-[0.08em] opacity-75">{l.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
