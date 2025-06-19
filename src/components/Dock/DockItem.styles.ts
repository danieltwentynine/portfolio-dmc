// src/components/dock/DockItem.styles.ts
import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledDockItemProps } from "./types";
import variaveis from "../../styles/variaveis";

export const StyledDockItem = styled(motion.div)<StyledDockItemProps>`
  height: 48px;
  border-radius: 24px;
  background-color: ${variaveis.cinza};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  border: 2px solid ${variaveis.cinza};

  &:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? variaveis.cinza : variaveis.cinza};
  }

  svg,
  img {
    color: ${variaveis.preto};
    transition: color 0.2s ease;
  }
`;

export const DockItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
