import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";
type Props = {
  title: string;
  image: string;
  onPress?: () => void;
};

const TrendingItem: React.FC<Props> = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TrendingItem;

const styles = StyleSheet.create({
  card: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#e5eefaff',
    padding:RFValue(10),
    borderRadius:RFValue(10),
    margin:RFValue(6),
    elevation:2
  },
  image: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(8),
    marginRight: RFValue(10),
    backgroundColor: "#f2f2f2",
  },
  title: {
    flex:1,
    marginTop: RFValue(6),
    fontSize: RFValue(12),
    // textAlign: "center",
    color: "#000",
    fontFamily: FONTS.MEDIUM,
  },
});
