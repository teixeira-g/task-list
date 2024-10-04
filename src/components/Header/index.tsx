import { HeaderContainer } from "./styles";
import { H1Text, H2Text } from "@/styles/global";

type Props = {
  username: string | string[];
};

export const Header = ({ username }: Props) => {
  return (
    <HeaderContainer>
      <H1Text>Olá</H1Text>
      <H2Text style={{ lineHeight: 24 }}>{username}</H2Text>
    </HeaderContainer>
  );
};
