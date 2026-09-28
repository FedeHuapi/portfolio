"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { ICON_STROKE } from "@/lib/ui";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  // Both icons are rendered and CSS shows the right one (.dark on <html>),
  // so the server and client markup match and there's no need to wait for mount.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t.ui.theme}
      className="group inline-flex size-11 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-foreground/8 active:bg-foreground/14"
    >
      <Moon
        size={18}
        strokeWidth={ICON_STROKE}
        className="transition-transform duration-500 ease-organic group-hover:-rotate-20 dark:hidden"
      />
      <Sun
        size={18}
        strokeWidth={ICON_STROKE}
        className="hidden transition-transform duration-500 ease-organic group-hover:-rotate-20 dark:block"
      />
    </button>
  );
}
