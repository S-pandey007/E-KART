import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

const FieldError = ({ error }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default FieldError;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: RFValue(13),
    marginTop: 5,
    fontFamily: FONTS.MEDIUM_ITALIC,
  },
  container: {
    width: "100%",
  },
});
