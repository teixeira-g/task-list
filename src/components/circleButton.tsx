import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';  // Exemplo usando react-native-vector-icons

export const RoundButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Feather name='plus' size={24} color="#FFF" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3b5998',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
