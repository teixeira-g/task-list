import {View, Text, Button, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';
import {colors} from "@/styles/colors";

export default function AddTask() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text>Você está na outra tela!</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray[300],
    },
});