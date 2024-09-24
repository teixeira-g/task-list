import styled from "styled-components/native";

import { colors } from "@/styles/colors";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const NotificationContainer = styled.View`
  height: 148px;
  padding: 50px 24px 24px;
  background-color: ${colors.gray[200]};
  position: relative;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
`;

export const Banner = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${colors.blue};
  position: absolute;
  top: 0;
`;
