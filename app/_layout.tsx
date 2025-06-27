import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const router = useRouter();
  const segments = useSegments()

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log("Auth state changed:", user);
    setUser(user);
    if(initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber; 
  },[])

  useEffect(() => {
    if(initializing) return;

    const inAuthGroup = segments[0] === '(tabs)';

    if(user && !inAuthGroup) {
      router.push('/(tabs)/Recipes');
    } else if(!user && inAuthGroup) {
      router.replace('/')
    }

  },[user, initializing])

  if(initializing)
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size={'large'}/>
      </View>
    )

  return(
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
  
    </Stack>
   )
}