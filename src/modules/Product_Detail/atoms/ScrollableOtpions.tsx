import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { ScrollableOptionsIcons } from '@/images/productDetails'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS } from '@/src/theme/font/fonts'

type Props = {
    icon:string;
    text:string;
    onPress?:()=>void;
}
const ScrollableOtpions = ({icon,text,onPress}:Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.image}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default memo(ScrollableOtpions)

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        gap:RFValue(8),
        paddingHorizontal:RFValue(10),
        paddingVertical:RFValue(7),
        borderRadius:RFValue(20),
        borderWidth:1,
        borderColor:'#f3efef',
    },
    image:{
        width:RFValue(21),
        height:RFValue(21),
        resizeMode:'contain'
    },
    text:{
        fontSize:RFValue(12),
        fontFamily:FONTS.REGULAR
    }
})