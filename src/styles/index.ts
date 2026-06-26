import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  html {
    scroll-behavior: smooth;

    /* Vintage Retro Tech — dark (default) */
    --color-bg: #0a0a0f;
    --color-bg-opaque: rgba(10, 10, 15, 0.75);
    --color-text: #e8dcc8;
    --color-highlight: #c49e52;
    --color-gray: rgba(232, 220, 200, 0.5);
    --color-gray-dark: rgba(232, 220, 200, 0.25);

    --color-card-bg: rgba(196, 158, 82, 0.05);
    --color-card-border: rgba(196, 158, 82, 0.2);
    --color-card-hover-bg: rgba(196, 158, 82, 0.1);

    --color-surface: rgba(106, 157, 181, 0.12);
    --color-surface-border: rgba(106, 157, 181, 0.3);

    --color-footer-bg: #07070c;
    --color-input-bg: rgba(196, 158, 82, 0.04);
    --color-input-focus-bg: rgba(196, 158, 82, 0.08);
    --color-input-border: rgba(196, 158, 82, 0.2);

    --color-tech-badge-bg: rgba(106, 157, 181, 0.06);
    --color-tech-badge-border: rgba(106, 157, 181, 0.35);

    --amber: #c49e52;
    --amber-dim: rgba(196, 158, 82, 0.18);
    --amber-glow: rgba(196, 158, 82, 0.06);
    --teal: #6a9db5;
    --teal-dim: rgba(106, 157, 181, 0.35);
    --teal-glow: rgba(106, 157, 181, 0.06);
    --text-primary: #e8dcc8;
    --text-secondary: rgba(232, 220, 200, 0.5);
    --text-muted: rgba(232, 220, 200, 0.25);
    --border-amber: rgba(196, 158, 82, 0.2);
    --border-teal: rgba(106, 157, 181, 0.2);

    /* Cowboy Bebop accent */
    --bebop-orange: #E8501A;
    --bebop-orange-glow: rgba(232, 80, 26, 0.5);
    --bebop-orange-dim: rgba(232, 80, 26, 0.35);
  }

  html[data-theme="light"] {
    /* Vintage sepia — warmer dark tone */
    --color-bg: #1c1a14;
    --color-bg-opaque: rgba(28, 26, 20, 0.8);
    --color-text: #f0e6cc;
    --color-highlight: #d4a836;
    --color-gray: rgba(240, 230, 204, 0.6);
    --color-gray-dark: rgba(240, 230, 204, 0.3);

    --color-card-bg: rgba(196, 158, 82, 0.08);
    --color-card-border: rgba(196, 158, 82, 0.28);
    --color-card-hover-bg: rgba(196, 158, 82, 0.14);

    --color-surface: rgba(106, 157, 181, 0.18);
    --color-surface-border: rgba(106, 157, 181, 0.4);

    --color-footer-bg: #141208;
    --color-input-bg: rgba(196, 158, 82, 0.06);
    --color-input-focus-bg: rgba(196, 158, 82, 0.12);
    --color-input-border: rgba(196, 158, 82, 0.3);

    --color-tech-badge-bg: rgba(106, 157, 181, 0.1);
    --color-tech-badge-border: rgba(106, 157, 181, 0.45);

    --amber: #d4a836;
    --teal: #7ab3cc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rajdhani', sans-serif;
    list-style: none;
    text-decoration: none;
    cursor: none;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    cursor: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease;
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

  .scanlines {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9998;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 3px,
      rgba(0, 0, 0, 0.1) 3px,
      rgba(0, 0, 0, 0.1) 4px
    );
  }

  .vignette {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9997;
    background: radial-gradient(
      ellipse at center,
      transparent 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }

  /* Bebop orange glow on interactive elements */
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
  ::-webkit-scrollbar-thumb { background: rgba(196, 158, 82, 0.18); }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-highlight); }

  @media (max-width: 1024px) {
    * { cursor: auto; }
    body { cursor: auto; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { cursor: auto; }
    body { cursor: auto; }
  }
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
