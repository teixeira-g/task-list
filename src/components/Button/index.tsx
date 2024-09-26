import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { AddButtonContainer } from "./styles";

export const AddButton = () => {
  return (
    <AddButtonContainer>
      <Feather name="plus" size={40} color={colors.white} />
    </AddButtonContainer>
  );
};
