import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PriceText from '../atoms/PriceText';
import { RFValue } from 'react-native-responsive-fontsize';

type Props={
    sellingPrice:number;
    originalPrice:number;
    discountPercentage?:number;
    wowPrice?:number;
}

const PriceInfo:React.FC<Props> = ({
    sellingPrice,originalPrice,discountPercentage,wowPrice
}) => {
  return (
    <View style={styles.container}>
      
      {/* price row  */}
      <View style={styles.row}>
        <PriceText value={`₹${sellingPrice}`} style={styles.selling}/>
        <PriceText value={`₹${originalPrice}`} style={styles.original}/>

        {
            discountPercentage &&(
                <Text style={styles.discount}>
                    {discountPercentage}% off
                </Text>
            )
        }
      </View>

      {/* wow price  */}
      {
        wowPrice &&(
            <Text style={styles.wowText}>
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