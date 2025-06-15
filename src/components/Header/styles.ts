import styled from "styled-components";
import CircularText from "./CircularText";

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
    color:#2c2c2c;
    transition: transform 0.2s ease, color 0.5s ease;

    &:hover {
      transform: scale(1.1);
      color: #1c4682;
  }
`;

export const Logo = styled(CircularText)`
    margin-top: 40px;
`