import styled, { createGlobalStyle, keyframes } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    list-style: none;
    text-decoration: none;
    cursor: none;
  }

  body {
    background-color: ${variaveis.preto};
    cursor: none;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`


export default EstiloGlobal;
