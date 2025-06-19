import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Container = styled.div`
  margin-top: 200px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  color: ${variaveis.branco}
`;

export const Description = styled.p`
  font-size: 20;
  color: ${variaveis.cinza};
  margin-bottom: 180px;
`;

export const CardContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 320px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: ${variaveis.preto};
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${variaveis.cinzaEscuro};
`;

export const TechList = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.75rem;
  }
`;

export const Button = styled.a`
  margin-top: 1rem;
  background-color: #0070f3;
  color: #fff;
  padding: 0.6rem 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0059c9;
  }
`;
