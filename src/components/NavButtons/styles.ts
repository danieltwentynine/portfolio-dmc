import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    gap: 6px;
  }
`;

export const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  color: var(--color-text);
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 200ms ease;
  backdrop-filter: blur(14px) saturate(1.4);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  box-shadow: inset 0 1px 0 var(--glass-highlight), 0 4px 16px var(--glass-shadow);

  &:hover {
    background: var(--amber-dim);
    border-color: var(--color-highlight);
    color: var(--color-highlight);
    transform: translateY(-1px);
    box-shadow: 0 0 12px var(--bebop-orange-glow);
  }

  &:active {
    transform: translateY(0);
  }
`;
