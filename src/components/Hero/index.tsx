import { DescricaoHero, GradientTitle, TextContainer, ListaTech } from "./styles";
import danielIcon from "../../img/danielAnime.png";

function Hero() {
  return (
    <TextContainer>
      <img className="HeroIcon" src={danielIcon} alt="Daniel M Cardoso icon" />
      <GradientTitle>Daniel M Cardoso</GradientTitle>
      <DescricaoHero>
        <span>Full Stack Developer | Computer Engineering student at UNASP-SP</span>
      </DescricaoHero>
      <ListaTech>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" alt="Apple" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt="Swift" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg" alt="Styled Components" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
        </li>
      </ListaTech>
    </TextContainer>
  );
}

export default Hero;
