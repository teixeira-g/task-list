import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import {
  AddButtonContainer,
  CloseButtonContainer,
  ConfirmButtonContainer,
} from "./styles";

interface AddButtonProps {
  onPress: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <AddButtonContainer onPress={onPress}>
      <Feather name="plus" size={50} color={colors.white} />
    </AddButtonContainer>
  );
};

export const CloseButton = () => {
  return (
    <CloseButtonContainer>
      <Feather name="trash-2" size={50} color={colors.white} />
    </CloseButtonContainer>
  );
};

export const ConfirmButton = () => {
  return (
    <ConfirmButtonContainer>
      <Feather name="check" size={50} color={colors.white} />
    </ConfirmButtonContainer>
  );
};
