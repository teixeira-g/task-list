import styled from "styled-components/native";

import { colors } from "@/styles/colors";

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const NotificationContainer = styled.View`
  width: 80%;
  height: 148px;
  padding: 50px 24px 24px;
  background-color: ${colors.gray[200]};
  position: relative;
  justify-content: center;
  border-radius: 18px;
  overflow: hidden;
`;

export const Banner = styled.View`
  height: 50px;
  background-color: ${colors.blue};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
