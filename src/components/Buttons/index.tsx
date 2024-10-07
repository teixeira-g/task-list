import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { LoginButtonText } from "@/styles/global";
import {
  LoginButtonContainer,
  AddButtonContainer,
  DeleteButtonContainer,
  ConfirmButtonContainer,
} from "./styles";

type Props = {
  onPress: () => void;
  title?: string;
};

export const LoginButton = ({ onPress, title }: Props) => {
  return (
    <LoginButtonContainer onPress={onPress}>
      <LoginButtonText>{title}</LoginButtonText>
    </LoginButtonContainer>
  );
};

export const AddButton = ({ onPress }: Props) => {
  return (
    <AddButtonContainer onPress={onPress}>
      <Feather name="plus" size={50} color={colors.white} />
    </AddButtonContainer>
  );
};

export const DeleteButton = ({ onPress }: Props) => {
  return (
    <DeleteButtonContainer onPress={onPress}>
      <Feather name="trash-2" size={40} color={colors.white} />
    </DeleteButtonContainer>
  );
};

export const ConfirmButton = ({ onPress }: Props) => {
  return (
    <ConfirmButtonContainer onPress={onPress}>
      <Feather name="check" size={50} color={colors.white} />
    </ConfirmButtonContainer>
  );
};
