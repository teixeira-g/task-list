import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/styles/colors";

export default function TaskListScreen() {
  return (
    <View style={styles.container}>
      <Text>Task List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[200],
    alignItems: "center",
    justifyContent: "center",
  },
});
