import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

type ButtonProps =  PressableProps & {

}

export default function RecipeDetailButton({onPress}: ButtonProps) {
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={{color:'white', fontWeight:'bold'}}>Ver Receita</Text>
        </Pressable>
    )
}