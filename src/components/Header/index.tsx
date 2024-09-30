import { HeaderContainer } from "./styles";
import { H1Text, H2Text } from "@/styles/global";

export const Header = () => {
  return (
    <HeaderContainer>
      <H1Text>Olá</H1Text>
      <H2Text style={{ lineHeight: 24 }}>&#123;Usuário&#125;</H2Text>
    </HeaderContainer>
  );
};
