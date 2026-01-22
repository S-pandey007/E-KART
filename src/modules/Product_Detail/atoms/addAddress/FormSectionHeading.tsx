import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props ={
    title:string;
    style?:ViewStyle;
    textStyle?:TextStyle;
}
const FormSectionHeading:React.FC<Props> = ({
    title,
    style,
    textStyle
}) => {
  return (
    <View style={[styles.container,style]}>
      <Text style={[styles.title,textStyle]}>{title}</Text>
    </View>
  )
}

export default FormSectionHeading

const styles = StyleSheet.create({
    container:{
        paddingVertical:RFValue(3),
    },
    title:{
        fontFamily:FONTS.BOLD,
        fontSize:RFValue(14),
        color:"#1a1a1a",
        letterSpacing:0.3
    }
})