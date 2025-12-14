import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../login/atoms/AppText";
import { RFValue } from "react-native-responsive-fontsize";

const AppInfoText = ({ children, style }: any) => {
  return (
    <AppText weight="MEDIUM" style={[styles.info, style]}>
      {children}
    </AppText>
  );
};

export default AppInfoText;

const styles = StyleSheet.create({
  info: {
    fontSize: RFValue(11),
    color: "#e46f6fff",
    width: "90%",
    lineHeight: RFValue(16),
    marginTop: RFValue(5),
    alignSelf: "center",
  },
});
