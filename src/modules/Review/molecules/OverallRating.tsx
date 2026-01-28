import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Icons from "@/src/components/atoms/Icons";
import { scale } from "@/src/utils/Responsivess";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import ImageGrid from "./ImageGrid";
import { FeatureCustomerLoved, ReviewImages } from "@/src/utils/searchData";
import ImageCarouselModal from "@/src/components/CarouselImage/molecules/ImageCarouselModal";
import FeaturesCustomersLoved from "./FeaturesCustomersLoved";
import ShowAllReviewButton from "../atom/ShowAllReviewButton";
import { navigate } from "@/src/navigation/NavigationUtils";

const OverallRating = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openImageModal = (index: number) => {
    console.log("Open image modal");
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingNumber}>4</Text>
        <Icons name="star" size={20} iconFamily="Ionicons" color="#047028" />
        <View style={styles.status}>
          <Text style={styles.statusText}>Good</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.text}>based on 1,162 rating by</Text>
        <Icons
          name="checkmark-circle"
          size={17}
          iconFamily="Ionicons"
          color="#817e7e"
        />
        <Text style={styles.text}>Verified Buyers</Text>
      </View>

      <ImageGrid images={ReviewImages} onPress={() => openImageModal} />
      <ImageCarouselModal
        visible={modalVisible}
        images={ReviewImages}
        onClose={() => setModalVisible(false)}
      />

      <FeaturesCustomersLoved />

      {/* show all reviwes  */}
      <ShowAllReviewButton
        onPress={() =>navigate("AllReviews") }
      />
    </View>
  );
};

export default OverallRating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(16),
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  ratingNumber: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(22),
  },
  status: {
    backgroundColor: "#daf8e4ad",
    paddingHorizontal: scale(7),
    paddingVertical: scale(3),
    borderRadius: scale(5),
  },
  statusText: {
    color: "#047028",
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(13),
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(2),
    paddingVertical: scale(5),
  },
  text: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(13),
    color: "#817e7e",
  },
});
