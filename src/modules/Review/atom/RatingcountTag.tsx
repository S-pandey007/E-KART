import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Icons from '@/src/components/atoms/Icons'
import { scale } from '@/src/utils/Responsivess'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS } from '@/src/theme/font/fonts'

type Props={
  ratingNumber:number;
}
const RatingcountTag:React.FC<Props> = ({
  ratingNumber
}) => {
  return (
    <View style={styles.rating}>
        <Text style={styles.ratingNumber}>{ratingNumber ||5}</Text>
        <Icons name="star" size={13} iconFamily="Ionicons" color="#047028" />
      </View>
  )
}

export default memo(RatingcountTag)

const styles = StyleSheet.create({
     rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
    backgroundColor:'#fff',
    paddingVertical:scale(2),
    paddingHorizontal:scale(5),
    borderRadius:scale(5)
  },
  ratingNumber: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(13),
  },
})