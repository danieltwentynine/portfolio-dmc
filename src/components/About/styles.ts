import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const TitleAbout = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 70px;
  }

  @media (max-width: 480px) {
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
  border-left: 3px solid var(--color-highlight);
  padding-left: 16px;
  margin-bottom: 48px;
  font-style: italic;
  font-family: var(--font-body);

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
      font-family: var(--font-display);
      font-weight: 400;
      margin-bottom: 20px;
      font-size: 26px;
      letter-spacing: 1px;
      color: var(--color-highlight);

      &::before {
        content: '// ';
        opacity: 0.5;
        font-size: 0.8em;
      }

      @media (max-width: 600px) {
        font-size: 20px;
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
  padding: 20px 24px 24px;
  padding-bottom: 32px;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  box-shadow: inset 0 1px 0 var(--glass-highlight), 0 8px 32px var(--glass-shadow);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--amber-glow) 0%, transparent 60%);
    pointer-events: none;
  }

  &:hover {
    border-color: var(--glass-border-hover);
    background: var(--glass-bg-hover);
  }

  h3 {
    color: ${variaveis.branco};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    position: relative;
    z-index: 1;

    @media (max-width: 600px) {
      font-size: 15px;
    }
  }
`;

export const CompanyMeta = styled.p`
  font-family: var(--font-body);
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-highlight);
  margin-bottom: 14px;
  opacity: 0.85;
  position: relative;
  z-index: 1;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;

  li {
    font-size: 14px;
    line-height: 1.7;
    color: ${variaveis.cinza};
    padding-left: 16px;
    position: relative;
    margin-bottom: 0;

    &::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: var(--color-highlight);
      opacity: 0.7;
      font-size: 10px;
      top: 4px;
    }

    @media (max-width: 600px) {
      font-size: 13px;
    }
  }
`;
