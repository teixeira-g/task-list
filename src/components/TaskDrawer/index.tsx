import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import { TaskCard } from "@/components/TaskCard";
import { Container, Content, Header } from "./styles";
import { DescriptionText, H2DarkText } from "@/styles/global";
import { TaskProps } from "@/utils/types";

type TaskDrawerProps = {
  tasks: TaskProps[];
  completedTasks: TaskProps[];
  onComplete: (taskId: string) => void;
  onUncomplete: (taskId: string) => void;
};

export const TaskDrawer: React.FC<TaskDrawerProps> = ({
  tasks,
  completedTasks,
  onComplete,
  onUncomplete,
}) => {
  const [isOpenExpanded, setIsOpenExpanded] = useState<boolean>(false);
  const [isCompletedExpanded, setIsCompletedExpanded] =
    useState<boolean>(false);

  return (
    <Container>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOpenExpanded(!isOpenExpanded)}
      >
        <Header>
          <H2DarkText>Tarefas em aberto</H2DarkText>
          <Feather
            name={isOpenExpanded ? "chevron-up" : "chevron-down"}
            color={isOpenExpanded ? colors.gray[500] : colors.gray[600]}
            size={30}
          ></Feather>
        </Header>
      </TouchableOpacity>
      {isOpenExpanded && (
        <Content>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskCard
                task={item}
                onComplete={onComplete}
                onUncomplete={() => {}}
                isCompleted={false}
              />
            )}
            ListEmptyComponent={
              <DescriptionText style={{ textAlign: "center", padding: 10 }}>
                Nenhuma tarefa em aberto
              </DescriptionText>
            }
          />
        </Content>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsCompletedExpanded(!isCompletedExpanded)}
      >
        <Header>
          <H2DarkText>Tarefas concluídas</H2DarkText>
          <Feather
            name={isCompletedExpanded ? "chevron-up" : "chevron-down"}
            color={isCompletedExpanded ? colors.gray[500] : colors.gray[600]}
            size={30}
          ></Feather>
        </Header>
      </TouchableOpacity>
      {isCompletedExpanded && (
        <Content>
          <FlatList
            data={completedTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskCard
                task={item}
                onComplete={() => {}}
                onUncomplete={onUncomplete}
                isCompleted={true}
              />
            )}
            ListEmptyComponent={
              <DescriptionText style={{ textAlign: "center", padding: 10 }}>
                Nenhuma tarefa concluída
              </DescriptionText>
            }
          />
        </Content>
      )}
    </Container>
  );
};
