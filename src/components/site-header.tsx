import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed right-[clamp(12px,2vw,24px)] top-[clamp(12px,2vw,24px)] z-50 flex items-center gap-0.5 rounded-full bg-surface p-1 shadow-soft-sm transition-colors duration-400">
      <LanguageSwitcher />
      <ThemeToggle />
    </header>
  );
}
