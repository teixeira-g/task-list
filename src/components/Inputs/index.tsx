import { TitleInputStyled, DescInputStyled } from "./styles";

interface TitleInputProps {
  value?: string;
  onChangeText?: (value: string) => void;
}

export const TitleInput = ({ value, onChangeText }: TitleInputProps) => {
  return (
    <TitleInputStyled
      placeholder="Título"
      keyboardType="default"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const DescInput = ({ value, onChangeText }: TitleInputProps) => {
  return (
    <DescInputStyled
      placeholder="Descrição"
      keyboardType="default"
      multiline={true}
      textBreakStrategy="highQuality"
      value={value}
      onChangeText={onChangeText}
    />
  );
};
