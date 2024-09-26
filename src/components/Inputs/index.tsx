import { colors } from "@/styles/colors";
import { SInput, BInput } from "./styles";

export function InputTasks() {
  return (
    <SInput
      placeholder="Titulo"
      placeholderTextColor={colors.gray[500]}
      keyboardType="default"
      style={{ color: colors.gray[500] }}
    />
  );
}
export function BInputTasks() {
  return (
    <BInput
      placeholder="Titulo"
      placeholderTextColor={colors.gray[500]}
      keyboardType="default"
      style={{ color: colors.gray[500] }}
    />
  );
}
