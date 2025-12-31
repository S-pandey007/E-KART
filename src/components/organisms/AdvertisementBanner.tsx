import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  image: string;
  onPress?: () => void;
};
const AdvertisementBanner: React.FC<Props> = ({ image, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.addText}>Ad</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </Pressable>
  );
};

export default AdvertisementBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: RFValue(16),
    justifyContent: "center",
    alignItems: "center",
  },
  addText:{
    backgroundColor:'#eee',
    position:'absolute',
    zIndex:1,
    top:'0%',
    left:"5%",
    fontSize:15,
    padding:2,
    borderRadius:7,
    fontWeight:'500'
    
  },
  image: {
    width: "100%",
    height: RFValue(150),
    resizeMode: "cover",
    borderRadius: 7,
    // shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // elevation for Android
    // elevation: 4,
  },
});
