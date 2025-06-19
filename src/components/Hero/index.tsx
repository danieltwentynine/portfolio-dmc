import React from "react";
import { DescricaoHero, GradientTitle, TextContainer } from "./styles";
import ArrowDown from "./ArrowDown";

function Hero() {
  return (
    <TextContainer>
      <GradientTitle>Welcome</GradientTitle>
      <DescricaoHero>To Daniel's Portfolio</DescricaoHero>
      <ArrowDown />
    </TextContainer>
  );
}

export default Hero;
