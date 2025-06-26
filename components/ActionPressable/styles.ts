import { theme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        borderColor: theme.colors.borderColor,
        borderWidth:1,
        height:40,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
        
    }
})