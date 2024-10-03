import styled from "styled-components/native";

import { colors } from "@/styles/colors";

export const TaskContainer = styled.View`
  height: 120px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.gray[200]};
  padding: 0 24px;
  margin: 15px 12px 0 12px;
  border-radius: 18px;
`;
