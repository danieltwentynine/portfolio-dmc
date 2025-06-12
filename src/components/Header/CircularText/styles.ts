import styled from "styled-components";
import { motion } from "framer-motion";

interface CircularTextContainerProps {
  $fontSize?: number;
  $color?: string;
}

export const CircularTextContainer = styled(motion.div)<CircularTextContainerProps>`
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  font-weight: bold;
  color: ${props => props.$color || "#fff"};
  font-weight: 900;
  text-align: center;
  cursor: pointer;
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;

  span {
    position: absolute;
    display: inline-block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: ${props => props.$fontSize || 24}px;
    transition: all 0.5s cubic-bezier(0, 0, 0, 1);
    transform-origin: center;
    -webkit-transform-origin: center;
  }
`;