import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props={
    name:string;
    logo:string;
    onPress?:()=>void;
}
const BrandCard:React.FC<Props> = ({name,logo,onPress}) => {
  return (
    <TouchableOpacity
    style={styles.container}
    activeOpacity={0.8}
    onPress={onPress}
    >
    <Image source={{uri:logo}} style={styles.image}/>
    <Text style={styles.text}>{name}</Text>

    </TouchableOpacity>
  )
}

export default BrandCard

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginRight:RFValue(14),
        paddingHorizontal:RFValue(7)
    },
    image:{
        width:RFValue(60),
        height:RFValue(60),
        borderRadius:RFValue(30),
        backgroundColor:"#eee"
    },
    text:{
        marginTop:RFValue(6),
        fontSize:RFValue(12),
        color:"#000",
         paddingHorizontal:RFValue(7),
         fontFamily:FONTS.SEMIBOLD
    }
})