import { Redirect, Stack } from "expo-router";
import { useSession } from "../../lib/auth";

export default function Protected() {
  const { loggedIn } = useSession();

  // Implement pages loading
  if (loggedIn === null) return null;

  if (!loggedIn) return <Redirect href={"/login"} />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
