import Colors from "@constants/Colors";
import React from "react";
import { StyleProp, TextInput, TextStyle, View } from "react-native";
import SearchIcon from "./icons/SearchIcon";

// Universal 'InputField` component props
interface InputFieldProps {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isSecure?: boolean;
}

export const InputField: React.FC<Readonly<InputFieldProps>> = ({
  style,
  placeholder,
  onChangeText,
  value,
  isSecure,
}) => {
  return (
    <TextInput
      style={{
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderWidth: 2,
        borderColor: Colors.gray,
        borderRadius: 10,
        fontSize: 12,
        ...(style as object),
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={isSecure}
    />
  );
};

export const SearchField: React.FC<Readonly<InputFieldProps>> = ({
  style,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: Colors.gray,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
      }}
    >
      <SearchIcon />
      <TextInput
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingRight: 10,
          backgroundColor: "#fff",
          marginLeft: 8,
          ...(style as object),
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid="transparent"
        placeholderTextColor={Colors.neutral}
      />
    </View>
  );
};
