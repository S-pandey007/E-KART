import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const AssuredBadge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Assured</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F7FF",
    paddingHorizontal: RFValue(6),
    paddingVertical: RFValue(2),
    borderRadius: RFValue(4),
    marginLeft: RFValue(6),
  },
  text: {
    fontSize: RFValue(11),
    color: "#1A73E8",
    fontWeight: "600",
  },
});


export default AssuredBadge;
