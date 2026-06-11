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
  font-family: 'Rajdhani', sans-serif;

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
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      margin-bottom: 20px;
      font-size: 26px;
      letter-spacing: 3px;
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
  border: 1px solid var(--color-card-border);
  background: var(--color-card-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(196, 158, 82, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(196, 158, 82, 0.35);
    background: var(--color-card-hover-bg);
  }

  .corner {
    position: absolute;
    width: 12px;
    height: 12px;
    pointer-events: none;
    z-index: 1;

    &.tl { top: 0; left: 0; border-top: 1px solid var(--amber); border-left: 1px solid var(--amber); }
    &.tr { top: 0; right: 0; border-top: 1px solid var(--amber); border-right: 1px solid var(--amber); }
    &.bl { bottom: 0; left: 0; border-bottom: 1px solid var(--amber); border-left: 1px solid var(--amber); }
    &.br { bottom: 0; right: 0; border-bottom: 1px solid var(--amber); border-right: 1px solid var(--amber); }
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
  font-family: 'Share Tech Mono', monospace;
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
