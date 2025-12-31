import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FreshProductCard from "../molecules/FreshProductCard";
import { freshSelectionProducts } from "@/src/utils/searchData";
import SectionTitle from "@/src/modules/Search/atoms/SectionTitle";
import { RFValue } from "react-native-responsive-fontsize";

type Products = {
  id: string;
  title: string;
  image: string;
  rating: number;
  originalPrice: number;
  sellingPrice: number;
  discountPercent: number;
};

type Props = {
  onProductPress?: (item: Products) => void;
  title: string;
  sponsore: Products[];
};

const SponsoredProducts: React.FC<Props> = ({
  onProductPress,
  title,
  sponsore,
}) => {
  return (
    <View style={styles.container}>
      <SectionTitle title={title || "Sponsored Products"} />
      <FlatList
        style={styles.productList}
        horizontal
        data={sponsore}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FreshProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            originalPrice={item.originalPrice}
            sellingPrice={item.sellingPrice}
            discountPercentage={item.discountPercent}
            onPress={() => onProductPress?.(item)}
          />
        )}
      />
    </View>
  );
};

export default SponsoredProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productList: {
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
  },
});
