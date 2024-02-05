import { router } from "expo-router";
import { useState } from "react";
import { Alert, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { PrimaryButton, ReversedPrimaryButton } from "@components/Button";
import { InputField } from "@components/Input";
import { LargeP, P, SmallP } from "@components/Text";
import Colors from "@constants/Colors";
import { LoginResponse, useSession } from "@lib/auth";
import { ApiResponse, fetchApi, isSuccess } from "@utils/api";
import dimensions from "@utils/dimensions";

export default function Register() {
  const { login } = useSession();
  const [credentials, setCredentials] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({ username: "", email: "", password: "", confirmPassword: "" });

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
        <PrimaryButton
          style={{ marginBottom: 20 }}
          onPress={async (e) => {
            e.preventDefault();

            const { username, email, password, confirmPassword } = credentials;

            if (!username)
              return Alert.alert(
                "Whoopsy...",
                "Please fill in the username field"
              );

            if (!email)
              return Alert.alert(
                "Whoopsy...",
                "Please fill in the email field"
              );

            if (!password)
              return Alert.alert(
                "Whoopsy...",
                "Please fill in the password field"
              );

            if (password !== confirmPassword)
              return Alert.alert(
                "Whoopsy...",
                "The password and confirm password field does not match"
              );

            const tryRegister = await fetchApi<null>("/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, email, password }),
            });
            if (!isSuccess(tryRegister))
              return Alert.alert(
                "Registration Failed!",
                tryRegister.message.toString()
              );

            // Sign in the user right after they signed up
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
            Sign Up
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
