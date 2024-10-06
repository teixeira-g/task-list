import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

import { colors } from "@/styles/colors";
import { TitleText } from "@/styles/global";
import { TaskItemContainer } from "./styles";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
  };
  onComplete: (taskId: string) => void;
  onUncomplete: (taskId: string) => void;
  isCompleted: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onComplete,
  onUncomplete,
  isCompleted,
}) => {
  return (
    <TaskItemContainer>
      <TitleText>{task.title}</TitleText>
      {!isCompleted ? (
        <>
          <Button title="Concluir" onPress={() => onComplete(task.id)} />
          <Button
            title="Editar"
            onPress={() =>
              router.push({
                pathname: "./editTask",
                params: { taskId: task.id },
              })
            }
          />
        </>
      ) : (
        <>
          <Button title="Desmarcar" onPress={() => onUncomplete(task.id)} />
          <Button
            title="Editar"
            onPress={() =>
              router.push({
                pathname: "./editTask",
                params: { taskId: task.id },
              })
            }
          />
        </>
      )}
    </TaskItemContainer>
  );
};

export default TaskItem;
