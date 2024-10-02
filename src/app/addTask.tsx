import {View, Text, Button, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import {colors} from "@/styles/colors";
import { TitleInput, DescInput } from "@/components/Inputs"
import {ConfirmButton, BackButton} from "@/components/Buttons";

export default function AddTask() {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Text>Nova Tarefa</Text>
        <TitleInput></TitleInput>
        <DescInput></DescInput>
        <ConfirmButton></ConfirmButton>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 150,
    backgroundColor: colors.gray[300],
  },
});