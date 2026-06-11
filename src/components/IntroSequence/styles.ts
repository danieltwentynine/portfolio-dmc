import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10001;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
  pointer-events: auto;

  &.fading {
    opacity: 0;
    pointer-events: none;
  }

  &.linger {
    background: transparent;
    pointer-events: none;
  }

  .digit,
  .jazz {
    font-family: 'Share Tech Mono', monospace;
    font-size: 120px;
    line-height: 1;
    color: #e8dcc8;
    animation: introPop 0.35s cubic-bezier(0.2, 0.9, 0.3, 1.2) both;
  }

  .jazz {
    color: var(--bebop-orange);
    font-size: 150px;
  }

  .jazz.pulse {
    animation: jazzPulse 1.1s ease-out both;
  }

  @keyframes introPop {
    from {
      opacity: 0;
      transform: scale(0.55);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes jazzPulse {
    0% {
      opacity: 0;
      transform: scale(0.9);
      text-shadow: 0 0 0 rgba(232, 80, 26, 0);
    }
    25% {
      opacity: 0.9;
      transform: scale(1.05);
      text-shadow: 0 0 36px rgba(232, 80, 26, 0.8);
    }
    100% {
      opacity: 0;
      transform: scale(1);
      text-shadow: 0 0 8px rgba(232, 80, 26, 0);
    }
  }

  @media (max-width: 768px) {
    .digit,
    .jazz {
      font-size: 72px;
    }

    .jazz {
      font-size: 90px;
    }
  }
`;
