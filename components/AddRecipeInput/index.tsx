import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type InputProps = TextInputProps & {
}

export default function AddRecipeInput({placeholder, value, onChangeText}:InputProps) {
    return(
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            />
    )
}