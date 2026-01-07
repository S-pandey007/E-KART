import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

type CarouselDotProps ={
    active:boolean;
}

const CarouselDot = ({active}:CarouselDotProps) => {
  return (
    <View
    style={[
        styles.dot,
        active &&styles.activeDot
    ]}
    />
  )
}

export default CarouselDot

const styles = StyleSheet.create({
    dot:{
        width:RFValue(6),
        height:RFValue(6),
        borderRadius:RFValue(3),
        backgroundColor:"#CCC",
        marginHorizontal:RFValue(4)
    },
    activeDot:{
        backgroundColor:"#000",
        width:RFValue(8)
    }
})