import ActionPressable from "@/components/ActionPressable";
import ForkyHeader from "@/components/ForkyHeader";
import { RecipeCardProps } from "@/components/RecipeCard";
import { ForkyContext } from "@/context/ForkyContext";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";


export default function App() {

        const { removeRecipe } = useContext(ForkyContext);

        const {data} = useLocalSearchParams()
        
        const recipe: RecipeCardProps = data ? JSON.parse(data as string) : null;

        function handleDelete() {
            if (!recipe?.id) {
                alert("Erro ao excluir: receita sem id!");
                return;
            }
    removeRecipe(recipe.id);
    router.back();
}
    return(
        <View style={styles.container}>
            <ForkyHeader/>

            <ScrollView>
                <View style={{paddingHorizontal:20, gap:16, paddingBottom:40}}>

                    <View style={styles.goBackView}>
                        <Pressable style={styles.goBackView2} onPress={()=> router.back()}>
                            <MaterialIcons name="arrow-back" size={24} color="black" />
                            <Text style={{fontWeight:'bold', fontSize:16}}>Voltar</Text>
                        </Pressable>
                        <Text style={{fontWeight:'bold', fontSize:24}}>{recipe.foodName}</Text>
                    </View>

                    <View style={styles.descriptionView}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>
                            Descrição
                        </Text>
                        <Text>
                            {recipe.description}
                        </Text>
                    </View>

                    <View style={styles.ingredientsView}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Ingredientes</Text>
                        {recipe.ingredients.map((ingredient, idx) => (
                        <View key={idx} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
                            <View style={{height: 8, width: 8, borderRadius: 10, backgroundColor: '#CC5500', marginRight: 8}} />
                            <Text>{ingredient}</Text>
                        </View>
                        ))}
                    </View>

                    <View style={styles.howToCookView}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Modo de Preparo</Text>
                        {recipe.howToCook.map((steps, idx) => (
                        <View key={idx} style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
                            <View style={{height: 8, width: 8, borderRadius: 10, backgroundColor: '#CC5500', marginRight: 8}} />
                            <Text>{steps}</Text>
                        </View>
                        ))}
                    </View>

                    <View style={styles.informationView}>

                        <Text style={{fontWeight:'bold', fontSize:20}}>Informações</Text>

                        <View style={{flexDirection:'row', gap:6}}>
                            <Text>
                                Difficuldade:
                            </Text>
                                <Text style={{fontWeight:'bold'}}>
                                    {recipe.information.difficulty}
                                </Text>
                        </View>

                        <View style={{flexDirection:'row', gap:6}}>
                            <Text >
                                Categoria:
                            </Text>
                                <Text style={{fontWeight:'bold'}}>
                                    {recipe.information.category}
                                </Text>
                        </View>

                        <View  style={{flexDirection:'row', gap:6}}>
                            <MaterialCommunityIcons name="clock-time-eight-outline" size={18} color="grey" />
                            <Text>
                                Tempo:
                            </Text>
                                <Text style={{fontWeight:'bold'}}>
                                    {recipe.information.time}
                                </Text>
                        </View>

                        <View style={{flexDirection:'row', gap:6}}>
                            <MaterialIcons name="people-alt" size={18} color="grey" />
                            <Text >
                                Porções:
                            </Text>
                                <Text style={{fontWeight:'bold'}}>
                                    {recipe.information.portion}
                                </Text>
                        </View>

                    </View>

                    <View style={styles.actionView}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Ações</Text>

                        <ActionPressable
                            message="Adicionar aos Favoritos"
                        />
                        <ActionPressable
                            message="Editar Receita"
                            onPress={() => router.push({
                            pathname: "/(tabs)/EditRecipe",
                            params: { data: JSON.stringify(recipe) }
                        })}
                        
                        />
                        <ActionPressable onPress={handleDelete}
                            message="Excluir Receita"
                            backgroundColor="#FF4433"
                            fontColor="#fff"
                        
                        />

                        
                    </View>

                    

                </View>
            </ScrollView>
        </View>
    )
}