import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const SkillsSection = styled.section`
  padding: 0 24px 80px;

  @media (max-width: 768px) {
    padding: 0 16px 60px;
  }

  @media (max-width: 480px) {
    padding: 0 12px 50px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 16px;
  color: ${variaveis.branco};

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
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
  border-radius: 16px;
  background-color: var(--color-card-bg);
  padding: 24px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
    background-color: var(--color-card-hover-bg);
  }

  h3 {
    color: ${variaveis.highlightAzul};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
  }
`;

export const SkillPill = styled.li`
  font-size: 12px;
  font-weight: 500;
  color: ${variaveis.cinza};
  background: transparent;
  border: 1px solid var(--color-card-border);
  border-radius: 20px;
  padding: 4px 12px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${variaveis.highlightAzul};
    color: ${variaveis.highlightAzul};
  }
`;
