import styled from "styled-components";

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 0 20px;

  h2 {
    font-weight: 400;
    font-size: 30px;
    color: var(--color-text);
    display: flex;
    align-items: baseline;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  /* script + tracked-caps lockup; spans need explicit fonts
     because the global * rule overrides inheritance */
  .session-number {
    font-family: var(--font-display);
    letter-spacing: 1px;
    color: var(--bebop-orange);
  }

  .session-name {
    font-family: var(--font-body);
    font-weight: 300;
    font-size: 0.75em;
    letter-spacing: 5px;
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
      font-size: 22px;
      gap: 10px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
      gap: 8px;
    }
  }
`;
