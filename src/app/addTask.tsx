import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OutraTela() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Você está na outra tela!</Text>
            <Button
                title="Voltar"
                onPress={() => router.back()}
            />
        </View>
    );
}
