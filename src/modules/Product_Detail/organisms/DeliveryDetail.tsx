import { StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import AddressLayout from "../atoms/AddressLayout";
import SectionTitle from "../../Search/atoms/SectionTitle";
import AddressDetailModal from "../molecules/AddressDetailModal";
import DeliveryInfo from "../molecules/DeliveryInfo";
import { AddressInfoIcon } from "@/images/productDetails";
import { FONTS } from "@/src/theme/font/fonts";

const DeliveryDetail = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <SectionTitle title="Delivery details" />
      <AddressLayout
        icon="home-outline"
        title="Home"
        text="C0013, Shrinagar, Gudhiyari, Raipur, Chhattisgarh"
        onPress={() => {
          setVisible(true);
        }}
      />
      <DeliveryInfo
        icons={AddressInfoIcon.deliveryTruck}
        title="Delivery by 26 Jan, Mon"
        onPress={() => console.debug("Delivery date info clicked")}
      />
      <DeliveryInfo
        title="Fullfilled by E-Expo Shoes"
        subTitle="This seller is new to E-kart"
        icons={AddressInfoIcon.shop}
        textStyle={{
          fontFamily: FONTS.REGULAR,
          fontWeight: "800",
        }}
        onPress={() => console.debug("Delivery seller info clicked")}
      />
      <AddressDetailModal
        isVisible={visible}
        onClose={() => setVisible(false)}
      />
    </View>
  );
};

export default memo(DeliveryDetail);

const styles = StyleSheet.create({});
