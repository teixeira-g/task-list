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

export const Content = styled.View`
  padding: 15px;
  background-color: ${colors.gray[150]};
  border-radius: 18px;
`;
