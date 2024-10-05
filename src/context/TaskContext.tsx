import React, { createContext, useState, ReactNode, useContext } from "react";

// Definir a interface para as tarefas
interface Task {
  id: string;
  title: string;
}

interface TaskContextData {
  tasks: Task[];
  completedTasks: Task[];
  addTask: (title: string) => void;
  editTask: (taskId: string, newTitle: string) => void;
  completeTask: (taskId: string) => void;
  uncompleteTask: (taskId: string) => void;
}

// Criar o contexto
const TaskContext = createContext<TaskContextData | undefined>(undefined);

// Criar um provider para o contexto
export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (taskId: string, newTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  const completeTask = (taskId: string) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        taskToMove,
      ]);
    }
  };

  const uncompleteTask = (taskId: string) => {
    const taskToMove = completedTasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task.id !== taskId)
      );
      setTasks((prevTasks) => [...prevTasks, taskToMove]);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        completedTasks,
        addTask,
        editTask,
        completeTask,
        uncompleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Criar um hook para facilitar o acesso ao contexto
export const useTasks = (): TaskContextData => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
