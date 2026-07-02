import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

const MODES: ThemeMode[] = ["dark", "light", "system"];

function readStoredMode(): ThemeMode {
  const stored = localStorage.getItem("themeMode");
  return stored === "dark" || stored === "light" || stored === "system"
    ? stored
    : "dark";
}

function systemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function resolve(mode: ThemeMode): ResolvedTheme {
  return mode === "system" ? systemTheme() : mode;
}

interface ThemeToggleContextValue {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  toggle: () => void;
}

const ThemeToggleContext = createContext<ThemeToggleContextValue>({
  mode: "dark",
  resolved: "dark",
  toggle: () => {},
});

export function ThemeToggleProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = readStoredMode();
    document.documentElement.setAttribute("data-theme", resolve(saved));
    return saved;
  });
  const [resolved, setResolved] = useState<ResolvedTheme>(() => resolve(mode));

  useEffect(() => {
    setResolved(resolve(mode));
    localStorage.setItem("themeMode", mode);

    if (mode !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => setResolved(systemTheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolved);
  }, [resolved]);

  const toggle = () =>
    setMode((m) => MODES[(MODES.indexOf(m) + 1) % MODES.length]);

  return (
    <ThemeToggleContext.Provider value={{ mode, resolved, toggle }}>
      {children}
    </ThemeToggleContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeToggleContext);
