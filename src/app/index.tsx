import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useRouter } from "expo-router";

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
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
