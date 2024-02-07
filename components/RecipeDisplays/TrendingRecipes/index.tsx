import { ScrollView, View } from "react-native";
import { RecipeWithAuthor } from "../../../types/relations";
import TrendingRecipeItem from "./Item";

export default function TrendingRecipes({
  recipes,
}: Readonly<{ recipes: RecipeWithAuthor[] }>) {
  return (
    <ScrollView
      style={{ overflow: "hidden" }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", gap: 16, overflow: "visible" }}>
        {recipes.map((recipe) => (
          <TrendingRecipeItem key={recipe.id} recipe={recipe} />
        ))}
      </View>
    </ScrollView>
  );
}
