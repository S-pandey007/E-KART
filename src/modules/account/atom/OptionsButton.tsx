import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import Icons from "@/src/components/atoms/Icons";
import { Colors, screenWidth } from "@/src/utils/Constants";
import { scale } from "@/src/utils/Responsivess";
import { FONTS } from "@/src/theme/font/fonts";
import { AddressInfoIcon } from "@/images/productDetails";

type Props = {
  title: string;
  iconName?: string;
  iconFamilyName?: string;
  color?: string;
  image?: string;
  onPress?: () => void;
};

const OptionsButton: React.FC<Props> = ({
  title,
  iconName,
  iconFamilyName,
  color,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {image && (
        <Image
          source={AddressInfoIcon.deliveryTruck || image}
          style={styles.image}
        />
      )}

      {iconName && iconFamilyName &&<Icons
        name={iconName || "heart-outline"}
        iconFamily={iconFamilyName || "Ionicons"}
        color={color || "rgb(63, 137, 235)"}
        size={24}
      />}
      <Text style={styles.text}>{title || "Wishlist"}</Text>
    </TouchableOpacity>
  );
};

export default memo(OptionsButton);

const styles = StyleSheet.create({
  container: {
    width:scale(screenWidth*0.5),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: scale(7),
    paddingHorizontal: scale(10),
    paddingVertical: scale(7),
    marginHorizontal: scale(10),
    marginVertical: scale(7),
    gap: scale(7),
  },
  image: {
    width: scale(screenWidth * 0.07),
    aspectRatio: 1,
    resizeMode: "contain",
  },
  text: {
    fontFamily: FONTS.MEDIUM,
  },
});
