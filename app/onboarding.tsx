import { PrimaryButton } from "@components/Button";
import { H1, LargeP, P } from "@components/Text";
import ArrowIcon from "@components/icons/ArrowIcon";
import Colors from "@constants/Colors";
import { router } from "expo-router";
import { Image, SafeAreaView, View } from "react-native";

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
          source={require("@assets/images/icon.png")}
          style={{ width: 80, height: 80, marginBottom: 14 }}
        />
        <LargeP style={{ fontWeight: "bold" }} isDark>
          Your Modern Recipes Repository
        </LargeP>
      </View>
      <View style={{ marginBottom: 84 }}>
        <View style={{ marginBottom: 64 }}>
          <H1 style={{ textAlign: "center", marginBottom: 20 }} isDark>
            Let's Do Some Cooking!
          </H1>
          <P
            style={{
              textAlign: "center",
            }}
            isDark
          >
            Simplest way to find the tasty recipes
          </P>
        </View>
        <PrimaryButton onPress={() => router.push("/login")}>
          <P
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
            isDark
          >
            Get Started
          </P>
          <ArrowIcon />
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}
