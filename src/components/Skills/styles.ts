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
  border: 1px solid var(--color-card-border);
  border-radius: 0;
  background: var(--color-card-bg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(196, 158, 82, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  &:hover {
    border-color: rgba(196, 158, 82, 0.38);
    background: var(--color-card-hover-bg);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3), 0 0 16px rgba(196, 158, 82, 0.05);
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
    font-family: 'Share Tech Mono', monospace;
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
  font-family: 'Share Tech Mono', monospace;
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 1px solid var(--teal-dim);
  color: var(--teal);
  background: var(--teal-glow);
  border-radius: 0;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: var(--teal);
    color: var(--color-text);
    background: rgba(106, 157, 181, 0.12);
  }
`;
