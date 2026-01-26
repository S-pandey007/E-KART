import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OptionalProductHeader from "../atoms/OptionalProductHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { freshSelectionProducts } from "@/src/utils/searchData";
import FreshProductCard from "@/src/components/molecules/FreshProductCard";

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
};

const SimilarProducts: React.FC<Props> = (
  {
  },
) => {
  const onProductPress = (item: Products) => {
    console.debug("Similar product pressed:", item);
  };
  return (
    <View>
      <OptionalProductHeader
        title="Similar Products"
        onPress={() => console.debug("View more similar products")}
      />
      <FlatList
        style={styles.productList}
        horizontal
        data={freshSelectionProducts}
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

export default React.memo(SimilarProducts);

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
