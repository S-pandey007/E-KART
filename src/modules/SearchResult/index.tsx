import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import SearchInput from "../Search/molecules/SearchInput";
import FilterChipList from "./molecule/FilterChipList";
import { brands, filters } from "@/src/utils/searchData";
import ProductCard from "./organisms/ProductCard";
import BrandExplore from "./organisms/BrandExplore";
import BottomActionBar from "./organisms/BottomActionBar";
import { RFValue } from "react-native-responsive-fontsize";
import { useRoute } from "@react-navigation/native";
import { useSearchProducts } from "./api/useSearchProducts";
import { createBrandData } from "@/src/utils/Helper";

const SearchResult = () => {
  const route = useRoute<any>();
  const [query, setQuery] = useState(route.params.query);
  const [search, setSearch] = useState("");
  const [brands, setBrands] = useState([]);
  const insets = useSafeAreaInsets();

  const { SearchResult, loading } = useSearchProducts(query);

  useEffect(() => {
    const res = createBrandData(SearchResult);
    setBrands(res);
  }, [SearchResult]);


  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.container}>
          {/* Search Bar */}
          <SearchInput
            value={search}
            onChangeText={setSearch}
            onCameraPress={() => console.log("camera pressed")}
            onSubmit={() => setQuery(search)}
          />

          {/* filter chips  */}
          <FilterChipList
            data={filters}
            onSelect={(item) => console.log(item.title)}
          />

          {/* product card  */}

          <FlatList
            data={SearchResult}
            keyExtractor={(item) => item?._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: RFValue(30) + insets.bottom + 20,
            }}
            renderItem={({ item }) => (
              <ProductCard
                title={item.name}
                image={item.image}
                rating={item.rating}
                ratingCount={item.ratingCount}
                assured={item.assured}
                sellingPrice={item.sellingPrice}
                originalPrice={item.originalPrice}
                discountPercemtage={item.discountPercent}
                deliveryText={item.deliveryText}
                onPress={() => console.log(item.name)}
              />
            )}
            ListFooterComponent={
              <BrandExplore
                headingTitle="Explore our various best selling brands"
                brands={brands}
              />
            }
          />
          <View style={[styles.bottomBarContainer]}>
            <BottomActionBar
              onSort={() => console.log("Sort")}
              onFilter={() => console.log("Filter")}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // or your theme color
  },
  bottomBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff", // important: prevent transparency
    borderTopWidth: 1,
    borderTopColor: "#eee",
    elevation: 8, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
