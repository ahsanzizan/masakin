import Colors from "@constants/Colors";
import React, { ReactNode } from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

// Universal 'Bottom' component props
interface ButtonProps {
  children: ReactNode;
  isDark?: boolean;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export const PrimaryButton: React.FC<Readonly<ButtonProps>> = ({
  children,
  style,
  onPress,
}) => {
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
};

export const ReversedPrimaryButton: React.FC<Readonly<ButtonProps>> = ({
  children,
  style,
  onPress,
}) => {
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
};
