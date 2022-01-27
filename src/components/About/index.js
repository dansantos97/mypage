import React from "react";
import { AboutContainer } from "./styles";
import MeImg from "../../assets/img/EuMesmo.jpg"

export default function About() {
  return (
    <AboutContainer>
      <div>
        <img src={MeImg} alt="Daniel" />
        <div className="Text">
          <h2>Sobre Mim</h2>
          <p>Olá! Seja muito bem-vindo à minha página de apresentação profissional!
            É um grande prazer recebê-lo aqui. Meu nome é Daniel Ferreira dos Santos,
            tenho 24 anos de idade e moro na cidade de Nilópolis, no Rio de Janeiro.
            Amante de tecnologia desde que posso me lembrar. Sempre muito curioso em
            saber o que faz os programas e sites funcionarem da forma como funcionam,
            entrei no mundo da programação e me fascinei! Esse fascínio tem me levado
            a mergulhar cada vez mais nessa vastidão de conhecimento.</p>

          <p>Nesse caminho de estudo, tenho focado bastante no aprendizado das
            ferramentas de desenvolvimento Front End, dentre elas: HTML, CSS,
            Javascript, React Js, Typescript, Bootstrap, sem deixar de lado o Back End,
            principalmente com o estudo de Node Js. Mas, claro, continuo sempre estudando
            e me aprofundando para ampliar cada vez mais meus conhecimentos,
            a fim de me tornar um profissional cada vez melhor.</p>

          <p>Além disso, sou bastante comunicativo, sei que essa é uma habilidade de extrema
            importância. Gosto de interagir com outras pessoas. Sou grande fã de esportes,
            amante de livros e música, trompetista. Um jovem com muita vontade de fazer a
            diferença pronto para quaisquer desafios que surgirem. E aí, vamos trabalhar juntos?</p>
        </div>
      </div>
    </AboutContainer>
  )
}
