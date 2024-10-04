import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import {
  AddButtonContainer,
  DeleteButtonContainer,
  ConfirmButtonContainer,
} from "./styles";

type ButtonProps = {
  onPress: () => void;
};

export const AddButton = ({ onPress }: ButtonProps) => {
  return (
    <AddButtonContainer onPress={onPress}>
      <Feather name="plus" size={50} color={colors.white} />
    </AddButtonContainer>
  );
};

export const DeleteButton = ({ onPress }: ButtonProps) => {
  return (
    <DeleteButtonContainer onPress={onPress}>
      <Feather name="x" size={50} color={colors.white} />
    </DeleteButtonContainer>
  );
};

export const ConfirmButton = ({ onPress }: ButtonProps) => {
  return (
    <ConfirmButtonContainer onPress={onPress}>
      <Feather name="check" size={50} color={colors.white} />
    </ConfirmButtonContainer>
  );
};
