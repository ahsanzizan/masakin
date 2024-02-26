import Colors from "@constants/Colors";
import { AllRoutes, router, usePathname } from "expo-router";
import { FC } from "react";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";
import BellIcon from "./icons/BellIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import HomeIcon from "./icons/HomeIcon";
import ProfileIcon from "./icons/ProfileIcon";
import PlusIcon from "./icons/PlusIcon";

const bottomBarItems = [
  { route: "/home", Icon: HomeIcon },
  { route: "/bookmark", Icon: BookmarkIcon },
  {
    route: "",
    Icon: PlusIcon,
    isMiddle: true,
    onPress: (event: GestureResponderEvent) => {
      // TODO: Implement this
    },
  },
  { route: "/notification", Icon: BellIcon },
  { route: "/profile", Icon: ProfileIcon },
];

const BottomBarItem = ({
  route,
  Icon,
  activePath,
  isMiddle,
  onPress,
}: {
  route: string;
  Icon: FC<
    Readonly<{
      color?: string;
      fill?: string;
    }>
  >;
  activePath: string;
  isMiddle?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  const isActive = activePath === route;

  if (isMiddle) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          padding: 16,
          borderRadius: 32,
          backgroundColor: Colors.primary,
        }}
      >
        <Icon />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(route as AllRoutes);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Icon
        fill={isActive ? Colors.primary : undefined}
        color={isActive ? Colors.primary : undefined}
      />
    </TouchableOpacity>
  );
};

export default function BottomBar() {
  // Get the current active page using the pathname
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
      className="fixed inset-x-0 bottom-0 z-10" // Use the fixed class because I don't know how to do that with native style
    >
      <View
        style={{
          justifyContent: "space-between",
          paddingHorizontal: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {bottomBarItems.map((item) => (
          <BottomBarItem
            key={item.route}
            route={item.route}
            Icon={item.Icon}
            activePath={active[1]}
            isMiddle={item.isMiddle}
            onPress={item.onPress}
          />
        ))}
      </View>
    </View>
  );
}
