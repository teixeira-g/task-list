import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import {
  AddButtonContainer,
  DeleteButtonContainer,
  ConfirmButtonContainer,
} from "./styles";
import React from "react";

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

export const DeleteButton: React.FC<AddButtonProps> = ({ onPress }) =>{
  return (
    <DeleteButtonContainer onPress={onPress}>
      <Feather name="x" size={50} color={colors.white} />
    </DeleteButtonContainer>
  );
};

export const ConfirmButton: React.FC<AddButtonProps> = ({ onPress }) =>{
  return (
    <ConfirmButtonContainer onPress={onPress}>
      <Feather name="check" size={50} color={colors.white} />
    </ConfirmButtonContainer>
  );
};
