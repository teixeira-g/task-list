import styled from "styled-components/native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const SmallInputStyled = styled.TextInput.attrs({
  placeholderTextColor: colors.gray[600],
})`
  flex-direction: row;
  width: 320px;
  height: 68px;
  padding: 0 24px;
  margin: 12px 12px 0 12px;
  font-family: ${fontFamily.interSb};
  font-size: 20px;
  color: ${colors.white};
  background-color: ${colors.gray[400]};
  border-radius: 18px;
`;

export const LargeInputStyled = styled.TextInput.attrs({
  textAlignVertical: "top",
  textBreakStrategy: "highQuality",
  placeholderTextColor: colors.gray[600],
})`
  flex-direction: row;
  width: 320px;
  height: 242px;
  padding: 24px;
  margin: 24px 12px 0 12px;
  font-family: ${fontFamily.interReg};
  font-size: 18px;
  color: ${colors.white};
  background-color: ${colors.gray[400]};
  border-radius: 18px;
`;
