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
  font-size: 40px;
  margin-bottom: 16px;
  color: ${variaveis.branco};
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${variaveis.cinza};
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 15px;
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
  border: 1px solid rgba(65, 67, 69, 0.7);
  border-radius: 16px;
  background-color: rgba(65, 67, 69, 0.25);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  padding: 24px;
  text-align: left;
  line-height: 1.6;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    background-color 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
    background-color: rgba(65, 67, 69, 0.45);
  }

  h3 {
    color: ${variaveis.branco};
    font-size: 18px;
    font-weight: 600;
  }

  p {
    color: ${variaveis.cinza};
    font-size: 14px;
    flex: 1;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    list-style: none;
    padding: 0;

    li {
      font-size: 11px;
      font-weight: 500;
      color: ${variaveis.highlightAzul};
      background: rgba(30, 84, 159, 0.15);
      border: 1px solid rgba(30, 84, 159, 0.3);
      border-radius: 20px;
      padding: 3px 10px;
    }
  }

  .links {
    display: flex;
    gap: 16px;
    margin-top: 4px;

    a {
      text-decoration: none;
      color: ${variaveis.highlightAzul};
      font-size: 14px;
      font-weight: 500;
      transition: color 0.2s ease, transform 0.2s ease;
      display: inline-block;

      &:hover {
        color: #4a90e2;
        transform: translateY(-1px);
      }
    }
  }
`;
