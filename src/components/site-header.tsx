import { Github, Linkedin, Mail } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { CONTACT } from "@/lib/contact";

const roundButton =
  "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-md transition-colors hover:border-accent hover:text-accent";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-end gap-3 px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex gap-2">
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={roundButton}>
          <Github size={16} />
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={roundButton}>
          <Linkedin size={16} />
        </a>
        <a href={CONTACT.email} aria-label="Email" className={roundButton}>
          <Mail size={16} />
        </a>
      </div>
      <div className="flex gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
