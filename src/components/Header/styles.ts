import styled from "styled-components";
import CircularText from "./CircularText";
import variaveis from "../../styles/variaveis";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color:${variaveis.pretoOpaco};
    backdrop-filter: blur(10px);
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    display: none;
  }
`;

export const ListHeader = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  margin: 0 60px;

  #projects {
    scroll-margin-top: 100px;
  }

  a {
    text-decoration: none;
    color: ${variaveis.branco};

    &:hover {
      color: ${variaveis.cinza};
    }
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const Logo = styled(CircularText)`
  padding: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;
