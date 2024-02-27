import Colors from "@constants/Colors";
import { ActivityIndicator } from "react-native";

export default function LoadingModal({
  isActive,
}: Readonly<{ isActive?: boolean }>) {
  return (
    <ActivityIndicator
      animating={isActive}
      hidesWhenStopped={false}
      size={80}
      color={Colors.primary}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        zIndex: isActive ? 1000 : -1,
      }}
    />
  );
}
