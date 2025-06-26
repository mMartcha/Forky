import { theme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor:'#fff'
    },
    body:{
        paddingTop:20,
        paddingHorizontal:20,
        gap:16

    },
    goBackView:{
            flexDirection:'row',
            alignItems:"center",
            gap:16
            
    },
    goBackView2:{
        height:30,
        width:90,
        backgroundColor:'white',
        borderRadius:6,                   
        borderWidth:1, 
        borderColor:theme.colors.borderColor,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-evenly"
    },
    section:{
        borderColor:theme.colors.borderColor,
        borderWidth:1,
        borderRadius:12,
        padding:12,
        gap:12
    },
    input:{
        borderColor:theme.colors.borderColor,
        borderWidth:1,
        borderRadius:6,
        padding:6
    },
    button:{
        borderRadius:6, 
        padding:6
    }
})