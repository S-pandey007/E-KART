import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../atoms/AppText";
import { RFValue } from "react-native-responsive-fontsize";

const HeaderSection = ({ line1, line2 }: any) => {
  return (
    <View style={styles.container}>
      <AppText weight="BOLD" style={styles.line1}>
        {line1}
      </AppText>
      <AppText style={styles.line2} weight="BOLD">
        {line2}
      </AppText>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: RFValue(40),
    marginBottom: RFValue(20),
  },
  line1: {
    fontSize: RFValue(32),
    color: "#000",
  },
  line2: {
    fontSize: RFValue(32),
    color: "#000",
  },
});
