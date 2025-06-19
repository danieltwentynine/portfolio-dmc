import variaveis from "../styles/variaveis";

// src/theme/theme.ts
export const theme = {
  colors: {
    primary: "#ff5500",
    background: variaveis.preto,
    text: variaveis.branco,
    highlight: variaveis.highlightAzul,
    gray: variaveis.cinza,
    gray100: "#f3f4f6",
    gray200: "#e5e7eb",
    gray300: "#d1d5db",
    gray700: "#374151",
    gray800: "#1f2937",
    gray900: "#111827",
    white: "#ffffff",
    black: "#000000",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    full: "50%",
  },
} as const;

export type Theme = typeof theme;
