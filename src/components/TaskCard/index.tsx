import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { DescriptionText, TitleText } from "@/styles/global";
import { Border, TaskCardContainer, TextContainer } from "./styles";
import { TouchableOpacity } from "react-native";

type Props = {
  title: string;
  description: string;
  isCompleted: boolean;
  onPress: () => void;
};

export const TaskCard = ({
  title,
  description,
  isCompleted,
  onPress,
}: Props) => {
  return (
    <TaskCardContainer>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Ionicons
          name={isCompleted ? "checkmark-circle" : "ellipse-outline"}
          size={30}
          color={colors.blue}
        />
      </TouchableOpacity>
      <TextContainer>
        <TitleText
          style={{ color: isCompleted ? colors.gray[500] : undefined }}
        >
          {title}
        </TitleText>
        <DescriptionText
          style={{ color: isCompleted ? colors.gray[500] : undefined }}
          numberOfLines={2}
        >
          {description}
        </DescriptionText>

        <Border />
      </TextContainer>
      <Ionicons
        name={"ellipsis-horizontal-circle"}
        size={26}
        color={colors.gray[400]}
        style={{ marginBottom: 32 }}
      />
    </TaskCardContainer>
  );
};
