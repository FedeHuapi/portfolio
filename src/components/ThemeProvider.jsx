// src/ThemeProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; 
const ThemeProviderContext = createContext();

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }) {
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' es obligatorio y debe ser de tipo node (cualquier cosa que se pueda renderizar)
  defaultTheme: PropTypes.oneOf(["light", "dark", "system"]), // 'defaultTheme' puede ser uno de estos tres valores
  storageKey: PropTypes.string, // 'storageKey' es opcional y debe ser una string
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
