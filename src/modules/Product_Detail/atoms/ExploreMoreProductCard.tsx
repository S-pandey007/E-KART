import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import PriceInfo from "../../SearchResult/molecule/PriceInfo";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";
import { scale, scaleH, scaleW, screenWidth } from "@/src/utils/Responsivess";

type Props={
  title: string;
  image: string;
  rating: number;
  originalPrice: number;
  sellingPrice: number;
  discountPercentage: number;
    onPress:()=>void

}

const ExploreMoreProductCard:React.FC<Props> = ({
    onPress,
    title,
  image,
  rating,
  originalPrice,
  sellingPrice,
  discountPercentage,
}) => {
  const data = {
    id: "1",
    title: "Zixer High Tops For Men",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    rating: 3.8,
    originalPrice: 2999,
    sellingPrice: 769,
    discountPercent: 74,
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
        <View style={styles.imageContainer}>
      <Image source={{ uri: image||data.image }} style={styles.image} />
        </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title||data.title}
        </Text>
        <PriceInfo
          originalPrice={originalPrice||data.originalPrice}
          sellingPrice={sellingPrice||data.sellingPrice}
          discountPercentage={discountPercentage||data.discountPercent}
        />
        <Text style={styles.deliveryText}>Delivery by Sunday</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreMoreProductCard;

const styles = StyleSheet.create({
    card:{
        width:screenWidth*0.42,
        paddingHorizontal:scale(8),
        paddingVertical:scale(8)
    },
    imageContainer:{
        borderRadius:scale(10),
        overflow:'hidden'
    },
    image:{
        width:'100%',
        aspectRatio:3/4,
        resizeMode:'cover',
    },
    title:{
        fontSize:RFValue(14),
        fontFamily:FONTS.BOLD
    },
    infoContainer:{
        paddingTop:scale(8)
    },
    deliveryText:{
        fontSize:RFValue(13),
        fontFamily:FONTS.REGULAR,
    }
});
