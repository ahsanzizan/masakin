import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { router } from "expo-router";

export default function OnBoarding() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.dark.background,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          marginTop: 104,
        }}
      >
        <Image
          source={require("../assets/images/icon.png")}
          style={{ width: 80, height: 80, marginBottom: 14 }}
        />
        <Text
          style={{ color: Colors.dark.text, fontWeight: "bold", fontSize: 18 }}
        >
          Your Modern Recipes Repository
        </Text>
      </View>
      <View style={{ marginBottom: 84 }}>
        <View style={{ marginBottom: 64 }}>
          <Text
            style={{
              color: Colors.dark.text,
              fontWeight: "bold",
              fontSize: 42,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Let's Do Some Cooking!
          </Text>
          <Text
            style={{
              color: Colors.dark.text,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Simplest way to find the tasty recipes
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 32,
            paddingVertical: 16,
            backgroundColor: Colors.dark.primary,
            borderRadius: 12,
          }}
          onPress={() => router.push("/home")}
        >
          <Text
            style={{
              color: Colors.dark.text,
              fontSize: 16,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
