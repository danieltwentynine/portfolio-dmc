import React from "react";
import { DescricaoHero, GradientTitle, TextContainer, ListaTech } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Squares from "../Background/Squares";


AOS.init();

function Hero() {
  return (
    <TextContainer>
      <GradientTitle>Daniel M Cardoso</GradientTitle>
      <DescricaoHero>
        <span>
          Full Stack Developer | Computer Engineering student at UNASP-SP
          <br />
          Currently developing The 1% App an AI-powered running app focused on
          personalized training plans.
        </span>
      </DescricaoHero>
      <ListaTech>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" />
        </li>
        <li>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
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
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
        </li>
      </ListaTech>
    </TextContainer>
  );
}

export default Hero;
