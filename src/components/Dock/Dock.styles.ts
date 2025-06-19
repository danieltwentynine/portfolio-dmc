// src/components/dock/Dock.styles.ts
import styled from "styled-components";
import { motion } from "framer-motion";
import { StyledDockProps } from "./types";
import variaveis from "../../styles/variaveis";

const positionStyles = {
  top: { alignItems: "flex-start", padding: "12px 16px 0 16px" },
  center: { alignItems: "center", padding: "0 16px" },
  bottom: { alignItems: "flex-end", padding: "0 16px 12px 16px" }
};

export const StyledDock = styled(motion.div)<StyledDockProps>`
  margin: 0 auto;
  display: flex;
  height: 74px;
  align-items: ${({ $position }) => positionStyles[$position].alignItems};
  gap: 16px;
  border-radius: 16px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || variaveis.cinzaEscuro};
  padding: ${({ $position }) => positionStyles[$position].padding};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    height: 60px;
    gap: 12px;
    padding: ${({ $position }) =>
      $position === 'top'
        ? '8px 12px 0 12px'
        : $position === 'bottom'
        ? '0 12px 8px 12px'
        : '0 12px'};
  }

  @media (max-width: 480px) {
    height: 52px;
    gap: 8px;
    padding: ${({ $position }) =>
      $position === 'top'
        ? '6px 10px 0 10px'
        : $position === 'bottom'
        ? '0 10px 6px 10px'
        : '0 10px'};
  }
`;

export const DockContainer = styled.div`
  position: sticky;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;
