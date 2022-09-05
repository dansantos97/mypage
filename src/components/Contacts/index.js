import React from "react";
import { ContactsContainer } from "./styles";

export default function Contacts() {
  return (
    <ContactsContainer>
        <h1>Entre em contato comigo!</h1>
        <ul>
          <li className="email">
            <a href="mailto:danferreira.santos@hotmail.com" target='_blank' rel="noreferrer">danferreira.santos@hotmail.com</a>
          </li>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/dansantosdev" target='_blank' rel="noreferrer">Visite meu Linkedin</a>
          </li>
          <li className="github">
            <a href="https://github.com/dansantos97" target='_blank' rel="noreferrer">Acesse meu perfil no Github</a>
          </li>
          <li className="insta">
            <a href="https://www.instagram.com/danferreirarj" target='_blank' rel="noreferrer">Visite meu Instagram</a>
          </li>
          <li className="whatsapp">
            Tel/WhatsApp: (21)98015-4830
          </li>
        </ul>
    </ContactsContainer>
  )
}
