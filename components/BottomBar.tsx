import { router, usePathname } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Colors from "@constants/Colors";
import BellIcon from "./icons/BellIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import HomeIcon from "./icons/HomeIcon";
import PlusIcon from "./icons/PlusIcon";
import ProfileIcon from "./icons/ProfileIcon";

export default function BottomBar() {
  const pathname = usePathname();
  const active = pathname.split("/");

  return (
    <View
      style={{
        minWidth: 360,
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        paddingVertical: 12,
      }}
      className="fixed inset-x-0 bottom-0 z-10"
    >
      <View
        style={{
          justifyContent: "space-between",
          paddingHorizontal: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/home");
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <HomeIcon
            fill={active[1] === "home" ? Colors.primary : undefined}
            color={active[1] === "home" ? Colors.primary : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/bookmark");
          }}
        >
          <BookmarkIcon
            fill={active[1] === "bookmark" ? Colors.primary : undefined}
            color={active[1] === "bookmark" ? Colors.primary : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // TODO: Implement this
          }}
          style={{
            padding: 16,
            borderRadius: 32,
            backgroundColor: Colors.primary,
          }}
        >
          <PlusIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/notification");
          }}
        >
          <BellIcon
            fill={active[1] === "notification" ? Colors.primary : undefined}
            color={active[1] === "notification" ? Colors.primary : undefined}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/profile");
          }}
        >
          <ProfileIcon
            fill={active[1] === "profile" ? Colors.primary : undefined}
            color={active[1] === "profile" ? Colors.primary : undefined}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
