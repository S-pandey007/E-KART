import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExploreMoreProductCard from "../atoms/ExploreMoreProductCard";
import { freshSelectionProducts } from "@/src/utils/searchData";
import { scale } from "@/src/utils/Responsivess";

type ProductInfo = {
  title: string;
  image: string;
  rating: number;
  originalPrice: number;
  sellingPrice: number;
  discountPercentage: number;
};

type Props = {
  product: ProductInfo[];
};

const ExploreMoreProduct: React.FC<Props> = ({ product }) => {
  const onSelectProduct = (item: ProductInfo) => {
    console.debug("Expolre more product selected", item);
  };
  return (
    <View>
      <FlatList
        data={freshSelectionProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ExploreMoreProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            originalPrice={item.originalPrice}
            sellingPrice={item.sellingPrice}
            discountPercentage={item.discountPercent}
            onPress={() => onSelectProduct(item)}
          />
        )}
      />
    </View>
  );
};

export default ExploreMoreProduct;

const styles = StyleSheet.create({
  row: {
    justifyContent:'space-around',
    paddingVertical:scale(10)
  },
});
