import React from "react";
import { AboutText } from "./styles";
import MeImg from "../../assets/img/EuMesmo.jpg"

export default function About() {
  return (
    <AboutText>
      <img src={MeImg} alt="Daniel" />
      <div className="Text">
        <h2>Sobre Mim</h2>
        <p>Olá! Seja muito bem-vindo à minha página de apresentação profissional!
          É um grande prazer recebê-lo aqui. Meu nome é Daniel Ferreira dos Santos,
          moro no Rio de Janeiro. Amante de tecnologia desde que posso me lembrar.
          Sempre muito curioso em saber o que faz os programas e sites funcionarem
          da forma como funcionam, entrei no mundo da programação e me fascinei!</p>

        <p>Dentre as minhas skills estão algumas das ferramentas de desenvolvimento Front End,
          as quais são: HTML, CSS, Javascript, React Js, Next, Typescript, Bootstrap.
          O Back End principalmente com o estudo de Node Js, e banco de dados. Mas, claro,
          continuo sempre estudando e me aprofundando para ampliar cada vez mais meus
          conhecimentos, a fim de me tornar um profissional cada vez melhor.</p>

        <p>Tenho facilidade de lidar com outras pessoas.
          Considero-me alguém com boa capacidade analítica, o que é muito bom para
          resolução de problemas, e me sinto altamente motivado com desafios.
          E aí, vamos trabalhar juntos?</p>
      </div>
    </AboutText>
  )
}
