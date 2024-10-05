import { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SmallInput, LargeInput } from "@/components/Inputs";
import { ConfirmButton } from "@/components/Buttons";
import { useRouter } from "expo-router";
import { useTasks } from "@/context/TaskContext"; // Importe o hook useTasks
import { colors } from "@/styles/colors";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { addTask } = useTasks();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Título"}
          value={title}
          onChangeText={setTitle}
        />
        <LargeInput
          placeholder={"Descricão"}
          value={description}
          onChangeText={setDescription}
        />
        <ConfirmButton
          onPress={() => {
            const newTaskTitle = "Nova Tarefa"; // Aqui você pode adicionar lógica para pegar o título de uma entrada de texto
            addTask(newTaskTitle);
            router.back();
          }}
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
