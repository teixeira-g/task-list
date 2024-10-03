import {FlatList, TouchableOpacity, View, Text} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { TaskContainer } from "./styles";
import { H2DarkText } from "@/styles/global";
import React, {useState} from "react";
import {TaskCard} from "@/components/TaskCard";

type Props = {
    title: string;
    onPress: () => void;
    isOpen: boolean;
};

const [tasks, setTasks] = useState<{title: string; description: string; check: boolean;}[]>([]);
const [taskText, setTaskText] = useState("");

export const TaskDrawer = ({ title, onPress, isOpen }: Props) => {
    return (
        <TaskContainer>
            <H2DarkText>{title}</H2DarkText>

            <FlatList
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                    (item) => (
                        <TaskCard title={""} description={""} isCompleted={false}/>
                    )
                }
                ListEmptyComponent={() => (
                    <View>
                        <Text>Você ainda não adicionou nenhuma tarefa</Text>
                    </View>
                )}
            />

            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
                <Feather
                    name={isOpen ? "chevron-up" : "chevron-down"}
                    size={34}
                    color={isOpen ? colors.gray[600] : colors.gray[400]}
                />
            </TouchableOpacity>
        </TaskContainer>
    );
};
