import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { AuthButtonText, H2DarkText } from "@/styles/global";
import {
  AuthButtonContainer,
  AddButtonContainer,
  DeleteButtonContainer,
  ConfirmButtonContainer,
} from "./styles";

type Props = {
  onPress: () => void;
  title ?: string;
};

export const AuthButton = ({ onPress, title }: Props) => {
  return (
    <AuthButtonContainer onPress={onPress}>
      <AuthButtonText>{title}</AuthButtonText>
    </AuthButtonContainer>
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
      <Feather name="x" size={50} color={colors.white} />
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
