import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "@/styles/colors";
import { SmallInput, LargeInput } from "@/components/Inputs";
import { DeleteButton, ConfirmButton } from "@/components/Buttons";
import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { Notification } from "@/components/Notification";
import { router, useLocalSearchParams } from "expo-router";

type LocalSearchParams = {
  taskId: string;
};

export default function EditTask() {
  const { tasks, editTask, deleteTask } = useTasks(); // Importar deleteTask do contexto
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
    deleteTask(taskId); // Deletar a tarefa do contexto
    router.back(); // Voltar para a tela anterior após deletar
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Título"}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        {/* <LargeInput
          placeholder={"Descrição"} // Placeholder para a descrição (opcional)
          value={description} // Valor do input de descrição
          onChangeText={setDescription} // Atualiza o valor da descrição
        /> */}
        <ConfirmButton onPress={handleEditPress} />
        <DeleteButton onPress={handleDeletePress} />
        {/* Chama handleDeletePress */}
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
