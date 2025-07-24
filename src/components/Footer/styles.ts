import styled from "styled-components";
import variaveis from "../../styles/variaveis";


export const FooterContainer = styled.footer`
    background: black;
    padding: 40px 20px;
    color: ${variaveis.highlightAzul};
    text-align: center;

    p {
        padding-bottom: 20px;
    }
`

export const FooterList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
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
    margin-top: 40px;
    margin-bottom: 40px;
    a {
      color: ${variaveis.cinza};
      text-decoration: none;
      cursor: none;
    }

    @media (max-width: 768px) {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  }
`;

export const Links = styled.ul`
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
    margin-top: 40px;
    a {
      text-decoration: none;
      color: ${variaveis.cinza};
      opacity: 0.3;
      cursor: none;
    }

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
`;
