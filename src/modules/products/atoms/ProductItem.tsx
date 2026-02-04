import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import UniversalAddItem from "./UniversalAddItem";
import TextBadge from "@/src/components/atoms/TextBadge";
import { navigate } from "@/src/navigation/NavigationUtils";
import { useAppDispatch } from "@/src/store/reduxHook";
import { setCurrentOpenedProductId } from "../../Product_Detail/api/slice";
import { getProductDetails } from "../../Product_Detail/api/actions";

const ProductItem = ({ item, isOdd }: any) => {
  const dispatch = useAppDispatch();
  const navigateToDetailScreen = (item: any) => {

    // call then reducer for save selected item id
    dispatch(setCurrentOpenedProductId(item._id))

    //call action with payload fetch product detail.
    dispatch(getProductDetails(item._id))
    navigate("ProductDetail");
  };

  return (
    <TouchableOpacity
      onPress={() => navigateToDetailScreen(item)}
      style={[styles.productCard, { marginRight: isOdd ? 0 : 10 }]}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item?.image }} style={styles.productImage} />
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.productName}>{item?.name}</Text>
        <TextBadge text={item?.brand} />
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>
            <Text style={{ textDecorationLine: "line-through", opacity: 0.6 }}>
              ₹{item?.originalPrice + 599}
            </Text>{" "}
            ₹{item?.sellingPrice}
          </Text>
          <View style={styles.flexRow}>
            <View style={styles.hotDealContainer}>
              <Text style={styles.hotDealText}>Hot Deal</Text>
            </View>
          </View>
        </View>
        <UniversalAddItem item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductItem);

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 14,

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },

  imageContainer: {
    backgroundColor: "#f7f7f7",
    width: "100%",
    aspectRatio: 3 / 4,
    justifyContent: "center",
    alignItems: "center",
  },

  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  productName: {
    fontSize: RFValue(14),
    marginTop: 8,
    fontWeight: "700",
    color: "#111",
  },

  productDesc: {
    fontSize: RFValue(13),
    color: "#666",
    marginTop: 4,
  },

  productPrice: {
    fontSize: RFValue(13),
    color: "#000",
    fontWeight: "600",
  },

  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },

  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  hotDealContainer: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    backgroundColor: "#EAF7EE",
  },

  hotDealText: {
    color: "#1E8E3E",
    fontSize: RFValue(11),
    fontWeight: "700",
  },
});
