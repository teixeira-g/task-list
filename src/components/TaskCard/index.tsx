import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";
import {DescriptionText, TitleText} from "@/styles/global";
import { TaskItemContainer } from "./styles";

type TaskItemProps = {
  task: {
    id: string;
    title: string;
    description: string;
  };
  onComplete: (taskId: string) => void;
  onUncomplete: (taskId: string) => void;
  isCompleted: boolean;
};

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onComplete,
    onUncomplete,
    isCompleted,
  }) => {
    return (
        <TaskItemContainer>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => (isCompleted ? onUncomplete(task.id) : onComplete(task.id))}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <Ionicons
                    name={isCompleted ? "checkmark-circle" : "ellipse-outline"}
                    size={32}
                    color={colors.blue}
                />
            </TouchableOpacity>

            <TitleText
                style={[
                    { marginLeft: 10, flexShrink: 1 },
                    isCompleted ? { color: colors.gray[500], textDecorationLine: "line-through" } : undefined,
                ]}
            >
                {task.title}
            </TitleText>



            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                    router.push({
                        pathname: "./editTask",
                        params: { taskId: task.id },
                    })
                }
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <Ionicons
                    name={"ellipsis-horizontal-circle"}
                    size={32}
                    color={colors.gray[400]}
                />
            </TouchableOpacity>
        </TaskItemContainer>
    );
};

