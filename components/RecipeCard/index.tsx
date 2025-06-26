import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { Image, ImageSourcePropType, Text, View } from "react-native";
import RecipeDetailButton from '../RecipeDetailButton';
import { styles } from "./styles";

export type RecipeCardProps = {
    id?: string;
    foodName: string;
    image: ImageSourcePropType
    description: string
    ingredients: string[]
    howToCook: string[]
    information: {
        difficulty: string
        time: number
        portion: number
        category: string
    }
}


export default function RecipeCard({
    foodName, image, description, ingredients,
    howToCook, information, id}:RecipeCardProps) {

    function navigateToDetail(){
        router.navigate({
        pathname: "/(tabs)/RecipeDetails/[recipeDetail]",
        params: { 
        recipeDetail: foodName,
        data: JSON.stringify({ id, foodName, image, description, ingredients, howToCook, information }) 
    }
})
    }

    return(
        <View style={styles.container}>
            
            <View style={styles.imageView}>
                <Image 
                    source={require('@/assets/images/bolo.jpg')}
                    resizeMode="stretch"
                    style={{ width: '100%', height: '100%' }}
                 />
                 
            </View>

            <View style={styles.recipeInfoView}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:10}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>{foodName}</Text>
                    <Text>{information.difficulty}</Text>
                </View>

                    <Text style={{fontSize:14}}>{description}</Text>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:10}}>
                    <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
                         <MaterialCommunityIcons name="clock-time-three-outline" size={24} color="grey" />
                        <Text style={{fontSize:14}} >
                           {information.time} min
                        </Text>
                    </View>

                    <View style={{flexDirection:'row', alignItems:'center', gap:4}}>
                            <MaterialIcons name="people" size={24} color="grey" />
                        <Text style={{fontSize:14}} >
                           {information.portion} porções
                        </Text>
                    </View>
                </View>

                <View style={{}}>
                    <RecipeDetailButton
                        onPress={navigateToDetail}
                    />
                </View>

            </View>

        </View>
    )
}