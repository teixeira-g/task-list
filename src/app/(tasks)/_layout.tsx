import { router, Stack } from "expo-router";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function TaskLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
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
          headerBackTitleVisible: false,
          headerLeft: ({ canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity
                onPress={() => router.back()}
                activeOpacity={0.6}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color={colors.gray[600]}
                />
              </TouchableOpacity>
            ) : null,
        }}
      >
        <Stack.Screen
          name="addTask"
          options={{
            title: "Nova Tarefa",
          }}
        />
        <Stack.Screen
          name="editTask"
          options={{
            title: "Editar Tarefa",
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            title: "Editar Tarefa",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
