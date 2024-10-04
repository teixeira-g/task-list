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
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.gray[300],
          },
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTintColor: colors.gray[600],
          headerTitleStyle: {
            color: colors.gray[700],
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Login", headerShown: true }}
        />
        <Stack.Screen name="(tasks)" />
      </Stack>
    </>
  );
}
