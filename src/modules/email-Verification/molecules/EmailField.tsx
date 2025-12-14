import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppInput from "../../login/atoms/AppInput";
import { RFValue } from "react-native-responsive-fontsize";
import Icons from "@/src/components/atoms/Icons";

const EmailField = ({
  value,
  onChangeText,
  placeholder = "Enter your email",
  iconName,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icons iconFamily="Ionicons" size={18} name={iconName} />
        <AppInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default EmailField;

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(10),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: RFValue(8),
    paddingHorizontal: RFValue(10),
    height: RFValue(48),
    borderWidth: 1,
  },
});
