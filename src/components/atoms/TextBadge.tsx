import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { scale } from "@/src/utils/Responsivess";
import { FONTS } from "@/src/theme/font/fonts";
import { Colors } from "@/src/utils/Constants";

type Props = {
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
};

const TextBadge: React.FC<Props> = ({
  text,
  containerStyle,
  textStyle,
  backgroundColor =Colors.primaryBG, 
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        containerStyle,
      ]}
    >
      <Text style={[styles.text, textStyle]} numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

export default React.memo(TextBadge);
const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",     
    paddingHorizontal: scale(10),
    paddingVertical: scale(4),
    borderRadius: scale(10),      
  },

  text: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(11),
    color: "#2A5BD7",             
  },
});
