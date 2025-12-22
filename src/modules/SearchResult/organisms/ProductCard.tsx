import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '@/src/components/atoms/Icons';
import { RFValue } from 'react-native-responsive-fontsize';
import ProductMeta from '../molecule/ProductMeta';
import PriceInfo from '../molecule/PriceInfo';
import { FONTS } from '@/src/theme/font/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props={
    title:string;
    image:string;
    rating:number;
    ratingCount:string;
    assured?:boolean;
    sellingPrice:number;
    originalPrice:number;
    discountPercemtage:number;
    wowPrice?:number;
    deliveryText?:string;
    onPress?:()=>void;
}
const ProductCard:React.FC<Props> = ({
    title,image,rating,ratingCount,assured,sellingPrice,originalPrice,discountPercemtage,wowPrice,deliveryText,onPress
}) => {
  
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    style={styles.container}
    onPress={onPress}
    >
        {/* Image  */}
        <View style={styles.imageWrapper}>
            <Image source={{uri:image}} style={styles.image}/>
            <TouchableOpacity style={styles.wishlist}>
                <Icons name="heart-outline" size={RFValue(18)} color='#000' iconFamily='Ionicons'/>
            </TouchableOpacity>
        </View>

        {/* info  */}

        <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
                {title}
            </Text>

            <ProductMeta rating={rating} ratingCount={ratingCount} isAssured={assured}/>

            <PriceInfo sellingPrice={sellingPrice} originalPrice={originalPrice} discountPercentage={discountPercemtage}/>

            {
                deliveryText &&(
                    <Text style={styles.delivery}>{deliveryText}</Text>
                )
            }
        </View>
    </TouchableOpacity>
    
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:RFValue(10),
        borderBottomWidth:1,
        borderColor:"#eee"
    },
    imageWrapper:{
        width:RFValue(100),
        height:RFValue(120),
        marginRight:RFValue(10)
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    wishlist:{
        position:'absolute',
        top:RFValue(4),
        right:RFValue(4)
    },
    info:{
        flex:1
    },
    title:{
        fontSize:RFValue(14),
        fontFamily:FONTS.MEDIUM,
        color:"#000"
    },
    delivery:{
        marginTop:RFValue(6),
        fontSize:RFValue(12),
        color:"#388e3c"
    }
})