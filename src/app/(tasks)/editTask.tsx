import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "@/styles/colors";
import { SmallInput, LargeInput } from "@/components/Inputs";
import { DeleteButton, ConfirmButton } from "@/components/Buttons";
import { fontFamily } from "@/styles/fontFamily";
import { useState } from "react";
import { Notification } from "@/components/Notification";
import { router } from "expo-router";

export default function EditTask() {
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleDeletePress = () => {
    setNotificationVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SmallInput placeholder={"Título"} />
        <LargeInput placeholder={"Descricão"} />
        <ConfirmButton onPress={() => router.back()} />
        <DeleteButton onPress={handleDeletePress} />
        <Notification
          visible={notificationVisible}
          onPress={() => router.back()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 25,
    backgroundColor: colors.gray[300],
  },

  title: {
    fontFamily: fontFamily.interBd,
    fontSize: 40,
    color: colors.white,
    paddingBottom: 30,
  },
});
