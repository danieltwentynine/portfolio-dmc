import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Container = styled.div`
  margin-top: 120px;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 0 12px;
  }
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 16px;
  color: ${variaveis.branco};
  letter-spacing: 4px;

  &::before {
    content: '// ';
    color: var(--color-highlight);
    opacity: 0.6;
    font-size: 0.75em;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${variaveis.cinza};
  margin-bottom: 60px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 40px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 80px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const CardItem = styled.div`
  border: 1px solid var(--color-card-border);
  border-radius: 0;
  background: var(--color-card-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  padding: 24px;
  text-align: left;
  line-height: 1.6;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(196, 158, 82, 0.06) 0%, transparent 60%);
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(196, 158, 82, 0.4);
    background: var(--color-card-hover-bg);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(196, 158, 82, 0.06);
  }

  .corner {
    position: absolute;
    width: 14px;
    height: 14px;
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
    letter-spacing: 0.5px;
    position: relative;
    z-index: 1;
  }

  p {
    color: ${variaveis.cinza};
    font-size: 14px;
    flex: 1;
    position: relative;
    z-index: 1;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;
    padding: 0;
    position: relative;
    z-index: 1;

    li {
      font-family: 'Share Tech Mono', monospace;
      font-size: 9px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--teal);
      background: var(--color-tech-badge-bg);
      border: 1px solid var(--color-tech-badge-border);
      border-radius: 0;
      padding: 3px 10px;
    }
  }

  .links {
    display: flex;
    gap: 16px;
    margin-top: 4px;
    align-items: center;
    position: relative;
    z-index: 1;

    a {
      font-family: 'Share Tech Mono', monospace;
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--color-highlight);
      transition: color 0.2s ease, transform 0.2s ease;
      display: inline-block;

      &::before {
        content: '// ';
        opacity: 0.5;
      }

      &:hover {
        color: var(--amber);
        transform: translateY(-1px);
      }
    }

    .corporate-badge {
      font-family: 'Share Tech Mono', monospace;
      font-size: 9px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${variaveis.cinza};
      border: 1px solid var(--color-card-border);
      border-radius: 0;
      padding: 3px 10px;
      opacity: 0.6;
    }
  }
`;
