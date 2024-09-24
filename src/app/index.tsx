import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header/>
        <Button title={"Task List"} onPress={handleTest}></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
  },
});
