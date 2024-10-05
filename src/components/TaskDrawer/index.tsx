import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import TaskItem from "@/components/TaskCard";
import { Container, Content, Header, HeaderText } from "./styles";

interface Task {
  id: string;
  title: string;
}

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
        onPress={() => setIsOpenExpanded(!isOpenExpanded)} // Alterna a seção de tarefas em aberto
      >
        <Header>
          <HeaderText>Tarefas em aberto</HeaderText>
          <Feather
            name={isOpenExpanded ? "chevron-up" : "chevron-down"}
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
              <Text style={styles.emptyMessage}>
                Você ainda não adicionou nenhuma tarefa
              </Text>
            }
            style={styles.flatList} // Adicionando estilo para o FlatList
          />
        </Content>
      )}

      <TouchableOpacity
        onPress={() => setIsCompletedExpanded(!isCompletedExpanded)} // Alterna a seção de tarefas concluídas
      >
        <Header>
          <HeaderText>Tarefas concluídas</HeaderText>
          <Feather
            name={isCompletedExpanded ? "chevron-up" : "chevron-down"}
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
              <Text style={styles.emptyMessage}>
                Você ainda não concluiu nenhuma tarefa
              </Text>
            }
            style={styles.flatList} // Adicionando estilo para o FlatList
          />
        </Content>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyMessage: {
    textAlign: "center",
    color: "#888", // Cor do texto vazio
    padding: 10,
  },
  flatList: {
    maxHeight: 300, // Define uma altura máxima para o FlatList, ajuste conforme necessário
  },
});

export default TaskManager;
