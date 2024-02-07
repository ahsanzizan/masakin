import TrendingRecipes from "@components/RecipeDisplays/TrendingRecipes";
import { LargeP, SmallP } from "@components/Text";
import FilterIcon from "@components/icons/FilterIcon";
import SearchIcon from "@components/icons/SearchIcon";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import dimensions from "@utils/dimensions";
import { recipesSeeder } from "@utils/seeders/recipes";
import { router } from "expo-router";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

export default function Home() {
  const { user } = useSession();

  return (
    <ScrollView
      style={{
        width: dimensions.windows.width,
      }}
      contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 94 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <View>
          <LargeP style={{ fontWeight: "bold", marginBottom: 5 }}>
            Hello {user.username}!
          </LargeP>
          <SmallP style={{ color: Colors.neutral }}>
            What are you cooking today?
          </SmallP>
        </View>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image
            source={
              user.avatar
                ? {
                    uri: user.avatar,
                  }
                : require("@assets/images/profile_picture_placeholder.jpg")
            }
            style={{ width: 40, height: 40, borderRadius: 8 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 8,
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/search")}
          style={{ width: "75%", height: "auto" }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderWidth: 2,
              borderColor: Colors.gray,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 8,
            }}
          >
            <SearchIcon />
            <SmallP
              style={{
                flex: 1,
                paddingVertical: 10,
                paddingRight: 10,
                backgroundColor: "#fff",
                color: Colors.neutral,
                marginLeft: 12,
              }}
            >
              Search Recipes
            </SmallP>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.primary,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <FilterIcon />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
          }}
        >
          <LargeP style={{ fontWeight: "bold" }}>Trending Now</LargeP>
          <TouchableOpacity>
            <SmallP style={{ color: Colors.primary, fontWeight: "bold" }}>
              See All
            </SmallP>
          </TouchableOpacity>
        </View>
        <TrendingRecipes recipes={recipesSeeder} />
      </View>
    </ScrollView>
  );
}
