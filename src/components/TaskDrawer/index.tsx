import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import TaskItem from "@/components/TaskCard";
import { Container, Content, Header } from "./styles";
import { DescriptionText, H2DarkText } from "@/styles/global";

type Task = {
  id: string;
  title: string;
};

interface TaskManagerProps {
  tasks: Task[]; // Recebendo tarefas como props
  completedTasks: Task[]; // Recebendo tarefas concluídas como props
  onComplete: (taskId: string) => void; // Função para completar tarefas
  onUncomplete: (taskId: string) => void; // Função para desmarcar tarefas
}

const TaskManager: React.FC<TaskManagerProps> = ({
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
        onPress={() => setIsOpenExpanded(!isOpenExpanded)} // Alterna a seção de tarefas em aberto
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
              <TaskItem
                task={item}
                onComplete={onComplete} // Passando a função para completar
                onUncomplete={() => {}} // Sem ação, já que isso não deve ser possível aqui
                isCompleted={false}
              />
            )}
            ListEmptyComponent={
              <DescriptionText style={{ textAlign: "center", padding: 10 }}>
                Nenhuma tarefa em aberto
              </DescriptionText>
            }
            style={{ maxHeight: 300 }} // Adicionando estilo para o FlatList
            showsVerticalScrollIndicator={false}
          />
        </Content>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsCompletedExpanded(!isCompletedExpanded)} // Alterna a seção de tarefas concluídas
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
              <TaskItem
                task={item}
                onComplete={() => {}} // Sem ação, já que isso não deve ser possível aqui
                onUncomplete={onUncomplete} // Passando a função para desmarcar
                isCompleted={true}
              />
            )}
            ListEmptyComponent={
              <DescriptionText style={{ textAlign: "center", padding: 10 }}>
                Nenhuma tarefa concluída
              </DescriptionText>
            }
            style={{ maxHeight: 300 }} // Adicionando estilo para o FlatList
            showsVerticalScrollIndicator={false}
          />
        </Content>
      )}
    </Container>
  );
};

export default TaskManager;
