"use client";

import { Globe } from "lucide-react";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { localeNames, locales, type Locale } from "@/i18n/dictionaries";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
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
        aria-label={`Change language: ${localeNames[locale]}`}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-md transition-colors hover:bg-surface"
      >
        <Globe size={16} />
      </button>

      <div
        id={menuId}
        role="menu"
        onKeyDown={handleMenuKeyDown}
        // Visibility flips instantly on open (so the options can take focus right away)
        // but is transitioned on close, which keeps the menu visible while it fades out.
        className={`absolute right-0 top-11 z-50 grid w-40 origin-top-right gap-0.5 overflow-hidden rounded-xl border border-border bg-background p-1 shadow-lg duration-150 ${
          open
            ? "visible opacity-100 transition-[opacity,transform]"
            : "invisible -translate-y-1 scale-95 opacity-0 transition-[opacity,transform,visibility]"
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
            className="flex min-h-9 items-center justify-between gap-3 rounded-lg px-3 py-1.5 text-left text-sm text-muted transition-colors hover:bg-surface aria-checked:font-semibold aria-checked:text-foreground"
          >
            {localeNames[l]}
          </button>
        ))}
      </div>
    </div>
  );
}
