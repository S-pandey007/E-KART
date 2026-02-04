import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getProductsByCategory } from "./api/getProducts";
import { Colors, screenHeight } from "@/src/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import SearchBar from "./atoms/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductItem from "./atoms/ProductItem";
import { useAppSelector } from "@/src/store/reduxHook";
import { selectTotalItemsCart } from "../cart/api/slice";
import SearchInput from "../Search/molecules/SearchInput";
import { navigate } from "@/src/navigation/NavigationUtils";

const Products: FC = () => {
  const route = useRoute();
  const category = route?.params as any;
  const [products, setProducts] = useState<any[]>([]);
  const count = useAppSelector(selectTotalItemsCart);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProductsByCategory(category?.id);
    setProducts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (category?.id) {
      fetchProducts();
    }
  }, [category?.id]);

  const rederItem = ({ item, index }: any) => {
    const isOdd = index % 2 !== 0;
    return <ProductItem isOdd={isOdd} item={item} />;
  };

  const callSearchAPI = () => {
    if (search.trim().length > 0) {
      navigate("SearchResult", { query: search });
    }
  };

  return (
    <View style={[styles.container]}>
      {/* <SearchBar cartLength={count} /> */}
      <SearchInput
        value={search}
        onChangeText={setSearch}
        onCameraPress={() => navigate("ProductDetail")}
        onSubmit={callSearchAPI}
      />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={40} color={Colors.active} />
        </View>
      ) : (
        <FlatList
          bounces={false}
          data={products}
          renderItem={rederItem}
          keyExtractor={(item) => item._id.toString()}
          numColumns={2}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                Oops! No item in this category
              </Text>
            </View>
          }
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primaryBG,
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
