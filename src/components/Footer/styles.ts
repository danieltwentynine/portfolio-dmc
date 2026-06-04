import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const FooterContainer = styled.footer`
  background: var(--color-footer-bg);
  padding: 60px 20px 40px;
  color: ${variaveis.highlightAzul};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
  gap: 40px;
  transition: background 0.3s ease;

  p {
    padding-bottom: 20px;
    color: ${variaveis.cinza};
    font-size: 14px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  padding: 0 20px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 420px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: min(420px, 90vw);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  input,
  textarea {
    padding: 12px 14px;
    border: 1px solid var(--color-input-border);
    border-radius: 8px;
    resize: none;
    font-size: 0.95rem;
    font-family: inherit;
    background-color: var(--color-input-bg);
    color: ${variaveis.branco};
    transition: border-color 0.2s ease, background-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${variaveis.highlightAzul};
      background-color: var(--color-input-focus-bg);
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: ${variaveis.cinza};
    opacity: 0.6;
  }

  button {
    background-color: ${variaveis.highlightAzul};
    color: #fff;
    padding: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
    margin-top: 4px;

    &:hover:not(:disabled) {
      background-color: #2563b0;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(30, 84, 159, 0.4);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.6;
    }
  }
`;

export const ErrorMsg = styled.span`
  font-size: 0.75rem;
  color: #f87171;
  padding-left: 2px;
`;

export const SuccessMsg = styled.span`
  font-size: 0.85rem;
  color: #4ade80;
  text-align: center;
  padding: 4px 0;
`;

export const PageLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
  }

  li {
    a {
      color: ${variaveis.cinza};
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease;

      &:hover {
        color: ${variaveis.highlightAzul};
      }
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 0;
  margin-top: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 16px;
    gap: 20px;
  }

  li {
    a {
      text-decoration: none;
      color: ${variaveis.cinza};
      opacity: 0.5;
      font-size: 0.95rem;
      transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;
      display: inline-block;

      &:hover {
        opacity: 1;
        color: ${variaveis.highlightAzul};
        transform: translateY(-2px);
      }
    }
  }
`;
