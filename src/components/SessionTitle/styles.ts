import styled from "styled-components";

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 0 20px;

  h2 {
    font-family: 'Share Tech Mono', monospace;
    font-weight: 400;
    font-size: 28px;
    text-transform: lowercase;
    font-variant: small-caps;
    letter-spacing: 5px;
    color: var(--color-text);
    display: flex;
    align-items: baseline;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  .session-number {
    color: var(--bebop-orange);
  }

  .session-divider {
    color: var(--text-muted);
  }

  .session-rule {
    display: block;
    width: min(320px, 60vw);
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--bebop-orange) 20%,
      var(--bebop-orange) 80%,
      transparent
    );
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 20px;
      letter-spacing: 3px;
      gap: 10px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 16px;
      letter-spacing: 2px;
      gap: 8px;
    }
  }
`;
