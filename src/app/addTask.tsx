import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "@/styles/colors";
import { TitleInput, DescInput } from "@/components/Inputs";
import { ConfirmButton } from "@/components/Buttons";
import { fontFamily } from "@/styles/fontFamily";
import {useState} from "react";
import {useRouter} from "expo-router";

export default function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleNavigateBack = () => {
    router.back({
      pathname: '/index',
      params: {"input": inputValue},
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TitleInput
          value={inputValue}
          onChangeText={setInputValue}
        />
        <DescInput />
        <ConfirmButton onPress={handleNavigateBack} />
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
