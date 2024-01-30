import { Text, TextStyle } from "react-native";
import Colors from "../constants/Colors";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  style: TextStyle;
  isDark?: boolean;
}

export function H1({ children, style, isDark }: Readonly<TextProps>) {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontWeight: "bold",
        fontSize: 42,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function P({ children, style, isDark }: Readonly<TextProps>) {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontSize: 16,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}
