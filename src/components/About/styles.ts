import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const TitleAbout = styled.h1`
    text-align: center;
    font-size: 40px;
    margin-top: 100px;
    margin-bottom: 20px;
    color: ${variaveis.branco}
`

export const CenteredWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 20px;

    @media (max-width: 768px) {
        align-items: flex-start; // Avoid vertical squish on smaller screens
        padding: 40px 20px;
    }
`;

export const AboutContainer = styled.div`
    width: 100%;
    max-width: 800px;
    text-align: left;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 40px;

    h2 {
      margin-bottom: 10px;
      font-size: 24px;
      color: ${variaveis.highlightAzul};

      @media (max-width: 600px) {
        font-size: 20px;
      }
    }

    h3 {
      color: ${variaveis.branco};
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 18px;
      color: ${variaveis.cinza};

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
`;