import { theme } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1, 

    },
    goBackView:{
        paddingTop:20,
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
    recipeImage:{

    },
    descriptionView:{
        paddingHorizontal:20,
        height:150,
        width:'100%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:"#aaa9a9",
        borderWidth:1,
        overflow:"hidden",
        padding:10,
        gap:10
    },
    ingredientsView:{
        paddingHorizontal:20,
        width:'100%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:"#aaa9a9",
        borderWidth:1,
        overflow:"hidden",
        padding:10,
        gap:10
    },
    howToCookView:{
        paddingHorizontal:20,
        width:'100%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:"#aaa9a9",
        borderWidth:1,
        overflow:"hidden",
        padding:10,
        gap:10
    },
    informationView:{
        paddingHorizontal:20,
        width:'100%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:"#aaa9a9",
        borderWidth:1,
        overflow:"hidden",
        padding:10,
        gap:10
    },
    actionView:{
        paddingHorizontal:20,
        width:'100%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:"#aaa9a9",
        borderWidth:1,
        overflow:"hidden",
        padding:10,
        gap:10
    },
    
})