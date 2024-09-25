import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";

export default function LoginScreen() {
  function handleTest() {
    router.replace("/addTask");
  }

  return (
    <View style={styles.container}>
      <Header />

      <Button/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
  },
});
