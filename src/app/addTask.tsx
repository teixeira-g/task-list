import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/styles/colors";
import { TitleInput, DescInput } from "@/components/Inputs";
import { ConfirmButton, BackButton } from "@/components/Buttons";
import { fontFamily } from "@/styles/fontFamily";

export default function AddTask() {
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TitleInput />
        <DescInput />
        <ConfirmButton />
        <BackButton onPress={() => router.back()} />
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
