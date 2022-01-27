import React from "react";
import Menu from "../Menu";

import { Container, HeaderContainer } from "./styles";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Container>
          <Menu />
        </Container>
      </HeaderContainer>
    </>
  )
}
