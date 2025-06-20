import { keyframes, styled } from "styled-components";
import variaveis from "../../styles/variaveis";


export const TextContainer = styled.div`
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

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
    padding: 24px;
    display: block;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding: 0;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;

      img {
        width: 100%;
        max-width: 60px;
        height: 40px;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
    padding: 0 10px;
    margin-top: 18px;

    ul {
      gap: 12px;

      li img {
        max-width: 50px;
        height: 35px;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    padding: 0 15px;
    margin-top: 16px;

    ul {
      gap: 8px;

      li img {
        max-width: 40px;
        height: 30px;
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
  color: white;
  font-size: 32px;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  margin-top: 10px;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    margin-top: 6px;
  }
`;