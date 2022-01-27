import React from "react";
import { BannerContainer } from "./styles";

export default function Banner() {
  return (
    <BannerContainer>
      <div>
        <h2 className="name">Daniel Ferreira dos Santos</h2>
        <h1>Front End Developer</h1>
        <h2>Bem-vindo à minha página!</h2>
        <p>"Programadores e artistas são os únicos profissionais que têm como hobby a própria profissão"  - Rafael Lain</p>
      </div>
    </BannerContainer>
  )
}
