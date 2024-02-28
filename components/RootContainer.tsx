import Colors from "@constants/Colors";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native";

export default function RootContainer({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.light.background,
      }}
    >
      {children}
    </SafeAreaView>
  );
}
