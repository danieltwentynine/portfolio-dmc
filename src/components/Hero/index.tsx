import { FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { DescricaoHero, FluidGlow, GradientTitle, TextContainer, SocialLinks } from "./styles";
import { useLanguage } from "../../context/LanguageContext";
import { useGlitch } from "../../hooks/useGlitch";
import AsciiField from "../AsciiField";
import danielPhoto from "../../img/danielPhoto.jpg";

function Hero() {
  const { t } = useLanguage();
  const { glitching, trigger } = useGlitch(400);

  return (
    <TextContainer id="top">
      <FluidGlow aria-hidden="true" />
      <AsciiField />
      <img className="HeroIcon" src={danielPhoto} alt="Daniel M Cardoso" />
      <GradientTitle
        data-text="Daniel M Cardoso"
        className={glitching ? "glitching" : undefined}
        onMouseEnter={trigger}
      >
        Daniel M Cardoso
      </GradientTitle>
      <DescricaoHero>
        <span>{t.hero.subtitle}</span>
      </DescricaoHero>
      <SocialLinks>
        <li>
          <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="#" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </li>
        <li>
          <a href="#" aria-label="Email">
            <FaEnvelope />
          </a>
        </li>
      </SocialLinks>
    </TextContainer>
  );
}

export default Hero;
