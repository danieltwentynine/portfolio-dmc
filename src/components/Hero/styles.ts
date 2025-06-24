import styled, { keyframes } from "styled-components";
import variaveis from "../../styles/variaveis";

export const TextContainer = styled.div`
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`

export const GradientTitle = styled.h1`
  font-size: 140px;
  font-weight: bold;
  background: linear-gradient(to right, #4567fd, #00ffe7);
  background-size: 200% 200%;
  animation: gradientMove 6s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  transition: all 1s ease;
  width: fit-content;
  margin: 0 auto;

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: 80px;
  }

  @media (max-width: 480px) {
    font-size: 60px;
  }
`;

export const DescricaoHero = styled.p`
  color: ${variaveis.branco};
  font-size: 24px;
  text-align: center;
  margin-top: 10px;

  span {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 14px;
    color: ${variaveis.cinza};
    padding: 0;
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
    padding: 0 10px;
    margin-top: 18px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    padding: 0 15px;
    margin-top: 16px;
  }
`;

export const ListaTech = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }

  li {
    display: flex;
    align-items: center;

    img {
      width: 100%;
      max-width: 60px;
      height: 40px;
      object-fit: contain;
      transition: all 0.5s ease;
      transform: translateY(0);

      @media (max-width: 768px) {
        max-width: 50px;
        height: 35px;
      }

      @media (max-width: 480px) {
        max-width: 40px;
        height: 30px;
      }

      &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(10px);
  }

  60% {
    transform: translateY(5px);
  }
`;

export const ScrollArrow = styled.img`
  animation: ${bounce} 2s infinite;
  opacity: 0.7;
  transition: opacity 0.3s;
  margin-top: 20px;
  width: 40px;
  height: 40px;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin-top: 10px;
  }
`;