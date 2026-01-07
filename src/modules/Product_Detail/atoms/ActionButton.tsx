// atoms/ActionButton.tsx
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

type ActionButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor: string;
  textColor?: string;
};

const ActionButton = ({
  title,
  onPress,
  backgroundColor,
  textColor = "#000",
}: ActionButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(ActionButton);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: RFValue(48),
    borderRadius: RFValue(8),
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFValue(14),
  },
});
