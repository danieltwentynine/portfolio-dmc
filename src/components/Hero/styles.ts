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

  /* keep content above the ascii field canvas (z-index: 0) */
  > img,
  > h1,
  > p,
  > ul {
    position: relative;
    z-index: 1;
  }

  .hero-ascii-field {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .HeroIcon {
    height: 180px;
    width: 180px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 1px solid var(--glass-border);
    /* chromatic halo echoing the portrait */
    box-shadow: -14px 0 42px var(--glow-red), 14px 0 42px var(--glow-blue);

    @media (max-width: 768px) {
      width: 100px;
    }

    @media (max-width: 480px) {
      width: 80px;
    }

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

/* fluid chromatic blobs drifting behind the hero, like light bleeding through glass */
export const FluidGlow = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 55vmax;
    height: 55vmax;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.8;
  }

  &::before {
    background: radial-gradient(circle at center, var(--glow-red), transparent 65%);
    top: -15%;
    left: -18%;
    animation: fluidDriftA 26s ease-in-out infinite alternate;
  }

  &::after {
    background: radial-gradient(circle at center, var(--glow-blue), transparent 65%);
    bottom: -20%;
    right: -18%;
    animation: fluidDriftB 32s ease-in-out infinite alternate;
  }

  @keyframes fluidDriftA {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(10vw, 8vh) scale(1.15); }
    100% { transform: translate(4vw, 16vh) scale(0.95); }
  }

  @keyframes fluidDriftB {
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-8vw, -10vh) scale(1.1); }
    100% { transform: translate(-14vw, -4vh) scale(0.9); }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;

export const GradientTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 84px;
  font-weight: bold;
  letter-spacing: 2px;
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

  /* RGB channel split on hover (class toggled by useGlitch) */
  &.glitching::before {
    -webkit-text-fill-color: #ff1a1a;
    color: #ff1a1a;
    animation: glitchRed 0.4s steps(3, end);
  }

  &.glitching::after {
    -webkit-text-fill-color: #1a6bff;
    color: #1a6bff;
    animation: glitchBlue 0.4s steps(3, end);
  }

  @keyframes glitchRed {
    0% { transform: translateX(0); opacity: 0.15; clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); }
    20% { transform: translateX(-6px); opacity: 0.8; clip-path: polygon(0 10%, 100% 10%, 100% 45%, 0 45%); }
    50% { transform: translateX(-3px); opacity: 0.7; clip-path: polygon(0 35%, 100% 35%, 100% 70%, 0 70%); }
    80% { transform: translateX(-5px); opacity: 0.6; clip-path: polygon(0 0%, 100% 0%, 100% 30%, 0 30%); }
    100% { transform: translateX(-2px); opacity: 0.15; clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); }
  }

  @keyframes glitchBlue {
    0% { transform: translateX(0); opacity: 0.12; clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); }
    20% { transform: translateX(6px); opacity: 0.8; clip-path: polygon(0 55%, 100% 55%, 100% 90%, 0 90%); }
    50% { transform: translateX(3px); opacity: 0.7; clip-path: polygon(0 25%, 100% 25%, 100% 60%, 0 60%); }
    80% { transform: translateX(5px); opacity: 0.6; clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%); }
    100% { transform: translateX(2px); opacity: 0.12; clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &.glitching::before,
    &.glitching::after {
      animation: none;
    }
  }

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 38px;
  }

  @media (max-width: 480px) {
    font-size: 27px;
    letter-spacing: 1px;
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
    font-family: var(--font-body);
    font-weight: 400;
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

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 14px 32px;
  list-style: none;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  box-shadow: inset 0 1px 0 var(--glass-highlight), 0 8px 32px var(--glass-shadow);

  li {
    display: flex;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${variaveis.branco};
    font-size: 26px;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      color: var(--amber);
      opacity: 1;
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    gap: 24px;

    a {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    gap: 20px;

    a {
      font-size: 20px;
    }
  }
`;
