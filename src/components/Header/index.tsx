import React from "react";

import { H1Text } from "@/styles/global";
import { HeaderContainer } from "./styles";
import { Text } from "react-native";

export const Header = () => {
  return (
    <HeaderContainer>
      <H1Text>Olá</H1Text>
      <Text style={{ color: "#FFFFFF" }}>Nome do usuario</Text>
    </HeaderContainer>
  );
};
