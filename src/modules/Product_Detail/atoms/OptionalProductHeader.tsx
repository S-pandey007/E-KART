import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import SectionTitle from '../../Search/atoms/SectionTitle'
import Icons from '@/src/components/atoms/Icons'
import { RFValue } from 'react-native-responsive-fontsize'

type Props={
    iconContainerStyle?: ViewStyle;
    style?:ViewStyle;
    title:string;
    onPress?:()=>void;
}

const OptionalProductHeader:React.FC<Props> = (
    {iconContainerStyle,title,style,onPress}
) => {
  return (
    <View style={[styles.container,style]}>
      <SectionTitle titleStyle={{fontSize:RFValue(17)}} title={title||'Similar Products'}/>
      <TouchableOpacity onPress={onPress} style={[styles.iconContainer,iconContainerStyle]}>
        <Icons
        name="arrow-forward" 
        size={24}
        color='#FFFFFF'
        iconFamily='Ionicons'
        />
      </TouchableOpacity>
    </View>
  )
}

export default OptionalProductHeader

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:RFValue(10),
    },
    iconContainer:{
        backgroundColor:"#000",
        paddingHorizontal:RFValue(6),
        paddingVertical:RFValue(4),
        borderRadius:RFValue(10),
    },
})