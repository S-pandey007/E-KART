import { StyleSheet, Systrace, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "@/src/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

const AppInput = ({
  icon,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  onFocus,
  value,
  style,
  ...props
}: any) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
        {...props}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: Colors.background,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    // borderWidth: 1,
    // borderColor: Colors.active,
  },
  input: {
    flex: 1,
    color: "#666",
    fontSize: RFValue(14),
    fontFamily: FONTS.LIGHT,
  },
});
