import { StyleSheet, View } from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { useState } from "react";

export default function LoginScreen() {
  const [isActiveTasksOpen, setActiveTasksOpen] = useState<boolean>(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] =
    useState<boolean>(false);

  const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
  const handleToggleCompletedTasks = () =>
    setCompletedTasksOpen(!isCompletedTasksOpen);

  return (
    <View style={styles.container}>
      <Header />
      <AddButton />
      <TaskDrawer
        title={"Tarefas em aberto"}
        onPress={handleToggleActiveTasks}
        isOpen={isActiveTasksOpen}
      />
      <TaskDrawer
        title={"Tarefas concluídas"}
        onPress={handleToggleCompletedTasks}
        isOpen={isCompletedTasksOpen}
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
