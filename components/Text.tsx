import { Text, TextStyle } from "react-native";
import Colors from "@constants/Colors";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  style?: TextStyle;
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

export function H2({ children, style, isDark }: Readonly<TextProps>) {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontWeight: "bold",
        fontSize: 30,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function LargeP({ children, style, isDark }: Readonly<TextProps>) {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontSize: 20,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export function MediumP({ children, style, isDark }: Readonly<TextProps>) {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontSize: 18,
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

export function SmallP({ children, style, isDark }: Readonly<TextProps>) {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontSize: 14,
        ...style,
      }}
    >
      {children}
    </Text>
  );
}
