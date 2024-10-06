import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("@tasks");
        const storedCompletedTasks = await AsyncStorage.getItem(
          "@completedTasks"
        );
        if (storedTasks) setTasks(JSON.parse(storedTasks));
        if (storedCompletedTasks)
          setCompletedTasks(JSON.parse(storedCompletedTasks));
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
        await AsyncStorage.setItem(
          "@completedTasks",
          JSON.stringify(completedTasks)
        );
      } catch (error) {
        console.error(error);
      }
    };

    saveTasks();
  }, [tasks, completedTasks]);

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

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  };

  const completeTask = (taskId: string) => {
    setTasks((prevTasks) => {
      const taskToComplete = prevTasks.find((task) => task.id === taskId);
      if (taskToComplete) {
        setCompletedTasks((prevCompletedTasks) => [
          ...prevCompletedTasks,
          taskToComplete,
        ]);
        return prevTasks.filter((task) => task.id !== taskId);
      }
      return prevTasks;
    });
  };

  const uncompleteTask = (taskId: string) => {
    setCompletedTasks((prevTasks) => {
      const taskToUncomplete = prevTasks.find((task) => task.id === taskId);
      if (taskToUncomplete) {
        setTasks((prevTasks) => [...prevTasks, taskToUncomplete]);
        return prevTasks.filter((task) => task.id !== taskId);
      }
      return prevTasks;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        completedTasks,
        addTask,
        completeTask,
        uncompleteTask,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextData => {
  return useContext(TaskContext) as TaskContextData;
};
