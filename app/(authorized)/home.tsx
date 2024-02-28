import LoadingModal from "@components/LoadingModal";
import TrendingRecipes from "@components/RecipeDisplays/TrendingRecipes";
import { LargeP, SmallP } from "@components/Text";
import Wrapper from "@components/Wrapper";
import FilterIcon from "@components/icons/FilterIcon";
import SearchIcon from "@components/icons/SearchIcon";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import { recipesSeeder } from "@utils/seeders/recipes";
import { router } from "expo-router";
import {
  Image,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { AuthUser } from "../../types/auth";

const Header = ({ user }: { user: AuthUser }) => (
  <View style={styles.headerContainer as StyleProp<ViewStyle>}>
    <View>
      <LargeP style={styles.greetingText as TextStyle}>
        Hello {user.username}!
      </LargeP>
      <SmallP style={styles.subText}>What are you cooking today?</SmallP>
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
);

const SearchBar = () => (
  <TouchableOpacity
    onPress={() => router.push("/search")}
    style={{ width: "75%", height: "auto" }}
  >
    <View style={styles.searchBarContainer as StyleProp<ViewStyle>}>
      <SearchIcon />
      <SmallP style={styles.searchText}>Search Recipes</SmallP>
    </View>
  </TouchableOpacity>
);

const HeaderButtons = () => (
  <View style={styles.buttonContainer as StyleProp<ViewStyle>}>
    <SearchBar />
    <TouchableOpacity style={styles.filterButton as StyleProp<ViewStyle>}>
      <FilterIcon />
    </TouchableOpacity>
  </View>
);

const TrendingSection = () => (
  <View style={styles.trendingContainer}>
    <View style={styles.trendingHeader as StyleProp<ViewStyle>}>
      <LargeP style={styles.trendingHeaderText as TextStyle}>
        Trending Now
      </LargeP>
      <TouchableOpacity>
        <SmallP style={styles.seeAllText as TextStyle}>See All</SmallP>
      </TouchableOpacity>
    </View>
    <TrendingRecipes recipes={recipesSeeder} />
  </View>
);

export default function Home() {
  const { user } = useSession();

  return (
    <>
      <LoadingModal isActive={user.username === null} />
      <Wrapper>
        <Header user={user} />
        <HeaderButtons />
        <TrendingSection />
      </Wrapper>
    </>
  );
}

const styles = {
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  greetingText: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  subText: {
    color: Colors.neutral,
  },
  searchBarContainer: {
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
  },
  searchText: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    color: Colors.neutral,
    marginLeft: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  filterButton: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    padding: 5,
    borderRadius: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trendingContainer: {
    paddingTop: 12,
  },
  trendingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  trendingHeaderText: {
    fontWeight: "bold",
  },
  seeAllText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
};
