import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import PriceText from '../atoms/PriceText';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextStyle } from 'react-native';

type Props={
    sellingPrice:number;
    originalPrice:number;
    discountPercentage?:number;
    wowPrice?:number;
   
    containerStyle?: ViewStyle;
  sellingTextStyle?: TextStyle;
  originalTextStyle?: TextStyle;
  discountTextStyle?: TextStyle;
  wowTextStyle?: TextStyle;
}

const PriceInfo:React.FC<Props> = ({
    sellingPrice,originalPrice,discountPercentage,wowPrice,containerStyle,
  sellingTextStyle,
  originalTextStyle,
  discountTextStyle,
  wowTextStyle,
}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      
      {/* price row  */}
      <View style={styles.row}>
        <PriceText value={`₹${sellingPrice}`} style={[styles.selling,sellingTextStyle]}/>
        <PriceText value={`₹${originalPrice}`} style={[styles.original,originalTextStyle]}/>

        {
            discountPercentage &&(
                <Text style={[styles.discount,discountTextStyle]}>
                    {discountPercentage}% off
                </Text>
            )
        }
      </View>

      {/* wow price  */}
      {
        wowPrice &&(
            <Text style={[styles.wowText,wowTextStyle]}>
                WOW Deal ₹{wowPrice}
            </Text>
        )
      }
    
    </View>
  )
}

export default PriceInfo

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(8)
    },
    row:{
        flexDirection:"row",
        alignItems:'center'
    },
    selling:{
        fontSize:RFValue(16),
        fontWeight:'700',
    },
    original:{
        fontSize:RFValue(13),
        color:"#888",
        textDecorationLine:'line-through',
        marginLeft:RFValue(6)
    },
    discount:{
        fontSize:RFValue(13),
        color:"#2e7d32",
        marginLeft:RFValue(6),
        fontWeight:"600"
    },
    wowText:{
        fontSize:RFValue(15),
        color:"#1a73e8",
        marginTop:RFValue(4),
        fontWeight:"500"
    }
})