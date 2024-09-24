import { Button, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { colors } from "@/styles/colors";
import { Notification } from "@/components/Notification";
import { Header } from "@/components/Header";
import { RoundButton } from "@/components/circleButton";

export default function LoginScreen() {
  function handleTest() {
    router.replace("/task-list");
  }

  return (
    <View style={styles.container}>
      <Header />
      <Button title={"Task List"} onPress={handleTest}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
  },
});
