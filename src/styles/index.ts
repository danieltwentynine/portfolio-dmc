import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${variaveis.preto};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`


export default EstiloGlobal;
