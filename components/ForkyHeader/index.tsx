import { Image, Text, View } from "react-native";
import { styles } from "./styles";
export default function ForkyHeader() {
    return(
        <View style={styles.container}>
            {/* <MaterialCommunityIcons name="chef-hat" size={24} color="#CC5500" /> */}

            <Image source={require("@/assets/images/logo.jpeg")}
                style={{height:30, width:30}}
                resizeMode="contain"
            />
            <Text style={{fontWeight:"bold", fontSize:20}}> Forky</Text>

        </View>
    )
}