import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props={
    title:string;
    onPress?:()=>void;
    style?:ViewStyle;
}
const FilterChip:React.FC<Props> = ({title,onPress,style}) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FilterChip

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:"center",
        paddingVertical:RFValue(6),
        paddingHorizontal:RFValue(14),
        borderRadius:RFValue(18),
        borderWidth:1,
        borderColor:"#d0d5dd",
        backgroundColor:'#ffffff',
        marginRight:RFValue(8)
    },
    text:{
        fontSize:RFValue(14),
        color:"#000",
        fontFamily:FONTS.REGULAR
    }
})