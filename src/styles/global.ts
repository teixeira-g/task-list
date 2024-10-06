import styled from "styled-components/native";

import { fontFamily } from "@/styles/fontFamily";
import { colors } from "@/styles/colors";

export const H1Text = styled.Text`
  font-size: 45px;
  font-family: ${fontFamily.firaSansBd};
  color: ${colors.white};
`;

export const H2Text = styled.Text`
  font-size: 22px;
  font-family: ${fontFamily.interMd};
  color: ${colors.white};
`;

export const H2DarkText = styled.Text`
  font-size: 22px;
  font-family: ${fontFamily.interMd};
  color: ${colors.gray[700]};
`;

export const TitleText = styled.Text`
  font-size: 18px;
  font-family: ${fontFamily.interSb};
  color: ${colors.gray[700]};
  flex-shrink: 1;  
  margin-left: 10px;  
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  font-family: ${fontFamily.interMd};
  color: ${colors.gray[600]};
  flex-shrink: 1;  
`;

export const NotificationText = styled.Text`
  font-size: 30px;
  font-family: ${fontFamily.interSb};
  color: ${colors.gray[700]};
  text-align: center;
`;

export const AuthButtonText = styled.Text`
  font-size: 30px;
  font-family: ${fontFamily.interBd};
  color: ${colors.white};
  text-align: center;
  text-shadow: 1px 1px 2px rgba(16, 44, 57, 0.2);
`;
