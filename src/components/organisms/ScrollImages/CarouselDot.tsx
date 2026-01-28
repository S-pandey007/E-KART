import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { scale } from '@/src/utils/Responsivess';

type CarouselDotProps ={
    active:boolean;
    activeScale?:number;
}

const CarouselDot = ({active,activeScale=1}:CarouselDotProps) => {
  return (
    <View
    style={[
        styles.dot,
        active &&styles.activeDot,
        active && activeScale!==1 &&{transform:[{scale:activeScale}],backgroundColor:"#fff"}
    ]}
    />
  )
}

export default CarouselDot

const styles = StyleSheet.create({
    dot:{
        width:scale(10),
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