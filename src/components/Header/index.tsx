import { HeaderContainer, Logo, ListHeader, ListItem } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <ListHeader>
        <ListItem>
          <a href="#">Home</a>
        </ListItem>
        <ListItem>
          <Logo
            text="DANIEL MORAES CARDOSO "
            size={50}
            fontSize={8}
            color="#1e549f"
            direction="clockwise"
            onHover="speedUp"
          />
        </ListItem>
        <ListItem>
          <a href="#projects">Projects</a>
        </ListItem>
      </ListHeader>
    </HeaderContainer>
  );
}

export default Header;