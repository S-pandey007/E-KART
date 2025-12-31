import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '../atoms/Icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';
import { ViewStyle } from 'react-native';
import { Colors } from '@/src/utils/Constants';
import { Image } from 'react-native';


type Props ={
    title?:string;
    onPress?:()=>void;
    style?:ViewStyle;
    image:string;
}
const FreshTitleBanner:React.FC<Props> = ({title,onPress,style,image}) => {
  const brandImg="https://tse4.mm.bing.net/th/id/OIP.iWPKdJTChAskk2M5t9zAxQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  return (
    <TouchableOpacity
    activeOpacity={0.85}
    style={[styles.container,style]}
    onPress={onPress}
    >
        <Image style={styles.image} source={{uri:image || brandImg}}/>
        <Text numberOfLines={2} style={styles.title}>{title ||"Fresh Selection"}</Text>

        <View style={styles.ctaRow}>
            <Text style={styles.ctaText}>View More</Text>
            <Icons size={14} iconFamily='Ionicons' name="arrow-forward-outline"/>
        </View>

    </TouchableOpacity>
  )
}

export default FreshTitleBanner

const styles = StyleSheet.create({
    container:{
        width:RFValue(200),
        height:RFValue(220),
        borderRadius:RFValue(10),
        padding:RFValue(14),
        justifyContent:'center',
        alignItems:'center',
        marginRight:RFValue(12),
    },
    title:{
        fontSize:RFValue(14),
        fontFamily:FONTS.BOLD,
        color:"#222",
        lineHeight:RFValue(22),
        
    },
    ctaRow: {
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
    gap:RFValue(5)
  },
  ctaText: {
    fontSize: RFValue(12),
    fontWeight: "400",
    color: "#222",
  },
  image:{
    width:RFValue(100),
    height:RFValue(100),
    borderRadius:50,
    borderWidth:RFValue(1),
    borderColor:"#ccc"
  }
})