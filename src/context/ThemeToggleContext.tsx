import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

function readStoredTheme(): ThemeMode {
  const stored = localStorage.getItem("themeMode");
  return stored === "dark" || stored === "light" ? stored : "dark";
}

interface ThemeToggleContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

const ThemeToggleContext = createContext<ThemeToggleContextValue>({
  mode: "dark",
  toggle: () => {},
});

export function ThemeToggleProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = readStoredTheme();
    document.documentElement.setAttribute("data-theme", saved);
    return saved;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggle = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeToggleContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeToggleContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeToggleContext);
