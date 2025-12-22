import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  value: string;
  style?: TextStyle;
};

const PriceText: React.FC<Props> = ({ value, style }) => {
  return <Text style={[styles.text, style]}>{value}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(14),
    color: "#000",
  },
});

export default PriceText;
