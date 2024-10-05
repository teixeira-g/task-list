import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.gray[300]};
  margin: 10px;
  padding: 16px;
  border-radius: 18px;
  overflow: hidden;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 18px;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.View`
  padding: 15px;
  background-color: #dfe7e9;
  border-radius: 18px;
`;

export const TaskItem = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
