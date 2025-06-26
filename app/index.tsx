import { View } from "react-native";
import Recipes from "./(tabs)/Recipes";
import { styles } from "./styles";

export default function App() {
    return(
        <View style={styles.container}>
            <Recipes/>
        </View>
    )
}