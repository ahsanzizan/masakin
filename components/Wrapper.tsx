import dimensions from "@utils/dimensions";
import { ReactNode } from "react";
import { ScrollView } from "react-native";

export default function Wrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ScrollView
      style={{
        width: dimensions.windows.width,
      }}
      contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 94 }}
    >
      {children}
    </ScrollView>
  );
}
