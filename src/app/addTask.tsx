import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from "@gorhom/bottom-sheet/lib/typescript/types";
import { router } from "expo-router";

export const BottomSheetScreen = () => {
  // Referência para o Bottom Sheet
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  // Pontos de ancoragem (snap points) do Bottom Sheet
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Função para abrir o Bottom Sheet
  const handleOpen = () => {

    bottomSheetRef.current?.snapToIndex(1); // Abre na posição de 50%
  };

  return (
      <View style={styles.container}>
        <Button title="Abrir Bottom Sheet" onPress={handleOpen} />
        <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
          <View style={styles.contentContainer}>
            <Text>Conteúdo do Bottom Sheet</Text>
          </View>
        </BottomSheet>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

