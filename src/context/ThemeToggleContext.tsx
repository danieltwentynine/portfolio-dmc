import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light";

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
    const saved = (localStorage.getItem("themeMode") as ThemeMode) ?? "dark";
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
