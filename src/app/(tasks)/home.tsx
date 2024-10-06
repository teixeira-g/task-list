import React from "react";
import { StyleSheet, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { AddButton } from "@/components/Buttons";
import { useTasks } from "@/context/TaskContext";

export default function Home() {
  const { username } = useLocalSearchParams();
  const { tasks, completedTasks, completeTask, uncompleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <AddButton
        onPress={() => {
          router.push("./addTask");
        }}
      />
      <Header username={username} />
      <TaskDrawer
        tasks={tasks}
        completedTasks={completedTasks}
        onComplete={completeTask}
        onUncomplete={uncompleteTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
});
