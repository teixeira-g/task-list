import React from "react";
import { StyleSheet, View } from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import TaskManager from "@/components/TaskDrawer";
import { router, useLocalSearchParams } from "expo-router";
import { useTasks } from "@/context/TaskContext"; // Importe o hook useTasks

export default function Home() {
  const { username } = useLocalSearchParams();
  const { tasks, completedTasks, completeTask, uncompleteTask, addTask } =
    useTasks();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <AddButton
          onPress={() => {
            router.push("./addTask");
          }}
        />
        <Header username={username} />
        <TaskManager
          tasks={tasks} // Passando as tarefas para o TaskManager
          completedTasks={completedTasks} // Passando tarefas concluídas
          onComplete={completeTask} // Passando a função para completar tarefas
          onUncomplete={uncompleteTask} // Passando a função para desmarcar tarefas
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
});
