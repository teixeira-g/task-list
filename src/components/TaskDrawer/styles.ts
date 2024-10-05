import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #e0f0f1;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b0c4c6;
  margin-bottom: 5px;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.View`
  padding: 15px;
  background-color: #dfe7e9;
`;

export const TaskItem = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
