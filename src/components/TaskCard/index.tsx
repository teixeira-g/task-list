import {Container, TaskText, TaskDone} from './styles';
import {Feather} from "@expo/vector-icons";

export function TaskCard(){
    return (
        <Container>
            <TaskDone>
                <Feather name="circle" size={24} color={"#88AAB1"}></Feather>
            </TaskDone>
            <TaskText>Tarefa</TaskText>
        </Container>
    );
}