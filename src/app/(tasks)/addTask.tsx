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
import { Alert } from 'react-native';

export default function AddTask() {
  const [title, setTitle] = useState(""); // Estado para armazenar o título
  const [description, setDescription] = useState(""); // Estado para armazenar a descrição (opcional)
  const router = useRouter();
  const { addTask } = useTasks(); // Acesso à função addTask do contexto

  // Função para confirmar a adição da tarefa
  const handleConfirm = () => {
    if (title.trim()) {
      // Verifica se o título não está vazio
      addTask(title); // Adiciona a tarefa com o título fornecido
      router.back(); // Navega de volta à tela anterior/v
    } else {
      // Pode exibir uma mensagem de erro ou feedback se o título estiver vazio
      Alert.alert(
          "Ops", // Título do alerta
          "O título não pode estar vazio", // Mensagem do alerta
          [
            { text: "OK", onPress: () => console.log("Alerta de título vazio") }
          ]
      );
      //console.log("O título da tarefa não pode estar vazio.");

    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput
          placeholder={"Digite aqui sua tarefa"} // Placeholder do input
          value={title} // Valor do input
          onChangeText={setTitle} // Atualiza o valor do título
        />

        <ConfirmButton
          onPress={handleConfirm} // Chama a função handleConfirm ao clicar no botão
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
    paddingTop: 100,
    backgroundColor: colors.gray[300],
  },
});
