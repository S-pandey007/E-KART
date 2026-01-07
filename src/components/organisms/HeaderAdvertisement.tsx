import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import PriceText from "@/src/modules/SearchResult/atoms/PriceText";
import { FONTS } from "@/src/theme/font/fonts";
import { Colors } from "@/src/utils/Constants";

type AdvertisementCardProps = {
  image: string;
  title: string;
  sellingPrice: number;
  originalPrice?: number;
  discountPercent?: number;
  label?: string; // Ad / Sponsored / Offer
};

const AdvertisementCard = ({
  image,
  title,
  sellingPrice,
  originalPrice,
  discountPercent,
  label = "Ad",
}: AdvertisementCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.priceRow}>
          <PriceText value={`₹${sellingPrice}`} style={styles.selling} />

          {!!originalPrice && (
            <PriceText
              value={`₹${originalPrice}`}
              style={styles.original}
            />
          )}

          {!!discountPercent && (
            <Text style={styles.discount}>
              {discountPercent}% off
            </Text>
          )}
        </View>
      </View>

      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default memo(AdvertisementCard);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryBG,
    padding: RFValue(7),
    borderRadius: RFValue(15),
    width: "100%",
    minHeight: RFValue(70),
    marginVertical:RFValue(5)
  },

  image: {
    width: RFValue(42),
    height: RFValue(52),
    borderRadius: RFValue(6),
  },

  content: {
    flex: 1,
    marginHorizontal: RFValue(8),
  },

  title: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RFValue(4),
  },

  selling: {
    fontSize: RFValue(14),
    fontFamily: FONTS.SEMIBOLD,
  },

  original: {
    fontSize: RFValue(13),
    color: "#888",
    textDecorationLine: "line-through",
    marginLeft: RFValue(6),
  },

  discount: {
    fontSize: RFValue(13),
    color: "#2e7d32",
    marginLeft: RFValue(6),
    fontFamily: FONTS.MEDIUM,
  },

  label: {
    position: "absolute",
    top: RFValue(6),
    right: RFValue(6),
    backgroundColor: "#eee",
    paddingHorizontal: RFValue(6),
    paddingVertical: RFValue(2),
    borderRadius: RFValue(4),
    fontSize: RFValue(11),
    fontFamily: FONTS.MEDIUM,
  },
});
