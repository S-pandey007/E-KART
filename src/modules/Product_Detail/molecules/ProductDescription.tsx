import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SectionTitle from "../../Search/atoms/SectionTitle";
import ExpandableText from "../atoms/ExpandableText";
import { RFValue } from "react-native-responsive-fontsize";

const ProductDescription = () => {
  const description = `Make a bold style statement with MEGAKART’s Black Polo T-Shirt, crafted from durable and comfortable 220 GSM Cotton Matty fabric. Designed to keep you cool and confident all day, this polo features a soft, breathable texture and a structured fit that retains its shape. The vibrant orange hue brings a pop of personality to your outfit, whether you're dressing for casual outings, coordinated team looks, or standout daily wear. With its classic ribbed polo collar and button placket, this tee is perfect for men who value both comfort and eye-catching style. Built with attention to detail and everyday versatility in mind, it’s a wardrobe essential that effortlessly combines function and fashion. `;
  return (
    <View style={styles.container}>
      <SectionTitle title="Product description" />
      <ExpandableText text={description} numberOfLines={1} />
    </View>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFValue(8),
  },
});
