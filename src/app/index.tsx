import { StyleSheet, View } from "react-native";
import { AddButton, CloseButton, ConfirmButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { InputTasks } from "@/components/Inputs";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
  },
});
