import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderAdvertisement from "@/src/components/organisms/HeaderAdvertisement";
import { HeaderAdvertisment } from "@/src/utils/searchData";
import SearchInput from "../Search/molecules/SearchInput";
import { navigate } from "@/src/navigation/NavigationUtils";
import { ActivityIndicator } from "react-native";
import ProductCrousel from "./organisms/ProductCrousel";
import ChooseColorItem from "./molecules/ChooseColorItem";
import { RFValue } from "react-native-responsive-fontsize";
import PurchaseButton from "./molecules/PurchaseButton";
import { SafeAreaView } from "react-native-safe-area-context";
import PriceInfo from "../SearchResult/molecule/PriceInfo";
import ProductDescription from "./molecules/ProductDescription";
import DeliveryDetail from "./organisms/DeliveryDetail";

const ProductDetail = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const callSearchAPI = () => {
    if (search.trim().length > 0) {
      navigate("SearchResult", { query: search });
    }
  };
  return (
    <SafeAreaView style={[styles.container]} edges={["bottom"]}>
      <SearchInput
        value={search}
        onChangeText={setSearch}
        onCameraPress={() => navigate("ProductDetail")}
        onSubmit={callSearchAPI}
      />

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          <FlatList
            data={[{ id: "contend" }]}
            keyExtractor={(item) => item.id}
            renderItem={null}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            ListHeaderComponent={
              <>
                {/* header Advertisement component */}
                <HeaderAdvertisement
                  image={HeaderAdvertisment.image}
                  title={HeaderAdvertisment.title}
                  sellingPrice={HeaderAdvertisment.sellingPrice}
                  originalPrice={HeaderAdvertisment.originalPrice}
                  discountPercent={HeaderAdvertisment.discountPercent}
                  label="Ad"
                />

                {/* product image crousel image  */}
                <ProductCrousel />

                {/* choose item based on color  */}
                <ChooseColorItem />

                {/* product price  */}
                <PriceInfo
                  sellingPrice={2000}
                  originalPrice={3000}
                  discountPercentage={20}
                  sellingTextStyle={{ fontSize: RFValue(20) }}
                  originalTextStyle={{ fontSize: RFValue(15) }}
                  discountTextStyle={{ fontSize: RFValue(18) }}
                  containerStyle={{ paddingHorizontal: RFValue(14),paddingVertical:RFValue(10) }}
                />

                {/* product description  */}
                <ProductDescription/>

                {/* delivery deatails */}
                <DeliveryDetail/>
              </>
            }
          />

          <PurchaseButton
            onBuyNow={() => console.debug("buy now")}
            onAddToCart={() => console.debug("add to cart")}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingBottom: RFValue(20),
  },
});
