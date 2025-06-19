import React from "react";
import avatarImg from "../../img/avatar.png"
import { Avatar, AvatarBackground, DescricaoHero, GradientTitle, TextContainer } from "./styles";
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
      </DescricaoHero>
      <ArrowDown />
    </TextContainer>
  );
}

export default Hero;
