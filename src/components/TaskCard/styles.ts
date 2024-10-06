import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const TaskItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray[300]};
  align-items: center;  
`;
