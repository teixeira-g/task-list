import { SmallInputStyled, LargeInputStyled } from "./styles";

type Props = {
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder: string;
};

export const SmallInput = ({ value, onChangeText, placeholder }: Props) => {
  return (
    <SmallInputStyled
      placeholder={placeholder}
      keyboardType="default"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const LargeInput = ({ value, onChangeText, placeholder }: Props) => {
  return (
    <LargeInputStyled
      placeholder={placeholder}
      keyboardType="default"
      multiline={true}
      textBreakStrategy="highQuality"
      value={value}
      onChangeText={onChangeText}
    />
  );
};
