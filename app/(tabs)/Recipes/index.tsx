import CategoryPressable from "@/components/CategoryPressable";
import ForkyHeader from "@/components/ForkyHeader";
import RecipeCard from "@/components/RecipeCard";
import { ForkyContext } from "@/context/ForkyContext";
import { useContext, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

export default function Recipes() {
    const { recipes } = useContext(ForkyContext);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredRecipes = selectedCategory
        ? recipes.filter(r => r.information.category === selectedCategory)
        : recipes;

    return (
        <View style={styles.container}>
            <ForkyHeader />
            <View style={styles.body}>
                <View style={{ gap: 20, paddingBottom: 80 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                        Receitas
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 12 }}>
                        <CategoryPressable
                            message="Todas"
                            onPress={() => setSelectedCategory(null)}
                            backgroundColor={selectedCategory === null ? "#0e0f21" : "#fff"}
                            fontColor={selectedCategory === null ? "#fff" : "#0e0f21"}
                        />
                        <CategoryPressable
                            message="Salgado"
                            onPress={() => setSelectedCategory('Salgado')}
                            backgroundColor={selectedCategory === 'Salgado' ? "#0e0f21" : "#fff"}
                            fontColor={selectedCategory === 'Salgado' ? "#fff" : "#0e0f21"}
                        />
                        <CategoryPressable
                            message="Doce"
                            onPress={() => setSelectedCategory('Doce')}
                            backgroundColor={selectedCategory === 'Doce' ? "#0e0f21" : "#fff"}
                            fontColor={selectedCategory === 'Doce' ? "#fff" : "#0e0f21"}
                        />
                    </View>

                    <FlatList
                        data={filteredRecipes}
                        keyExtractor={item => item.id!}
                        renderItem={({ item }) => (
                            <RecipeCard
                                {...item}
                            />
                        )}
                        contentContainerStyle={{ paddingBottom: 210, gap: 16 }}
                    />
                </View>
            </View>
        </View>
    );
}