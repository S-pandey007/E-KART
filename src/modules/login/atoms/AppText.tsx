import React from "react";
import { Text } from "react-native";
import { FONTS } from "@/src/theme/font/fonts";

export default function AppText({
  children,
  style,
  weight = "REGULAR",
  ...props
}: any) {
  return (
    <Text {...props} style={[{ fontFamily: FONTS[weight] }, style]}>
      {children}
    </Text>
  );
}
