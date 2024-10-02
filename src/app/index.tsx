import { StyleSheet, View } from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { useState } from "react";
import React from "react";
import { useRouter } from "expo-router";
import { TaskCard } from "@/components/TaskCard";

export default function LoginScreen() {
  const router = useRouter();

  const [isActiveTasksOpen, setActiveTasksOpen] = useState<boolean>(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] =
    useState<boolean>(false);

  const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
  const handleToggleCompletedTasks = () =>
    setCompletedTasksOpen(!isCompletedTasksOpen);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <AddButton onPress={() => router.push("/addTask")} />
        <Header />
        <TaskDrawer
          title={"Tarefas em aberto"}
          onPress={handleToggleActiveTasks}
          isOpen={isActiveTasksOpen}
        ></TaskDrawer>

        <TaskDrawer
          title={"Tarefas concluídas"}
          onPress={handleToggleCompletedTasks}
          isOpen={isCompletedTasksOpen}
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
