import { PrimaryButton, ReversedPrimaryButton } from "@components/Button";
import { InputField } from "@components/Input";
import LoadingModal from "@components/LoadingModal";
import RootContainer from "@components/RootContainer";
import { LargeP, P, SmallP } from "@components/Text";
import Wrapper from "@components/Wrapper";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import { fetchApi, isSuccess } from "@utils/api";
import { router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Alert,
  GestureResponderEvent,
  StatusBar,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

interface Credentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Header = () => (
  <View style={styles.headerContainer as StyleProp<ViewStyle>}>
    <LargeP style={{ fontWeight: "bold" }}>Create a new account</LargeP>
    <SmallP style={{ maxWidth: 230 }}>
      Let’s help you set up your account, it won’t take that long.
    </SmallP>
  </View>
);

const Inputs = ({
  credentials,
  setCredentials,
}: Readonly<{
  credentials: Credentials;
  setCredentials: Dispatch<SetStateAction<Credentials>>;
}>) => (
  <View style={styles.inputsContainer as StyleProp<ViewStyle>}>
    <View style={styles.inputField as StyleProp<ViewStyle>}>
      <P>Username</P>
      <InputField
        placeholder="Enter Username"
        onChangeText={(text) =>
          setCredentials({ ...credentials, username: text })
        }
        value={credentials.username}
      />
    </View>
    <View style={styles.inputField as StyleProp<ViewStyle>}>
      <P>Email</P>
      <InputField
        placeholder="Enter Email"
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
        value={credentials.email}
      />
    </View>
    <View style={styles.inputField as StyleProp<ViewStyle>}>
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
    <View style={styles.inputField as StyleProp<ViewStyle>}>
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
);

const SignUpButton = ({
  handleSignUp,
}: Readonly<{ handleSignUp: (e: GestureResponderEvent) => Promise<void> }>) => (
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
);

const Divider = () => (
  <View style={styles.dividerContainer as StyleProp<ViewStyle>}>
    <View style={styles.dividerLine as StyleProp<ViewStyle>} />
    <SmallP style={{ fontWeight: "bold" }}>OR</SmallP>
    <View style={styles.dividerLine as StyleProp<ViewStyle>} />
  </View>
);

const SignInButton = () => (
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
);

export default function Register() {
  const { login } = useSession();
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async (e: GestureResponderEvent) => {
    e.preventDefault();
    setLoading(true);

    const { username, email, password, confirmPassword } = credentials;

    if (!username || !email || !password || !confirmPassword) {
      setLoading(false);
      return Alert.alert("Whoopsy...", "Please fill in all fields");
    }

    if (password !== confirmPassword) {
      setLoading(false);
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
        setLoading(false);
        return Alert.alert(
          "Registration failed",
          registerResponse.message.toString()
        );
      }

      // After successful registration, we'll try to log the user in
      const loginResponse = await login(username, password);

      if (loginResponse.statusCode !== 200) {
        setLoading(false);
        return Alert.alert("Login failed", loginResponse.message.toString());
      }

      // Redirect to the home page
      setLoading(false);
      router.push("/home");
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <RootContainer>
      <LoadingModal isActive={loading} />
      <StatusBar />
      <Wrapper>
        <Header />
        <Inputs credentials={credentials} setCredentials={setCredentials} />
        <SignUpButton handleSignUp={handleSignUp} />
        <Divider />
        <SignInButton />
      </Wrapper>
    </RootContainer>
  );
}

const styles = {
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    marginBottom: 58,
    gap: 5,
  },
  inputsContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    marginBottom: 38,
  },
  inputField: { flex: 1, flexDirection: "column", gap: 5 },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dividerLine: { width: "40%", height: 1, backgroundColor: Colors.black },
};
