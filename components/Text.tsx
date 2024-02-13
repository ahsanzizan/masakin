import Colors from "@constants/Colors";
import React from "react";
import { Text, TextStyle } from "react-native";

// Universal 'Text' component props
interface TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  isDark?: boolean;
}

interface TextTemplateProps {
  children: React.ReactNode;
  style?: TextStyle;
  isDark?: boolean;
  fontSize: number;
}

const TextComponent: React.FC<TextTemplateProps> = ({
  children,
  style,
  isDark,
  fontSize,
}) => {
  return (
    <Text
      style={{
        color: isDark ? Colors.dark.text : Colors.light.text,
        fontSize,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const H1 = (props: TextProps) => (
  <TextComponent {...props} fontSize={42} />
);

export const H2 = (props: TextProps) => (
  <TextComponent {...props} fontSize={30} />
);

export const LargeP = (props: TextProps) => (
  <TextComponent {...props} fontSize={20} />
);

export const MediumP = (props: TextProps) => (
  <TextComponent {...props} fontSize={18} />
);

export const P = (props: TextProps) => (
  <TextComponent {...props} fontSize={16} />
);

export const SmallP = (props: TextProps) => (
  <TextComponent {...props} fontSize={14} />
);
