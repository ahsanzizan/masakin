import { ReactNode } from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Colors from "@constants/Colors";

interface ButtonProps {
  children: ReactNode;
  isDark?: boolean;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export function PrimaryButton({
  children,
  isDark,
  style,
  onPress,
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: Colors.primary,
        borderRadius: 12,
        ...style,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

export function ReversedPrimaryButton({
  children,
  isDark,
  style,
  onPress,
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 12,
        ...style,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
