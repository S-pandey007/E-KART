import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '@/src/components/atoms/Icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS } from '@/src/theme/font/fonts'

type Props={
    rating:number
}
const RatingBadge:React.FC<Props> = ({rating}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{rating}</Text>
      <Icons name="star" size={RFValue(12)} color='#fff' iconFamily='Ionicons'/>
    </View>
  )
}

export default RatingBadge

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#2e7d32",
        paddingHorizontal:RFValue(6),
        paddingVertical:RFValue(2),
        borderRadius:RFValue(4)
    },
    text:{
        color:"#fff",
        fontSize:RFValue(12),
        marginRight:RFValue(2),
        fontFamily:FONTS.REGULAR
    }
})