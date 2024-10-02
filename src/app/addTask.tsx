import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/styles/colors";
import { TitleInput, DescInput, InputScreen } from "@/components/Inputs";
import { ConfirmButton, BackButton } from "@/components/Buttons";

export default function AddTask() {
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Nova Tarefa</Text>
        <InputScreen />
        <ConfirmButton />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 150,
    backgroundColor: colors.gray[300],
  },
});
