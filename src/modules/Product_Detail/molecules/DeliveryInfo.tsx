import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { memo } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props={
    icons:string;
    title:string;
    subTitle?:string;
    style?:ViewStyle;
    textStyle?:TextStyle;
    subTitleStyle?:TextStyle;
    onPress?:()=>void;
}
const DeliveryInfo:React.FC<Props> = ({
    icons,
    title,
    subTitle,
    style,
    textStyle,
    subTitleStyle,
    onPress
}) => {
  return (
   <TouchableOpacity
   onPress={onPress}
   style={[styles.container,style]}
   >
    <Image
    source={icons}
    style={styles.image}
    />
    <View style={styles.textContainer}>
    <Text style={[styles.title,textStyle]}>{title||"Delivery by 26 Jan, Mon"}</Text>
    {subTitle&&
        <Text style={[styles.subTitle,subTitleStyle]}>
            This seller is new to E-Kart    
        </Text>
    }
    </View>
   </TouchableOpacity>
  )
}

export default memo(DeliveryInfo)

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'#f3eeeea6',
        alignItems:'center',
        gap:RFValue(17),
        borderRadius:RFValue(8),
        marginHorizontal:RFValue(15),
        paddingHorizontal:RFValue(7),
        paddingVertical:RFValue(10),
        marginVertical:RFValue(4)
    },
    image:{
        width:20,
        height:20,
        resizeMode:'contain',
    },
    textContainer:{},
    title:{
        fontSize:RFValue(14),
        fontFamily:FONTS.BOLD
    },
    subTitle:{
        fontSize:RFValue(13),
        color:"#8b8a8a"
    }
})