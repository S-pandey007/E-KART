import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import Icons from "@/src/components/atoms/Icons";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/src/utils/Constants";

type Props = {
  icon: string;
  title: string;
  text: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
};
const AddressLayout: React.FC<Props> = ({
  icon,
  text,
  title,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
      style={[styles.container, containerStyle]}
    >
      <Icons
        name={icon || "home-outline"}
        color="#000"
        iconFamily="Ionicons"
        size={RFValue(18)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title || "Home"}</Text>
        <Text style={styles.text} numberOfLines={1}>
          {text || "C0013, shrinagr Gudhiyari raipur chhattisgarh"}
        </Text>
      </View>
      <Icons
        name="chevron-forward-outline"
        color="#000"
        iconFamily="Ionicons"
        size={RFValue(15)}
      />
    </TouchableOpacity>
  );
};

export default React.memo(AddressLayout);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primaryBG,
    justifyContent: "space-between",
    alignItems: "center",
    gap: RFValue(10),
    marginHorizontal: RFValue(15),
    paddingHorizontal: RFValue(7),
    paddingVertical: RFValue(10),
    borderTopRightRadius: RFValue(15),
    borderTopLeftRadius: RFValue(15),
  },
  textContainer: {
    flex: 1,
    marginHorizontal: RFValue(10),
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(14),
  },
  text: {
    fontFamily: FONTS.REGULAR,
    flexShrink: 2,
  },
});
