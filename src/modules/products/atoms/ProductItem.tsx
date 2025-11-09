import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import UniversalAddItem from "./UniversalAddItem";

const ProductItem = ({ item, isOdd }: any) => {
  return (
    <View style={[styles.productCard, { marginRight: isOdd ? 0 : 10 }]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item?.image_uri }} style={styles.productImage} />
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.productName}>{item?.name}</Text>
        <Text numberOfLines={2} style={styles.productDesc}>
          {item?.description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>
            <Text style={{ textDecorationLine: "line-through", opacity: 0.6 }}>
              ₹{item?.price + 599}
            </Text>{" "}
            ₹{item?.price}
          </Text>
          <View style={styles.flexRow}>
            <View style={styles.hotDealContainer}>
              <Text style={styles.hotDealText}>Hot Deal</Text>
            </View>
          </View>
        </View>
        <UniversalAddItem item={item}/>
      </View>
    </View>
  );
}; 

export default ProductItem;

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#fff",
    width: "48%",
    overflow: "hidden",
    marginRight: 10,
  },
  imageContainer: {
    backgroundColor: "#f7f7f7",
    width: "100%",
    height: 240,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  productName: {
    fontSize: RFValue(15),
    marginTop: 10,
    fontWeight: "bold",
  },
  productDesc: {
    fontSize: RFValue(10),
    color: "#555",
    textAlign: "left",
    marginTop: 5,
  },
  productPrice: {
    fontSize: RFValue(13),
    color: "#000",
    marginVertical: 8,
    fontWeight: "500",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hotDealContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignSelf: "flex-start",
    backgroundColor: "#e7f9ec",
  },
  hotDealText: {
    color: "#35ab4f",
    fontSize: RFValue(13),
    fontWeight: "700",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});
