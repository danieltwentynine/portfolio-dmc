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
  padding: 20px 20px 80px;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 20px 16px 60px;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 820px;
  text-align: left;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SummaryBlock = styled.p`
  font-size: 15px;
  line-height: 1.9;
  color: ${variaveis.cinza};
  border-left: 3px solid ${variaveis.highlightAzul};
  padding-left: 16px;
  margin-bottom: 48px;
  font-style: italic;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 48px;

    h2 {
      margin-bottom: 20px;
      font-size: 22px;
      color: ${variaveis.highlightAzul};
      letter-spacing: 1px;

      @media (max-width: 600px) {
        font-size: 18px;
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

export const ExperienceItem = styled.div`
  margin-bottom: 36px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-card-border);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h3 {
    color: ${variaveis.branco};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;

export const CompanyMeta = styled.p`
  font-size: 13px;
  color: ${variaveis.highlightAzul};
  margin-bottom: 14px;
  font-weight: 500;
  opacity: 0.85;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 14px;
    line-height: 1.7;
    color: ${variaveis.cinza};
    padding-left: 16px;
    position: relative;
    margin-bottom: 0;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${variaveis.highlightAzul};
    }

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`;
