import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import TaskItem from "@/components/TaskCard"; // Importando o novo componente

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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => setIsOpenExpanded(!isOpenExpanded)} // Alterna a seção de tarefas em aberto
      >
        <Text style={styles.sectionTitle}>Tarefas em aberto</Text>
      </TouchableOpacity>
      {isOpenExpanded && (
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
      )}

      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => setIsCompletedExpanded(!isCompletedExpanded)} // Alterna a seção de tarefas concluídas
      >
        <Text style={styles.sectionTitle}>Tarefas concluídas</Text>
      </TouchableOpacity>
      {isCompletedExpanded && (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f4f4f4", // Cor de fundo leve
  },
  sectionHeader: {
    backgroundColor: "#ccc", // Cor de fundo do cabeçalho
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#fff", // Cor do texto do cabeçalho
    fontSize: 18,
    fontWeight: "bold",
  },
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
