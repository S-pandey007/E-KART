import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React, { memo } from "react";
import { ScrollableOptionsIcons } from "@/images/productDetails";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

type Props = {
  icon?: string;
  text: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;

  selected?: boolean;
  selectedcontainerStyle?: ViewStyle;
  selectedtextStyle?: TextStyle;
};
const ScrollableOtpions = ({
  icon,
  text,
  onPress,
  containerStyle,
  textStyle,
  selected = false,
  selectedcontainerStyle,
  selectedtextStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        selected && styles.selectedContainer,
        selected && selectedcontainerStyle,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {icon && <Image source={icon} style={styles.image} />}
      <Text
        style={[
          styles.text,
          textStyle,
          selected && styles.selectedText,
          selected && selectedtextStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(ScrollableOtpions);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(8),
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(7),
    borderRadius: RFValue(20),
    borderWidth: 1,
    borderColor: "#000",
  },
  selectedContainer: {
    backgroundColor: "000",
    borderColor: "#000",
    
  },
  image: {
    width: RFValue(21),
    height: RFValue(21),
    resizeMode: "contain",
  },
  text: {
    fontSize: RFValue(11),
    fontFamily: FONTS.BOLD,
  },
  selectedText: {
    color: "#000",
    fontSize: RFValue(11),
    fontFamily: FONTS.BOLD,
  },
});
