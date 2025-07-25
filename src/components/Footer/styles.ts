import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const FooterContainer = styled.footer`
    background: black;
    padding: 40px 20px;
    color: ${variaveis.highlightAzul};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.5);
    gap: 40px;

    p {
        padding-bottom: 20px;
    }
`

export const FooterList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 20px 10px;
  }

  input,
  textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    resize: none;
    font-size: 1rem;
    background-color: #1a1a1a;
    color: ${variaveis.cinza};
    cursor: none;

    &:focus {
      outline: none;
      border-color: ${variaveis.highlightAzul};
      background-color: #222;
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: ${variaveis.cinza};
    cursor: none;
  }

  button {
    background-color: ${variaveis.highlightAzul};
    color: black;
    padding: 10px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    cursor: none;

    &:hover {
      background-color: ${variaveis.highlightAzul || "#1e90ff"};
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const PageLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  li {
    margin-top: 20px;
    margin-bottom: 40px;
    a {
      color: ${variaveis.cinza};
      text-decoration: none;
      cursor: none;
      &:hover {
        color: ${variaveis.highlightAzul};
      }

      &:after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: ${variaveis.highlightAzul};
        transition: width 0.3s ease;
      }

      &:hover:after {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  li {
    margin-top: 20px;
    a {
      text-decoration: none;
      color: ${variaveis.cinza};
      opacity: 0.3;
      cursor: none;
      &:hover {
        opacity: 1;
        color: ${variaveis.highlightAzul};
        transform: translateY(-2px);
      }
    }

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
`;
