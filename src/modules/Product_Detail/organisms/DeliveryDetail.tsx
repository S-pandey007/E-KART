import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddressLayout from "../atoms/AddressLayout";
import SectionTitle from "../../Search/atoms/SectionTitle";
import AddressDetailModal from "../molecules/AddressDetailModal";

const DeliveryDetail = () => {

    const [visible,setVisible]=useState(false)
  return (
    <View>
      <SectionTitle title="Delivery details" />
      <AddressLayout
        icon="home-outline"
        title="Home"
        text="C0013, Shrinagar, Gudhiyari, Raipur, Chhattisgarh"
        onPress={() => {setVisible(true);}}
      />
      <AddressDetailModal isVisible={visible} onClose={()=>setVisible(false)}/>
    </View>
  );
};

export default DeliveryDetail;

const styles = StyleSheet.create({});
