import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import RatingcountTag from "../atom/RatingcountTag";
import Icons from "@/src/components/atoms/Icons";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { scale, scaleW, screenWidth } from "@/src/utils/Responsivess";

type Props = {
  ratingNumber: number;
  reviewTitle: string;
  reviewDate: string;
  reviewText: string;
  reviewerName: string;
  verifiedBuyer: boolean;
  image?: string;
};
const ReviewLayout: React.FC<Props> = ({
  ratingNumber,
  reviewTitle,
  reviewDate,
  reviewText,
  reviewerName,
  verifiedBuyer = false,
  image,
}) => {
  const hasImage = Boolean(image);
  return (
    <View style={styles.container}>
      {/* top content  */}
      <View style={styles.topContent}>
        <View style={styles.reviewInfo}>
          <RatingcountTag ratingNumber={ratingNumber} />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.reviewTitle}
          >
            {reviewTitle}
          </Text>
        </View>
        <Text style={styles.reviewDate}>{reviewDate || "8 months ago"}</Text>
      </View>

      {/* review content text  */}
      <View style={styles.reviewContent}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.reviewText,hasImage&&{marginBottom:scale(10)}]}>
          {reviewText || "Nice Product"}
        </Text>

        {/* review image  */}
        {hasImage && (
          <View style={[styles.imageContainer]}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        )}
      </View>

      {/* user's info  */}
      <View style={styles.userInfo}>
        <Text style={styles.reviewerName}>
          {reviewerName || "Bhoomika madival"}
        </Text>
        {verifiedBuyer && (
          <View style={styles.verifiedBuyer}>
            <Icons
              name="checkmark-circle"
              size={15}
              iconFamily="Ionicons"
              color="#817e7e"
            />
            <Text style={styles.verifiedText}>Verified Buyer</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default memo(ReviewLayout);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    borderRadius: scale(7),
    paddingHorizontal: scale(9),
    width: scaleW(screenWidth * 0.94),
    marginBottom:scale(12)
  },
  topContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scale(7),
  },
  reviewInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  reviewTitle: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(16),
    flexShrink: 1,
  },
  reviewDate: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(12),
    color: "#a8a7a7",
  },
  reviewContent: {
    marginVertical: scale(15),
  },
  reviewText: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
    lineHeight: RFValue(18),
  },
  userInfo: {
    marginVertical: scale(20),
  },
  reviewerName: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: RFValue(14),
  },
  verifiedBuyer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(3),
  },
  verifiedText: {
    color: "#817e7e",
    fontSize: RFValue(13),
  },
  imageContainer: {
    marginTop: scale(10),
    borderRadius: scale(6),
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    aspectRatio: 4 / 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
