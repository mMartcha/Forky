import { ForkyContextProvider } from '@/context/ForkyContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ForkyContextProvider>
          <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen 
              name='index'
              options={{
                href: null,
                title: "index",
              }} 
            />
            <Tabs.Screen 
              name='(tabs)/Recipes/index'
              options={{
                title: "Recipes",
                tabBarIcon: ({ color }) => <MaterialIcons name="menu-book" size={24} color="black" />
              }}
            />
            <Tabs.Screen 
              name='(tabs)/RecipeDetails/[recipeDetail]'
              options={{
                title: "Details",
                href: null
              }}
            />
            <Tabs.Screen 
              name='(tabs)/EditRecipe/index'
              options={{
                title: "Edit",
                href: null
              }}
            />
            <Tabs.Screen 
              name='(tabs)/AddRecipe/index'
              options={{
                title: "Add",
                tabBarIcon: ({ color }) => <MaterialIcons name="playlist-add" size={24} color="black" />
              }}
            />
            <Tabs.Screen 
              name='(tabs)/Profile/index'
              options={{
                title: "Profile",
                tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color="black" />
              }}
            />
          </Tabs>
        </ForkyContextProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

