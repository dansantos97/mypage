import React from "react";
import { ContainerMenu } from "./styles";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ContainerMenu>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>Sobre</Link></li>
        <li><Link to={"/projects"}>Projetos</Link></li>
        <li><Link to={"/Contacts"}>Contatos</Link></li>
      </ul>
    </ContainerMenu>
  )
}
