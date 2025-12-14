import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../../login/atoms/AppText";
import { RFValue } from "react-native-responsive-fontsize";

const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <AppText weight="BOLD" style={styles.line1}>
        Verify Email
      </AppText>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    marginTop: RFValue(40),
    marginBottom: RFValue(20),
    alignSelf: "center",
  },
  line1: {
    fontSize: RFValue(32),
    color: "#000000",
  },
});
