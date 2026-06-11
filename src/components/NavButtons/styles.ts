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
  border-radius: 0;
  border: 1px solid rgba(196, 158, 82, 0.3);
  background: rgba(196, 158, 82, 0.05);
  color: var(--color-text);
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 200ms ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(196, 158, 82, 0.1);
    border-color: var(--color-highlight);
    color: var(--color-highlight);
    transform: translateY(-1px);
    box-shadow: 0 0 12px var(--bebop-orange-glow);
  }

  &:active {
    transform: translateY(0);
  }
`;
