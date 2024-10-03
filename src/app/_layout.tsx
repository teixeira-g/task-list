import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useFonts, FiraSans_700Bold } from "@expo-google-fonts/fira-sans";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "@/components/loading";
import { colors } from "@/styles/colors";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    FiraSans_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
      <>
        <StatusBar barStyle={"light-content"} />
        <Stack screenOptions={{
          headerShown: true,
          headerStyle:{
            backgroundColor: colors.gray[300],
          },
          headerShadowVisible: false,
        }}>
          <Stack.Screen name="index" options={{title: "Tela inicial",headerShown: false}} />
          <Stack.Screen name="addTask" options={{title: "Nova tarefa"}}/>
        </Stack>
      </>
  );
}