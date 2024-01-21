import { Redirect } from "expo-router";
import { useSession } from "../lib/auth";

// TODO: implement onboarding
export default function Root() {
  const { loggedIn } = useSession();

  if (!loggedIn) return <Redirect href={"/login"} />;

  return <Redirect href={"/home"} />;
}
