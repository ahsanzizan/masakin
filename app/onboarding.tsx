import { PrimaryButton } from "@components/Button";
import { H1, LargeP, P } from "@components/Text";
import ArrowIcon from "@components/icons/ArrowIcon";
import Colors from "@constants/Colors";
import { router } from "expo-router";
import {
  Image,
  ImageStyle,
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

const Header = () => (
  <View style={styles.header as StyleProp<ViewStyle>}>
    <Image
      source={require("@assets/images/icon.png")}
      style={styles.appIcon as StyleProp<ImageStyle>}
    />
    <LargeP style={{ fontWeight: "bold" }} isDark>
      Your Modern Recipes Repository
    </LargeP>
  </View>
);

const GetStartedButton = () => (
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
);

const GettingStartedSection = () => (
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
    <GetStartedButton />
  </View>
);

export default function OnBoarding() {
  return (
    <SafeAreaView style={styles.rootContainer as StyleProp<ViewStyle>}>
      <Header />
      <GettingStartedSection />
    </SafeAreaView>
  );
}

const styles = {
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.dark.background,
  },
  header: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 104,
  },
  appIcon: {
    width: 80,
    height: 80,
    marginBottom: 14,
  },
};
