// molecules/PurchaseButton.tsx
import { StyleSheet, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import ActionButton from "../atoms/ActionButton";

type PurchaseButtonProps = {
  onAddToCart: () => void;
  onBuyNow: () => void;
};

const PurchaseButton = ({
  onAddToCart,
  onBuyNow,
}: PurchaseButtonProps) => {
  return (
    <View style={styles.container}>
      <ActionButton
        title="Add to Cart"
        backgroundColor="#FFF3C4"
        onPress={onAddToCart}
      />

      <ActionButton
        title="Buy Now"
        backgroundColor="#FFC200"
        onPress={onBuyNow}
      />
    </View>
  );
};

export default React.memo(PurchaseButton);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: RFValue(10),
    paddingHorizontal: RFValue(12),
    paddingVertical:RFValue(5)
  },
});
