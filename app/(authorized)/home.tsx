import { Text } from "react-native";
import { useSession } from "../../lib/auth";

export default function Home() {
  const { user } = useSession();

  return <Text>{user.username}</Text>;
}
