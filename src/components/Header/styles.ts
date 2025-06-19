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
`

export const ListItem = styled.li`
  margin: 0 60px;

  a {
    text-decoration: none;
    color: ${variaveis.branco};

    &:hover {
      color: ${variaveis.cinza};
  }
`;

export const Logo = styled(CircularText)`
    margin-top: 20px;
`