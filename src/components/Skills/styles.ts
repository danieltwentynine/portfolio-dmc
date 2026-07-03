import styled from "styled-components";

export const SkillsSection = styled.section`
  padding: 0 24px 80px;

  @media (max-width: 768px) {
    padding: 0 16px 60px;
  }

  @media (max-width: 480px) {
    padding: 0 12px 50px;
  }
`;

export const SkillsGrid = styled.div`
  max-width: 1100px;
  margin: 40px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const CategoryCard = styled.div`
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  box-shadow: inset 0 1px 0 var(--glass-highlight), 0 8px 32px var(--glass-shadow);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

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
    box-shadow: inset 0 1px 0 var(--glass-highlight), 0 16px 40px var(--glass-shadow), 0 0 16px var(--amber-glow);
  }

  h3 {
    font-family: var(--font-body);
    color: var(--color-highlight);
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 16px;
    opacity: 0.9;
    position: relative;
    z-index: 1;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    position: relative;
    z-index: 1;
  }
`;

export const SkillPill = styled.li`
  font-family: var(--font-body);
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 5px 10px 4px;
  color: var(--teal);
  background: var(--teal-glow);
  border-radius: var(--radius-sm);
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: var(--color-text);
    background: var(--color-tech-badge-bg);
  }
`;
