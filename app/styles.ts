import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // alignItems: 'center',
        paddingHorizontal:20,
        justifyContent: 'center',
    },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button:{
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop:25,
        height:40,
        alignItems: 'center',
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
    }
})