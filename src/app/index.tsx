import {StyleSheet, View, Text, Button, Task} from "react-native";
import { AddButton } from "@/components/Buttons";
import { colors } from "@/styles/colors";
import { Header } from "@/components/Header";
import { TaskDrawer } from "@/components/TaskDrawer";
import { useState, useCallback } from "react";
import React from 'react'
import { TitleInput, DescInput } from "@/components/Inputs";
import { useRouter} from "expo-router";
import {TaskCard} from "@/components/TaskCard";

export default function LoginScreen() {
    const router = useRouter();

    const [task, setTask] = useState<{description: string; check: boolean}[]>([]);
    const [taskText, setTaskText] = useState<string>("");

    const [isActiveTasksOpen, setActiveTasksOpen] = useState<boolean>(false);
    const [isCompletedTasksOpen, setCompletedTasksOpen] =
        useState<boolean>(false);

    const handleToggleActiveTasks = () => setActiveTasksOpen(!isActiveTasksOpen);
    const handleToggleCompletedTasks = () =>
        setCompletedTasksOpen(!isCompletedTasksOpen);


    //renders
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <AddButton onPress={() => router.push('/addTask')}/>
                <Header />
                <TaskDrawer
                    title={"Tarefas em aberto"}
                    onPress={handleToggleActiveTasks}
                    isOpen={isActiveTasksOpen}
                >
                </TaskDrawer>


                <TaskDrawer
                    title={"Tarefas concluídas"}
                    onPress={handleToggleCompletedTasks}
                    isOpen={isCompletedTasksOpen}
                />

                <TaskCard title={"Varrer"} description={"Varrer a casa"} isCompleted={false}></TaskCard>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[300],
    },
});