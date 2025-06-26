import ForkyHeader from "@/components/ForkyHeader";
import { ForkyContext } from "@/context/ForkyContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function EditRecipe() {
    const { editRecipe } = useContext(ForkyContext);
    const { data } = useLocalSearchParams();
    const recipe = data ? JSON.parse(data as string) : null;

    // Inicialize os states com os dados da receita
    const [title, setTitle] = useState(recipe?.foodName || "");
    const [imageUrl, setImageUrl] = useState(recipe?.image?.uri || "");
    const [description, setDescription] = useState(recipe?.description || "");
    const [time, setTime] = useState(recipe?.information?.time?.toString() || "");
    const [portion, setPortion] = useState(recipe?.information?.portion?.toString() || "");
    const [difficulty, setDifficulty] = useState(recipe?.information?.difficulty || "");
    const [category, setCategory] = useState(recipe?.information?.category || "");
    const [ingredients, setIngredients] = useState<string[]>(recipe?.ingredients || [""]);
    const [howToCook, setHowToCook] = useState<string[]>(recipe?.howToCook || [""]);

    function handleSave() {
    if (!recipe?.id) {
        alert("Erro ao editar: receita sem id!");
        return;
    }
    editRecipe({
        id: recipe.id,
        foodName: title,
        image: { uri: imageUrl },
        description,
        ingredients,
        howToCook,
        information: {
            difficulty,
            time: Number(time),
            portion: Number(portion),
            category,
        }
    });
    setTitle("");
    setImageUrl("");
    setDescription("");
    setTime("");
    setPortion("");
    setDifficulty("");
    setCategory("");
    setIngredients([""]);
    setHowToCook([""]);
    router.back();
}

    function addIngredient() {
        setIngredients([...ingredients, ""]);
    }

    function updateIngredient(text: string, idx: number) {
        const arr = [...ingredients];
        arr[idx] = text;
        setIngredients(arr);
    }

    function addStep() {
        setHowToCook([...howToCook, ""]);
    }

    function updateStep(text: string, idx: number) {
        const arr = [...howToCook];
        arr[idx] = text;
        setHowToCook(arr);
    }

    return (
        <View style={styles.container}>
            <ForkyHeader />
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.goBackView}>
                        <Pressable style={styles.goBackView2} onPress={() => router.back()}>
                            <MaterialIcons name="arrow-back" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Voltar</Text>
                        </Pressable>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Editar Receita</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Informações Básicas</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Nome da Receita</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Título da Receita"
                            value={title}
                            onChangeText={setTitle}
                        />

                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>URL da Imagem</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="URL da Imagem"
                            value={imageUrl}
                            onChangeText={setImageUrl}
                        />

                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Descrição</Text>
                        <TextInput
                            style={[styles.input, { height: 80 }]}
                            placeholder="Descrição"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                        />

                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Tempo</Text>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Tempo (min)"
                                value={time}
                                onChangeText={text => setTime(text.replace(/[^0-9]/g, ""))}
                                keyboardType="numeric"
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Porções</Text>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Porções"
                                value={portion}
                                onChangeText={text => setPortion(text.replace(/[^0-9]/g, ""))}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Dificuldade</Text>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Dificuldade"
                                value={difficulty}
                                onChangeText={setDifficulty}
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Categoria</Text>
                            <TextInput
                                style={[styles.input, { flex: 1 }]}
                                placeholder="Salgado/Doce"
                                value={category}
                                onChangeText={setCategory}
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Ingredientes</Text>
                            <Pressable onPress={addIngredient}>
                                <Text style={{ color: "#CC5500", fontWeight: "bold" }}>+ Adicionar</Text>
                            </Pressable>
                        </View>
                        {ingredients.map((ing, idx) => (
                            <TextInput
                                key={idx}
                                style={styles.input}
                                placeholder={`Ingrediente ${idx + 1}`}
                                value={ing}
                                onChangeText={text => updateIngredient(text, idx)}
                            />
                        ))}
                    </View>

                    <View style={styles.section}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Modo de Preparo</Text>
                            <Pressable onPress={addStep}>
                                <Text style={{ color: "#CC5500", fontWeight: "bold" }}>+ Adicionar</Text>
                            </Pressable>
                        </View>
                        {howToCook.map((step, idx) => (
                            <View key={idx} style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ marginRight: 8 }}>{idx + 1}.</Text>
                                <TextInput
                                    style={[styles.input, { flex: 1 }]}
                                    placeholder={`Passo ${idx + 1}`}
                                    value={step}
                                    onChangeText={text => updateStep(text, idx)}
                                />
                            </View>
                        ))}
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <Pressable style={[styles.button, { backgroundColor: "#eee" }]} onPress={() => router.back()}>
                            <Text style={{ color: "black" }}>Cancelar</Text>
                        </Pressable>
                        <Pressable style={[styles.button, { backgroundColor: "#0e0f21" }]} onPress={handleSave}>
                            <Text style={{ color: "#fff" }}>Salvar Alterações</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}