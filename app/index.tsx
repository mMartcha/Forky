import auth from '@react-native-firebase/auth';
import { FirebaseError } from "firebase/app";
import { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
export default function App() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        setLoading(true);
        try{
            await auth().createUserWithEmailAndPassword(email, password);
            alert("Conta criada com sucesso!");
        }catch(e: any){
            const err = e as FirebaseError
            alert(`Erro ao criar conta: ${err.message}`);
        }finally {
            setLoading(false);
        }
    }

    const signIn = async () => {
        setLoading(true);
        try{
            await auth().signInWithEmailAndPassword(email, password);
            alert("Login realizado com sucesso!");
        }catch(e: any){
            const err = e as FirebaseError
            alert(`Erro ao realizar login: ${err.message}`);
        }finally {
            setLoading(false);
        }
    }


    return(
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {loading ? (
                    <ActivityIndicator size="small" color="#00ff" />
                ) : (
                    <>
                        <Pressable  onPress={signIn} style={styles.button}>
                            <Text style={styles.text}>Entrar</Text>
                        </Pressable>
                        
                        <Pressable onPress={signUp} style={styles.button}>
                            <Text style={styles.text}>Criar conta</Text>
                        </Pressable>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
     )
}

