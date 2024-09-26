import { StyleSheet, View } from "react-native";
import { AddButton } from "@/components/Button";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
  },
});
