import React, { useEffect } from "react";
import { DescricaoHero, GradientTitle, TextContainer, ListaTech } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import danielIcon from "../../img/danielAnime.png";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <TextContainer>
      <img className="HeroIcon" src={danielIcon} alt="Daniel M Cardoso icon" />
      <GradientTitle>Daniel M Cardoso</GradientTitle>
      <DescricaoHero>
        <span>
          Full Stack Developer | Computer Engineering student at UNASP-SP
        </span>
      </DescricaoHero>
      <ListaTech>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
        </li>
      </ListaTech>
    </TextContainer>
  );
}

export default Hero;
