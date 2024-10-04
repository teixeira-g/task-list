import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { useRouter, useLocalSearchParams } from "expo-router";
import { TaskCard } from "@/components/TaskCard";

interface SearchParams {
  input?: string;
}

export default function Screen() {
  const router = useRouter();
  const [isActiveTasksOpen, setActiveTasksOpen] = useState(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] = useState(false);

  const { input } = useLocalSearchParams();

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
        />
        <TaskDrawer
          title={"Tarefas concluídas"}
          onPress={handleToggleCompletedTasks}
          isOpen={isCompletedTasksOpen}
        />
        <View>
          <Text>Valor do input: {input ? input : "Nenhum valor ainda"}</Text>
        </View>
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
