import { PrimaryButton, ReversedPrimaryButton } from "@components/Button";
import { InputField } from "@components/Input";
import LoadingModal from "@components/LoadingModal";
import { H2, LargeP, P, SmallP } from "@components/Text";
import Colors from "@constants/Colors";
import { LoginResponse, useSession } from "@lib/auth";
import { ApiResponse } from "@utils/api";
import dimensions from "@utils/dimensions";
import { Redirect, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login, loggedIn } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (loggedIn) return <Redirect href={"/home"} />;

  const handleSignIn = async (e: GestureResponderEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!username || !password) {
      setLoading(false);
      return Alert.alert(
        "Whoopsy...",
        !username
          ? "Please fill in the username field"
          : "Please fill in the password field"
      );
    }

    try {
      const tryLogin = await login(username, password);

      if (tryLogin.statusCode !== 200) {
        setLoading(false);
        return Alert.alert("Login Failed!", tryLogin.message);
      } else {
        setLoading(false);
        router.push("/home");
      }
    } catch (error) {
      setLoading(false);
      return Alert.alert(
        "Login Failed!",
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.light.background,
      }}
    >
      <LoadingModal isActive={loading} />
      <StatusBar />
      <ScrollView
        style={{
          width: dimensions.windows.width,
        }}
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 94 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: "100%",
            marginBottom: 58,
          }}
        >
          <H2 style={{ textAlign: "left" }}>Hello,</H2>
          <LargeP>Welcome Back!</LargeP>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 30,
            marginBottom: 38,
          }}
        >
          <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
            <P>Username</P>
            <InputField
              placeholder="Enter Username"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
            <P>Password</P>
            <InputField
              placeholder="Enter Password"
              isSecure
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
        </View>
        <PrimaryButton style={{ marginBottom: 20 }} onPress={handleSignIn}>
          <P
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
            isDark
          >
            Sign In
          </P>
        </PrimaryButton>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ width: "40%", height: 1, backgroundColor: Colors.black }}
          />
          <SmallP style={{ fontWeight: "bold" }}>OR</SmallP>
          <View
            style={{ width: "40%", height: 1, backgroundColor: Colors.black }}
          />
        </View>
        <ReversedPrimaryButton
          style={{ marginTop: 20 }}
          onPress={() => router.push("/register")}
        >
          <P
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: Colors.primary,
            }}
          >
            Sign Up
          </P>
        </ReversedPrimaryButton>
      </ScrollView>
    </SafeAreaView>
  );
}
