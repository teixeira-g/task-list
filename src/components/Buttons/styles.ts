import { colors } from "@/styles/colors";
import styled from "styled-components/native";

export const AddButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${colors.blue};
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  right: 30px;
  z-index: 10;
`;

export const DeleteButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${colors.red};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: 30px;
`;

export const ConfirmButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  right: 30px;
`;
