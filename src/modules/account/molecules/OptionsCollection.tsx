import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import OptionsButton from "../atom/OptionsButton";

const Options = [
  {
    id: "1",
    title: "Orders",
    iconName: "receipt-outline",
    iconFamilyName: "Ionicons",
    navigate: "Orders",
  },
  {
    id: "2",
    title: "Wishlist",
    iconName: "heart-outline",
    iconFamilyName: "Ionicons",
    navigate: "Wishlist",
  },
  {
    id: "3",
    title: "Coupons",
    iconName: "pricetag-outline",
    iconFamilyName: "Ionicons",
    navigate: "Coupons",
  },
  {
    id: "4",
    title: "Help Center",
    iconName: "help-circle-outline",
    iconFamilyName: "Ionicons",
    navigate: "HelpCenter",
  },
];

const OptionsCollection = () => {
  return (
    <View>
        <FlatList
        data={Options}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        renderItem={({item})=>(
            <OptionsButton
            key={item.id}
            title={item.title}
            iconName={item.iconName}
            iconFamilyName={item.iconFamilyName}
            onPress={()=>console.debug(`navigate ${item.navigate}`)}
            />
        )}
        />
    </View>
  );
};

export default memo(OptionsCollection);

const styles = StyleSheet.create({
    
});
