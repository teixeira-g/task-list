import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/styles/colors";
import { SmallInput } from "@/components/Inputs";
import { H2DarkText } from "@/styles/global";
import { AuthButton } from "@/components/Buttons";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.replace({
      pathname: "/home",
      params: { username },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <H2DarkText style={{ fontSize: 30, color: colors.gray[600] }}>
          Digite seu nome
        </H2DarkText>
        <SmallInput
          value={username}
          onChangeText={setUsername}
          placeholder={"Nome de usuário"}
        />
        <View style={{ marginTop: 20 }}>
          <AuthButton title="Entrar" onPress={handleLogin} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[300],
  },
});
