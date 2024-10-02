import { createContext, ReactNode, useContext, useState } from "react";
import { TaskProps } from "@/utils/types";

type TaskContextProps = {
  tasks: TaskProps[];
  addTask: (task: TaskProps) => void;
};

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: 0,
      title: "",
      description: "",
      isCompleted: false,
    },
  ]);

  const addTask = (task: TaskProps) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};
