import React, { createContext, useState, ReactNode, useContext } from "react";
import { TaskProps } from "@/utils/types";

// Definir o type para as tarefas
type TaskContextData = {
  tasks: TaskProps[];
  completedTasks: TaskProps[];
  addTask: (title: string) => void;
  completeTask: (taskId: string) => void;
  uncompleteTask: (taskId: string) => void;
  editTask: (taskId: string, newTitle: string) => void;
  deleteTask: (taskId: string) => void;
};

const TaskContext = createContext<TaskContextData | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskProps[]>([]);

  const addTask = (title: string) => {
    const newTask: TaskProps = {
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

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task.id !== taskId)
    );
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
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Criar um hook para facilitar o acesso ao contexto
export const useTasks = (): TaskContextData => {
  return useContext(TaskContext) as TaskContextData;
};
