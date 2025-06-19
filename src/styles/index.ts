import styled, { createGlobalStyle, keyframes } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    list-style: none;
    position: relative;
  }

  body {
    background-color: ${variaveis.preto};
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`;

const moveLines = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
`;

export const MovingLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05) 0px,
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px,
    transparent 40px
  );

  animation: ${moveLines} 10s linear infinite;
  background-size: 1000px 40px;
  pointer-events: none;
`;


export default EstiloGlobal;
