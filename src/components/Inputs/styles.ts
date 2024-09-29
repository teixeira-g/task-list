import styled from "styled-components/native";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const TitleInputStyled = styled.TextInput.attrs({
  placeholderTextColor: colors.gray[500],
})`
  flex-direction: row;
  height: 68px;
  padding: 0 24px;
  margin: 24px 12px 0 12px;
  font-family: ${fontFamily.interReg};
  font-size: 16px;
  color: ${colors.gray[700]};
  background-color: ${colors.gray[300]};
  border-radius: 18px;
`;

export const DescInputStyled = styled.TextInput.attrs({
  textAlignVertical: "top",
  placeholderTextColor: colors.gray[500],
})`
  flex-direction: row;
  height: 242px;
  padding: 24px;
  margin: 24px 12px 0 12px;
  font-family: ${fontFamily.interReg};
  font-size: 16px;
  color: ${colors.gray[700]};
  background-color: ${colors.gray[300]};
  border-radius: 18px;
`;
