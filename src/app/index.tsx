import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { TitleInput, DescInput } from "@/components/Inputs";
import { Notification } from "@/components/Notification";
import { TaskCard } from "@/components/TaskCard";
import { useTask } from "@/context/TaskContext";

export default function LoginScreen() {
  const { tasks } = useTask();
  const [isActiveTasksOpen, setActiveTasksOpen] = useState<boolean>(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] =
    useState<boolean>(false);

  const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
  const handleToggleCompletedTasks = () =>
    setCompletedTasksOpen(!isCompletedTasksOpen);

  return (
    <View style={styles.container}>
      <Header />
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
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          isCompleted={task.isCompleted}
          onToggleTaskStatus={() => console.log(task.id)}
          onEditTask={() => console.log(task.id)}
        />
      ))}
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
});
