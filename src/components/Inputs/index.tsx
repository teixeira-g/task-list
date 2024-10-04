import {TitleInputStyled, DescInputStyled} from "./styles";

interface TitleInputProps {
    value?: string,
    onChangeText?: (value: (((prevState: string) => string) | string)) => void
}

export const TitleInput = ({value, onChangeText}: TitleInputProps) => {
    return <TitleInputStyled placeholder="Título" keyboardType="default"/>;
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
