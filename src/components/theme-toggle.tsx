"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []); // <---- es un error intencional de la propia librería next-themes, no es un error de mi código. Se debe a que el tema se resuelve en el cliente y no en el servidor, por lo que necesitamos esperar a que el componente se monte para poder acceder al tema resuelto.

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-md transition-colors hover:bg-surface"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
