import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { TitleInput, DescInput } from "@/components/Inputs";
import { Notification } from "@/components/Notification";
import { TaskCard } from "@/components/TaskCard";

/* type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}; */

export default function LoginScreen() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const [isActiveTasksOpen, setActiveTasksOpen] = useState<boolean>(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] =
    useState<boolean>(false);

  const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
  const handleToggleCompletedTasks = () =>
    setCompletedTasksOpen(!isCompletedTasksOpen);

  // const handleAddTask = () => {
  //   const newTask: Task = {
  //     id: tasks.length + 1,
  //     title: "Tarefa",
  //     description: "Assunto...",
  //     isCompleted: false,
  //   };
  //   setTasks([...tasks, newTask]);
  // };

  // const handleToggleTaskCompletion = (id: number) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  //     )
  //   );
  // };

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
      {/* {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          isCompleted={task.isCompleted}
          onPress={() => handleToggleTaskCompletion(task.id)}
        />
      ))}
      <Button title="Teste" onPress={handleAddTask} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
});
