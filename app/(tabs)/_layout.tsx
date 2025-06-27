import { ForkyContextProvider } from '@/context/ForkyContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();


  
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ForkyContextProvider>
          <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#ff6347', // cor quando ativo
            tabBarInactiveTintColor: '#888',  // cor quando inativo
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopWidth: 0,
              height: 60,
          }, }}>
            <Tabs.Screen 
              name='index'
              options={{
                href: null,
                title: "index",
              }} 
            />
            <Tabs.Screen 
              name='Recipes/index'
              options={{
                title: "Recipes",
                tabBarIcon: ({ color }) => <MaterialIcons name="menu-book" size={24} color="black" />
              }}
            />
            <Tabs.Screen 
              name='RecipeDetails/[recipeDetail]'
              options={{
                title: "Details",
                href: null
              }}
            />
            <Tabs.Screen 
              name='EditRecipe/index'
              options={{
                title: "Edit",
                href: null
              }}
            />
            <Tabs.Screen 
              name='AddRecipe/index'
              options={{
                title: "Add",
                tabBarIcon: ({ color }) => <MaterialIcons name="playlist-add" size={24} color="black" />
              }}
            />
            <Tabs.Screen 
              name='Profile/index'
              options={{
                title: "Profile",
                tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color="black" />
              }}
            />
            <Tabs.Screen 
              name='(tabs)/Settings/index'
              options={{
                title: "Settings",
                href: null
              }}
            />
          </Tabs>
        </ForkyContextProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

