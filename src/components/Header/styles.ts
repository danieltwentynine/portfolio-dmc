import styled from "styled-components";
import CircularText from "./CircularText";
import variaveis from "../../styles/variaveis";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
  }
`;

export const ListItem = styled.li`
  margin: 0 60px;

  a {
    text-decoration: none;
    color: ${variaveis.branco};

    &:hover {
      color: ${variaveis.cinza};
    }
  }

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

export const Logo = styled(CircularText)`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;