import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface Task {
    id: string;
    title: string;
}

const TaskManager: React.FC = () => {
    const [openTasks, setOpenTasks] = useState<Task[]>([
        { id: '1', title: 'Tarefa 1' },
        { id: '2', title: 'Tarefa 2' },
    ]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
    const [isOpenExpanded, setIsOpenExpanded] = useState<boolean>(false);
    const [isCompletedExpanded, setIsCompletedExpanded] = useState<boolean>(false);

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
            setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, taskToMove]);
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
        <View style={styles.taskItem}>
            <Text>{item.title}</Text>
            {!isCompleted ? (
                <Button title="Concluir" onPress={() => completeTask(item.id)} />
            ) : (
                <Button title="Desmarcar" onPress={() => uncompleteTask(item.id)} />
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Botão para ir para a tela de adicionar tarefa */}
            <Button title="Adicionar Nova Tarefa" onPress={() => router.push('/add')} />

            {/* Container para Tarefas em Aberto */}
            <TouchableOpacity onPress={() => setIsOpenExpanded(!isOpenExpanded)} style={styles.header}>
                <Text style={styles.headerText}>Tarefas em aberto</Text>
                <Text>{isOpenExpanded ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {isOpenExpanded && (
                <View style={styles.content}>
                    <FlatList
                        data={openTasks}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => renderTaskItem(item)}
                        ListEmptyComponent={<Text>Você ainda não adicionou nenhuma tarefa</Text>}
                    />
                </View>
            )}

            {/* Container para Tarefas Concluídas */}
            <TouchableOpacity onPress={() => setIsCompletedExpanded(!isCompletedExpanded)} style={styles.header}>
                <Text style={styles.headerText}>Tarefas concluídas</Text>
                <Text>{isCompletedExpanded ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {isCompletedExpanded && (
                <View style={styles.content}>
                    <FlatList
                        data={completedTasks}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => renderTaskItem(item, true)}
                        ListEmptyComponent={<Text>Você ainda não concluiu nenhuma tarefa</Text>}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f0f1',
        margin: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    header: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b0c4c6',
        marginBottom: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 15,
        backgroundColor: '#dfe7e9',
    },
    taskItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default TaskManager;
