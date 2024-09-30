import { colors } from "@/styles/colors";
import styled from "styled-components/native";

export const TaskCardContainer = styled.View`
  height: 78px;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  margin: 0 12px;
  border-radius: 18px;
`;

export const TextContainer = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export const Border = styled.View`
  height: 2px;
  background-color: ${colors.gray[400]};
  border-radius: 1px;
  margin-top: 4px;
  width: 100%;
`;
