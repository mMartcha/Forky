import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height:350,
        width:'100%',
        backgroundColor:'white',
        borderRadius:16,
        borderColor:"#aaa9a9",
        borderWidth:1,
        overflow:"hidden"
    },
    imageView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        overflow:"hidden",
        zIndex:1


    },
    favoriteView:{
        position: 'absolute',
        top: 10,
        right: 10,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(0,0,0,0.2)', // transparente
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        
    },
    recipeInfoView:{
        paddingHorizontal:20,
        flex:1
    }
})