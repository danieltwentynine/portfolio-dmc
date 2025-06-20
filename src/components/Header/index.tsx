import { useEffect, useState } from "react";
import { HeaderContainer, Logo, ListHeader, ListItem } from "./styles";

const HeaderScroll = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      {children}
    </HeaderContainer>
  );
}

function Header() {
  return (
    <HeaderScroll>
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
    </HeaderScroll>
  );
}

export default Header;
