import React from "react";
import {Feather} from "@expo/vector-icons";
import {colors} from "@/styles/colors";
import {
    AddButtonContainer,
    CloseButtonContainer,
    ConfirmButtonContainer,
    BackButtonContainer,
} from "./styles";

interface AddButtonProps {
    onPress: () => void
}

export const AddButton: React.FC<AddButtonProps> = ({onPress}) => {

    return (
        <AddButtonContainer onPress={onPress}>
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

export const BackButton = () => {
    return (
        <BackButtonContainer>
            <Feather name={"arrow-left-circle"} size={50} color={colors.white}/>
        </BackButtonContainer>
    );
};
