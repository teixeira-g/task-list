import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const TaskItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray[300]};
`;
