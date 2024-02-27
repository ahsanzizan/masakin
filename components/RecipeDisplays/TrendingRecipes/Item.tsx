import { P, SmallP } from "@components/Text";
import BookmarkIcon from "@components/icons/BookmarkIcon";
import StarIcon from "@components/icons/StarIcon";
import Colors from "@constants/Colors";
import { numberFormatter } from "@utils/formatter";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { RecipeWithAuthor } from "../../../types/relations";

const TrendingRecipeItem: React.FC<Readonly<{ recipe: RecipeWithAuthor }>> = ({
  recipe,
}) => {
  return (
    <View style={{ maxWidth: 280 }}>
      <View style={{ width: 280, height: 180, marginBottom: 12 }}>
        <Image
          source={{
            uri: recipe.imageUrl,
          }}
          style={{
            width: 280,
            height: 180,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: Colors.gray,
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 8,
            top: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: Colors.neutral,
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            borderRadius: 8,
          }}
        >
          <StarIcon />
          <SmallP style={{ color: Colors.white }}>
            {numberFormatter(recipe.likesCount)}
          </SmallP>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            padding: 4,
            borderWidth: 0.5,
            borderRadius: 16,
            borderColor: Colors.neutral,
            backgroundColor: Colors.white,
          }}
        >
          <BookmarkIcon />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            right: 8,
            bottom: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: Colors.neutral,
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            borderRadius: 8,
          }}
        >
          <SmallP style={{ color: Colors.white }}>{recipe.cookDuration} min</SmallP>
        </View>
      </View>
      <P style={{ fontWeight: "bold", marginBottom: 8 }}>{recipe.title}</P>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Image
          source={require("@assets/images/profile_picture_placeholder.jpg")}
          style={{
            width: 32,
            height: 32,
            borderRadius: 32,
            borderWidth: 0.5,
            borderColor: Colors.neutral,
          }}
        />
        <SmallP style={{ color: Colors.neutral }}>
          By {recipe.author.username}
        </SmallP>
      </View>
    </View>
  );
};

export default React.memo(TrendingRecipeItem);
