import { RecipeCardProps } from "@/components/RecipeCard";
import { db } from "@/services/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";

type ForkyContextProps = {
    recipes: RecipeCardProps[];
    fetchRecipes: () => void;
    addRecipe: (r: RecipeCardProps) => Promise<void>;
    editRecipe: (r: RecipeCardProps) => Promise<void>;
    removeRecipe: (id: string) => Promise<void>;
};

export const ForkyContext = createContext({} as ForkyContextProps);

export function ForkyContextProvider({ children }: { children: ReactNode }) {
    const [recipes, setRecipes] = useState<RecipeCardProps[]>([]);

    async function fetchRecipes() {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as RecipeCardProps[];
        setRecipes(data);
    }

    async function addRecipe(newRecipe: RecipeCardProps) {
        await addDoc(collection(db, "recipes"), newRecipe);
        fetchRecipes();
    }

    async function editRecipe(updatedRecipe: RecipeCardProps) {
        if (!updatedRecipe.id) return;
        await updateDoc(doc(db, "recipes", updatedRecipe.id), updatedRecipe);
        fetchRecipes();
    }

    async function removeRecipe(id: string) {
        await deleteDoc(doc(db, "recipes", id));
        fetchRecipes();
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <ForkyContext.Provider value={{
            recipes,
            fetchRecipes,
            addRecipe,
            editRecipe,
            removeRecipe,
        }}>
            {children}
        </ForkyContext.Provider>
    );
}