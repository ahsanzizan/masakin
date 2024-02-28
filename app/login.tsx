import { PrimaryButton, ReversedPrimaryButton } from "@components/Button";
import { InputField } from "@components/Input";
import LoadingModal from "@components/LoadingModal";
import RootContainer from "@components/RootContainer";
import { H2, LargeP, P, SmallP } from "@components/Text";
import Wrapper from "@components/Wrapper";
import Colors from "@constants/Colors";
import { useSession } from "@lib/auth";
import { Redirect, router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Alert,
  GestureResponderEvent,
  StatusBar,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

const Header = () => (
  <View style={styles.greetings as StyleProp<ViewStyle>}>
    <H2 style={{ textAlign: "left" }}>Hello There,</H2>
    <LargeP>Welcome Back!</LargeP>
  </View>
);

const Inputs = ({
  username,
  setUsername,
  password,
  setPassword,
}: Readonly<{
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}>) => (
  <View style={styles.inputsContainer as StyleProp<ViewStyle>}>
    <View style={styles.inputField as StyleProp<ViewStyle>}>
      <P>Username</P>
      <InputField
        placeholder="Enter Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
    </View>
    <View style={styles.inputField as StyleProp<ViewStyle>}>
      <P>Password</P>
      <InputField
        placeholder="Enter Password"
        isSecure
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
    </View>
  </View>
);

const SignInButton = ({
  handleSignIn,
}: {
  handleSignIn: (e: GestureResponderEvent) => Promise<void>;
}) => (
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
);

const Divider = () => (
  <View style={styles.dividerContainer as StyleProp<ViewStyle>}>
    <View style={styles.dividerLine as StyleProp<ViewStyle>} />
    <SmallP style={{ fontWeight: "bold" }}>OR</SmallP>
    <View style={styles.dividerLine as StyleProp<ViewStyle>} />
  </View>
);

const SignUpButton = () => (
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
);

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login, loggedIn } = useSession();
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
    <RootContainer>
      <LoadingModal isActive={loading} />
      <StatusBar />
      <Wrapper>
        <Header />
        <Inputs
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
        <SignInButton handleSignIn={handleSignIn} />
        <Divider />
        <SignUpButton />
      </Wrapper>
    </RootContainer>
  );
}

const styles = {
  greetings: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    marginBottom: 58,
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
