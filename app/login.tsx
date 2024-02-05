import { Redirect, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { PrimaryButton, ReversedPrimaryButton } from "@components/Button";
import { InputField } from "@components/Input";
import { H2, LargeP, P, SmallP } from "@components/Text";
import Colors from "@constants/Colors";
import { LoginResponse, useSession } from "@lib/auth";
import { ApiResponse } from "@utils/api";
import dimensions from "@utils/dimensions";

export default function Login() {
  const { login, loggedIn } = useSession();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (loggedIn) return <Redirect href={"/home"} />;

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
        <PrimaryButton
          style={{ marginBottom: 20 }}
          onPress={async (e) => {
            e.preventDefault();
            if (!username)
              return Alert.alert(
                "Whoopsy...",
                "Please fill in the username field"
              );

            if (!password)
              return Alert.alert(
                "Whoopsy...",
                "Please fill in the password field"
              );

            let tryLogin: ApiResponse<LoginResponse>;

            try {
              tryLogin = await login(username, password);
            } catch (e) {
              return Alert.alert("Login Failed!", "Something wrong occured");
            }

            if (tryLogin.statusCode !== 200)
              return Alert.alert("Login Failed!", tryLogin.message);
            else router.push("/home");
          }}
        >
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
