import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  html {
    scroll-behavior: smooth;

    /* typography */
    --font-display: 'Berkshire Swash', cursive;
    --font-body: 'Josefin Sans', sans-serif;

    /* Chromatic portrait — dark (carbon black) */
    --color-bg: #121214;
    --color-bg-opaque: rgba(18, 18, 20, 0.75);
    --color-text: #f3efe7;
    --color-highlight: #e85a45;
    --color-gray: rgba(243, 239, 231, 0.55);
    --color-gray-dark: rgba(243, 239, 231, 0.28);

    --color-surface: rgba(127, 179, 209, 0.1);
    --color-surface-border: rgba(127, 179, 209, 0.28);

    --color-footer-bg: #0c0c0e;
    --color-input-bg: rgba(243, 239, 231, 0.05);
    --color-input-focus-bg: rgba(243, 239, 231, 0.09);
    --color-input-border: rgba(243, 239, 231, 0.15);
    --color-on-highlight: #f6f2ea;

    --color-tech-badge-bg: rgba(127, 179, 209, 0.08);

    /* chromatic accents (red / blue halo from the portrait) */
    --amber: #e85a45;
    --amber-dim: rgba(232, 90, 69, 0.18);
    --amber-glow: rgba(232, 90, 69, 0.07);
    --teal: #7fb3d1;
    --teal-dim: rgba(127, 179, 209, 0.35);
    --teal-glow: rgba(127, 179, 209, 0.07);
    --text-primary: #f3efe7;
    --text-secondary: rgba(243, 239, 231, 0.55);
    --text-muted: rgba(243, 239, 231, 0.28);
    --border-teal: rgba(127, 179, 209, 0.22);

    --bebop-orange: #e85a45;
    --bebop-orange-glow: rgba(232, 90, 69, 0.45);
    --bebop-orange-dim: rgba(232, 90, 69, 0.35);

    /* liquid glass */
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-bg-hover: rgba(255, 255, 255, 0.12);
    --glass-border: rgba(255, 255, 255, 0.15);
    --glass-border-hover: rgba(255, 255, 255, 0.28);
    --glass-highlight: rgba(255, 255, 255, 0.22);
    --glass-shadow: rgba(0, 0, 0, 0.35);
    --glass-blur: blur(20px) saturate(180%);
    --glow-red: rgba(232, 90, 69, 0.28);
    --glow-blue: rgba(127, 179, 209, 0.24);

    --radius-sm: 12px;
    --radius-md: 16px;
    --radius-lg: 24px;
  }

  html[data-theme="light"] {
    /* Chromatic portrait — light (creamy white) */
    --color-bg: #f3efe7;
    --color-bg-opaque: rgba(243, 239, 231, 0.8);
    --color-text: #1b1b1e;
    --color-highlight: #cf3f2b;
    --color-gray: rgba(27, 27, 30, 0.62);
    --color-gray-dark: rgba(27, 27, 30, 0.35);

    --color-surface: rgba(79, 134, 173, 0.1);
    --color-surface-border: rgba(79, 134, 173, 0.3);

    --color-footer-bg: #eae5da;
    --color-input-bg: rgba(255, 255, 255, 0.55);
    --color-input-focus-bg: rgba(255, 255, 255, 0.85);
    --color-input-border: rgba(27, 27, 30, 0.15);
    --color-on-highlight: #f6f2ea;

    --color-tech-badge-bg: rgba(79, 134, 173, 0.08);

    --amber: #cf3f2b;
    --amber-dim: rgba(207, 63, 43, 0.16);
    --amber-glow: rgba(207, 63, 43, 0.06);
    --teal: #4f86ad;
    --teal-dim: rgba(79, 134, 173, 0.35);
    --teal-glow: rgba(79, 134, 173, 0.07);
    --text-primary: #1b1b1e;
    --text-secondary: rgba(27, 27, 30, 0.62);
    --text-muted: rgba(27, 27, 30, 0.35);
    --border-teal: rgba(79, 134, 173, 0.24);

    --bebop-orange: #cf3f2b;
    --bebop-orange-glow: rgba(207, 63, 43, 0.3);
    --bebop-orange-dim: rgba(207, 63, 43, 0.3);

    /* white tint needs more alpha to read over the cream background */
    --glass-bg: rgba(255, 255, 255, 0.35);
    --glass-bg-hover: rgba(255, 255, 255, 0.55);
    --glass-border: rgba(255, 255, 255, 0.6);
    --glass-border-hover: rgba(255, 255, 255, 0.85);
    --glass-highlight: rgba(255, 255, 255, 0.85);
    --glass-shadow: rgba(27, 27, 30, 0.15);
    --glow-red: rgba(224, 82, 56, 0.22);
    --glow-blue: rgba(102, 158, 194, 0.22);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-body);
    list-style: none;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
  }

  #grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.15;
    mix-blend-mode: overlay;
    width: 100%;
    height: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    #grain {
      display: none;
    }
  }

  /* chromatic glow on interactive elements */
  button,
  a {
    transition: box-shadow 200ms ease;
  }

  button:hover,
  a:hover {
    box-shadow: 0 0 12px var(--bebop-orange-glow);
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--color-bg); }
  ::-webkit-scrollbar-thumb { background: var(--amber-dim); }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-highlight); }
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export default EstiloGlobal;
