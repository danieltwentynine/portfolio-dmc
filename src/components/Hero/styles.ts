import styled from "styled-components";
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
  padding: 0 20px;

  .HeroIcon {
    height: 180px;
    border-radius: 50%;
    margin-bottom: 20px;
    filter: drop-shadow(2px 2px 8px rgba(196, 158, 82, 0.3));

    @media (max-width: 768px) {
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 80px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 0 10px;
  }
`;

export const GradientTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 100px;
  font-weight: 400;
  letter-spacing: 6px;
  background: linear-gradient(to right, var(--teal), var(--amber));
  background-size: 200% 200%;
  animation: gradientMove 6s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  width: fit-content;
  margin: 0 auto;
  white-space: nowrap;
  position: relative;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: var(--teal);
    color: var(--teal);
    opacity: 0.15;
    clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
    transform: translateX(-2px);
    pointer-events: none;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: var(--amber);
    color: var(--amber);
    opacity: 0.12;
    clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
    transform: translateX(2px);
    pointer-events: none;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    letter-spacing: 4px;
  }
`;

export const DescricaoHero = styled.p`
  color: ${variaveis.branco};
  font-size: 24px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 80px;
  max-width: 900px;
  line-height: 1.5;

  span {
    font-family: 'Share Tech Mono', monospace;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--amber);
    -webkit-text-fill-color: var(--amber);
    display: block;
    opacity: 0.85;
    padding: 0;
    background: none;
    animation: none;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    padding: 0 10px;
    margin-top: 18px;
    margin-bottom: 40px;

    span {
      font-size: 11px;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 480px) {
    font-size: 10px;
    text-align: center;
    padding: 0 15px;
    margin-top: 16px;
    margin-bottom: 40px;

    span {
      font-size: 9px;
      letter-spacing: 1.5px;
    }
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
  border: 1px solid var(--color-surface-border);
  border-radius: 0;
  background-color: var(--color-surface);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(106, 157, 181, 0.04);

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 10px;
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
      opacity: 0.8;

      @media (max-width: 768px) {
        max-width: 50px;
        height: 35px;
      }

      @media (max-width: 480px) {
        max-width: 40px;
        height: 30px;
      }

      @media (max-width: 380px) {
        max-width: 35px;
        height: 25px;
      }

      &:hover {
        transform: translateY(-4px) scale(1.02);
        opacity: 1;
      }
    }
  }
`;
