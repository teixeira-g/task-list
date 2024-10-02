import { View } from "react-native";
import { TitleInputStyled, DescInputStyled } from "./styles";

export const TitleInput = () => {
  return <TitleInputStyled placeholder="Título" keyboardType="default" />;
};

export const DescInput = () => {
  return (
    <DescInputStyled
      placeholder={"Descrição"}
      keyboardType={"default"}
      multiline={true}
      textBreakStrategy={"highQuality"}
    />
  );
};

export const InputScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <TitleInput />
      <DescInput />
    </View>
  );
};
