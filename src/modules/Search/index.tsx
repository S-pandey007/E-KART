import { FlatList, StyleSheet, View } from "react-native";
import React, { useState ,useEffect} from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "./molecules/SearchInput";
import SectionTitle from "./atoms/SectionTitle";
import RecentSearchItem from "./molecules/RecentSearchItem";
import TrendingItem from "./molecules/TrendingItem";
import ProductCard from "./molecules/ProductCard";

import {
  recentSearches,
  trendingSearches,
  popularProducts,
  discoverMoreData,
} from "../../utils/searchData";
import DiscoverChip from "./atoms/DiscoverChip";
import Icons from "@/src/components/atoms/Icons";
import { navigate } from "@/src/navigation/NavigationUtils";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useSearchSuggestion } from "./api/useSearchSuggestion";
import SearchSuggestionList from "./organisms/SearchSuggestionList";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);
  const { products, categories, loading } =
    useSearchSuggestion(debouncedSearch);

  const SelectedItemOnPress = (item: { title: string }) => {
    console.info(`selected item ${item.title}`);
  };

 const callSearchAPI=()=>{
  if(search.trim().length>0){
    navigate("SearchResult",{query:search})
  }
 }
  
  return (
    <View style={[{ flex: 1 },search?{backgroundColor:"#FFF"}:null]} >
      <SearchInput
        value={search}
        onChangeText={setSearch}
        onCameraPress={() => navigate("SearchResult")}
        onSubmit={callSearchAPI}
      />
      {search.length > 0 && (
        <SearchSuggestionList
          loading={loading}
          products={products}
          categories={categories}
          onSelect={(value, type) => {
            console.log(`Selected ${type}: ${value}`);
            // navigate("SearchResult", {
            //   query: type === "product" ? value : undefined,
            //   category: type === "category" ? value : undefined,
            // });
          }}
        />
      )}
      {search.length === 0 && (
        <FlatList
          data={popularProducts}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              {/* Recent Searches */}
              <View style={styles.section}>
                <SectionTitle title="Recent Searches" />
                <FlatList
                  data={recentSearches}
                  horizontal
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <RecentSearchItem
                      title={item.title}
                      image={item.image}
                      onPress={() => SelectedItemOnPress(item)}
                    />
                  )}
                  showsHorizontalScrollIndicator={false}
                />
              </View>

              {/* Trending */}
              <View style={styles.section}>
                <SectionTitle title="Trending Searches" />
                <FlatList
                  data={trendingSearches}
                  numColumns={2}
                  scrollEnabled={false}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TrendingItem
                      title={item.title}
                      image={item.image}
                      onPress={() => SelectedItemOnPress(item)}
                    />
                  )}
                />
              </View>

              <SectionTitle title="Popular Products" />
            </>
          }
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              image={item.image}
              category={item.category}
              onPress={() => console.log(item.name)}
            />
          )}
          ListFooterComponent={
            <SafeAreaView edges={["bottom"]}>
              <View style={styles.section}>
                <View style={styles.discoverHeading}>
                  <Icons
                    iconFamily="Ionicons"
                    name="trending-up-outline"
                    size={RFValue(20)}
                    color="#000"
                  />
                  <SectionTitle title="Discover More" />
                </View>
                <View style={styles.container}>
                  {discoverMoreData.map((item) => (
                    <DiscoverChip
                      key={item.id}
                      title={item.title}
                      onPress={() => SelectedItemOnPress(item)}
                    />
                  ))}
                </View>
              </View>
            </SafeAreaView>
          }
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
    paddingVertical: RFValue(10),
    marginTop: RFValue(7),
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  discoverHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: RFValue(12),
    paddingHorizontal: 6,
  },
});
