import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { OverAllProdctReview } from "@/src/utils/searchData";
import ReviewLayout from "./ReviewLayout";
import { scale } from "@/src/utils/Responsivess";

const OverallReviewCard = () => {
  return (
    <View>
      <FlatList
        data={OverAllProdctReview}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReviewLayout
            key={item.id}
            ratingNumber={item.ratingNumber}
            reviewTitle={item.reviewTitle}
            reviewDate={item.reviewDate}
            reviewText={item.reviewText}
            reviewerName={item.reviewerName}
            verifiedBuyer={item.verifiedBuyer}
            // image={item.image}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        windowSize={5}
        removeClippedSubviews={false}
        bounces={false}
        decelerationRate="fast"
      />
    </View>
  );
};

export default OverallReviewCard;

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: scale(10),
    gap: scale(10),
    // alignItems:'flex-start'
  },
});
