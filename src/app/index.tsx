import { StyleSheet, View, Text, Button } from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { useState, useCallback } from "react";
import React from 'react'
import { TitleInput, DescInput } from "@/components/Inputs";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {router, useRouter} from "expo-router";

export default function LoginScreen() {
  const [isActiveTasksOpen, setActiveTasksOpen] = useState<boolean>(false);
  const [isCompletedTasksOpen, setCompletedTasksOpen] =
    useState<boolean>(false);

  const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
  const handleToggleCompletedTasks = () =>
    setCompletedTasksOpen(!isCompletedTasksOpen);

  const router = useRouter();

  //renders
  return (
   <GestureHandlerRootView style={{flex: 1}}>
       <View style={styles.container}>
           <AddButton />
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

       </View>
   </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[300],
  },
});
