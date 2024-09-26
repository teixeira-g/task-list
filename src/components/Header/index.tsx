import React from "react";

import { H1Text, H2Text } from "@/styles/global";
import { HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <H1Text>Olá</H1Text>
      <H2Text style={{ lineHeight: 24 }}>&#123;Usuário&#125;</H2Text>
    </HeaderContainer>
  );
};
