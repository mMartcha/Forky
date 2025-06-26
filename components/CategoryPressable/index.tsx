import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

export type Props = PressableProps & {
    message: string
    backgroundColor?: string
    fontColor?: string
}


export default function CategoryPressable({onPress, message, backgroundColor, fontColor}:Props ) {
    return(
        <Pressable style={[styles.container, {backgroundColor: backgroundColor} ]} onPress={onPress}>
            <Text style={{fontWeight:'bold', color:fontColor}}>
                {message}
            </Text>
        </Pressable>
    )
}