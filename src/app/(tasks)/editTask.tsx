import { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { colors } from "@/styles/colors";
import { SmallInput } from "@/components/Inputs";
import { DeleteButton, ConfirmButton } from "@/components/Buttons";
import { Notification } from "@/components/Notification";
import { useTasks } from "@/context/TaskContext";

type LocalSearchParams = {
  taskId: string;
};

export default function EditTask() {
  const { tasks, editTask, deleteTask } = useTasks();
  const { taskId } = useLocalSearchParams<LocalSearchParams>(); // Receber o id da tarefa pelo router

  const task = tasks.find((t) => t.id === taskId);

  const [title, setTitle] = useState(task?.title || "");
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleEditPress = () => {
    if (taskId && title) {
      editTask(taskId, title);
      router.back();
    }
  };

  const handleDeletePress = () => {
    deleteTask(taskId);
    setNotificationVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Digite sua tarefa"}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <ConfirmButton onPress={handleEditPress} />
        <DeleteButton onPress={handleDeletePress} />
        <Notification
          visible={notificationVisible}
          onPress={() => router.back()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
    backgroundColor: colors.gray[300],
  },
});
