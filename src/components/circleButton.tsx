import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export const RoundButton = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.6}>
      <Feather name="plus" size={40} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.blue,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
