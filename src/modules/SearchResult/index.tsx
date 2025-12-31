import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchInput from "../Search/molecules/SearchInput";
import FilterChipList from "./molecule/FilterChipList";
import { AdvertisementBannerImage, filters } from "@/src/utils/searchData";
import ProductCard from "./organisms/ProductCard";
import BrandExplore from "./organisms/BrandExplore";
import BottomActionBar from "./organisms/BottomActionBar";
import { RFValue } from "react-native-responsive-fontsize";
import { useRoute } from "@react-navigation/native";
import { useSearchProducts } from "./api/useSearchProducts";

import FreshSelectionSection from "@/src/components/organisms/FreshSelectionSection";
import AdvertisementBanner from "@/src/components/organisms/AdvertisementBanner";
import SponsoredProducts from "@/src/components/organisms/SponsoredProducts";
import InfluencerCarousel from "@/src/components/organisms/InfluencerCarousel";
import { createFeed } from "@/src/utils/Helper";
// import { createComponentData } from "@/src/utils/Helper";

const SearchResult = () => {
  const route = useRoute<any>();
  const [query, setQuery] = useState(route.params.query);
  const [search, setSearch] = useState("");
  const [feed, setFeed] = useState<any[]>([]);

  const insets = useSafeAreaInsets();

  const { SearchResult, loading, loadMore, loadingMore } =
    useSearchProducts(query);
  useEffect(() => {
    if (!SearchResult) return;

    const feedData = createFeed({
      products: SearchResult.products || [],
      influencers: SearchResult.influencers || [],
    });
    setFeed(feedData);
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
            data={feed}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: RFValue(30) + insets.bottom + 20,
            }}
            renderItem={({ item }) => {
              switch (item.type) {
                case "PRODUCT_LIST":
                  return (
                    <View>
                      {item.data.map((product: any) => (
                        <ProductCard
                          key={product._id}
                          title={product.name}
                          image={product.image}
                          rating={product.rating}
                          ratingCount={product.ratingCount}
                          assured={product.assured}
                          sellingPrice={product.sellingPrice}
                          originalPrice={product.originalPrice}
                          discountPercemtage={product.discountPercent}
                          deliveryText={product.deliveryText}
                          onPress={() => console.log(product.name)}
                        />
                      ))}
                    </View>
                  );

                case "BRAND_EXPLORE":
                  return (
                    <BrandExplore
                      headingTitle="Explore our various best selling brands"
                      brands={item.data}
                    />
                  );

                case "FRESH_SELECTION":
                  return <FreshSelectionSection freshCollection={item.data} />;

                case "ADVERTISEMENT":
                  return (
                    <AdvertisementBanner image={AdvertisementBannerImage} />
                  );

                case "SPONSORED_PRODUCTS":
                  return (
                    <SponsoredProducts
                      title="Sponsored Products"
                      sponsore={item.data}
                    />
                  );

                case "INFLUENCER":
                  return <InfluencerCarousel influencerData={item.data} />;

                default:
                  return null;
              }
            }}
            onEndReached={loadMore}
            onEndReachedThreshold={0.8}
            ListFooterComponent={loadingMore ? <ActivityIndicator /> : null}
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
