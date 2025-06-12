import CircularText from "./CircularText";
import { HeaderContainer, Logo } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Logo
        text="DANIEL MORAES CARDOSO "
        size={100}
        fontSize={14}
        color="#1e549f"
        direction="clockwise"
        onHover="speedUp"
      />
    </HeaderContainer>
  );
}

export default Header;