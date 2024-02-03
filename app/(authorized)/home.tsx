import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constants/Colors";
import { useSession } from "../../lib/auth";
import dimensions from "../../utils/dimensions";
import { LargeP, SmallP } from "../../components/Text";
import { router } from "expo-router";
import { SearchField } from "../../components/Input";
import FilterIcon from "../../components/icons/FilterIcon";

export default function Home() {
  const { user } = useSession();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.light.background,
      }}
    >
      <StatusBar />
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
                  : require("../../assets/images/profile_picture_placeholder.jpg")
              }
              style={{ width: 40, height: 40, borderRadius: 8 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => router.push("/search")}
            style={{ width: "75%", height: "auto" }}
          >
            <SearchField placeholder="Search Recipes" />
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
      </ScrollView>
    </SafeAreaView>
  );
}
