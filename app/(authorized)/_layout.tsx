import { Redirect, Slot } from "expo-router";
import { SafeAreaView, StatusBar, View } from "react-native";
import BottomBar from "@components/BottomBar";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";

export default function Protected() {
  const { loggedIn } = useSession();

  // Implement pages loading
  if (loggedIn === null) return null;

  if (!loggedIn) return <Redirect href={"/login"} />;

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
      <Slot />
      <View>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
}
