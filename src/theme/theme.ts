import variaveis from "../styles/variaveis";

export const theme = {
  colors: {
    primary: "#ff5500",
    text: variaveis.branco,
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
} as const;

export type Theme = typeof theme;
