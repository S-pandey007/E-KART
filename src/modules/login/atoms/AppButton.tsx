import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/src/utils/Constants";
import AppText from "./AppText";
import { RFValue } from "react-native-responsive-fontsize";

const AppButton = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...props
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && { opacity: 0.6 }, style]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.active} />
      ) : (
        <AppText weight="MEDIUM" style={[styles.text, textStyle]}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.active,
    paddingVertical: RFValue(12),
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: RFValue(16),
  },
});
