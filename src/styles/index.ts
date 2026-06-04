import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  html {
    scroll-behavior: smooth;

    /* dark theme (default) */
    --color-bg: #161717;
    --color-bg-opaque: rgba(22, 23, 23, 0.55);
    --color-text: #eeeeee;
    --color-highlight: #1e549f;
    --color-gray: #b5b5b5;
    --color-gray-dark: #374151;

    --color-card-bg: rgba(65, 67, 69, 0.25);
    --color-card-border: rgba(65, 67, 69, 0.7);
    --color-card-hover-bg: rgba(65, 67, 69, 0.45);

    --color-surface: rgba(65, 67, 69, 0.65);
    --color-surface-border: rgba(65, 67, 69, 1);

    --color-footer-bg: #000000;
    --color-input-bg: #111111;
    --color-input-focus-bg: #1a1a1a;
    --color-input-border: rgba(65, 67, 69, 0.6);

    --color-tech-badge-bg: rgba(30, 84, 159, 0.15);
    --color-tech-badge-border: rgba(30, 84, 159, 0.3);
  }

  html[data-theme="light"] {
    --color-bg: #f2f2f2;
    --color-bg-opaque: rgba(242, 242, 242, 0.8);
    --color-text: #1a1a1a;
    --color-highlight: #1a4c8f;
    --color-gray: #555555;
    --color-gray-dark: #d1d5db;

    --color-card-bg: rgba(210, 210, 210, 0.45);
    --color-card-border: rgba(160, 160, 160, 0.55);
    --color-card-hover-bg: rgba(195, 195, 195, 0.7);

    --color-surface: rgba(200, 200, 200, 0.7);
    --color-surface-border: rgba(160, 160, 160, 0.9);

    --color-footer-bg: #e5e5e5;
    --color-input-bg: #ffffff;
    --color-input-focus-bg: #f5f5f5;
    --color-input-border: rgba(160, 160, 160, 0.5);

    --color-tech-badge-bg: rgba(26, 76, 143, 0.1);
    --color-tech-badge-border: rgba(26, 76, 143, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
    cursor: none;
  }

  body {
    background-color: var(--color-bg);
    cursor: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease;
  }

  @media (max-width: 1024px) {
    * {
      cursor: auto;
    }
    body {
      cursor: auto;
    }
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
