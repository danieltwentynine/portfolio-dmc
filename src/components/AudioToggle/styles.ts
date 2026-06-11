import styled from "styled-components";

export const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 0;
  border: 1px solid var(--bebop-orange-dim);
  background: rgba(10, 10, 15, 0.85);
  color: var(--bebop-orange);
  backdrop-filter: blur(8px);
  transition: border-color 0.2s ease, box-shadow 200ms ease, transform 0.15s ease;

  &:hover {
    border-color: var(--bebop-orange);
    box-shadow: 0 0 12px var(--bebop-orange-glow);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    bottom: 14px;
    right: 12px;
    width: 38px;
    height: 38px;
  }
`;
