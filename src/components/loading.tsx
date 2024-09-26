import { ActivityIndicator, View } from "react-native";

import { colors } from "@/styles/colors";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  );
};
