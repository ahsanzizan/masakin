import BottomBar from "@components/BottomBar";
import RootContainer from "@components/RootContainer";
import { AuthContextProvider } from "@components/contexts/AuthContext";
import { useSession } from "@lib/auth";
import { Redirect, Slot } from "expo-router";
import { StatusBar, View } from "react-native";

export default function Protected() {
  const { loggedIn } = useSession();

  // Implement pages loading
  if (loggedIn === null) return null;

  if (!loggedIn) return <Redirect href={"/login"} />;

  return (
    <AuthContextProvider>
      <RootContainer>
        <StatusBar />
        <Slot />
        <View>
          <BottomBar />
        </View>
      </RootContainer>
    </AuthContextProvider>
  );
}
