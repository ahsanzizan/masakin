import { Redirect, Slot, Stack } from "expo-router";
import { useSession } from "../../lib/auth";
import { SafeAreaView, StatusBar, View } from "react-native";
import Colors from "../../constants/Colors";
import BottomBar from "../../components/BottomBar";

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
