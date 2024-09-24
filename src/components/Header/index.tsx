import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {colors} from "@/styles/colors";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Olá</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 180,           // Altura do header
        paddingTop: 20,        // Padding superior para alinhar bem o texto
        justifyContent: 'space-evenly', // Alinha verticalmente o conteúdo no centro
        alignItems: 'baseline',  // Alinha horizontalmente o conteúdo no centro
        borderRadius: 15,
        backgroundColor: colors.blue,
    },
    headerText: {
        fontSize: 20,          // Tamanho da fonte do título
        fontWeight: 'bold',    // Deixa o texto em negrito
        color: '#fff',         // Cor do texto (branco)
    },
});
