import { PrimaryButton, ReversedPrimaryButton } from "@components/Button";
import { InputField } from "@components/Input";
import { LargeP, P, SmallP } from "@components/Text";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import { fetchApi, isSuccess } from "@utils/api";
import dimensions from "@utils/dimensions";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  GestureResponderEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";

export default function Register() {
  const { login } = useSession();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async (e: GestureResponderEvent) => {
    const { username, email, password, confirmPassword } = credentials;

    if (!username || !email || !password || !confirmPassword) {
      return Alert.alert("Whoopsy...", "Please fill in all fields");
    }

    if (password !== confirmPassword) {
      return Alert.alert(
        "Whoopsy...",
        "The password and confirm password does not match"
      );
    }

    try {
      const registerResponse = await fetchApi("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!isSuccess(registerResponse)) {
        return Alert.alert(
          "Registration failed",
          registerResponse.message.toString()
        );
      }

      // After successful registration, we'll try to log the user in
      const loginResponse = await login(username, password);

      if (loginResponse.statusCode !== 200) {
        return Alert.alert("Login failed", loginResponse.message.toString());
      }

      // Redirect to the home page
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
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
      <StatusBar />
      <ScrollView
        style={{
          flex: 1,
          width: dimensions.windows.width,
        }}
        contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 94 }}
      >
        {/* Title and description */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: "100%",
            marginBottom: 58,
            gap: 5,
          }}
        >
          <LargeP style={{ fontWeight: "bold" }}>Create a new account</LargeP>
          <SmallP style={{ maxWidth: 230 }}>
            Let’s help you set up your account, it won’t take that long.
          </SmallP>
        </View>

        {/* Credentials input fields */}
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
              onChangeText={(text) =>
                setCredentials({ ...credentials, username: text })
              }
              value={credentials.username}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
            <P>Email</P>
            <InputField
              placeholder="Enter Email"
              onChangeText={(text) =>
                setCredentials({ ...credentials, email: text })
              }
              value={credentials.email}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
            <P>Password</P>
            <InputField
              placeholder="Enter Password"
              isSecure
              onChangeText={(text) =>
                setCredentials({ ...credentials, password: text })
              }
              value={credentials.password}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "column", gap: 5 }}>
            <P>Confirm Password</P>
            <InputField
              placeholder="Confirm Your Password"
              isSecure
              onChangeText={(text) =>
                setCredentials({ ...credentials, confirmPassword: text })
              }
              value={credentials.confirmPassword}
            />
          </View>
        </View>

        {/* Register button */}
        <PrimaryButton style={{ marginBottom: 20 }} onPress={handleSignUp}>
          <P
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
            isDark
          >
            Sign Up
          </P>
        </PrimaryButton>

        {/* OR separator */}
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

        {/* Sign in button */}
        <ReversedPrimaryButton
          style={{ marginTop: 20 }}
          onPress={() => router.push("/login")}
        >
          <P
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: Colors.primary,
            }}
          >
            Sign In
          </P>
        </ReversedPrimaryButton>
      </ScrollView>
    </SafeAreaView>
  );
}
