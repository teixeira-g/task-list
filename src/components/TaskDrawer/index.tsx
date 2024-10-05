import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Container, Header, HeaderText, Content, TaskItem } from "./styles";

interface Task {
  id: string;
  title: string;
}

const TaskManager: React.FC = () => {
  const [openTasks, setOpenTasks] = useState<Task[]>([
    { id: "1", title: "Tarefa 1" },
    { id: "2", title: "Tarefa 2" },
  ]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [isOpenExpanded, setIsOpenExpanded] = useState<boolean>(false);
  const [isCompletedExpanded, setIsCompletedExpanded] =
    useState<boolean>(false);

  const router = useRouter();
  const { newTask } = useLocalSearchParams<{ newTask?: string }>(); // Parâmetro da navegação

  useEffect(() => {
    if (newTask) {
      addNewTask(newTask);
    }
  }, [newTask]);

  // Função para adicionar nova tarefa
  const addNewTask = (taskTitle: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title: taskTitle,
    };
    setOpenTasks((prevOpenTasks) => [...prevOpenTasks, newTask]);
  };

  // Função para marcar tarefa como concluída
  const completeTask = (taskId: string) => {
    const taskToMove = openTasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setOpenTasks((prevOpenTasks) =>
        prevOpenTasks.filter((task) => task.id !== taskId)
      );
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        taskToMove,
      ]);
    }
  };

  // Função para desmarcar tarefa concluída
  const uncompleteTask = (taskId: string) => {
    const taskToMove = completedTasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task.id !== taskId)
      );
      setOpenTasks((prevOpenTasks) => [...prevOpenTasks, taskToMove]);
    }
  };

  const renderTaskItem = ({ item }: { item: Task }, isCompleted = false) => (
    <TaskItem>
      <Text>{item.title}</Text>
      {!isCompleted ? (
        <Button title="Concluir" onPress={() => completeTask(item.id)} />
      ) : (
        <Button title="Desmarcar" onPress={() => uncompleteTask(item.id)} />
      )}
    </TaskItem>
  );

  return (
    <Container>
      <Button
        title="Adicionar Nova Tarefa"
        onPress={() => router.push("/add")}
      />

      <TouchableOpacity onPress={() => setIsOpenExpanded(!isOpenExpanded)}>
        <Header>
          <HeaderText>Tarefas em aberto</HeaderText>
          <Text>{isOpenExpanded ? "▲" : "▼"}</Text>
        </Header>
      </TouchableOpacity>

      {isOpenExpanded && (
        <Content>
          <FlatList
            data={openTasks}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderTaskItem(item)}
            ListEmptyComponent={
              <Text>Você ainda não adicionou nenhuma tarefa</Text>
            }
          />
        </Content>
      )}

      <TouchableOpacity
        onPress={() => setIsCompletedExpanded(!isCompletedExpanded)}
      >
        <Header>
          <HeaderText>Tarefas concluídas</HeaderText>
          <Text>{isCompletedExpanded ? "▲" : "▼"}</Text>
        </Header>
      </TouchableOpacity>

      {isCompletedExpanded && (
        <Content>
          <FlatList
            data={completedTasks}
            keyExtractor={(item) => item.id}
            renderItem={(item) => renderTaskItem(item, true)}
            ListEmptyComponent={
              <Text>Você ainda não concluiu nenhuma tarefa</Text>
            }
          />
        </Content>
      )}
    </Container>
  );
};

export default TaskManager;
