import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icons from '@/src/components/atoms/Icons'
import IconDecore from '../atoms/IconDecore'
import { RFValue } from 'react-native-responsive-fontsize'

const CrouselContent = () => {
  return (
    <View style={styles.container}>
      <IconDecore color='#000' name="heart-outline" iconFamily='Ionicons' size={25} onPress={()=>console.debug("product  added in you favorite list")}/>
      <IconDecore color='#000' name="share" iconFamily='MaterialIcons' size={25} onPress={()=>console.debug("click product shared icon")}/>
    </View>
  )
}

export default CrouselContent

const styles = StyleSheet.create({
    container:{
        gap:RFValue(10)
    }
})