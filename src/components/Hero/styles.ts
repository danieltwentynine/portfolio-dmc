import styled, { keyframes } from "styled-components";
import variaveis from "../../styles/variaveis";

export const TextContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px; // Adicionado padding horizontal padrão

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 0 15px; // Ajuste o padding para tablets
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 0 10px; // Ajuste o padding para celulares
  }
`;

export const GradientTitle = styled.h1`
  font-size: 100px; /* Base font size */
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
  white-space: nowrap; /* Prevent line breaks within the title if it becomes too long */
  overflow: hidden; /* Hide overflow if white-space: nowrap causes it to exceed container */
  text-overflow: ellipsis; /* Add ellipsis if text is cut off */

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

  @media (max-width: 380px) {
    /* Even smaller screens if needed */
    font-size: 48px;
  }
`;

export const DescricaoHero = styled.p`
  color: ${variaveis.branco};
  font-size: 24px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
  max-width: 900px; /* Add a max-width to prevent it from becoming too wide on large screens */
  line-height: 1.5; /* Improve readability */

  span {
    font-size: 14px;
    color: ${variaveis.cinza};
    padding: 0;
    display: block;
    background: linear-gradient(90deg, #333 0%, #fff 50%, #333 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: shine 3s infinite linear;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  @keyframes shine {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
    padding: 0 10px;
    margin-top: 18px;
    margin-bottom: 30px; /* Adjust bottom margin */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Slightly increase for better readability on small phones */
    text-align: center;
    padding: 0 15px;
    margin-top: 16px;
    margin-bottom: 20px; /* Adjust bottom margin */
  }

  @media (max-width: 380px) {
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const ListaTech = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
  flex-wrap: wrap;
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(65, 67, 69);
  border-radius: 50px;
  background-color: rgba(65, 67, 69, 0.65);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 0 10px; /* Add some horizontal padding to avoid touching edges */
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

      @media (max-width: 380px) {
        max-width: 35px; /* Even smaller for very small devices */
        height: 25px;
      }

      &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
