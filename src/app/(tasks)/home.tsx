import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import TaskDrawer from "@/components/TaskDrawer";
import { useRouter, useLocalSearchParams } from "expo-router";
import { TaskCard } from "@/components/TaskCard";
import "@expo/metro-runtime";

export default function Home() {
  const router = useRouter();
  const [isActiveTasksOpen, setActiveTasksOpen] = useState(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] = useState(false);

  const { username } = useLocalSearchParams();

  const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
  const handleToggleCompletedTasks = () =>
    setCompletedTasksOpen(!isCompletedTasksOpen);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <AddButton onPress={() => router.navigate("/addTask")} />
        <Header username={username} />
        <TaskDrawer />
        <Text>
          {/* Valor do input: {input ? input : "Nenhum valor ainda"} */}
        </Text>
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
