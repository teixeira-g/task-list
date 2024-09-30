import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { TaskContainer } from "./styles";
import { H2DarkText } from "@/styles/global";

type Props = {
  title: string;
  onPress: () => void;
  isOpen: boolean;
};

export const TaskDrawer = ({ title, onPress, isOpen }: Props) => {
  return (
    <TaskContainer>
      <H2DarkText>{title}</H2DarkText>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Feather
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={34}
          color={isOpen ? colors.gray[600] : colors.gray[400]}
        />
      </TouchableOpacity>
    </TaskContainer>
  );
};
