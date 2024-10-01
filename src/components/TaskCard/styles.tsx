import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #DDE1E2;
    border-radius: 8px;
    overflow: hidden;
    
`;

export const TaskText = styled.Text`
    color: #423839;
    font-size: 16px;
    font-weight: 500;
    justify-content: center;
`;

export const TaskDone = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: rgba(240, 248, 255, 0.03);
    justify-content: center;
    padding: 16px;
`;