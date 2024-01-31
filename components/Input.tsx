import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

interface InputFieldProps {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  isSecure?: boolean;
}

export function InputField({
  style,
  placeholder,
  onChangeText,
  value,
  isSecure,
}: Readonly<InputFieldProps>) {
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
}
