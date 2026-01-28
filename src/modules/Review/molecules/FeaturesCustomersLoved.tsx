import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { scale } from "@/src/utils/Responsivess";
import ScrollOptionsRow from "../../Product_Detail/molecules/ScrollOptionsRow";
import { FeatureCustomerLoved } from "@/src/utils/searchData";
import { Colors } from "@/src/utils/Constants";
import RatingcountTag from "../atom/RatingcountTag";
import ReviewLayout from "./ReviewLayout";
import OverallReviewCard from "./OverallReviewCard";

const FeaturesCustomersLoved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Features customers loved</Text>
      <ScrollOptionsRow
        options={FeatureCustomerLoved}
        containerStyle={styles.chipContainer}
        textStyle={styles.chipText}
      />
      <OverallReviewCard/>
    </View>
  );
};

export default FeaturesCustomersLoved;

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(20),
    gap: scale(10),
  },
  headerText: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(16),
  },
  chipContainer: {
    backgroundColor: Colors.primaryBG,
    borderRadius: scale(10),
  },
  chipText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(11),
  },
});
