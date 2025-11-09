import { StyleSheet, Text, View, StatusBar, Platform, FlatList } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getProductsByCategory } from "./api/getProducts";
import { screenHeight } from "@/src/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import SearchBar from "./atoms/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductItem from "./atoms/ProductItem";
import { useAppSelector } from "@/src/store/reduxHook";
import { selectTotalItemsCart } from "../cart/api/slice";

const Products: FC = () => {
  const route = useRoute();
  const category = route?.params as any;
  const [products, setProducts] = useState<any[]>([]);
  const count = useAppSelector(selectTotalItemsCart)

  const fetchProducts = async () => {
    const data = await getProductsByCategory(category?.id);
    setProducts(data);
  };

  useEffect(() => {
    if (category?.id) {
      fetchProducts();
    }
  }, [category?.id]);

  const rederItem =({item,index}:any)=>{
    const isOdd = index%2 !==0
    return(
        <ProductItem isOdd={isOdd} item={item}/>
    )
  }

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <SearchBar cartLength={count} />
      <FlatList
        bounces={false}
        data={products}
        renderItem={rederItem}
        keyExtractor={(item)=>item._id.toString()}
        numColumns={2}
        ListEmptyComponent={
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Oops! No ite in this category</Text>
            </View>
        }
        contentContainerStyle={styles.listContainer}
      
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e0e0",
  },
  listContainer: {
    paddingBottom: 30,
    backgroundColor: "#fff",
  },
  emptyContainer: {
    height: screenHeight - 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  emptyText: {
    fontSize: RFValue(14),
    color: "#666",
    marginBottom: 15,
  },
});
