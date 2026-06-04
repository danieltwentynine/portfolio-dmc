import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const TitleAbout = styled.h1`
  text-align: center;
  font-size: 40px;
  letter-spacing: 2px;
  margin-top: 100px;
  margin-bottom: 20px;
  color: ${variaveis.branco};
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-top: 50px;
  }
`;

export const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px 20px 60px;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 20px 16px 60px;
    min-height: auto;
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
    margin-bottom: 48px;

    h2 {
      margin-bottom: 12px;
      font-size: 22px;
      color: ${variaveis.highlightAzul};
      letter-spacing: 1px;

      @media (max-width: 600px) {
        font-size: 18px;
      }
    }

    h3 {
      color: ${variaveis.branco};
      font-size: 16px;
      margin-bottom: 4px;

      @media (max-width: 600px) {
        font-size: 15px;
      }
    }

    p {
      font-size: 15px;
      line-height: 1.8;
      margin-bottom: 20px;
      color: ${variaveis.cinza};

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
`;
