import React from "react";
import avatarImg from "../../img/avatar.png"
import { DescricaoHero, GradientTitle, TextContainer, ListaTech } from "./styles";
import ArrowDown from "./ArrowDown";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Hero() {
  return (
    <TextContainer>
      <GradientTitle>Welcome</GradientTitle>
      <DescricaoHero>
        to Daniel's portfolio!
        <span>
          Software Developer | Computer Engineering student at UNASP-SP
          <br />
          Currently developing P.A.C.E., an AI-powered running app focused on
          personalized training plans.
        </span>
      </DescricaoHero>
      <ListaTech>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
        </li>
      </ListaTech>
      <ArrowDown />
    </TextContainer>
  );
}

export default Hero;
