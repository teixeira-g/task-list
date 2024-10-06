import { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

import { colors } from "@/styles/colors";
import { SmallInput } from "@/components/Inputs";
import { ConfirmButton } from "@/components/Buttons";
import { useTasks } from "@/context/TaskContext";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const { addTask } = useTasks();

  // Função para confirmar a adição da tarefa
  const handleConfirm = () => {
    if (title.trim()) {
      // Verifica se o título não está vazio
      addTask(title);
      router.back();
    } else {
      // Pode exibir uma mensagem de erro ou feedback se o título estiver vazio
      Alert.alert(
        "Ops", // Título do alerta
        "O título não pode estar vazio", // Mensagem do alerta
        [{ text: "OK", onPress: () => console.log("Alerta de título vazio") }]
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Digite aqui sua tarefa"}
          value={title}
          onChangeText={setTitle}
        />

        <ConfirmButton onPress={handleConfirm} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 100,
    backgroundColor: colors.gray[300],
  },
});
