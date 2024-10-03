import styled from "styled-components/native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const TitleInputStyled = styled.TextInput.attrs({
  placeholderTextColor: colors.white[100],
})`
  flex-direction: row;
  height: 68px;
  width: 320px;
  padding: 0 24px;
  margin: 24px 12px 0 12px;
  font-family: ${fontFamily.interSb};
  font-size: 20px;
  color: ${colors.white};
  background-color: ${colors.gray[400]};
  border-radius: 18px;
`;

export const DescInputStyled = styled.TextInput.attrs({
  textAlignVertical: "top",
  textBreakStrategy: "highQuality",
  placeholderTextColor: colors.white[100],
})`
  flex-direction: row;
  height: 242px;
  width: 320px;
  padding: 24px;
  margin: 24px 12px 0 12px;
  font-family: ${fontFamily.interReg};
  font-size: 18px;
  color: ${colors.white};
  background-color: ${colors.gray[400]};
  border-radius: 18px;
`;
