import { router } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

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
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.title}</Text>
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
        <Button title="Desmarcar" onPress={() => onUncomplete(task.id)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskItem;
