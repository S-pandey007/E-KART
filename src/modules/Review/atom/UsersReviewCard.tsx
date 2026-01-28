import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { OverAllProdctReview } from "@/src/utils/searchData";
import ReviewLayout from "../molecules/ReviewLayout";
import { scale } from "@/src/utils/Responsivess";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const UsersReviewCard = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <FlatList
        data={OverAllProdctReview}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReviewLayout
            ratingNumber={item.ratingNumber}
            reviewTitle={item.reviewTitle}
            reviewDate={item.reviewDate}
            reviewText={item.reviewText}
            reviewerName={item.reviewerName}
            verifiedBuyer={item.verifiedBuyer}
            image={item.image}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: scale(10),
        }}
        removeClippedSubviews={true}
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default UsersReviewCard;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  listContainer: {
    paddingHorizontal: scale(10),
    alignItems: "flex-start",
  },
});
