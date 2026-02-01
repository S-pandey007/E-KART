import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import OptionsChips from "../atom/OptionsChips";
import SectionTitle from "../../Search/atoms/SectionTitle";
import { scale } from "@/src/utils/Responsivess";

export const AccountOptions = [
  {
    id: "1",
    title: "Flipkart Plus",
    iconName: "star-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "FlipkartPlus",
  },
  {
    id: "2",
    title: "Edit Profile",
    iconName: "person-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "EditProfile",
  },
  {
    id: "3",
    title: "Save Credit",
    iconName: "card-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "SavedCredit",
  },
  {
    id: "4",
    title: "Saved Addresses",
    iconName: "location-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "SavedAddresses",
  },
  {
    id: "5",
    title: "Select Language",
    iconName: "language-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "SelectLanguage",
  },
  {
    id: "6",
    title: "Notification Settings",
    iconName: "notifications-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "NotificationSettings",
  },
  {
    id: "7",
    title: "Privacy Center",
    iconName: "shield-checkmark-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "PrivacyCenter",
  },
];

const AccountSettingsList = () => {
  return (
    <View style={styles.container}>
    <SectionTitle title="Account Settings"/>
      <FlatList
        data={AccountOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OptionsChips
            key={item.id}
            title={item.title}
            iconName={item.iconName}
            iconFamilyName={item.iconFamilyName}
            color="rgb(63, 137, 235)"
            onPress={() => console.debug(`nanvigate to ${item.navigate}`)}
          />
        )}
      />
    </View>
  );
};

export default memo(AccountSettingsList);

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        marginVertical:scale(10)
    }
});
