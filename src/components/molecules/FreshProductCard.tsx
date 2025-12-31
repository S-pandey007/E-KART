import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import RatingBadge from "@/src/modules/SearchResult/atoms/RatingBadge";
import PriceText from "@/src/modules/SearchResult/atoms/PriceText";
import PriceInfo from "@/src/modules/SearchResult/molecule/PriceInfo";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

type Prop = {
  title: string;
  image: string;
  rating: number;
  originalPrice: number;
  sellingPrice: number;
  discountPercentage: number;
  onPress?: () => void;
};

const FreshProductCard: React.FC<Prop> = ({
  title,
  image,
  rating,
  originalPrice,
  discountPercentage,
  sellingPrice,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: image }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position:"absolute",
            top:'85%'
          }}
        >
          {/* rating  */}
          <RatingBadge rating={rating} />
        </View>
      </View>

      {/* title  */}
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>

      {/* price section  */}
      <PriceInfo
        originalPrice={originalPrice}
        sellingPrice={sellingPrice}
        discountPercentage={discountPercentage}
      />
    </TouchableOpacity>
  );
};

export default FreshProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: RFValue(150),
    backgroundColor: "#FFF",
    borderRadius: RFValue(8),
    padding: RFValue(8),
    marginRight: RFValue(7),
    borderWidth: RFValue(1),
    borderColor: "#e2e2e2ff",
    paddingBottom:RFValue(20)
  },
  imageWrapper: {
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    borderRadius: RFValue(5),
    height: RFValue(140),
    resizeMode: "cover",
  },
  title: {
    marginTop: RFValue(6),
    fontSize: RFValue(12),
    fontFamily: FONTS.SEMIBOLD,
    color: "#222",
  },
});
