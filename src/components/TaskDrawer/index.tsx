import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { TaskContainer, HeaderContainer } from "./styles";
import { DescriptionText, H2DarkText } from "@/styles/global";
import { TaskCard } from "@/components/TaskCard";

type Props = {
  title: string;
  onPress: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
};

export const TaskDrawer = ({ title, onPress, isOpen, children }: Props) => {
  const [tasks, setTasks] = useState<
    { title: string; description: string; check: boolean }[]
  >([]);
  const [taskText, setTaskText] = useState("");

  return (
    <TaskContainer>
      <HeaderContainer>
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
      </HeaderContainer>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TaskCard
            title={item.title}
            description={item.description}
            isCompleted={item.check}
          />
        )}
        ListEmptyComponent={() => (
          <DescriptionText>
            Você ainda não adicionou nenhuma tarefa
          </DescriptionText>
        )}
      />
      {children}
    </TaskContainer>
  );
};
