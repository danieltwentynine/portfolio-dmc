import styled from "styled-components";
import variaveis from "../../styles/variaveis";

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
  padding: 7px 12px;
  border-radius: 20px;
  border: 1px solid var(--color-card-border);
  background: var(--color-card-bg);
  color: ${variaveis.branco};
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.5px;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease,
    color 0.2s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: var(--color-card-hover-bg);
    border-color: ${variaveis.highlightAzul};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
