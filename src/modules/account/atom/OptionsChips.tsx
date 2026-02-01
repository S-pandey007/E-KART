import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "@/src/components/atoms/Icons";
import { Image } from "react-native";
import { AddressInfoIcon } from "@/images/productDetails";
import { scale } from "@/src/utils/Responsivess";
import { screenWidth } from "@/src/utils/Constants";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  title: string;
  iconName?: string;
  iconFamilyName?: string;
  color?: string;
  image?: string;
  onPress?: () => void;
};



const OptionsChips: React.FC<Props> = ({
  title,
  iconName,
  iconFamilyName,
  color,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.innerContainer}>
        {image && (
          <Image
            source={AddressInfoIcon.deliveryTruck || image}
            style={styles.image}
          />
        )}

        {iconName && iconFamilyName && (
          <Icons
            name={iconName || "heart-outline"}
            iconFamily={iconFamilyName || "Ionicons"}
            color={color || "rgb(63, 137, 235)"}
            size={23}
          />
        )}

        <Text style={styles.title}>{title || "Edit Profile"}</Text>
      </View>
      <Icons
        name="chevron-forward-outline"
        iconFamily="Ionicons"
        color="#000"
        size={20}
      />
    </TouchableOpacity>
  );
};

export default OptionsChips;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingVertical: scale(7),
    paddingHorizontal: scale(15),
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  image: {
    width: scale(screenWidth * 0.2),
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
  },
});
