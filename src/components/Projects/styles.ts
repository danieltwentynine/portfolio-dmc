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
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  box-shadow: inset 0 1px 0 var(--glass-highlight), 0 8px 32px var(--glass-shadow);
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
    background: linear-gradient(135deg, var(--amber-glow) 0%, transparent 60%);
    pointer-events: none;
  }

  &:hover {
    border-color: var(--glass-border-hover);
    background: var(--glass-bg-hover);
    box-shadow: inset 0 1px 0 var(--glass-highlight), 0 16px 40px var(--glass-shadow), 0 0 20px var(--amber-glow);
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
      font-family: var(--font-body);
      font-size: 9px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--teal);
      background: var(--color-tech-badge-bg);
      border-radius: var(--radius-sm);
      padding: 4px 10px 3px;
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
      font-family: var(--font-body);
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-decoration: none;
      color: var(--color-highlight);
      padding: 2px 6px;
      transition: color 0.2s ease, transform 0.2s ease, box-shadow 200ms ease;
      display: inline-block;

      &::before {
        content: '// ';
        opacity: 0.5;
      }

      &:hover {
        color: var(--amber);
        transform: translateY(-1px);
        box-shadow: 0 0 12px var(--bebop-orange-glow);
      }
    }

    .corporate-badge {
      font-family: var(--font-body);
      font-size: 9px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: ${variaveis.cinza};
      background: var(--glass-bg);
      border-radius: var(--radius-sm);
      padding: 4px 10px 3px;
      opacity: 0.6;
    }
  }
`;
