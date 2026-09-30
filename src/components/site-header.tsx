import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-end gap-2 px-4 py-3 sm:px-6 sm:py-4">
      <LanguageSwitcher />
      <ThemeToggle />
    </header>
  );
}
