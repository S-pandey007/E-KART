import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RatingBadge from '../atoms/RatingBadge';
import AssuredBadge from '../atoms/AssuredBadge';
import { RFValue } from 'react-native-responsive-fontsize';

type Props={
    rating:number;
    ratingCount:number | string;
    isAssured?:boolean;
}
const ProductMeta:React.FC<Props> = ({rating,ratingCount,isAssured=false}) => {
  
  return (
    <View style={styles.container}>
      <RatingBadge rating={rating}/>

      <Text style={styles.countText}>
        ({ratingCount})
      </Text>

      {isAssured && <AssuredBadge/>}
    </View>
  )
}

export default ProductMeta

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:"center",
        marginTop:RFValue(6)
    },
    countText:{
        fontSize:RFValue(12),
        color:"#555",
        marginLeft:RFValue(6)
    }
})