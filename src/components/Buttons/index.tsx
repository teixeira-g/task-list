import React from "react";
import {Feather} from "@expo/vector-icons";
import {colors} from "@/styles/colors";
import {
    AddButtonContainer,
    CloseButtonContainer,
    ConfirmButtonContainer,
} from "./styles";
import {useRouter} from "expo-router";

interface AddButtonProps {
    onPress?: () => void
}

export const AddButton = ({onPress}: AddButtonProps) => {
   const router = useRouter();

    return (
        <AddButtonContainer>
            <Feather name="plus" size={50} color={colors.white}/>
        </AddButtonContainer>
    );
};

export const CloseButton = () => {
    return (
        <CloseButtonContainer>
            <Feather name="x" size={50} color={colors.white}/>
        </CloseButtonContainer>
    );
};

export const ConfirmButton = () => {
    return (
        <ConfirmButtonContainer>
            <Feather name="check" size={50} color={colors.white}/>
        </ConfirmButtonContainer>
    );
};
